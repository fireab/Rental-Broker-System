import axios from "axios";

import store from "./../redux/store";

const BASE_URL = "/api"; // Replace with your actual API base URL

// const api = axios.create({
// 	baseURL: BASE_URL,
// });

const state = store.getState();

export const fetchRentalPosts = async (params) => {
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
	const response = await axios.get("/api/posts/savedposts");
	return response.data;
};

export const deleteUserRentalPost = async (postId) => {
	return await axios.delete(`/api/posts/userpost`, {
		data: { postId: postId },
	});
};
export const fetchRentalPostsByUser = async (userId) => {
	if (userId.queryKey[1] === "user") {
		const response = await axios.get(`/api/posts/userposts`);
		return response.data;
	}
	const response = await axios.get(`/api/posts/userposts/${userId.queryKey[1]}`);
	return response.data;
};

export const fetchRentalPostsBySearch = async (params) => {
	const response = await axios.get("/api/posts/search", {
		params: params,
	});
	return response.data;
};
