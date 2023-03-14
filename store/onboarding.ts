import {
	OnboardingAttributes,
	OnboardingState,
	UserInfo,
} from '~/types/onboarding'
import { GET_USER_PATH } from '~/utils/api/urls'

export const state = (): OnboardingState => ({
	userInfo: {
		firstname: '',
		lastname: '',
		email: '',
		website_id: 1,
		addresses: [],
	},
	customAttributes: {},
})

export const getters = {
	userInfo: (state: OnboardingState) => state.userInfo,
}

export const mutations = {
	updateUserInfo(state: OnboardingState, userInfo: UserInfo) {
		state.userInfo = userInfo
	},
	updateAttributes(
		state: OnboardingState,
		customAttributes: OnboardingAttributes
	) {
		const previousAttributes = state.customAttributes
		state.customAttributes = { ...previousAttributes, ...customAttributes }
		console.log('new attributes', state.customAttributes)
	},
}

export const actions = {
	async finishRegistration({ state }: any) {
		const transformedAttributes = transformAttributes(state.customAttributes)

		try {
			// @ts-ignore
			await this.$axios.$put(GET_USER_PATH, {
				customer: {
					...state.userInfo,
					custom_attributes: transformedAttributes,
				},
			})

			// @ts-ignore
			this.$router.push('/onboarding/registration-result')
		} catch (e) {
			console.log(e)
		}
	},
}

function transformAttributes(attributes: OnboardingAttributes) {
	return Object.entries(attributes).map(([key, value]) => ({
		attribute_code: key,
		value,
	}))
}
