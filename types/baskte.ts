import { User, UserAddress } from './user'

export type BasketItem = {
	item_id: number
	sku: string
	qty: number
	name: string
	price: number
	product_type: string
	priceString?: string
}

export type BillingAddress = {
	email: string
	same_as_billing: number
	save_in_address_book: number
} & UserAddress

export type BasketCurrency = {
	base_currency_code: string
	base_to_global_rate: number
	base_to_quote_rate: number
	global_currency_code: string
	quote_currency_code: string
	store_currency_code: string
	store_to_base_rate: number
	store_to_quote_rate: number
}

export type Basket = {
	id: number
	items: BasketItem[]
	billing_address: BillingAddress
	customer: User
	currency: BasketCurrency
	customer_is_guest: boolean
	customer_note_notify: boolean
	customer_tax_class_id: number
	grand_total?: number;
	grand_total_string?: string
	extension_attributes: {
		shipping_assignments: {
			items: BasketItem[]
			shipping: {
				address: UserAddress
				method: string
			}
		}[]
	}
	is_active: boolean
	is_virtual: boolean
	items_count: number
	items_qty: number
	orig_order_id: number
	store_id: number
	updated_at: string
}
