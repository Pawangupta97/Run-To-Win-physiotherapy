import { useState, useEffect } from 'react';
import {
  getSyncedProfile,
  SyncedBusinessProfile,
} from '../services/googleBusinessProfileService';

export function useClinicProfile(): SyncedBusinessProfile {
  const [profile, setProfile] = useState<SyncedBusinessProfile>(getSyncedProfile);

  useEffect(() => {
    const handleSyncEvent = (e: Event) => {
      const customEvent = e as CustomEvent<SyncedBusinessProfile>;
      if (customEvent.detail) {
        setProfile(customEvent.detail);
      } else {
        setProfile(getSyncedProfile());
      }
    };

    window.addEventListener('rtw-gmb-synced', handleSyncEvent);
    return () => {
      window.removeEventListener('rtw-gmb-synced', handleSyncEvent);
    };
  }, []);

  return profile;
}
