import { useMutation, useQuery, useQueryClient } from "react-query";

import { checkOTP as checkOTPApi, login as loginApi, logout as logoutApi, setupOTP as setupOTPApi, signup as signupApi } from "./../services/auth";

export const useAuth = () => {
	const queryClient = useQueryClient();

	const fetchUser = async () => {
		// Implement your logic to fetch the authenticated user from the server using the JWT.
		// Example: const response = await axios.get('/api/user', { headers: { Authorization: `Bearer ${token}` }});
		// return response.data;
	};

	const loginMutation = useMutation(loginApi, {
		onSuccess: () => {
			queryClient.invalidateQueries("user");
		},
	});

	const signupMutation = useMutation(signupApi, {
		onSuccess: () => {
			queryClient.invalidateQueries("user");
		},
	});
	const setupOTPMutation = useMutation(setupOTPApi, {
		onSuccess: () => {
			queryClient.invalidateQueries("user");
		},
	});
	const checkOTPMutation = useMutation(checkOTPApi, {
		onSuccess: () => {
			queryClient.invalidateQueries("user");
		},
	});

	// const setupOTP = async (email,phoneNumber) => {
	// 	await setupOTPMutation.mutateAsync({ email , phoneNumber});});
	// }

	const logoutMutation = useMutation(logoutApi, {
		onSuccess: () => {
			queryClient.invalidateQueries("user");
		},
	});

	const { data: user, isLoading } = useQuery("user", fetchUser, {
		staleTime: 0,
		enabled: false,
	});

	const login = async (email, password) => {
		await loginMutation.mutateAsync({ email, password });
	};

	const signup = async ({ firstName, lastName, email, phoneNumber, username, password, region, city,accountType }) => {
		await signupMutation.mutateAsync({
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
	};
	const setupOTP = async ({ email, phoneNumber, username }) => {
		await setupOTPMutation.mutateAsync({ email, phoneNumber, username });
	};
	const checkOTP = async ({ email, otp }) => {
		await checkOTPMutation.mutateAsync({ email, otp });
	};

	const logout = async () => {
		await logoutMutation.mutateAsync();
	};

	return {
		user,
		isLoading,
		login,
		signup,
		setupOTP,
		checkOTP,
		logout,
	};
};
