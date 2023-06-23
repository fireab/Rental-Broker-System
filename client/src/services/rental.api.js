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
	const response = await axios.get("/api/posts/getposts", {
		params: params,
	});

	return response.data;
};

export const fetchUserRentalPost = async (postId) => {
	const response = await axios.get(`/api/posts/${postId.queryKey[1]}`);
	return response.data;
};

export const createUserRentalPost = async (postData) => {
	console.log("createUserRentalPost postData ", postData);
	const response = await axios.post("/api/posts/addpost", postData);
	return response.data;
};

export const updateUserRentalPost = async (postId, postData) => {
	const response = await axios.put(`/api/posts/${postId}`, postData);
	return response.data;
};

export const saveRentalPost = async (postId) => {
	const response = await axios.post(`/api/posts/${postId}/savepost`, {});
	return response.data;
};

export const fetchSavedRentalPosts = async () => {
	console.log("fetchSavedRentalPosts");
	const response = await axios.get("/api/posts/savedposts");
	return response.data;
};

export const deleteUserRentalPost = async (postId) => {
	console.log(postId);
	return await axios.delete(`/api/posts/userpost`, {
		data: { postId: postId },
	});
};
export const fetchRentalPostsByUser = async (userId) => {
	console.log("fetchRentalPostsByUser userId ", userId.queryKey[1]);

	if (userId.queryKey[1] === "user") {
		console.log("freab");
		const response = await axios.get(`/api/posts/userposts`);
		return response.data;
	}
	const response = await axios.get(`/api/posts/userposts/${userId.queryKey[1]}`);
	return response.data;
};

export const fetchRentalPostsBySearch = async (params) => {
	// console.log("fetchRentalPostsBySearch params ", params);
	const response = await axios.get("/api/posts/search", {
		params: params,
	});
	// console.log("fetchRentalPostsBySearch response ", response);
	return response.data;
};
