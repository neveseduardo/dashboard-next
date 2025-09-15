'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function LoginForm({
	className,
	...props
}: React.ComponentProps<'form'>) {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleLogin(e: React.FormEvent) {
		e.preventDefault();

		const res = await fetch('/api/authentication/admin/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (res.ok) {
			router.push('/dashboard');
		} else {
			alert('Login inválido!');
		}
	}

	return (
		<form
			onSubmit={handleLogin}
			className={cn('flex flex-col gap-6', className)}
			{...props}
		>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Acesse sua conta</h1>
				<p className="text-muted-foreground text-sm text-balance">
					Entre com seu email para continuar
				</p>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-3">
					<Label htmlFor="email">E-mail</Label>
					<Input
						id="email"
						type="email"
						placeholder="m@example.com"
						required
						value={email}
						onInput={(e) => setEmail(e.currentTarget.value)}
					/>
				</div>
				<div className="grid gap-3">
					<div className="flex items-center">
						<Label htmlFor="password">Senha</Label>
						<a
							href="/authentication/forgot"
							className="ml-auto text-sm underline-offset-4 hover:underline"
						>
							Esqueceu sua senha?
						</a>
					</div>
					<Input
						id="password"
						type="password"
						required
						value={password}
						onInput={(e) => setPassword(e.currentTarget.value)}
					/>
				</div>
				<Button type="submit" className="w-full cursor-pointer">
					Entrar
				</Button>
			</div>
			<div className="text-center text-sm">
				<p className="flex justify-center gap-2">
					<span>Não tem uma conta?</span>
					<a href="/authentication/register" className="underline underline-offset-4">
						Registre-se
					</a>
				</p>
			</div>
		</form>
	);
}
