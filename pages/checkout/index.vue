<template>
	<main class="flex flex-col lg:pb-24">
		<checkout-hero :title="`Hi, ${$auth.user.firstname || ''}!`">
			<template #right>
				<img :src="Images.checkout" alt="" class="mt-8" />
			</template>
		</checkout-hero>

		<div class="lg:self-center lg:w-full lg:max-w-screen-xl">
			<div
				class="lg:px-4 lg:-mt-16 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-32 lg:w-full lg:items-start"
			>
				<section
					class="pt-20 pb-4 px-3 bg-greenHover lg:bg-white lg:w-full lg:max-w-[400px] lg:rounded-md lg:border lg:border-blackLightest lg:py-4"
				>
					<p
						class="p-normal uppercase w-full text-center text-blackMedium font-semibold lg:hidden"
					>
						Basket
					</p>
					<!-- billing -->
					<div
						v-if="basket?.items?.length"
						class="p-6 mt-4 bg-white rounded lg:mt-0 lg:p-4"
					>
						<h4
							class="heading-four bg-pinkLight font-semibold p-2 mb-2 lg:mb-4"
						>
							Order Summary
						</h4>
						<p class="p-normal lg:hidden">
							Alla näet yhteenvedon tämänhetkisestä tilauksestasi.
						</p>

						<basket-product
							v-for="product in basket.items"
							:id="product.item_id"
							:key="product.item_id"
							:name="product.name"
							:price="product.priceString"
							discount="0.00 €"
							:final-price="product.priceString"
						/>

						<div class="flex justify-between text-blackMedium mt-4">
							<p class="p-normal">Total reimbursement</p>
							<p class="p-normal font-medium">-0 €</p>
						</div>
						<div class="flex justify-between text-blackBold mt-1">
							<p class="p-normal">Amount due</p>
							<p class="p-normal font-medium">
								{{ basket.grand_total_string }}
							</p>
						</div>

						<button
							class="main-button uppercase w-full mt-6 -lg:hidden lg:flex"
							@click="onPay"
						>
							Pay
						</button>
					</div>
				</section>
				<!-- Billing -->
				<section class="p-4 pb-16 bg-white lg:w-full lg:bg-opacity-0">
					<h3 class="heading-three font-medium mb-6 hidden lg:block">
						Order summary
					</h3>
					<!-- Address -->
					<h4 class="heading-four font-semibold">Delivery address</h4>
					<!-- User address -->
					<div class="mt-4">
						<expandible-radio-field
							v-for="(address, index) in deliveryAddresses"
							:key="address.id"
							:title="address.deliveryMethodName"
							:description="address.streetAddress"
							class-name="mb-4"
							:selected="selectedDeliveryMethod === index"
							@select="selectedDeliveryMethod = index"
						>
							<address-form
								:address-info="address"
								:locations="postiAddresses"
								:index="index"
								@field-change="onChangeExistingAddress"
							/>
						</expandible-radio-field>
						<!-- New user address -->
						<add-field class="mt-4" title="Add new delivery method">
							<address-form
								:address-info="newDeliveryAddress"
								:locations="postiAddresses"
								@submit="onAddAddress"
								@field-change="onNewDeliveryAddressChange"
							/>
						</add-field>
						<!-- Payment info -->
						<h4 class="heading-four font-semibold mt-8">Payment</h4>

						<!-- <p class="p-normal text-blackMedium mt-6">Payment cards</p> -->

						<!-- Add payment card -->
						<!-- <radio-field
							class="mt-4"
							title="Visa-kortti"
							description="123* **** **** **56"
							selected
						/>
						<add-field class="mt-2" title="Add new payment card">
							<card-form />
						</add-field> -->

						<p class="p-normal text-blackMedium mt-6">Other methods</p>

						<!-- <expandible-radio-field
							:title="address.name"
							:description="address.address"
						>
							<address-form :addressInfo="address" :locations="postiAddresses"
						/></expandible-radio-field> -->

						<expandible-radio-field
							class="mt-4"
							title="Pay when you receive the package"
							selected
							container-class="bg-greenHover"
						>
							<!-- <bank-transfer-options /> -->
						</expandible-radio-field>
						<!-- <expandible-radio-field class="mt-2" title="Apple Pay">
						</expandible-radio-field>
						<expandible-radio-field class="mt-2" title="Google Pay">
						</expandible-radio-field> -->

						<check-box
							class="mt-8"
							title="I accept to terms"
							subtitle="Subtitle 1"
						/>

						<button
							class="main-button uppercase w-full mt-6 lg:hidden"
							@click="onPay"
						>
							Pay
						</button>
					</div>
				</section>
			</div>
		</div>
	</main>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent, ref } from 'vue'
import { dummyProducts } from '~/dummy/dummyReviews'
import BasketProduct from '~/components/BasketProduct.vue'
import ExpandibleRadioField from '~/components/ExpandibleRadioField.vue'
import AddressForm from '~/components/AddressForm.vue'
import AddField from '~/components/AddField.vue'
// import CardForm from '~/components/CardForm.vue'
// import RadioField from '~/components/RadioField.vue'
import BankTransferOptions from '~/components/BankTransferOptions.vue'
import CheckBox from '~/components/Input/CheckBox.vue'

import { Images } from '~/utils/Images'
import CheckoutHero from '~/components/CheckoutHero.vue'
import { DeliveryAddress, PostiAddress, User, ValueOf } from '~/types/user'
import { ADD_ADDRESS_PATH, getPickupPointsPath } from '~/utils/api/urls'
import { transformUserAddresses } from '~/utils/user'
import { Basket } from '~/types/baskte'
export default defineComponent({
	components: {
		BasketProduct,
		ExpandibleRadioField,
		AddressForm,
		AddField,
		// CardForm,
		// RadioField,
		BankTransferOptions,
		CheckBox,
		CheckoutHero,
	},
	layout: 'store',
	middleware: ['basket'],
	setup() {
		const products = ref(dummyProducts)

		return {
			products,
		}
	},

	data() {
		const newDeliveryAddress: DeliveryAddress = {
			city: '',
			recipientName: '',
			deliveryMethodName: '',
			streetAddress: '',
			zipCode: '',
			deliveryMethod: 'none',
			pickupPointId: '',
			pickupPoint: {
				name: '',
				id: '',
			},
		}
		return {
			Images,
			newDeliveryAddress,
			deliveryTimeout: null as NodeJS.Timeout | null,
			postiAddresses: [] as PostiAddress[],
			newPickupPoints: [] as PostiAddress[],
			selectedAddressId: '',
			selectedDeliveryMethod: -1,
		}
	},

	computed: {
		basket() {
			return this.$store.state.basket.basket as Basket
		},
		deliveryAddresses() {
			const user = this.$auth.user as User
			return transformUserAddresses(user?.addresses) || []
		},
	},
	watch: {
		'newDeliveryAddress.zipCode': {
			handler: function (value) {
				if (value.length === 5) {
					this.searchZipCode()
				}
			},
		},
		'newDeliveryAddress.deliveryMethod': {
			handler: function (value) {
				if (value === 'pickup') {
					this.searchZipCode()
				}
			},
		},
	},
	mounted() {},
	methods: {
		onNewDeliveryAddressChange(
			field: keyof DeliveryAddress,
			value: ValueOf<DeliveryAddress>
		) {
			this.newDeliveryAddress[field] = value
		},
		onChangeExistingAddress(
			field: keyof DeliveryAddress,
			value: ValueOf<DeliveryAddress>,
			index: number
		) {
			this.deliveryAddresses?.[index]?.[field] = value
		},
		searchZipCode() {
			const code = this.newDeliveryAddress.zipCode
			const isPickup = this.newDeliveryAddress.deliveryMethod === 'pickup'
			if (code.length === 5 && isPickup) {
				clearTimeout(this.deliveryTimeout!)
				this.deliveryTimeout = setTimeout(async () => {
					const res = await this.$axios.get(
						getPickupPointsPath(this.newDeliveryAddress.zipCode)
					)
					const pickupPoints = JSON.parse(res.data) as PostiAddress[]
					this.postiAddresses = pickupPoints
				}, 500)
			}
		},
		onSelectAddress(addressId: string) {
			this.selectedAddressId = addressId
		},
		onPay() {
			this.$router.push('/checkout/result')
		},
		clearDeliveryAddress() {
			this.newDeliveryAddress = {
				city: '',
				recipientName: '',
				deliveryMethodName: '',
				streetAddress: '',
				zipCode: '',
				deliveryMethod: 'none',
				pickupPointId: '',
				pickupPoint: {
					name: '',
					id: '',
				},
			}
		},
		async onAddAddress() {
			const body = {
				addressInformation: {
					shipping_address: {
						region: null,
						region_id: null,
						region_code: null,
						country_id: 'FI',
						street: [this.newDeliveryAddress.streetAddress],
						telephone: this.$auth.user.addresses[0].telephone,
						postcode: this.newDeliveryAddress.zipCode,
						city: this.newDeliveryAddress.city,
						firstname: this.$auth.user.firstname,
						lastname: this.$auth.user.lastname,
						email: this.$auth.user.email,
					},
					quote_id: this.basket.id,
					shipping_carrier_code: 'smartship',
					shipping_method_code: 'PO2104',
				},
			}
			try {
				const response = await this.$axios.$post(ADD_ADDRESS_PATH, body)
				console.log(response)
				await this.$auth.fetchUser()
				this.clearDeliveryAddress()
			} catch (e) {
				console.log(e)
			}
		},
	},
})
</script>