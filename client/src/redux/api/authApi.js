import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { redirect } from "react-router-dom";

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
					await dispatch(userApi.endpoints.user.initiate(null));
				} catch (error) {
					console.log("registration error bro",error)
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
					await dispatch(userApi.endpoints.user.initiate(null));
				} catch (error) {
					console.log("login error bro",error)
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
					if (error.error.status===401) {
						dispatch(logoutUser());
						return redirect("/login");
					}
				}
			}
			
		}),
	}),
});

export const { useLoginUserMutation, useRegisterUserMutation, useLogoutUserMutation, useSetupOTPMutation, useCheckOTPMutation } = authApi;

