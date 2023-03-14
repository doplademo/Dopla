import axiosRequest from './axios'
import {
	ApiHeader,
	MethodType,
	ApiResponse,
	HeaderTypes,
	ContentTypes,
	RequestBundle,
} from '~/types/api'

/**
 * Retrieving the required headers for the request execution
 * @param token - Optional. Used for requests which have mandatory authentications
 */
export const getHeaders = (token?: any, headers?: ApiHeader): ApiHeader => {
	if (!headers) {
		headers = {}
	}
	headers[HeaderTypes.CONTENT_TYPE] = ContentTypes.JSON
	headers[HeaderTypes.ACCEPT] = ContentTypes.JSON

	if (token) {
		headers[HeaderTypes.AUTHORIZATION] = 'Bearer ' + token
	}
	return headers
}

const getRequestBody = (config: any, body: any) => {
	return config.method === MethodType.GET
		? undefined
		: config.excludeStringify
		? body
		: JSON.stringify(body)
}

/**
 * @param url
 * @param {object} config
 * @param {MethodType} config.method request method ['POST', 'GET', 'PUT', 'PATCH', 'DELETE']
 * @param {Headers} config.headers - all the headers for the request
 * @typeParam {B} - Request Body type
 * @typeParam {T} - Response Body type
 * @returns Promise<T>
 */
export const request = <B, T>(bundle: RequestBundle<B>): Promise<T> => {
	const { url, config, body } = bundle
	return axiosRequest({
		url,
		data: getRequestBody(config, body),
		headers: config.headers,
		method: config.method,
	})
		.then((res: any) => res)
		.catch((error: any) => {
			const formattedError = error.response
				? {
						data: error.response.data,
						status: error.response.status,
				  }
				: {
						data: 'error',
						status: 0,
				  }
			return formattedError
		})
}
export const isRequestValid = (res: ApiResponse<any>): boolean => {
	return (
		res.status === 200 ||
		res.status === 201 ||
		res.status === 202 ||
		res.status === 204
	)
}

export const isUnauthenticated = (res: ApiResponse<any>): boolean => {
	return res.status === 401
}
