'use client';

import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '../theme/theme-toggler';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function Navbar() {
	return (
		<header className="flex items-center justify-between border-b px-6 py-3 bg-background h-[60px]">
			<div className="flex items-center gap-4">
				<SidebarTrigger />
				<h1 className="text-lg font-semibold">Dashboard</h1>
			</div>

			<div className="flex items-center gap-4">
				<ModeToggle />

				<Button variant="ghost" size="icon">
					<Bell className="w-5 h-5" />
				</Button>
			</div>
		</header>
	);
}
