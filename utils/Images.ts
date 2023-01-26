export const Images = {
	homeHero: require('../assets/images/home/hero_image.png'),
	homeHeroLarge: require('../assets/images/home/hero-image-2.png'),
	ladyYellowBG: require('../assets/images/home/Lady.png'),
	ladyOrangeBg: require('../assets/images/how-it-works/lady-orange-bg.png'),
	mobilePhone: require('../assets/images/how-it-works/mobile.png'),
	doctor: importImage('about', 'doctor.png'),
	researcher: importImage('about', 'researcher.png'),
	aboutDelivery: importImage('about', 'delivery.png'),
	receiptCustomer: importImage('about', 'receipt-customer.png'),
	researcherWhite: importImage('common', 'researcherWhite.png'),
	checkout: importImage('common', 'checkout.png'),
	coach: importImage('common', 'coach.png'),
	delivery: importImage('home', 'Saastaa.png'),
	placeholderImage: importImage('common', 'image 5.png'),
	piece: importImage('common', 'piece.png'),
}

function importImage(...path: string[]) {
	return require('../assets/images/' + path.join('/'))
}
