// Example using axios for API calls
import axios from "axios";

export const login = async ({ email, password }) => {
	// login logic here
	console.log("login logic here");
	
		const response = await axios.post("http://localhost:3000/login", { email, password }).then((res)=>{
      const { token } = response.data;
      if (!token) {
        console.log("Invalid credentials");
        throw new Error("Invalid credentials");
      }
  
      console.log("saved token to local storage");
      console.log(token);
      localStorage.setItem("token", token);
    }).catch((err)=>{
      console.log("errorr at auth .js ")
    })
	

};

export const signup = async ({ firstName, lastName, email, phone, username, password, confirmPassword, language, region, city }) => {
	// signup logic here
	// console.log("signup logic here");
	// const response = await axios.post('http://localhost:3000/signup', { email, password });
	console.log("signup logic here");
	const response = await axios.post("http://localhost:3000/signup", {
		firstName,
		lastName,
		email,
		phone,
		username,
		password,
		confirmPassword,
		language,
		region,
		city,
	});
};

export const logout = async () => {
	// Implement your logic to handle the logout process.
	// Example: Remove the JWT token from localStorage or the storage mechanism.
};
