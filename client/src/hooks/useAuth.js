import { useMutation, useQuery, useQueryClient } from "react-query";

import { login as loginApi, logout as logoutApi, signup as signupApi } from "./../services/auth";

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

	const signup = async (email, password) => {
		await signupMutation.mutateAsync({ email, password });
	};

	const logout = async () => {
		await logoutMutation.mutateAsync();
	};

	return {
		user,
		isLoading,
		login,
		signup,
		logout,
	};
};
