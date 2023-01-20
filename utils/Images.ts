export const Images = {
	homeHero: require('../assets/images/home/hero_image.png'),
	homeHeroLarge: require('../assets/images/home/hero-image-2.png'),
	ladyYellowBG: require('../assets/images/home/Lady.png'),
	ladyOrangeBg: require('../assets/images/how-it-works/lady-orange-bg.png'),
	mobilePhone: require('../assets/images/how-it-works/mobile.png'),
	doctor: importImage('about', 'doctor.png'),
	researcher: importImage('about', 'researcher.png'),
	checkout: importImage('common', 'checkout.png'),
	coach: importImage('common', 'coach.png'),
	delivery: importImage('home', 'Saastaa.png'),
}

function importImage(...path: string[]) {
	return require('../assets/images/' + path.join('/'))
}
