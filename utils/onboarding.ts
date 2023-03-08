import { User } from '~/types/user'

export function redirectUser(user: User, redirect: any, to?: string) {
	if (to) {
		redirect(to)
	} else if (user.email) {
		redirect('/store/prescription')
	} else {
		redirect('/onboarding/agreement')
	}
}
