<template>
	<div
		class="
			lg:bg-white
			lg:border
			lg:border-blackLightest
			lg:w-[400px]
			lg:pt-4
			lg:rounded-md
		"
	>
		<div class="ml-4 mb-4 lg:hidden">
			<button class="flex items-center" @click="$emit('on-back')">
				<arrow-left-icon :size="16" />
				<p class="p-x-small uppercase font-semibold ml-2">Go back</p>
			</button>
		</div>
		<section
			class="
				flex flex-col
				bg-white
				rounded-md
				border border-blackLight
				shadow-md shadow-blackLight
				p-4
				mx-3
				lg:border-none lg:shadow-none
			"
		>
			<img :src="Images.piece" alt="success" class="self-center mb-4" />
			<h4 class="heading-four font-semibold bg-redLightest rounded p-4 mb-4">
				Order has been sent to pharmacy
			</h4>
			<p class="p-normal mb-4 font-semibold">
				Seuraavaksi farmaseutti tarkastaa lääkkeesi ja laskee Kela-korvauksien
				määrän.
			</p>
			<p class="p-normal mb-4">
				Saat tekstiviestin, kun lääkkeet ovat valmiit tilattavaksi. Kun olet
				maksanut tilauksen, lähetämme sen valitsemaasi toimitusosoitteeseen.
			</p>
			<p class="p-normal mb-4">Arvioitu odotusaika on 1 tunti.</p>
			<p class="p-normal pb-4 border-b border-redLightest">
				Odottaessa voit käyttää puhelinta tai tietokonetta normaalisti.
			</p>

			<h4 class="heading-four font-semibold my-4">Tilauksesi</h4>

			<prescription-checkout
				v-for="product in products"
				:id="product.id"
				:key="product.id"
				:name="product.name"
				@remove="remove"
			/>

			<p class="p-normal font-medium mt-4">
				{{ products.length }} product{{ products.length === 1 ? '' : 's' }}
			</p>
			<p class="p-normal text-blackLight mt-2">
				Farmaseutti laskee tilauksen lopullisen hinnan.
			</p>
		</section>
	</div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { prescribedProducts } from '~/dummy/dummyproducts'
import useScreen from '~/utils/hooks/useScreen'
import { Images } from '~/utils/Images'

export default defineComponent({
	props: {},
	setup(_) {
		const products = ref([...prescribedProducts])
		const selectedHelp = ref<null | number>(null)
		const { isDesktop } = useScreen()

		const setSelected = (value: number) => {
			selectedHelp.value = value
		}

		const remove = (id: number) => {
			products.value = products.value.filter((product) => product.id !== id)
		}
		return {
			products,
			selectedHelp,
			setSelected,
			remove,
			isDesktop,
		}
	},

	data() {
		return {
			Images,
		}
	},
})
</script>