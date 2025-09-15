/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import { AdministratorService } from '@/services/modules/administratorService';
import { httpClient } from '@/services';
import { Container } from '@/components/dashboard/container';
import { Button } from '@/components/ui/button';
import { Edit, Plus, Trash } from 'lucide-react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

const administratorService = new AdministratorService(httpClient);

const AdministradoresIndex: React.FC = () => {
	const [admins, setAdmins] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAdmins = async () => {
			try {
				const response = await administratorService.getAll();
				setAdmins(response.data.data);
			} catch (error) {
				console.error(error);
				setError('Erro ao buscar administradores');
			} finally {
				setLoading(false);
			}
		};

		fetchAdmins();
	}, []);

	if (error) return <p>{error}</p>;

	return (
		<Container>
			<div className="flex justify-between items-center mb-4">
				<h1 className="font-semibold text-xl">Administradores</h1>
				<Button className="cursor-pointer"><Plus /> Novo</Button>
			</div>

			<Table>
				<TableCaption>Lista de administradores.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Nome</TableHead>
						<TableHead>Email</TableHead>
						<TableHead></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{loading ?
						Array.from({ length: 5 }).map((_, idx) => (
							<TableRow key={idx}>
								<TableCell><Skeleton className="h-4 w-32" /></TableCell>
								<TableCell><Skeleton className="h-4 w-48" /></TableCell>
								<TableCell><Skeleton className="h-4 w-24" /></TableCell>
							</TableRow>
						)) :
						admins.map((admin) => (
							<TableRow key={admin.id}>
								<TableCell>{admin.name}</TableCell>
								<TableCell>{admin.email}</TableCell>
								<TableCell>
									<div className="flex w-full justify-end gap-2">
										<Button className="rounded-full cursor-pointer" size={'icon'}><Edit /></Button>
										<Button className="rounded-full cursor-pointer" variant={'destructive'} size={'icon'}><Trash /></Button>
									</div>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</Container>
	);
};

export default AdministradoresIndex;
