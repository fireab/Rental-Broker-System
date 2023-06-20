import { useMutation, useQuery, useQueryClient } from "react-query";
import { changePassword, editUserProfile, fetchUserProfile, fetchUserProfileById } from "../services/user";

export const useUser = (params) => {
    const queryClient = useQueryClient();
    const getUserProfile = useQuery("user", fetchUserProfile, {
        enabled: false,
    }); 

    const editUserProfileAccount = useMutation(editUserProfile, {
        onSuccess: (data) => {
            queryClient.invalidateQueries("user");
            queryClient.setQueryData("user", data);
        }
    });

    const getUserProfileById = useQuery("user", fetchUserProfileById, {
        enabled: false,
        onSuccess: (data) => {
            queryClient.invalidateQueries("user");
            queryClient.setQueryData("user", data);
        }
    });

    const changeUserPassword = useMutation(changePassword, {
        enabled: false,
    });

    return {
        getUserProfile: getUserProfile.data,
        refetchUserProfile: getUserProfile.refetch,
        isGetUserProfileLoading: getUserProfile.isLoading, 
        isGetUserProfileFetching: getUserProfile.isFetching,

        editUserProfile: editUserProfileAccount.mutate,
        isEditUserProfileFetching: editUserProfileAccount.isFetching,
        getUserProfileById,
        isGetUserProfileByIdFetching: getUserProfileById.isFetching,
        changeUserPassword: changeUserPassword.mutateAsync,
        isChangeUserPasswordFetching: changeUserPassword.isFetching,
    }
};
