import { DeliveryAddress, User, UserAddress } from '~/types/user'

export type TransformedAttributes = {
	is_fbuilder_account: string
	terms_accepted: string
	advertisement_accepted: string
	newsletter1_subscribed: string
	newsletter2_subscribed: string
	hetu: string
	prescription_updated: string
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

export const transformUserAddresses = (addresses: UserAddress[]) => {
	if (!addresses?.length) {
		return [] as DeliveryAddress[]
	}

	return addresses.map((address) => {
		const deliveryAddress = {} as DeliveryAddress

		deliveryAddress.city = address.city
		deliveryAddress.zipCode = address.postcode
		deliveryAddress.streetAddress = address.street[0]
		deliveryAddress.recipientName = address.firstname + ' ' + address.lastname
		deliveryAddress.id = address.id
		deliveryAddress.deliveryMethodName = 'HOME' // TODO get from address
		deliveryAddress.deliveryMethod = 'home' // TODO get from address

		return deliveryAddress
	})
}
