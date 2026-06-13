import { ThemeProvider } from "@workspace/core/providers/theme-provider";
import { Footer } from "./components/footer";
import { HeroHeader } from "./components/header";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange={true}
      enableColorScheme={true}
      enableSystem={true}
    >
      <HeroHeader />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
