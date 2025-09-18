// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
	const adminToken = req.cookies.get('admin-token')?.value;
	// const userToken = req.cookies.get('user-token')?.value;

	const { pathname } = req.nextUrl;

	if (adminToken && pathname.startsWith('/authentication')) {
		return NextResponse.redirect(new URL('/dashboard', req.url));
	}

	if (!adminToken && pathname.startsWith('/dashboard')) {
		return NextResponse.redirect(new URL('/authentication/admin/login', req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/authentication/login', '/dashboard/:path*'],
};
