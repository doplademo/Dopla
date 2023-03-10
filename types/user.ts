export interface AddressRegion {
	region: string | null
	region_code: string | null
	region_id: number
}

export type UserAddress = {
	city: string
	country_id: number
	customer_id: number
	default_billing: boolean
	default_shipping: boolean
	firstname: string
	id: number
	lastname: string
	postcode: string
	region: AddressRegion
	region_id: number
	street: string[]
	telephone: string
}

export type User = {
	id: number
	group_id: number
	default_billing: string
	default_shipping: string
	created_at: string
	updated_at: string
	created_in: string
	email: string
	firstname: string
	lastname: string
	gender: number
	store_id: number
	website_id: number
	addresses: UserAddress[]
	disable_auto_group_change: number
	extension_attributes: {
		is_subscribed: boolean
	}
	custom_attributes: {
		attribute_code: string
		value: string
	}[]
}

export type PrescribedProduct = {
	id: string
	prescription_oid: string
	medicine_name: string
	previous_delivery_amount: string
	previous_delivery_date: string
	medicine_duration_date: string
	regulator_reimbursement_date: string
	prescription_remaining_amount: string
	prescription_valid_date: string
	prescription_date: string
	prescription_dosage_instruction: string
}

export type PrescribedProductAddition = {
	amount: number
	substituteId: string
}

export type Substitute = {
	name: string
	price: string
	reimbursement: string
	sku: string
	type: string
}

export type KeyValueSubstitute = {
	[key: string]: Substitute
}

export type ProductRequest = {
	name: string
	qty: number
	sku?: string
	product_id?: string
}

export type Price = {
	final_price: number
	max_price: number
	max_regular_price: number
	minimal_regular_price: number
	special_price: number
	minimal_price: number
	regular_price: number
}

export type FormattedPrice = {
	final_price: string
	max_price: string
	max_regular_price: string
	minimal_regular_price: string
	special_price: string
	minimal_price: string
	regular_price: string
}

export type PriceInfo = {
	formatted_prices: FormattedPrice
	extension_attributes: {
		msrp: {
			msrp_price: string
			is_applicable: string
			is_shown_price_on_gesture: string
			msrp_message: string
			explanation_message: string
		}
		tax_adjustments: {
			formatted_prices: FormattedPrice
		} & Price
		weee_adjustments: string
		weee_attributes: any[]
	}
} & Price

export type ProductImages = {
	url: string
	code: string
	height: number
	width: number
	label: string
	resized_width: number
	resized_height: number
}

export type StoreProduct = {
	price_info: PriceInfo
	images: ProductImages[]
	url: string
	id: number
	name: string
	type: 'simple'
	is_salable: '1' | '0'
	store_id: number
	currency_code: string
	extension_attributes: {
		review_html: string
		wishlist_button: {
			post_data: null | string
			url: string
			required_options: null | string
		}
	}
}

export type DeliveryAddress = {
	city: string
	id?: number
	recipientName: string
	deliveryMethodName: string
	streetAddress: string
	zipCode: string
	deliveryMethod: 'none' | 'home' | 'pickup'
	pickupPointId: string
	pickupPoint: {
		id: string
		name: string
	}
}

export type PostiAddress = {
	id: string
	city: string
	address: string
	name: string
	postcode: string
}

export type ValueOf<T> = T[keyof T]
