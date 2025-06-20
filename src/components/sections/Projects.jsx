import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
	return (
		<section id="projects" className="min-h-screen flex items-center justify-center py-20">
			<RevealOnScroll>
				<div className="max-w-5xl mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
							<h3 className="text-xl font-bold mb-2">Shopping Cart</h3>

							<p className="text-gray-400 mb-4">Scalable shopping cart with product selection, cart management, and secure checkout process</p>

							<div className="flex flex-wrap gap-2 mb-4">
								{["HTML", "CSS", "React", "Vite", "TypeScript"].map((tech, key) => (
									<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
										{tech}
									</span>
								))}
							</div>

							<div className="flex justify-between items-center">
								<a href="https://github.com/Sina247/shopping-cart" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
									View Project →
								</a>
							</div>
						</div>

						<div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
							<h3 className="text-xl font-bold mb-2">Dashboard</h3>

							<p className="text-gray-400 mb-4">Dynamic dashboard for tracking KPIs with real-time updates, customizable widgets & user-friendly UI</p>

							<div className="flex flex-wrap gap-2 mb-4">
								{["Next.js", "Bootstrap", "CSS", "JavaScript"].map((tech, key) => (
									<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
										{tech}
									</span>
								))}
							</div>

							<div className="flex justify-between items-center">
								<a href="https://github.com/Sina247/dashboard-2" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
									View Project →
								</a>
							</div>
						</div>

						<div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
							<h3 className="text-xl font-bold mb-2">Timcheh</h3>

							<p className="text-gray-400 mb-4">An innovative e-commerce project enhancing user experience with product catalog and reviews</p>

							<div className="flex flex-wrap gap-2 mb-4">
								{["Next.js", "CSS", "JavaScript", "Tailwind CSS"].map((tech) => (
									<span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-s transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
										{tech}
									</span>
								))}
							</div>

							<div className="flex justify-between items-center">
								<a href="https://github.com/Sina247/timcheh" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
									View Project →
								</a>
							</div>
						</div>

						<div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
							<h3 className="text-xl font-bold mb-2">Hoo Bank</h3>

							<p className="text-gray-400 mb-4">Responsive banking app with React and Vite, offering account management, transactions, and real-time updates</p>

							<div className="flex flex-wrap gap-2 mb-4">
								{["HTML", "CSS", "JavaScript", "React", "Vite"].map((tech, key) => (
									<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
										{tech}
									</span>
								))}
							</div>

							<div className="flex justify-between items-center ">
								<a href="https://github.com/Sina247/hoo-bank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
									View Project →
								</a>
							</div>
						</div>	
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
};
