import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";
const BASE_URL = "http://localhost:3032";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/api/auth/`,
	}),
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query(data) {
				return {
					url: "register",
					method: "POST",
					body: data,
				};
			},
		}),

		loginUser: builder.mutation({
			query(data) {
				return {
					url: "login",
					method: "POST",
					body: data,
					credentials: "include",
				};
			},

			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					console.log("data authApi loginUser");
					console.log(data);

					await dispatch(userApi.endpoints.user.initiate(null));
				} catch (error) {
					console.log("error authApi loginUser");
				}
			},
		}),

		verifyEmail: builder.mutation({
			query({ verificationCode }) {
				return {
					url: `verifyemail/${verificationCode}`,
					method: "GET",
				};
			},
		}),

		logoutUser: builder.mutation({
			query() {
				return {
					url: "logout",
					method: "POST",
					credentials: "include",
				};
			},
		}),
	}),
});

export const { useLoginUserMutation, useRegisterUserMutation, useLogoutUserMutation, useVerifyEmailMutation } = authApi;
