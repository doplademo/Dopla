// @ts-nocheck

import { Basket } from '~/types/baskte'
import { formatPrices, removePlaceholderItem } from '~/utils/basket'

type State = {
	basket: Basket | null
}
export const state = (): State => ({
	basket: null,
})

export const getters = {
	basket: (state: State) => state.basket,
}

export const mutations = {
	updateBasket(state: State, basket: Basket | null) {
		state.basket = basket
	},
}

export const actions = {
	async getBasket({ commit }: any) {
		try {

			const basket = (await this.$axios.$get('/V1/carts/mine')) as Basket
			removePlaceholderItem(basket)
			formatPrices(basket)
			commit('updateBasket', basket)
		} catch (e) {
			console.log(e)
		}
	},
}
