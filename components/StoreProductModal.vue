<template>
	<div
		:class="`flex flex-col gap-4 self-center p-4 mt-20 w-full max-w-[350px] h-[530px]  bg-white rounded-md ${
			showInstructions ? 'overflow-y-scroll relative' : ''
		} lg:max-w-[540px] lg:max-h-full`"
	>
		<div class="flex justify-between items-center">
			<nuxt-link
				v-if="!showInstructions"
				to=""
				class="main-button-shell p-2 font-medium uppercase"
			>
				webshop
			</nuxt-link>

			<button v-else @click="showInstructions = false">
				<arrow-left-icon />
			</button>
			<button
				class="bg-redLightest px-1.5 py-0.5 rounded"
				@click="$emit('on-close')"
			>
				<close-icon />
			</button>
		</div>
		<!-- main product info -->
		<template v-if="!showInstructions">
			<img
				src="~/assets/images/common/product.png"
				alt=""
				class="self-center w-28 h-28 mt-2 lg:h-40 lg:w-40"
			/>
			<h3 class="p-normal font-semibold">
				A-Derma Dermalibour+ foaming gel 250 ml
			</h3>

			<p class="p-normal">Product description</p>
			<p class="p-normal">
				Pesuneste ärtyneelle iholle, kuten kuivalle tai erittävälle iholle ja
				pienten toimenpiteiden jälkeen
			</p>

			<div class="flex justify-between align-center bg-redLightest p-2">
				<p class="p-normal font-medium">Product information and instructions</p>
				<button class="mr-2" @click="showInstructions = true">
					<arrow-right-icon />
				</button>
			</div>

			<div class="flex justify-between w-full mt-2">
				<amout-counter :count="count" @add="add" @subtract="subtract" />
				<button class="main-button-shell font-semibold uppercase flex-1 ml-2">
					add to basket
				</button>
			</div>

			<p class="p-x-small self-end text-blackLight font-medium">
				Lorem ipsum dolor sit amet
			</p>
		</template>

		<!-- product information -->
		<template v-else>
			<h3 class="p-normal font-semibold">
				A-Derma Dermalibour+ foaming gel 250 ml
			</h3>

			<p class="p-normal">Product description</p>

			<p class="p-normal">
				Pesuneste ärtyneelle iholle, kuten kuivalle tai erittävälle iholle ja
				pienten toimenpiteiden jälkeen. Rhealba®-kauranversouute tasapainottaa,
				rauhoittaa ja korjaa herkkää ihoa, ja kupari-sinkkisulfaatti ja
				sinkkioksidi puhdistavat ihon perusteellisesti ja auttavat saamaan
				ihonhoidosta mahdollisimman paljon irti.
			</p>

			<p class="p-normal">Mieto ja hajusteeton.</p>
			<p class="p-normal">Ei kuivata ihoa.</p>
			<p class="p-normal">Erittäin hyvin siedetty.</p>
			<p class="p-normal">
				Täydellinen korjaava ihonhoitotuotesarja vauvoille, lapsille ja
				aikuisille
			</p>

			<p class="p-normal">
				Pesuneste ärtyneelle iholle, kuten kuivalle tai erittävälle iholle ja
				pienten toimenpiteiden jälkeen. Rhealba®-kauranversouute tasapainottaa,
				rauhoittaa ja korjaa herkkää ihoa, ja kupari-sinkkisulfaatti ja
				sinkkioksidi puhdistavat ihon perusteellisesti ja auttavat saamaan
				ihonhoidosta mahdollisimman paljon irti.
			</p>
		</template>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AmoutCounter from './AmoutCounter.vue'
import ArrowLeftIcon from './Icons/ArrowLeftIcon.vue'
import ArrowRightIcon from './Icons/ArrowRightIcon.vue'
import CloseIcon from './Icons/CloseIcon.vue'

export default defineComponent({
	components: { CloseIcon, ArrowRightIcon, AmoutCounter, ArrowLeftIcon },
	props: {},
	emits: ['on-close'],
	setup() {
		const count = ref(1)
		const showInstructions = ref(false)

		function add() {
			count.value++
		}

		function subtract() {
			if (count.value === 1) {
				return
			}

			count.value--
		}

		function setShowInstructions(value: boolean) {
			showInstructions.value = value
		}

		return {
			count,
			showInstructions,
			add,
			subtract,
			setShowInstructions,
		}
	},
})
</script>