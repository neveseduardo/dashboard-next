'use client';

export default function Page() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-800 flex flex-col">
			<header className="w-full bg-white shadow-md">
				<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
					<div className="text-2xl font-bold text-indigo-700">DrClick</div>
					<nav className="hidden md:flex space-x-8">
						<a href="#sobre" className="text-gray-700 hover:text-indigo-600 font-medium transition">Sobre Nós</a>
						<a href="#agendar" className="text-gray-700 hover:text-indigo-600 font-medium transition">Agende sua Consulta</a>
						<a href="#contato" className="text-gray-700 hover:text-indigo-600 font-medium transition">Contato</a>
					</nav>
					<a
						href="/dashboard"
						className="hidden md:inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
					>
						Área privativa
					</a>
					{/* Menu mobile */}
					<div className="md:hidden">
						<button
							type="button"
							className="text-indigo-700 focus:outline-none"
							onClick={() => {
								const menu = document.getElementById('mobile-menu');
								if (menu) menu.classList.toggle('hidden');
							}}
						>
							<svg width="32" height="32" fill="none" viewBox="0 0 24 24">
								<path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
				<div id="mobile-menu" className="md:hidden hidden px-6 pb-4">
					<a href="#sobre" className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">Sobre Nós</a>
					<a href="#agendar" className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">Agende sua Consulta</a>
					<a href="#contato" className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">Contato</a>
					<a
						href="/agendamento"
						className="block mt-2 px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
					>
						Agendar Consulta
					</a>
				</div>
			</header>

			<section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto flex-1 px-6 py-16 gap-12">
				<div className="flex-1 text-center md:text-left">
					<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
						Agende sua consulta médica online
					</h1>
					<p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-lg">
						Facilitamos o acesso à saúde. Encontre médicos, agende consultas e tenha atendimento de qualidade sem sair de casa.
					</p>
					<a
						href="/agendamento"
						className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition"
					>
						Agendar Consulta
					</a>
				</div>
				<div className="flex-1 flex justify-center">
					<img
						src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
						alt="Consulta médica online"
						className="rounded-xl shadow-lg w-full max-w-md object-cover"
					/>
				</div>
			</section>

			<section id="sobre" className="bg-white py-16 px-4">
				<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="text-3xl font-bold text-indigo-700 mb-4">Sobre Nós</h2>
						<p className="text-gray-700 mb-4">
							O DrClick nasceu para conectar pacientes e profissionais de saúde de forma simples e segura. Nossa missão é democratizar o acesso à saúde, oferecendo agendamento rápido e atendimento humanizado.
						</p>
						<ul className="list-disc list-inside text-gray-600">
							<li>Agendamento online fácil e rápido</li>
							<li>Profissionais qualificados</li>
							<li>Atendimento humanizado</li>
							<li>Suporte dedicado</li>
						</ul>
					</div>
					<div className="flex justify-center">
						<img
							src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=400&q=80"
							alt="Equipe médica"
							className="rounded-xl shadow w-full max-w-xs object-cover"
						/>
					</div>
				</div>
			</section>

			<section id="agendar" className="bg-indigo-50 py-16 px-4">
				<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="text-3xl font-bold text-indigo-700 mb-4">Agende sua Consulta</h2>
						<p className="text-gray-700 mb-6">
							Escolha o profissional, selecione o melhor horário e pronto! Seu atendimento está garantido.
						</p>
						<a
							href="/agendamento"
							className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
						>
							Ir para Agendamento
						</a>
					</div>
					<div className="flex justify-center">
						<img
							src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
							alt="Agendamento"
							className="rounded-xl shadow w-full max-w-xs object-cover"
						/>
					</div>
				</div>
			</section>

			<section id="contato" className="bg-white py-12 px-4">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-2xl font-bold text-indigo-700 mb-2">Contato</h2>
					<p className="text-gray-700 mb-4">Fale conosco para dúvidas ou suporte:</p>
					<a href="mailto:contato@drclick.com" className="text-indigo-600 font-medium hover:underline">
						contato@drclick.com
					</a>
					<div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
						<div>
							<p className="text-gray-600 font-semibold">WhatsApp:</p>
							<a href="https://wa.me/5599999999999" className="text-indigo-600 hover:underline">+55 99 99999-9999</a>
						</div>
						<div>
							<p className="text-gray-600 font-semibold">Endereço:</p>
							<p className="text-gray-700">Av. Saúde, 123 - Centro, Cidade</p>
						</div>
					</div>
				</div>
			</section>

			<footer className="bg-indigo-900 text-indigo-100 py-6 text-center text-sm mt-auto">
				&copy; {new Date().getFullYear()} DrClick. Todos os direitos reservados.
			</footer>
		</main>
	);
}
