import React, { useEffect } from "react";
import { Navigate, Outlet, redirect, useLocation, useNavigate } from "react-router-dom";

import loggedRoute from "../route.logged";
import { userApi, useUserQuery } from "../redux/api/userApi";
import FullscreenLoader from './common/fullscreenLoader';

const IsAuthorized = (props) => {
	const location = useLocation();

	const { isLoading, isFetching } = userApi.endpoints.user.useQuery(null, {
		skip: false,
		refetchOnMountOrArgChange: true,
		
	});
	const loading = isLoading || isFetching;

	const user = userApi.endpoints.user.useQueryState(null, {
		selectFromResult: ({ data }) => data,
	});

	if (loading) {
		return <FullscreenLoader />
	}
	console.log(user);
	return <>{user ? props.children : <Navigate to="/login"  replace />}</>;
};

export default IsAuthorized;
