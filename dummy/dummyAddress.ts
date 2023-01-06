export const dummyAddress: AddressType = {
    name: "Home",
    recipient: "Ulla Espoolainen",
    deliveryMethod: "Koti",
    address: "Louhentie 5 A 14, 02130 Espoo",
    zipCode: '02130',
    city: "Espoo",
}
export const emptyAddress: AddressType = {
    name: "",
    recipient: "",
    deliveryMethod: "",
    address: "",
    zipCode: '',
    city: "",
}

export type AddressType = {
    name: string;
    recipient: string;
    deliveryMethod: string;
    address: string;
    zipCode: string;
    city: string;
}