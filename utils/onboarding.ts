export function redirectUser(user: any, redirect: any) {
	if (user.email) {
		redirect('/store/prescription')
	} else {
		redirect('/onboarding/agreement')
	}
}
