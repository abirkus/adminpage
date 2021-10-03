module.exports = {
	getStatusArray: [
		'booked new',
		'booked us',
		'followed up - text',
		'followed up - call',
		'followed up - email',
		'cancelled',
		'confirmed',
		'waiting on detailing',
		'in repair',
		'in process',
		'pending work approvals',
		'ready to be returned',
		'returned',
		'quote inquired by customer',
		'quote sent to a shop',
		'quote sent to a customer',
		'invoiced',
		'paid',
		'postponed',
	],
	getTakeActionStatusArray: [
		'booked new',
		'booked us',
		'followed up - text',
		'followed up - call',
		'followed up - email',
	],
	getWorkZoneStatusArray: [
		'in process',
		'pending work approvals',
		'waiting on detailing',
		'in repair',
	],
	getInvoicesStatusArray: ['returned', 'invoiced'],
	getQuotesStatusArray: [
		'quote inquired by customer',
		'quote sent to a shop',
		'quote sent to a customer',
	],
	getDetailingStatusArray: [
		'waiting on detailing',
		'in process',
		'confirmed',
	],
	getPotentialLeadsStatusArray: ['postponed'],
	getCompletedStatusArray: [
		'cancelled',
		'postponed',
		'invoiced',
		'returned',
		'paid',
	],
	getConfirmedTripsArray: [
		'confirmed',
		'ready to be returned',
		'booked new',
		'in process',
	],
}
