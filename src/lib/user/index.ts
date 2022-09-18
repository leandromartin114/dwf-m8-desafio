const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

//find the email in an existing user for signin
export async function checkExistingUser(email: string) {
	const res = await fetch(API_BASE_URL + "/auth", {
		method: "post",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({
			email,
		}),
	});
	const data = await res.json();
	return data;
}
//find or create a user for signup
export async function createUser(
	email: string,
	fullName: string,
	password: string
) {
	const res = await fetch(API_BASE_URL + "/signup", {
		method: "post",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({
			email,
			fullName,
			password,
		}),
	});
	const id = await res.json();
	return id;
}
//log the user generating a token
export async function signinAndGetToken(email: string, password: string) {
	const res = await fetch(API_BASE_URL + "/auth/token", {
		method: "post",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});
	const token = await res.json();
	return token;
}
//getting the user data
export async function getUserData(token: string) {
	const res = await fetch(API_BASE_URL + "/user", {
		method: "get",
		headers: {
			"content-type": "application/json",
			authorization: "bearer " + token,
		},
	});
	const user = await res.json();
	return user;
}
//updating the user data
export async function updateUserData(bodyData: {}, token: string) {
	const res = await fetch(API_BASE_URL + "/user/update", {
		method: "put",
		headers: {
			"content-type": "application/json",
			authorization: "bearer " + token,
		},
		body: JSON.stringify(bodyData),
	});
	const data = await res.json();
	return data;
}
