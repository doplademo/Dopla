import { PrescribedProduct } from '~/types/user'

type State = {
	createdTask: boolean
	updatedTask: boolean
	redirectTo: string
	selectedProducts: PrescribedProduct[]
}
export const state = (): State => ({
	createdTask: false,
	updatedTask: false,
	redirectTo: '',
	selectedProducts: [] as PrescribedProduct[],
})

export const getters = {
	createdTask: (state: State) => state.createdTask,
	updatedTask: (state: State) => state.updatedTask,
	redirectTo: (state: State) => state.redirectTo,
	selectedProducts: (state: State) => state.selectedProducts,
}

export const mutations = {
	setCreatedTask(state: State, createdTask: boolean) {
		state.createdTask = createdTask
	},
	setUpdatedTask(state: State, updatedTask: boolean) {
		state.updatedTask = updatedTask
	},
	setRedirectTo(state: State, redirectTo: string) {
		console.log('change', redirectTo)
		state.redirectTo = redirectTo
		console.log(state.redirectTo)
	},
	setSelectedProducts(state: State, selectedProducts: PrescribedProduct[]) {
		console.log('change', selectedProducts);
		state.selectedProducts = selectedProducts
	},
}
