import axios from "axios";

// js-cookie
// import Cookies from "js-cookie";

const baseURL = "http://192.168.8.106:3030/api";
export const login = async ({ email, password }) => {
	// login logic here
	console.log("login logic here");

	const response = await axios
		.post(`/api/auth/login`, { email, password })
		.then((res) => {
			console.log("login success at then block [auth.js]");
			console.log(res);
			return res;
		})

	return response.data;
};

export const signup = async ({ accountType,firstName, lastName, email, phoneNumber, username, password, region, city }) => {
	// signup logic here
	// console.log("signup logic here");
	// const response = await axios.post('http://localhost:3000/signup', { email, password });
	console.log("signup logic here");
	const response = await axios.post(`/api/auth/register`, {
		accountType,
		firstName,
		lastName,
		email,
		phoneNumber,
		username,
		password,
		region,
		city,
	});
	console.log(response);

	return response.data;
};
export const setupOTP = async ({ email, phoneNumber, username }) => {
	console.log(email, phoneNumber, username);
	console.log("setupOTP logic here");

	const response = await axios
		.post(`/api/auth/setupOTP`, { email, phoneNumber, username })
		.then((res) => {
			console.log("setupOTP success at then block [auth.js]");
			return res;
		})
		.catch((err) => {
			console.log("setupOTP error at then block [auth.js]");
		});
};

export const checkOTP = async ({ email, otp }) => {
	console.log("checkOTP logic here");

	const response = await axios.post(`/api/auth/checkOTP`, { email, otp }).then((res) => {
		console.log("checkOTP success at then block [auth.js]");
	});
	// .catch((err) => {
	// 	console.log("checkOTP error at then block [auth.js]");
	// });
};

export const logout = async () => {
	// Implement your logic to handle the logout process.
	// Example: Remove the JWT token from localStorage or the storage mechanism.
};
