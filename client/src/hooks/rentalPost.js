import { useMutation, useQuery, useQueryClient } from "react-query";

import { createRentalPost, deleteRentalPost, fetchRentalPosts, saveRentalPost, updateRentalPost } from "../services/rental.api";

export const useRentalPosts = () => {
	const {
		data: rentalsPosts,
		isLoading,
		error,
	} = useQuery("posts", fetchRentalPosts, {
		staleTime: 1000 * 60 * 6,
		// enabled: false,
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

	const save = useMutation((postId) => saveRentalPost(postId), {
		onSuccess: (postId) => {
			queryClient.invalidateQueries(["post", postId]);
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
		createRentalPost: create.mutate,
		isCreatingRentalPost: create.isLoading,
		isRentalPostCreated: create.isSuccess,
		isRentalPostCreationError: create.isError,
		rentalPostCreationError: create.error,
		updateRentalPost: update.mutate,
		removeRentalPost: remove.mutate,
		saveRentalPost: save.mutate,
	};
};
