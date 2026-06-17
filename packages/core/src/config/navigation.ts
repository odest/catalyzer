import { siteConfig } from "@workspace/core/config/site";
import {
  BadgeCheck,
  Bell,
  CreditCard,
  Github,
  Home,
  LayoutDashboard,
  LogOut,
  type LucideIcon,
  PieChart,
  Search,
  Send,
  Settings,
  Sparkles,
  User,
} from "lucide-react";

export interface UserNavItem {
  avatar: string;
  email: string;
  name: string;
}

export interface SubNavItem {
  title: string;
  translationKey: string;
  url: string;
}

export interface MainNavItem {
  href?: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: SubNavItem[];
  title: string;
  translationKey: string;
  url: string;
}

export interface MobileNavItem {
  href?: string;
  icon: LucideIcon;
  title: string;
  translationKey: string;
  url: string;
}

export interface SecondaryNavItem {
  external?: boolean;
  icon: LucideIcon;
  title: string;
  translationKey: string;
  url: string;
}

export interface ProjectNavItem {
  icon: LucideIcon;
  name: string;
  translationKey: string;
  url: string;
}

export interface ProfileNavItem {
  icon: LucideIcon;
  title: string;
  translationKey: string;
  url: string;
}

export interface ProfileNavGroup {
  id: string;
  items: ProfileNavItem[];
}

export interface NavigationData {
  navMain: MainNavItem[];
  navMobile: MobileNavItem[];
  navProfile: ProfileNavGroup[];
  navSecondary: SecondaryNavItem[];
  projects: ProjectNavItem[];
  user: UserNavItem;
}

export const navigationData: NavigationData = {
  user: {
    name: siteConfig.owner,
    email: "user@example.com",
    avatar: "/avatar.svg",
  },
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: Home,
      isActive: true,
      items: [],
      translationKey: "home",
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      href: "/dashboard/overview",
      icon: LayoutDashboard,
      isActive: true,
      translationKey: "dashboard",
      items: [
        {
          title: "Overview",
          url: "/dashboard/overview",
          translationKey: "overview",
        },
        {
          title: "Analytics",
          url: "/dashboard/analytics",
          translationKey: "analytics",
        },
        {
          title: "Reports",
          url: "/dashboard/reports",
          translationKey: "reports",
        },
      ],
    },
  ],
  navMobile: [
    { title: "Home", url: "/home", icon: Home, translationKey: "home" },
    {
      title: "Search",
      url: "#search",
      icon: Search,
      translationKey: "search",
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      href: "/dashboard/overview",
      icon: LayoutDashboard,
      translationKey: "dashboard",
    },
    {
      title: "Profile",
      url: "#profile",
      icon: User,
      translationKey: "profile",
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      translationKey: "settings",
    },
  ],
  navSecondary: [
    {
      title: "Feedback",
      url: siteConfig.links.issues,
      icon: Send,
      translationKey: "feedback",
      external: true,
    },
    {
      title: "Github",
      url: siteConfig.links.github,
      icon: Github,
      translationKey: "github",
      external: true,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      translationKey: "settings",
    },
  ],
  projects: [
    {
      name: "Project Alpha",
      url: "#",
      icon: PieChart,
      translationKey: "projectAlpha",
    },
  ],
  navProfile: [
    {
      id: "group-1",
      items: [
        {
          title: "Upgrade to Pro",
          url: "#upgrade",
          icon: Sparkles,
          translationKey: "upgradeToPro",
        },
      ],
    },
    {
      id: "group-2",
      items: [
        {
          title: "Account",
          url: "#account",
          icon: BadgeCheck,
          translationKey: "account",
        },
        {
          title: "Billing",
          url: "#billing",
          icon: CreditCard,
          translationKey: "billing",
        },
        {
          title: "Notifications",
          url: "#notifications",
          icon: Bell,
          translationKey: "notifications",
        },
      ],
    },
    {
      id: "group-3",
      items: [
        {
          title: "Log Out",
          url: "#logout",
          icon: LogOut,
          translationKey: "logOut",
        },
      ],
    },
  ],
};
