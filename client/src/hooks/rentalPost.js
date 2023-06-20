import { useMutation, useQuery, useQueryClient } from "react-query";

import { createRentalPost, deleteRentalPost, fetchRentalPosts, fetchRentalPostsBySearch, fetchRentalPostsByUser, fetchSavedRentalPosts, saveRentalPost, updateRentalPost } from "../services/rental.api";

export const useRentalPosts = (params) => {
	const {
		data: rentalsPosts,
		refetch: refetchRentalPosts,
		isFetching: rentalsPostsIsFetching,
		isLoading,
		error,
	} = useQuery(["posts", params], () => fetchRentalPosts(params), {
		// staleTime: 1000 * 60 * 6,
		// refetchOnMount: false,
		enabled: false,
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

	const savedPosts = useQuery("savedPosts", fetchSavedRentalPosts, {
		staleTime: 1000 * 60 * 6,
	});

	const userPosts = useQuery("userPosts", fetchRentalPostsByUser, {
		staleTime: 1000 * 60 * 6,
	});

	// serched posts with filter
	const searchedPosts = useQuery(["searchedPosts", params], fetchRentalPostsBySearch, {
		// refetchOnMount: true,
		enabled: false,
	});

	return {
		rentalsPosts,
		refetchRentalPosts,
		rentalsPostsIsFetching,
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
		// search
		searchedPosts: searchedPosts.data,
		refetchSearchedPosts: searchedPosts.refetch,
		isLoadingSearchedPosts: searchedPosts.isLoading,
		isRefetchingSearchedPosts: searchedPosts.isFetching,
		errorSearchedPosts: searchedPosts.error,
		// saved
		savedPosts,
		//
		userPosts: userPosts.data,
		isLoadingUserPosts: userPosts.isLoading,
		errorUserPosts: userPosts.error,
	};
};
