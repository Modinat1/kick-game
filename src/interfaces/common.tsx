import type { ReactNode } from "react";

// Interface for the Sidebar component props
export interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// Interface for subroute items
export interface SubrouteItem {
  name: string;
  path: string;
}

// Interface for the SidebarLink component props
export interface SidebarLinkProps {
  to: string;
  icon: ReactNode;
  name: string;
  toggleSidebar: () => void;
  subroutes?: SubrouteItem[];
}

// Interface for user data
export interface User {
  role: string;
  account: {
    firstName: string;
    lastName: string;
  };
}

// Interface for sidebar route items
export interface SidebarRouteItem {
  name: string;
  icon: ReactNode;
  path: string;
  roles: string[];
  subroutes?: SubrouteItem[];
}
