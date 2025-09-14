// app/api/logout/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
	// remove o cookie token
	return NextResponse.json(
		{ success: true },
		{
			status: 200,
			headers: {
				// sobrescreve o cookie com expiração no passado
				'Set-Cookie': 'token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0',
			},
		}
	);
}
