import { UserAddress } from "./user"

export type UserInfo = {
	firstname: string
	lastname: string
	email: string
	website_id: number
	addresses: UserAddress[]

}

export type OnboardingAttributes = {
	terms_accepted?: string
	terms_accepted_date?: string
	advertisement_accepted?: string
	advertisement_accepted_date?: string
	newsletter1_subscribed?: string
	newsletter1_subscribed_date?: string
	newsletter2_subscribed?: string
	newsletter2_subscribed_date?: string
	passed_onboarding?: string
}

export type OnboardingState = {
	userInfo: UserInfo | null
	customAttributes: OnboardingAttributes | null
}
