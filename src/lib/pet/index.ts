const API_BASE_URL = 'https://petfinder-back-production.up.railway.app'

export type petDataParam = {
	name: string
	description: string
	imgURL: string
	location: string
	lat: number
	lng: number
	state?: 'LOST' | 'FOUND' | 'UNPUBLISH'
}
//report a new lost pet
export async function reportNewLostPet(
	petData: petDataParam,
	token: string,
	email: string
) {
	const res = await fetch(API_BASE_URL + '/pet/new', {
		method: 'post',
		headers: {
			'content-type': 'application/json',
			authorization: 'bearer ' + token,
		},
		body: JSON.stringify({
			name: petData.name,
			description: petData.description,
			imgURL: petData.imgURL,
			location: petData.location,
			lat: petData.lat,
			lng: petData.lng,
			state: petData.state,
			email: email,
		}),
	})
	const pet = res.json()
	return pet
}
//updating an existing pet reported
export async function updatePet(
	petData: petDataParam,
	petId: number,
	token: string,
	email: string
) {
	const res = await fetch(API_BASE_URL + '/pet/update/' + petId, {
		method: 'put',
		headers: {
			'content-type': 'application/json',
			authorization: 'bearer ' + token,
		},
		body: JSON.stringify({
			name: petData.name,
			description: petData.description,
			imgURL: petData.imgURL,
			location: petData.location,
			lat: petData.lat,
			lng: petData.lng,
			state: petData.state,
			email: email,
		}),
	})
	const pet = res.json()
	return pet
}
//get all pets reported by userId
export async function getAllMyPets(token: string) {
	const res = await fetch(API_BASE_URL + '/pets', {
		method: 'get',
		headers: {
			'content-type': 'application/json',
			authorization: 'bearer ' + token,
		},
	})
	const pets = await res.json()
	return pets
}
//get all the pets reported in the area
export async function getPetsNearBy(lat: number, lng: number) {
	const res = await fetch(
		API_BASE_URL + '/pets-near-by?lat=' + lat + '&lng=' + lng
	)
	const data = await res.json()
	const pets = data.filter((p) => {
		return p.state == 'FINDED' || p.state == 'FOUND' || p.state == 'LOST'
	})
	return pets
}
//Giving info about a seen pet
type infoReportParam = {
	fullName: string
	phoneNumber: number
	placeDescription: string
	petName: string
	email: string
}
export async function reportInfoAboutAPet(
	petReportInfo: infoReportParam,
	petId: number
) {
	const res = await fetch(API_BASE_URL + '/report/' + petId, {
		method: 'post',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(petReportInfo),
	})
	const data = await res.json()
	return data
}
