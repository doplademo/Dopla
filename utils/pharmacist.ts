import { Auth } from '@nuxtjs/auth-next'

export async function loadPharmacist(
	token: string,
	$auth: Auth,
	redirect: Function
) {
	try {
		await $auth.setUserToken(token)
	} catch (e) {
		console.error(e)
	} finally {
		await redirect('/pharmacist')
	}
}
