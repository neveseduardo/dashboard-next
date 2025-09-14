// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
	const token = req.cookies.get('token')?.value;
	const { pathname } = req.nextUrl;

	if (token && pathname.startsWith('/authentication')) {
		return NextResponse.redirect(new URL('/dashboard', req.url));
	}

	if (!token && pathname.startsWith('/dashboard')) {
		return NextResponse.redirect(new URL('/authentication/login', req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/authentication/login', '/dashboard/:path*'],
};
