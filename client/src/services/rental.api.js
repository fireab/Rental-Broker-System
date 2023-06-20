import axios from "axios";

import store from "./../redux/store";

const BASE_URL = "/api"; // Replace with your actual API base URL

// const api = axios.create({
// 	baseURL: BASE_URL,
// });

const state = store.getState();

export const fetchRentalPosts = async (params) => {
	console.log("fetchRentalPosts param ", params);

	// const response = await axios.get("/api/posts/getposts", {
	// 	params,
	// });
	const response = await axios.get("/api/posts/getposts",{
		params: params,
	});

	return response.data;
};

export const fetchRentalPost = async (postId) => {
	const response = await axios.get(`/api/posts/${postId}`);
	return response.data;
};

// export const createRentalPost = async (postData) => {
// 	const response = await api.post("/posts/addpost", postData);
// 	console.log("postData ", postData);
// 	return response.data;
// };
export const createRentalPost = async (postData) => {
	const response = await axios.post("/api/posts/addpost", postData);
	return response.data;
};

export const updateRentalPost = async (postId, postData) => {
	const response = await axios.put(`/api/posts/${postId}`, postData);
	return response.data;
};

export const saveRentalPost = async (postId) => {
	const response = await axios.post(`/api/posts/${postId}/savepost`, {});
	return response.data;
};
export const deleteRentalPost = async (postId) => {
	await axios.delete(`/api/posts/${postId}`);
};

export const fetchSavedRentalPosts = async () => {};

export const fetchRentalPostsByUser = async (userId) => {};

export const fetchRentalPostsBySearch = async (params) => {
	// console.log("fetchRentalPostsBySearch params ", params);
	const response = await axios.get("/api/posts/search", {
		params: params,
	});
	// console.log("fetchRentalPostsBySearch response ", response);
	return response.data;
};
