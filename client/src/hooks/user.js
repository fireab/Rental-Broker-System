import { useMutation, useQuery, useQueryClient } from "react-query";

import { changePassword, editUserProfile, fetchUserFollowers, fetchUserFollowing, fetchUserProfile, fetchUserProfileByUsername, followUser } from "../services/user";

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


    const followUserAction = useMutation(followUser, {
        // enabled: false,
        onSuccess: (data) => {
            console.log(data, "followed or not");
            return data;
        }
    });



    const userFollowers = useQuery(["followers",params], fetchUserFollowers, {
        enabled: false,
    });

    const userFollowing = useQuery(["following",params], fetchUserFollowing, {
        enabled: false,
    });

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
        refetchFollow: followUserAction.refetch,
        isFollowLoading: followUserAction.isLoading,
        isFollowFetching: followUserAction.isFetching,


        // follwers

        followers: userFollowers.data,
        isFollowersLoading: userFollowers.isLoading,
        isFollowersFetching: userFollowers.isFetching,

        // following

        following: userFollowing.data,
        refetchFollowing: userFollowing.refetch,
        isFollowingLoading: userFollowing.isLoading,
        isFollowingFetching: userFollowing.isFetching,

    }
};
