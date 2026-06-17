export interface HotkeyDefinition {
  category: "navigation" | "general";
  id: string;
  keys: string;
  translationKey: string;
}

export const hotkeys: HotkeyDefinition[] = [
  {
    id: "command-palette",
    keys: "mod+k",
    translationKey: "commandPalette",
    category: "general",
  },
  {
    id: "toggle-sidebar",
    keys: "mod+b",
    translationKey: "toggleSidebar",
    category: "general",
  },
  {
    id: "toggle-mode",
    keys: "shift+d",
    translationKey: "toggleMode",
    category: "general",
  },
  {
    id: "go-home",
    keys: "g>h",
    translationKey: "goHome",
    category: "navigation",
  },
  {
    id: "go-dashboard",
    keys: "g>d",
    translationKey: "goDashboard",
    category: "navigation",
  },
  {
    id: "go-overview",
    keys: "g>o",
    translationKey: "goOverview",
    category: "navigation",
  },
  {
    id: "go-analytics",
    keys: "g>a",
    translationKey: "goAnalytics",
    category: "navigation",
  },
  {
    id: "go-reports",
    keys: "g>r",
    translationKey: "goReports",
    category: "navigation",
  },
  {
    id: "go-settings",
    keys: "g>s",
    translationKey: "goSettings",
    category: "navigation",
  },
  {
    id: "show-hotkeys",
    keys: "?",
    translationKey: "showHotkeys",
    category: "general",
  },
];
