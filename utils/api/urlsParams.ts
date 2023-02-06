export function createGetURL<ParamsT>(url: string, params: ParamsT) {
	const urlParams = new URLSearchParams()
	for (const [key, value] of Object.entries(params)) {
		urlParams.append(key, value)
	}
	return `${url}?${urlParams.toString()}`
}