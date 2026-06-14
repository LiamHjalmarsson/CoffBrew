<template>
	<Container
		backgroundColor="primary"
		class="py-16"
	>
		<div
			class="max-w-xl mx-auto px-6 flex flex-col items-center text-center gap-6"
		>
			<div class="flex flex-col gap-2">
				<span
					class="text-sm font-semibold text-amber-500 uppercase tracking-widest"
				>
					Prenumerera
				</span>
				<H2 class="text-2xl font-bold text-stone-100">
					Join in and get 10% off!
				</H2>
				<p class="text-sm text-stone-400">
					Subscribe to our newsletter to get updates on new products
					and exclusive offers.
				</p>
			</div>

			<form class="flex flex-1 gap-6">
				<Input
					id="newsletter"
					label="Nyhetsbrev"
					v-model="email"
				/>

				<Button
					type="submit"
					color="secondary"
					@click="subscribe"
				>
					Subscribe
				</Button>
			</form>

			<p
				v-if="submitted"
				class="text-sm text-amber-400"
			>
				✓ Tack! Du är nu prenumerant.
			</p>
		</div>
	</Container>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import Container from "@/components/layout/Container.vue";
	import H2 from "@/components/ui/hTag/H2.vue";
	import Input from "@/components/inputs/Input.vue";
	import Button from "@/components/ui/button/Button.vue";

	const email = ref("");

	const submitted = ref(false);

	function subscribe() {
		if (email.value) {
			submitted.value = true;
			email.value = "";
		}
	}
</script>
