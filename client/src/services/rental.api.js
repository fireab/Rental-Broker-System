import axios from "axios";

import store from "./../redux/store";

const BASE_URL = "/api"; // Replace with your actual API base URL

// const api = axios.create({
// 	baseURL: BASE_URL,
// });

const state = store.getState();

export const fetchRentalPosts = async () => {
	const response = await axios.get("/api/posts/getposts");
	return response.data;
};

export const fetchRentalPost = async (postId) => {
	const response = await axios.get(`/api/posts/${postId}`);
	return response.data;
}

// export const createRentalPost = async (postData) => {
// 	const response = await api.post("/posts/addpost", postData);
// 	console.log("postData ", postData);
// 	return response.data;
// };
export const createRentalPost = async (postData) => {
	const response = await axios.post("/api/posts/addpost", postData);
	console.log("postData ", postData);
	return response.data;
};

export const updateRentalPost = async (postId, postData) => {
	const response = await axios.put(`/api/posts/${postId}`, postData);
	return response.data;
};

export const saveRentalPost = async (postId) => {
	// const userId = state.userState.user.id;
	console.log("postID ", postId);
	const response = await axios.post(`/api/posts/${postId}/savepost`, {});
	return response.data;
};
export const deleteRentalPost = async (postId) => {
	await axios.delete(`/api/posts/${postId}`);
};
