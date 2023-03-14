export const BASE_URL = 'https://test.iisiapteekki.fi/rest/V1'

export const ALTERNATIVES_PATH = '/V1/eprescriptions/alternatives/'
export const LOGIN_PATH = '/V1/integration/customer/token'
export const ADMIN_LOGIN_PATH =
	'https://test.iisiapteekki.fi/rest/V1/integration/admin/token?username=droxic-api&password=LOS-pollos-terminator2022'
export const GET_CURRENCY = '/V1/directory/currency'
export const TEST_EMAIL_PATH = '/V1/customers/isEmailAvailable'
export const GET_PRODUCTS = '/V1/products-render-info'
export const CREATE_PHARMACY_ORDER = '/V1/eprescriptions/savetask/1'
export const UPDATE_PRESCRIPTION = '/V1/eprescriptions/savetask/me'
export const REQUEST_PRESCRIPTION = '/V1/prescriptions/create/1'
export const GET_USER_PATH = '/V1/customers/me'
export const GET_USER_PRESCRIPTIONS = '/V1/eprescriptions/list/me'
export const ADD_ADDRESS_PATH = '/V1/carts/mine/shipping-information'

export const ADD_TO_CART_PATH = '/V1/carts/mine/items'

export const getPickupPointsPath = (postcode: string) =>
	`/V1/smartship/agents?postcode=${postcode}`

// pharmacist

export const GET_PHARMACIST_TASKS = '/V1/eprescriptions/tasklist/1'
export const GET_TASK_PRODUCTS = '/V1/eprescriptions/taskproducts/'

export const getPrescribedProductsPath = (id: any) =>
	`/V1/eprescriptions/list/me${id}`
