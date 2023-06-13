import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { logoutUser } from "../features/user.slice";
import { userApi } from "./userApi";

const BASE_URL = "";

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
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					console.log("data authApi registeration");
					console.log(data);

					await dispatch(userApi.endpoints.user.initiate(null));
				} catch (error) {
					console.log("error authApi registeration");
				}
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
					console.log("data authApi login");
					console.log(data);

					await dispatch(userApi.endpoints.user.initiate(null));
				} catch (error) {
					console.log("error authApi login");
				}
			},
		}),

		setupOTP: builder.mutation({
			query(data) {
				return {
					url: "setupotp",
					method: "POST",
					body: data,
					credentials: "include",
				};
			},
		}),

		checkOTP: builder.mutation({
			query(data) {
				return {
					url: "checkotp",
					method: "POST",
					body: data,
					credentials: "include",
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
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					await queryFulfilled;
					await dispatch(logoutUser());
				} catch (error) {
					console.log("error authApi logout");
				}
			}
			
		}),
	}),
});

export const { useLoginUserMutation, useRegisterUserMutation, useLogoutUserMutation, useSetupOTPMutation, useCheckOTPMutation } = authApi;

