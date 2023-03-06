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

export type StoreProduct = {}

export type DeliveryAddress = {
	city: string
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
