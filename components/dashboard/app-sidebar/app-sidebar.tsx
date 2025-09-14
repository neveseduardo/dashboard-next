'use client';
import * as React from 'react';
// import { NavDocuments } from '@/components/dashboard/app-sidebar/app-sidebar-documents';
import { NavMain } from '@/components/dashboard/app-sidebar/app-sidebar-main';
import { NavSecondary } from '@/components/dashboard/app-sidebar/app-sidebar-secondary';
import { NavUser } from '@/components/dashboard/app-sidebar/app-sidebar-user';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import { LayoutDashboard } from 'lucide-react';
import { sidebarLinks } from '@/utils';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<a href="#">
								<LayoutDashboard className="!size-5" />
								<span className="text-base font-semibold">DR. CLICK.</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={sidebarLinks.navMain} />
				{/* <NavDocuments items={sidebarLinks.documents} /> */}
				<NavSecondary items={sidebarLinks.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={sidebarLinks.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
