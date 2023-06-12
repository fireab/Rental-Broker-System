import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setUser } from "../features/user.slice";
import { redirect } from 'react-router-dom';

const BASE_URL = "http://localhost:3032";

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
					credentials: 'include',
				};
			},
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					console.log("data userApi getMe");
					dispatch(setUser(data));
				} catch (error) {
					console.log(error);
					console.log("error userApi getMe");
					redirect("/login");
				}
			},
		}),
	}),
});


export const { useUserQuery} = userApi;