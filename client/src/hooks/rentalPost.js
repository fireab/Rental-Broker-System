import { useMutation, useQuery, useQueryClient } from 'react-query';

import { createRentalPost, deleteRentalPost, fetchRentalPosts, updateRentalPost } from "../services/rental.api";

export const useRentalPosts = () => {
	const { data: rentalsPosts, isLoading, error } = useQuery("posts", fetchRentalPosts);

    const queryClient = useQueryClient();
	const create = useMutation(createRentalPost, {
		onSuccess: () => {
			queryClient.invalidateQueries("posts");
		},
	});

	const update = useMutation(updateRentalPost, {
		onSuccess: () => {
			queryClient.invalidateQueries("posts");
		},
	});

	const remove = useMutation(deleteRentalPost, {
		onSuccess: () => {
			queryClient.invalidateQueries("posts");
		},
	});

	return {
		rentalsPosts,
		isLoading,
		error,
		create: create.mutate,
		update: update.mutate,
		remove: remove.mutate,
	};
};
