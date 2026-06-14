<template>
	<div class="bg-[#0D0B09] text-[#F2EAD8] min-h-screen">
		<!-- NAV -->
		<header
			class="fixed inset-x-0 top-0 z-50 px-6 md:px-20 transition-all duration-300"
			:class="
				scrolled
					? 'bg-[#0D0B09]/90 backdrop-blur-md border-b border-white/10'
					: 'border-b border-transparent'
			"
		>
			<div
				class="max-w-[1200px] mx-auto flex items-center justify-between h-[68px]"
			>
				<!-- Logo -->
				<a
					href="/"
					class="font-serif text-2xl font-bold text-[#F2EAD8] tracking-tight no-underline"
				>
					Brew<span class="text-[#C8813A]">.</span>
				</a>

				<!-- Desktop links -->
				<nav class="hidden md:flex items-center gap-10">
					<a
						href="#menu"
						class="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-[#8C8070] hover:text-[#F2EAD8] transition-colors no-underline"
						>Menu</a
					>
					<a
						href="#story"
						class="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-[#8C8070] hover:text-[#F2EAD8] transition-colors no-underline"
						>Story</a
					>
					<a
						href="#"
						class="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-[#8C8070] hover:text-[#F2EAD8] transition-colors no-underline"
						>Shop</a
					>
					<a
						href="#"
						class="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-[#8C8070] hover:text-[#F2EAD8] transition-colors no-underline"
						>Find us</a
					>
					<a
						href="#"
						class="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-[#0D0B09] bg-[#C8813A] px-4 py-2 rounded-sm hover:bg-[#E8A05A] transition-colors no-underline"
						>Order online</a
					>
				</nav>

				<!-- Mobile burger -->
				<button
					class="md:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1"
					:aria-expanded="menuOpen"
					aria-label="Toggle menu"
					@click="menuOpen = !menuOpen"
				>
					<span
						class="block w-[22px] h-[1.5px] bg-[#F2EAD8] transition-all duration-200 origin-center"
						:class="menuOpen ? 'translate-y-[6.5px] rotate-45' : ''"
					/>
					<span
						class="block w-[22px] h-[1.5px] bg-[#F2EAD8] transition-all duration-200"
						:class="menuOpen ? 'opacity-0' : ''"
					/>
					<span
						class="block w-[22px] h-[1.5px] bg-[#F2EAD8] transition-all duration-200 origin-center"
						:class="
							menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
						"
					/>
				</button>
			</div>

			<!-- Mobile menu -->
			<div
				class="md:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[#0D0B09]/97 flex flex-col items-center justify-center gap-10 transition-all duration-250"
				:class="
					menuOpen
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				"
			>
				<a
					href="#menu"
					@click="menuOpen = false"
					class="font-mono text-sm tracking-[0.16em] uppercase text-[#8C8070] hover:text-[#F2EAD8] no-underline transition-colors"
					>Menu</a
				>
				<a
					href="#story"
					@click="menuOpen = false"
					class="font-mono text-sm tracking-[0.16em] uppercase text-[#8C8070] hover:text-[#F2EAD8] no-underline transition-colors"
					>Story</a
				>
				<a
					href="#"
					@click="menuOpen = false"
					class="font-mono text-sm tracking-[0.16em] uppercase text-[#8C8070] hover:text-[#F2EAD8] no-underline transition-colors"
					>Shop</a
				>
				<a
					href="#"
					@click="menuOpen = false"
					class="font-mono text-sm tracking-[0.16em] uppercase text-[#8C8070] hover:text-[#F2EAD8] no-underline transition-colors"
					>Find us</a
				>
				<a
					href="#"
					class="font-mono text-sm tracking-[0.14em] uppercase text-[#0D0B09] bg-[#C8813A] px-6 py-3 rounded-sm no-underline"
					>Order online</a
				>
			</div>
		</header>

		<!-- PAGE CONTENT -->
		<main>
			<RouterView />
		</main>

		<!-- FOOTER -->
		<footer
			class="bg-[#0A0806] border-t border-white/10 px-6 md:px-20 pt-20 pb-10"
		>
			<div
				class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-16 border-b border-white/[0.08]"
			>
				<!-- Brand -->
				<div class="flex flex-col gap-4">
					<span
						class="font-serif text-[1.75rem] font-bold text-[#F2EAD8] tracking-tight"
					>
						Brew<span class="text-[#C8813A]">.</span>
					</span>
					<p class="text-sm text-[#8C8070] leading-relaxed">
						Small-batch roasters.<br />Stockholm, Sweden.
					</p>
					<div class="flex gap-3 mt-1">
						<a
							href="#"
							aria-label="Instagram"
							class="flex items-center justify-center w-9 h-9 rounded-full border border-white/12 text-[#8C8070] hover:text-[#C8813A] hover:border-[#C8813A] transition-colors no-underline"
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								width="16"
								height="16"
							>
								<rect
									x="2"
									y="2"
									width="20"
									height="20"
									rx="5"
								/>
								<circle
									cx="12"
									cy="12"
									r="5"
								/>
								<circle
									cx="17.5"
									cy="6.5"
									r="1"
									fill="currentColor"
									stroke="none"
								/>
							</svg>
						</a>
						<a
							href="#"
							aria-label="Twitter / X"
							class="flex items-center justify-center w-9 h-9 rounded-full border border-white/12 text-[#8C8070] hover:text-[#C8813A] hover:border-[#C8813A] transition-colors no-underline"
						>
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								width="16"
								height="16"
							>
								<path
									d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
								/>
							</svg>
						</a>
					</div>
				</div>

				<!-- Explore -->
				<div class="flex flex-col gap-3">
					<h4
						class="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[#C8813A] font-normal mb-2"
					>
						Explore
					</h4>
					<a
						href="#menu"
						class="text-sm text-[#8C8070] hover:text-[#F2EAD8] no-underline transition-colors"
						>Menu</a
					>
					<a
						href="#story"
						class="text-sm text-[#8C8070] hover:text-[#F2EAD8] no-underline transition-colors"
						>Our story</a
					>
					<a
						href="#"
						class="text-sm text-[#8C8070] hover:text-[#F2EAD8] no-underline transition-colors"
						>Online shop</a
					>
					<a
						href="#"
						class="text-sm text-[#8C8070] hover:text-[#F2EAD8] no-underline transition-colors"
						>Wholesale</a
					>
				</div>

				<!-- Visit -->
				<div class="flex flex-col gap-3">
					<h4
						class="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[#C8813A] font-normal mb-2"
					>
						Visit
					</h4>
					<p class="text-sm text-[#8C8070] leading-relaxed">
						Sveavägen 44<br />
						113 34 Stockholm<br />
						Sweden
					</p>
					<p class="text-sm text-[#8C8070] leading-relaxed mt-2">
						Mon–Fri 07:00–18:00<br />
						Sat–Sun 08:00–16:00
					</p>
				</div>

				<!-- Contact -->
				<div class="flex flex-col gap-3">
					<h4
						class="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[#C8813A] font-normal mb-2"
					>
						Contact
					</h4>
					<a
						href="mailto:hello@brew.se"
						class="text-sm text-[#8C8070] hover:text-[#F2EAD8] no-underline transition-colors"
						>hello@brew.se</a
					>
					<a
						href="tel:+46812345678"
						class="text-sm text-[#8C8070] hover:text-[#F2EAD8] no-underline transition-colors"
						>+46 8 123 456 78</a
					>
				</div>
			</div>

			<!-- Bottom bar -->
			<div
				class="max-w-[1200px] mx-auto pt-8 flex flex-wrap items-center justify-between gap-4"
			>
				<p
					class="font-mono text-[0.65rem] tracking-[0.1em] text-[#3a3028]"
				>
					© 2025 Brew. All rights reserved.
				</p>
				<div class="flex gap-6">
					<a
						href="#"
						class="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[#3a3028] hover:text-[#8C8070] no-underline transition-colors"
						>Privacy</a
					>
					<a
						href="#"
						class="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[#3a3028] hover:text-[#8C8070] no-underline transition-colors"
						>Terms</a
					>
					<a
						href="#"
						class="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[#3a3028] hover:text-[#8C8070] no-underline transition-colors"
						>Cookies</a
					>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from "vue";

	const scrolled = ref(false);
	const menuOpen = ref(false);

	function onScroll() {
		scrolled.value = window.scrollY > 60;
	}

	onMounted(() =>
		window.addEventListener("scroll", onScroll, { passive: true }),
	);
	onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>
