import React from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/dashboard/main/layouts/particles/app-sidebar";
import DashboardMainHeader from "@/components/admin/dashboard/main/layouts/DashboardMainHeader";

interface DashboardMainLayoutProps {
  children: React.ReactNode;
}

const DashboardMainLayout: React.FC<DashboardMainLayoutProps> = ({
  children,
}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardMainHeader />
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardMainLayout;
