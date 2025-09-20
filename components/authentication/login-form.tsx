'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '@/components/ui/password';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
	email: z.string().email('Email inválido'),
	password: z.string().min(3, 'A senha deve ter pelo menos 6 caracteres'),
});

type FormData = z.infer<typeof schema>;
type UserLoginFormProps = React.ComponentProps<'form'> & {
	routeName: string
	redirectTo: string
	showRegister?: boolean
	showForgot?: boolean
};

export function LoginForm({
	className,
	routeName,
	redirectTo,
	showRegister = true,
	showForgot = true,
	...props
}: UserLoginFormProps) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		mode: 'onChange',
	});

	useEffect(() => {
		// reset({ email: 'user@email.com', password: 'senha' });
	}, [reset]);

	const onSubmit = async (data: FormData) => {
		setLoading(true);

		const { email, password } = data;

		const payload = { email, password };

		try {
			await fetch(routeName, {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: { 'Content-Type': 'application/json' },
			});

			router.push(redirectTo);
			toast.success('Login efetuado com sucesso!');
		} catch (error) {
			console.error(error);
			toast.error('Credenciais inválidas!');
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			autoComplete="off"
			className={cn('flex flex-col gap-6', className)}
			{...props}
		>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Bem vindo!</h1>
				<p className="text-muted-foreground text-sm text-balance">
					Entre com seu email e senha para continuar.
				</p>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-3">
					<Label htmlFor="email">E-mail</Label>
					<Input
						id="email"
						type="email"
						{...register('email')}
					/>

					{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
				</div>
				<div className="grid gap-3">
					<div className="flex items-center">
						<Label htmlFor="password">Senha</Label>
						{showForgot && (
							<a
								href="/authentication/forgot"
								className="ml-auto text-sm underline-offset-4 hover:underline"
							>
								Esqueceu sua senha?
							</a>
						)}

					</div>
					<PasswordInput
						id="password"
						type="password"
						{...register('password')}
					/>
					{errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
				</div>
				<Button
					disabled={loading}
					type="submit"
					className="w-full cursor-pointer"
				>
					{loading && (<Loader2Icon className="animate-spin" />)}
					{loading ? 'Entrando...' : 'Entrar'}
				</Button>
			</div>
			{showRegister && (
				<div className="text-center text-sm">
					<p className="flex justify-center gap-2">
						<span>Não tem uma conta?</span>
						<a href="/authentication/register" className="underline underline-offset-4">
							Registre-se
						</a>
					</p>
				</div>
			)}
		</form>
	);
}
