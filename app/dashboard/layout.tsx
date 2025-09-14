import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/app-sidebar/app-sidebar';
import { cookies } from 'next/headers';
import { SiteHeader } from '@/components/dashboard/app-header/app-header';

export default async function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

	return (
		<div className="flex min-h-screen bg-muted/30">
			<SidebarProvider
				defaultOpen={defaultOpen}
				style={
					{
						'--sidebar-width': 'calc(var(--spacing) * 72)',
						'--header-height': 'calc(var(--spacing) * 12)',
					} as React.CSSProperties
				}
			>
				<AppSidebar variant="inset" />

				<SidebarInset>
					<SiteHeader />

					<div className="flex flex-1 flex-col">
						<div className="@container/main flex flex-1 flex-col gap-2">
							{children}
						</div>
					</div>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
}
