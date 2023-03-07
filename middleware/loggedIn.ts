import { Context } from '@nuxt/types'

export default function ({ redirect, $auth }: Context) {
	if (!$auth.loggedIn) {
		redirect('/onboarding')
	}
}
