/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { AuthenticationService } from '@/services/authentication';
import { httpClient } from '@/services';

export async function POST(req: Request) {
	const { email, password } = await req.json();
	const service = new AuthenticationService(httpClient);

	try {
		const response = await service.userLogin(email, password);

		const responseData = response.data;

		if (response.status === 200 && responseData?.data?.token) {
			const token = responseData.data.token;

			console.log(token);

			return NextResponse.json(
				{ success: true, message: responseData.message },
				{
					status: 200,
					headers: {
						'Set-Cookie': `user-token=${token}; Path=/; SameSite=Strict`,
					},
				}
			);
		}

		return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
	} catch (error: any) {
		if (error.response.status === 401) {
			return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
		}

		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}

}
