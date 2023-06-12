// import axios from "axios";
// import { useMutation, useQuery, useQueryClient } from "react-query";

// import { fetchRentalProducts } from "../services/rental";
// import { fetchUserProfile } from "../services/user";
// import { checkOTP as checkOTPApi, login as loginApi, logout as logoutApi, setupOTP as setupOTPApi, signup as signupApi } from "./../services/auth";

// export const useAuth = () => {
// 	const queryClient = useQueryClient();

// 	const loginMutation = useMutation(loginApi, {
// 		onSuccess: () => {
// 			queryClient.invalidateQueries("user");
// 		},
// 	});

// 	const signupMutation = useMutation(signupApi, {
// 		onSuccess: () => {
// 			queryClient.invalidateQueries("user");
// 		},
// 	});
// 	const setupOTPMutation = useMutation(setupOTPApi, {
// 		onSuccess: () => {
// 			queryClient.invalidateQueries("user");
// 		},
// 	});
// 	const checkOTPMutation = useMutation(checkOTPApi, {
// 		onSuccess: () => {
// 			queryClient.invalidateQueries("user");
// 		},
// 	});

// 	const logoutMutation = useMutation(logoutApi, {
// 		onSuccess: () => {
// 			queryClient.invalidateQueries("user");
// 		},
// 	});

// 	const fetchUser = async () => {
// 		return await axios
// 			.get("/api/user/userprofile")
// 			.then((res) => {
// 				console.log("fetchUser success at then block [auth.js]");
// 				//user react router to redirect to home page
// 				return res.data;
// 			})
// 			.catch((err) => {
// 				console.log("fetchUser error at catch block [auth.js]");
// 				//user react router to redirect to login page
// 				return null;
// 			});
// 	};

// 	const { data: user, isLoading } = useQuery("user", fetchUser, {

// 		// staleTime: 1000 * 60 * 5,
// 		enabled: false,
// 	});

// 	// const { data: userProfile, isLoading: isUserProfileLoading } = useQuery('userProfile', fetchUserProfile(), {
// 	// 	staleTime: 0,
// 	// 	enabled: false,
// 	//   });

// 	//   const { data: rentalProducts, isLoading: isRentalProductsLoading } = useQuery('rentalProducts', fetchRentalProducts, {
// 	// 	staleTime: 0,
// 	// 	enabled: false,
// 	//   });

// 	const login = async (email, password) => {
// 		await loginMutation.mutateAsync({ email, password });
// 	};

// 	const signup = async ({ firstName, lastName, email, phoneNumber, username, password, region, city, accountType }) => {
// 		await signupMutation.mutateAsync({
// 			accountType,
// 			firstName,
// 			lastName,
// 			email,
// 			phoneNumber,
// 			username,
// 			password,
// 			region,
// 			city,
// 		});
// 	};
// 	const setupOTP = async ({ email, phoneNumber, username }) => {
// 		await setupOTPMutation.mutateAsync({ email, phoneNumber, username });
// 	};
// 	const checkOTP = async ({ email, otp }) => {
// 		await checkOTPMutation.mutateAsync({ email, otp });
// 	};

// 	const logout = async () => {
// 		await logoutMutation.mutateAsync();
// 	};

// 	return {
// 		user,
// 		isLoading,
// 		login,
// 		signup,
// 		setupOTP,
// 		checkOTP,
// 		// userProfile,
// 		// isUserProfileLoading,
// 		// rentalProducts,
// 		// isRentalProductsLoading,
// 		logout,
// 	};
// };

