import axios from "axios";

const BASE_URL = "/api"; // Replace with your actual API base URL

const api = axios.create({
	baseURL: BASE_URL,
});

export const fetchRentalPosts = async () => {
	const response = await api.get("/posts/getposts");
	return response.data;
};

export const createRentalPost = async (postData) => {
	console.log("postData ", postData);
	const response = await api.post("/posts/addpost", postData);
	return response.data;
};

export const updateRentalPost = async (postId, postData) => {
	const response = await api.put(`/posts/${postId}`, postData);
	return response.data;
};

export const saveRentalPost = async (postId) => {
	const response = await api.post(`/posts/${postId}/savepost`, {});
	return response.data;
};
export const deleteRentalPost = async (postId) => {
	await api.delete(`/posts/${postId}`);
};
