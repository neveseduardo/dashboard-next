import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ModeToggle } from '../../theme/theme-toggler';
import { Bell } from 'lucide-react';
import Link from 'next/link';

type SiteHeaderProps = React.HTMLAttributes<HTMLElement> & {
	sectionName?: string;
};

export function SiteHeader({ sectionName = 'Dashboard' }: SiteHeaderProps) {
	return (
		<header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger className="-ml-1 cursor-pointer" />
				<Separator
					orientation="vertical"
					className="mx-2 data-[orientation=vertical]:h-4"
				/>
				<h1 className="text-base font-medium">{sectionName}</h1>
				<div className="ml-auto flex items-center gap-2">
					<div className="flex items-center gap-2">
						<ModeToggle />

						<Link href={'/dashboard/notificacoes'}>
							<Button variant="ghost" size="icon" className="rounded-full cursor-pointer">
								<Bell className="w-5 h-5" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
