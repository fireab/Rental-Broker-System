import { useMutation, useQuery } from 'react-query';

// install react query with its dependencies: npm install react-query

import { login, logout, signup } from '../services/auth';

export const useAuth = () => {
  const loginMutation = useMutation(login);
  const signupMutation = useMutation(signup);
  const logoutMutation = useMutation(logout);

  const login = async (email, password) => {
    await loginMutation.mutateAsync({ email, password });
  };

  const signup = async (email, password) => {
    await signupMutation.mutateAsync({ email, password });
  };

  const logout = async () => {
    await logoutMutation.mutateAsync();
  };

  const { data: user, isLoading } = useQuery('user', fetchUser);

  const fetchUser = async () => {
    // Implement your logic to fetch the authenticated user from the server using the JWT.
    // Example: const response = await axios.get('/api/user', { headers: { Authorization: `Bearer ${token}` }});
    // return response.data;
  };

  return {
    user,
    isLoading,
    login,
    signup,
    logout,
  };
};
