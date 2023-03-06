import { User } from '~/types/user'

export type TransformedAttributes = {
	is_fbuilder_account: string
	terms_accepted: string
	advertisement_accepted: string
	newsletter1_subscribed: string
	newsletter2_subscribed: string
	hetu: string
	prescription_updated: string;
}

export type KeyValue = {
	[key: string]: string
}

export function getAttributes(user: User) {
	const transformedAttributes = {} as KeyValue
	if (!user) {
		return transformedAttributes as TransformedAttributes
	}
	const customAttributes = user.custom_attributes
	for (let i = 0; i < customAttributes.length; i++) {
		const attribute = customAttributes[i]
		transformedAttributes[attribute.attribute_code] = attribute.value
	}

	return transformedAttributes as TransformedAttributes
}
