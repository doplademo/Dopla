import { getHeaders } from '.'
import { MethodType, RequestBundle } from '~/types/api'


/**
 * Returns prepared GET request configuration
 * @param token
 * @param url
 */
export const getRequestBundle = (token: string | null, url: string) => {
	return {
		url,
		config: {
			method: MethodType.GET,
			headers: getHeaders(token),
		},
	}
}
/**
 * Returns prepared POST request configuration
 * @param url
 * @param body
 */
export const postRequestBundle = <B>(
	url: string,
	body: B
): RequestBundle<B> => {
	return {
		url,
		config: {
			method: MethodType.POST,
		},
		body,
	}
}

export const putRequestBundle = <B>(
	url: string,
	body: B
): RequestBundle<B> => {
	return {
		url,
		config: {
			method: MethodType.PUT,
		},
		body,
	}
}

export const deleteRequestBundle = (token: string, url: string) => {
	return {
		url,
		config: {
			method: MethodType.DELETE,
			headers: getHeaders(token),
		},
	}
}
