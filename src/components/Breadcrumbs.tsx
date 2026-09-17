import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  onHomeClick?: () => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  className = '', 
  onHomeClick 
}) => {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`py-3 px-4 sm:px-6 bg-slate-900 border-b border-slate-800 text-xs font-medium text-slate-300 ${className}`}
    >
      <ol className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        <li className="inline-flex items-center">
          <a 
            href="/" 
            onClick={(e) => {
              if (onHomeClick) {
                e.preventDefault();
                onHomeClick();
              }
            }}
            className="inline-flex items-center text-slate-400 hover:text-blue-300 transition"
          >
            <Home className="w-3.5 h-3.5 mr-1 text-slate-400" />
            <span>Home</span>
          </a>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1 || item.current;
          return (
            <li key={index} className="inline-flex items-center">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 mx-1 shrink-0" aria-hidden="true" />
              {isLast || (!item.href && !item.onClick) ? (
                <span 
                  className="font-semibold text-white truncate max-w-[200px] sm:max-w-[340px]" 
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <a 
                  href={item.href || '#'} 
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="text-slate-400 hover:text-blue-300 transition truncate max-w-[160px] sm:max-w-[240px]"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
