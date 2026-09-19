import React, { useState, useEffect } from 'react';
import {
  X,
  RefreshCw,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
  Phone,
  Clock,
  Navigation,
  Globe,
  LogOut,
  AlertCircle
} from 'lucide-react';
import { User } from 'firebase/auth';
import {
  googleSignIn,
  googleSignOut,
  initAuth,
  getAccessToken,
  fetchGoogleBusinessProfile,
  fetchGoogleCustomerReviews,
  SyncedBusinessProfile,
  getSyncedProfile
} from '../services/googleBusinessProfileService';

interface GoogleBusinessSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleBusinessSyncModal: React.FC<GoogleBusinessSyncModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [syncedProfile, setSyncedProfile] = useState<SyncedBusinessProfile>(getSyncedProfile);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [syncStatusMsg, setSyncStatusMsg] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (user, _token) => {
        setCurrentUser(user);
      },
      () => {
        setCurrentUser(null);
      }
    );
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  if (!isOpen) return null;

  const handleSignInAndSync = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    setSyncStatusMsg('Connecting to Google Account and requesting Business Profile access...');

    try {
      const { user, accessToken } = await googleSignIn();
      setCurrentUser(user);

      setSyncStatusMsg('Authorized! Fetching Google Business Profile, Map Location & Customer Reviews...');
      const [profile, reviews] = await Promise.all([
        fetchGoogleBusinessProfile(accessToken, user.email || 'run2win.in@gmail.com'),
        fetchGoogleCustomerReviews(accessToken)
      ]);
      setSyncedProfile(profile);
      setSyncStatusMsg(`Successfully synchronized profile, map location, and ${reviews.length} customer reviews from Google Business Profile!`);
    } catch (err: any) {
      console.error('Failed to sync Google Business Profile:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        setErrorMessage('Sign-in popup was closed before completing authorization.');
      } else {
        setErrorMessage(err.message || 'Failed to authenticate or fetch Google Business Profile data.');
      }
      setSyncStatusMsg(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefreshSync = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    setSyncStatusMsg('Syncing latest location, map coordinates & customer reviews from Google Business Profile...');

    try {
      let token = getAccessToken();
      if (!token) {
        // Prompt re-auth if token is not currently in memory
        const res = await googleSignIn();
        token = res.accessToken;
        setCurrentUser(res.user);
      }
      const [profile, reviews] = await Promise.all([
        fetchGoogleBusinessProfile(token, currentUser?.email || 'run2win.in@gmail.com'),
        fetchGoogleCustomerReviews(token)
      ]);
      setSyncedProfile(profile);
      setSyncStatusMsg(`Map data, coordinates and ${reviews.length} customer reviews successfully refreshed from Google!`);
    } catch (err: any) {
      console.error('Refresh sync error:', err);
      setErrorMessage(err.message || 'Unable to refresh Google Business Profile at this moment.');
      setSyncStatusMsg(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await googleSignOut();
      setCurrentUser(null);
      setSyncStatusMsg('Disconnected Google Account.');
    } catch (err: any) {
      console.error('Sign out error:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        id="google-business-sync-modal"
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 text-white font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-heading flex items-center gap-2">
                <span>Google Business Profile & Map Sync</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  <ShieldCheck className="w-3 h-3 mr-1 text-emerald-600" />
                  Live Sync
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                Connected entity: <strong>Run To Win Healthcare Services Mumbai</strong>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Status Message / Alerts */}
          {syncStatusMsg && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{syncStatusMsg}</p>
                <p className="text-[11px] text-emerald-700 mt-0.5">
                  Last updated: {new Date(syncedProfile.lastSyncedAt).toLocaleTimeString()} on {new Date(syncedProfile.lastSyncedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{errorMessage}</p>
                <p className="text-[11px] text-red-700 mt-0.5">
                  The app will continue using verified clinic ground data in the meantime.
                </p>
              </div>
            </div>
          )}

          {/* Account Authentication Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-blue-900 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>Google Business Profile Connection</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                {currentUser ? (
                  <>
                    Connected as <strong className="text-slate-900">{currentUser.email}</strong> ({currentUser.displayName || 'Owner'})
                  </>
                ) : (
                  <>
                    Connect with <strong className="text-slate-900">run2win.in@gmail.com</strong> to sync real-time location and map data.
                  </>
                )}
              </p>
            </div>

            <div>
              {currentUser ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRefreshSync}
                    disabled={isLoading}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                    <span>{isLoading ? 'Syncing...' : 'Sync Now'}</span>
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="p-2 text-slate-500 hover:text-slate-700 hover:bg-white rounded-xl border border-slate-200 transition-colors"
                    title="Sign Out Google Account"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                /* Official Google Sign-In button specification */
                <button
                  onClick={handleSignInAndSync}
                  disabled={isLoading}
                  className="gsi-material-button inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl shadow-xs text-xs font-semibold transition-all disabled:opacity-60 cursor-pointer"
                >
                  <div className="gsi-material-button-icon shrink-0">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="w-4 h-4"
                      style={{ display: 'block' }}
                    >
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                      <path fill="none" d="M0 0h48v48H0z"></path>
                    </svg>
                  </div>
                  <span className="gsi-material-button-contents">
                    {isLoading ? 'Connecting...' : 'Sign in with Google'}
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Synced Profile Details Card */}
          <div className="bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80 space-y-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                  Verified Google Business Profile Listing
                </span>
                <h3 className="text-base font-bold text-slate-900 font-heading mt-0.5">
                  {syncedProfile.businessName}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Verified
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-semibold text-slate-500">Storefront Address</div>
                  <div className="font-medium text-slate-900 mt-0.5 leading-snug">
                    {syncedProfile.address}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs">
                <Navigation className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-semibold text-slate-500">GPS Coordinates & Place ID</div>
                  <div className="font-mono text-slate-900 mt-0.5 font-medium">
                    {syncedProfile.latitude}° N, {syncedProfile.longitude}° E
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">
                    ID: {syncedProfile.placeId}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-semibold text-slate-500">Verified Telephone</div>
                  <div className="font-medium text-slate-900 mt-0.5">
                    {syncedProfile.phoneDisplay}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-semibold text-slate-500">Clinic Hours</div>
                  <div className="font-medium text-slate-900 mt-0.5 leading-snug">
                    {syncedProfile.hours.weekdays}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {syncedProfile.hours.sunday}
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map Visual Verification */}
            <div className="rounded-xl overflow-hidden border border-slate-200 h-44 w-full relative">
              <iframe
                title="Synced Google Map Location"
                src={syncedProfile.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
              <div className="absolute top-2 left-2 bg-white/95 px-2.5 py-1 rounded-md text-[10px] font-semibold text-slate-800 shadow-sm border border-slate-200/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Live Map Pin Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
          <a
            href={syncedProfile.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold hover:underline"
          >
            <span>Open on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 font-medium transition-colors"
            >
              Done
            </button>
            <button
              onClick={handleRefreshSync}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>{isLoading ? 'Syncing...' : 'Sync Site'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
