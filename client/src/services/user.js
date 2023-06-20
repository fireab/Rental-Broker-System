import axios from "axios";

export const fetchUserProfile = async () => {
	const response = await axios.get("/api/user/userprofile");
	return response.data;
};
export const editUserProfile = async (userData) => {
  const response = await axios.put('/api/user/userprofile', userData);    
  return response.data;
}


export const fetchUserProfileById = async (userId) => {
	const response = await axios.get(`/api/user/userprofile/${userId}`);
	return response.data;
};

export const changePassword = async (passwordData) => {
  const response = await axios.put("/api/user/changePassword", passwordData);
  return response.data;
};

