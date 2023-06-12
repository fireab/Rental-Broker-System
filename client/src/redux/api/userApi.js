import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { redirect } from "react-router-dom";

import { logoutUser, setUser } from "../features/user.slice";

const BASE_URL = "";

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/api/user/`,
	}),

	tagTypes: ["User"],
	endpoints: (builder) => ({
		user: builder.query({
			query() {
				return {
					url: "userprofile",
					credentials: "include",
				};
			},
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					console.log("data userApi getMe");
					console.log(data);
					dispatch(setUser(data));
				} catch (error) {
					if (error.error.status) {
						dispatch(logoutUser());
						return redirect("/login");
					}
				}
			},
		}),
	}),
});

export const { useUserQuery } = userApi;
