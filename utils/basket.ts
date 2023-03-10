import { Basket } from '~/types/baskte'
const DUMMY_ITEM_ID = 40;

export function formatTo2Decimals(num: number) {
	return `${(Math.round(num * 100) / 100).toFixed(2)} €`
}

export function formatPrices(basket: Basket) {
	let total = 0
	for (let i = 0; i < basket?.items.length || 0; i++) {
		total += basket.items[i].price * basket.items[i].qty
		basket.items[i].priceString = formatTo2Decimals(basket.items[i].price)
	}
	basket.grand_total = total
	basket.grand_total_string = formatTo2Decimals(total)
}

export function removePlaceholderItem(basket: Basket) {
	basket.items = basket?.items.filter((item) => item.item_id !== DUMMY_ITEM_ID)
	basket.items_count = basket?.items.length
}
