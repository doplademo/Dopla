import { getAttributes } from './user'
import { User } from '~/types/user'

export function redirectUser(user: User, redirect: any, to?: string) {
	const attributes = getAttributes(user)
	console.log(attributes)
	if (to) {
		redirect(to)
	} else if (attributes.passed_onboarding === '1') {
		redirect('/store/prescription')
	} else {
		redirect('/onboarding/agreements')
	}
}
