import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  index: number;
  badge?: number;
}

export interface CollapsibleSidebarProps {
  navItems: NavItem[];
  currentPage: number;
  onPageChange: (index: number) => void;
  logo?: React.ReactNode;
  logoText?: string;
  defaultCollapsed?: boolean;
  className?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  inactiveButtonClassName?: string;
}

export const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({
  navItems,
  currentPage,
  onPageChange,
  logo,
  logoText = 'App Name',
  defaultCollapsed = false,
  className = '',
  buttonClassName = '',
  activeButtonClassName = 'bg-blue-600 text-white',
  inactiveButtonClassName = 'bg-transparent border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white',
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <div
      className={`px-4 hidden border-r bg-gray-50 md:flex flex-col transition-all duration-300 ${
        collapsed ? 'w-[100px]' : 'w-[250px]'
      } ${className}`}
    >
      {/* Header */}
      <div className="flex h-[4rem] items-center border-b justify-between">
        {!collapsed && (
          <div className="flex items-center gap-2 font-semibold pl-2">
            {logo}
            <span className="whitespace-nowrap">{logoText}</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-2 hover:bg-gray-200 rounded-md transition-colors ${
            !collapsed ? 'ml-auto' : 'mx-auto'
          }`}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 mt-6 overflow-y-auto">
        <nav className="grid items-start gap-4">
          {navItems.map((item) => (
            <div key={item.index} className="relative group">
              <button
                onClick={() => onPageChange(item.index)}
                className={`flex items-center gap-3 rounded-lg px-3 py-4 transition-all shadow-sm hover:shadow-md w-full ${
                  currentPage === item.index
                    ? activeButtonClassName
                    : inactiveButtonClassName
                } ${collapsed ? 'justify-center' : 'justify-start'} ${buttonClassName}`}
                aria-label={item.label}
                aria-current={currentPage === item.index ? 'page' : undefined}
              >
                {item.icon}
                {!collapsed && (
                  <span className="whitespace-nowrap">{item.label}</span>
                )}
                {!collapsed && item.badge && (
                  <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-xs font-semibold">
                    {item.badge}
                  </span>
                )}
              </button>
              {/* Tooltip for collapsed state */}
              {collapsed && (
                <div className="absolute left-full ml-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-lg">
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CollapsibleSidebar;