// page.tsx (sem "use client")
export const metadata = {
	title: 'DrClick - Usuários',
};

import { UsuariosIndex } from './_components/UsuariosIndex';

export default function Page() {
	return <UsuariosIndex />;
}