export const themeInitScript = `
  (function() {
    try {
      const raw = localStorage.getItem("theme-storage");
      if (raw) {
        const parsed = JSON.parse(raw);
        const theme = parsed?.state?.selectedTheme || "default";
        if (theme !== "default") {
          document.documentElement.setAttribute("data-theme", theme);
        }
      }
    } catch (error) {
      console.error("[Theme Init]", error);
    }
  })();
`;
