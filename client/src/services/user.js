import axios from "axios";

export const fetchUserProfile = async (userId) => {
	const response = await axios.get("/api/user/userprofile");
	return response.data;
};
export const editUserProfile = async (userData) => {
	const response = await axios.put("/api/user/userprofile", userData);
	return response.data;
};

export const fetchUserProfileByUsername = async (username) => {
	const response = await axios.get(`/api/user/${username.queryKey[1]}`);
	return response.data;
};

export const changePassword = async (passwordData) => {
	const response = await axios.put("/api/user/changePassword", passwordData);
	return response.data;
};

export const followUser = async (userId) => {
	console.log(userId,"freabbbb");
	const response = await axios.post("/api/user/follow", {
		followingId: userId,
	});
	return response.data;
};

export const fetchUserFollowers = async (username) => {
	if(username.queryKey[1] == "user") {
		const response = await axios.get("/api/user/followers");
		return response.data;
	}
	

	const response = await axios.get(`/api/user/${username.queryKey[1]}/followers`);
	return response.data;
}

export const fetchUserFollowing = async (username) => {
	if(username.queryKey[1] == "user") {
		const response = await axios.get("/api/user/following");
		return response.data;
	}

	const response = await axios.get(`/api/user/${username.queryKey[1]}/following`);
	return response.data;
}
