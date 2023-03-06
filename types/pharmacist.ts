export type Task =
	| 'contact'
	| 'handling'
	| 'listing'
	| 'waiting'
	| 'payed'
	| 'canceled'

export type TaskType = 'update' | 'cancel' | 'prescription' | 'all' | 'pending'

export type TaskData = {
	id: string
	created_at: string
	updated_at: string
	customer_contact: '0' | '1'
	customer_firstname: string
	customer_lastname: string
	quote_id: number
	requires_contacting: '0' | '1'
	ssn: string
	status: string
	type: TaskType
	telephone: string
}

export type TaskProduct = {
	prescription_oid: string
	sku: string
	name: string
	qty: string
	previous_delivery_amount: string
	previous_delivery_date: string
	medicine_duration_date: string
	regulator_reimbursement_date: string
	prescription_remaining_amount: string
	prescription_valid_date: string
	prescription_date: string
	prescription_dosage_instruction: string | null
}
