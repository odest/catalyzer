import { DashboardTabsNav } from "@workspace/core/components/navigation/dashboard-tabs-nav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <DashboardTabsNav />
      {children}
    </div>
  );
}
