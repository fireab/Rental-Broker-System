import { useMutation, useQuery, useQueryClient } from "react-query";

import { changePassword, editUserProfile, fetchUserFollowers, fetchUserFollowing, fetchUserProfile, fetchUserProfileByUsername, fetchUserSearch, followUser, reportPost } from "../services/user";

export const useUser = (params) => {
    const queryClient = useQueryClient();
    const getUserProfile = useQuery(["user",params], fetchUserProfile, {
        enabled: false,
    }); 

    const editUserProfileAccount = useMutation(editUserProfile, {
        onSuccess: (data) => {
            queryClient.invalidateQueries("user");
            queryClient.setQueryData(["user"], data);
        }
    });

    const getUserProfileByUsername = useQuery(["user",params], fetchUserProfileByUsername, {
        enabled: false,
        onSuccess: (data) => {
            queryClient.invalidateQueries("user");
            queryClient.setQueryData("user", data);
        }
    });

    const changeUserPassword = useMutation(changePassword, {
        enabled: false,
    });

    const searchUsers = useQuery(["user search",params], fetchUserSearch, {
        enabled: false,
    });

    const followUserAction = useMutation(followUser, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(["follow",params]);
            userFollowers.refetch();
            // getUserProfileByUsername.refetch();
            // queryClient.setQueryData(["follow",params], data);
            return data;
        }
    });



    const userFollowers = useQuery(["followers",params], fetchUserFollowers, {
        enabled: false,
    });

    const userFollowing = useQuery(["following",params], fetchUserFollowing, {
        enabled: false,
    });

    const actionReportPost = useMutation(reportPost,{})

    return {
        getUserProfile: getUserProfile.data,
        refetchUserProfile: getUserProfile.refetch,
        isGetUserProfileLoading: getUserProfile.isLoading, 
        isGetUserProfileFetching: getUserProfile.isFetching,

        editUserProfile: editUserProfileAccount.mutate,
        isEditUserProfileFetching: editUserProfileAccount.isFetching,
        // 
        getUserProfileByUsername: getUserProfileByUsername.data,
        refetchUserProfileByUsername: getUserProfileByUsername.refetch,
        isGetUserProfileByUsernameLoading: getUserProfileByUsername.isLoading,
        isGetUserProfileByIdFetching: getUserProfileByUsername.isFetching,
        // 
        changeUserPassword: changeUserPassword.mutateAsync,
        isChangeUserPasswordFetching: changeUserPassword.isFetching,

        //
        follow: followUserAction.mutateAsync,
        followData: followUserAction.data,
        isFollowLoading: followUserAction.isLoading,
        isFollowFetching: followUserAction.isFetching,


        // follwers

        followers: userFollowers.data,
        refetchFollowers: userFollowers.refetch,
        isFollowersLoading: userFollowers.isLoading,
        isFollowersFetching: userFollowers.isFetching,

        // following

        following: userFollowing.data,
        refetchFollowing: userFollowing.refetch,
        isFollowingLoading: userFollowing.isLoading,
        isFollowingFetching: userFollowing.isFetching,

        // search

        search: searchUsers.data,
        refetchSearch: searchUsers.refetch,
        isSearchLoading: searchUsers.isLoading,
        isSearchFetching: searchUsers.isFetching,

        // report

        report: actionReportPost.mutateAsync,
        isReportLoading: actionReportPost.isLoading,


    }
};
