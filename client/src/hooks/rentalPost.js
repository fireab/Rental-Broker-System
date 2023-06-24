import { useMutation, useQuery, useQueryClient } from "react-query";

import { createUserRentalPost, deleteUserRentalPost, fetchRentalPosts, fetchRentalPostsBySearch, fetchRentalPostsByUser, fetchSavedRentalPosts, fetchUserRentalPost, saveRentalPost, updateUserRentalPost } from "../services/rental.api";

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

	const fetchRentalPost = useQuery(["post", params], fetchUserRentalPost, {
		enabled: false,
	});

	const queryClient = useQueryClient();
	const create = useMutation(createUserRentalPost, {
		onSuccess: () => {
			queryClient.invalidateQueries(["posts", params]);
		},
	});

	const update = useMutation(updateUserRentalPost, {
		onSuccess: () => {
			queryClient.invalidateQueries("posts");
		},
	});
	const savedPosts = useQuery("savedPosts", fetchSavedRentalPosts, {
		// staleTime: 1000 * 60 * 6,
		enabled: false,
	});

	const savePost = useMutation((postId) => saveRentalPost(postId), {
		onSuccess: async (data) => {
			console.log(data,"data");
			return data;
		},
	});

	const remove = useMutation(deleteUserRentalPost, {
		onSuccess: () => {
			queryClient.invalidateQueries("posts");
		},
	});

	const userPosts = useQuery(["userPosts", params], fetchRentalPostsByUser, {
		staleTime: 1000 * 60 * 6,
		enabled: false,
	});

	const deleteUserPost = useMutation(deleteUserRentalPost, {
		onSuccess: () => {
			queryClient.invalidateQueries("userPosts");
			userPosts.refetch();
			return "Post deleted Succesfully"
		},
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

		// post get

		fetchRentalPost: fetchRentalPost.data,
		refetchRentalPost: fetchRentalPost.refetch,
		isFetchingRentalPost: fetchRentalPost.isFetching,
		isLoadingRentalPost: fetchRentalPost.isLoading,
		errorRentalPost: fetchRentalPost.error,

		createRentalPost: create.mutateAsync,
		isCreatingRentalPost: create.isLoading,
		isRentalPostCreated: create.isSuccess,
		isRentalPostCreationError: create.isError,
		rentalPostCreationError: create.error,
		updateRentalPost: update.mutate,
		removeRentalPost: remove.mutate,
		// 
		saveRentalPost: savePost.mutateAsync,
		saveRentalPostData: savePost.data,
		isSavingRentalPost: savePost.isLoading,

		// saved post
		savedPosts: savedPosts.data,
		isLoadingSavedPosts: savedPosts.isLoading,
		isFetchingSavedPosts: savedPosts.isFetching,
		refetchSavedPosts: savedPosts.refetch,

		// search
		searchedPosts: searchedPosts.data,
		refetchSearchedPosts: searchedPosts.refetch,
		isLoadingSearchedPosts: searchedPosts.isLoading,
		isRefetchingSearchedPosts: searchedPosts.isFetching,
		errorSearchedPosts: searchedPosts.error,
		// saved

		//
		userPosts: userPosts.data,
		refetchUserPosts: userPosts.refetch,
		isLoadingUserPosts: userPosts.isLoading,
		isFetchingUserPosts: userPosts.isFetching,
		errorUserPosts: userPosts.error,

		//delete post

		deleteUserPost: deleteUserPost.mutateAsync,
		isDeletingUserPost: deleteUserPost.isLoading,
	};
};
