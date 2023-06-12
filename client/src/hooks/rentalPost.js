import { useMutation, useQuery, useQueryClient } from 'react-query';

import { createRentalPost, deleteRentalPost, fetchRentalPosts, saveRentalPost, updateRentalPost } from "../services/rental.api";

export const useRentalPosts = () => {
	const { data: rentalsPosts, isLoading, error } = useQuery("posts", fetchRentalPosts,{
		staleTime: 1000 * 60 * 5,
	});

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

	const save = useMutation(saveRentalPost, {
		
	})

	const remove = useMutation(deleteRentalPost, {
		onSuccess: () => {
			queryClient.invalidateQueries("posts");
		},

	});

	return {
		rentalsPosts,
		isLoading,
		error,
		createRentalPost: create.mutate,
		updateRentalPost: update.mutate,
		removeRentalPost: remove.mutate,
		saveRentalPost: save.mutate,
	};
};

