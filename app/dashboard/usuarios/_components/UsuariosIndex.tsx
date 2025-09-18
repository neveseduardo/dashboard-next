/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';

import { httpClient } from '@/services';
import { UserService } from '@/services/modules/userService';
import { Container } from '@/components/dashboard/container';
import { Edit, Plus, Trash } from 'lucide-react';
import { CreateForm } from './createForm';
import { EditForm } from './editForm';
import Head from 'next/head';


const userService = new UserService(httpClient);

export const UsuariosIndex: React.FC = () => {
	const [users, setUsers] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [open, setOpen] = useState(false);
	const [editOpen, setEditOpen] = useState(false);
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const fetchUsers = async () => {
		try {
			const response = await userService.getAll();
			setUsers(response.data.data);
		} catch (error) {
			console.error(error);
			setError('Erro ao buscar usuários');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const handleSuccess = () => {
		toast.success('Usuário cadastrado com sucesso!');
		setOpen(false);
		setLoading(true);
		fetchUsers();
	};

	const handleEdit = (id: string) => {
		setSelectedId(id);
		setEditOpen(true);
	};

	const handleEditSuccess = () => {
		toast.success('Usuário atualizado com sucesso!');
		setEditOpen(false);
		setLoading(true);
		fetchUsers();
	};

	const handleDelete = async (id: string) => {
		try {
			await userService.delete(id);
			toast.success('Usuário removido com sucesso!');
			setLoading(true);
			fetchUsers();
		} catch (error) {
			console.error(error);
			toast.error('Erro ao remover usuário!');
		}
	};

	if (error) return <p>{error}</p>;

	return (
		<>
			<Head>
				<title>Usuários - DrClick</title>
			</Head>
			<Container>

				<div className="flex justify-between items-center mb-4">
					<h1 className="font-semibold text-xl">Usuários</h1>
					<Dialog open={open} onOpenChange={setOpen}>
						<DialogTrigger asChild>
							<Button className="cursor-pointer" onClick={() => setOpen(true)}><Plus /> Novo</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Novo Usuário</DialogTitle>
							</DialogHeader>
							<CreateForm onCancel={() => setOpen(false)} onSuccess={handleSuccess} />
						</DialogContent>
					</Dialog>

					<Dialog open={editOpen} onOpenChange={setEditOpen}>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Editar Usuário</DialogTitle>
							</DialogHeader>
							{selectedId && (
								<EditForm
									id={selectedId}
									onCancel={() => setEditOpen(false)}
									onSuccess={handleEditSuccess}
								/>
							)}
						</DialogContent>
					</Dialog>
				</div>

				<Table>
					<TableCaption>Lista de usuários.</TableCaption>
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
							users.map((user) => (
								<TableRow key={user.id}>
									<TableCell>{user.name}</TableCell>
									<TableCell>{user.email}</TableCell>
									<TableCell>
										<div className="flex w-full justify-end gap-2">
											<Button
												className="rounded-full cursor-pointer"
												size={'icon'}
												onClick={() => handleEdit(user.id)}
											>
												<Edit />
											</Button>
											{user.email !== 'user@email.com' && (
												<DropdownMenu>
													<DropdownMenuTrigger asChild>
														<Button
															variant={'destructive'}
															className="rounded-full cursor-pointer"
															size={'icon'}
														>
															<Trash />
														</Button>
													</DropdownMenuTrigger>
													<DropdownMenuContent align="end">
														<DropdownMenuItem
															onClick={() => handleDelete(user.id)}
															className="text-red-600 cursor-pointer"
														>
															Confirmar exclusão
														</DropdownMenuItem>
														<DropdownMenuItem className="cursor-pointer">
															Cancelar
														</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											)}
										</div>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</Container>
		</>

	);
};

