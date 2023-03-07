import { Context } from '@nuxt/types'

export default function ({ store }: Context) {
	store.dispatch('basket/getBasket')
}
