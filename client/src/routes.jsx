import { createBrowserRouter, Outlet } from "react-router-dom";

import Layout from "./Layout";
import AboutPage from "./pages/About.page";
import LoginPage from "./pages/Authentication/Login.page";
import RegisterPage from "./pages/Authentication/Register.page";
import ContactUsPage from "./pages/ContactUs.page";
import Homepage from "./pages/Homepage";
import Message from "./pages/Message/Message";
import Messages from "./pages/Message/Messages";
import Notifications from "./pages/Notification/noifications.page";
import PropertyDetailPage from "./pages/Rentals/PropertyDetail.page";
import PropertyListPage from "./pages/Rentals/PropertyList.page";
import RentalsPage from "./pages/Rentals/Rentals.page";
import SearchResultsPage from "./pages/Rentals/SearchResults.page";
import AccountSettingPage from "./pages/User/Account/AccountSetting.page";
import EditProfilePage from "./pages/User/Account/EditProfile.page";
import FavoriteRentalsPage from "./pages/User/Account/FavoriteRentals.page";
import CreateListingPage from "./pages/User/RentalProperty/CreateListing.page";
import EditPropertyPage from "./pages/User/RentalProperty/EditProperty.page";

import ProfileLayout from "./Profile.Layout";
import ProfilePageView from "./components/Account/ProfilePage.view";
import EditProfileView from "./components/Account/EditProfile.view";
import ChangePasswordView from "./components/Account/ChangePassword.view";

import Sidebar from "./components/common/Sidebar";
import Sidenav from "./components/common/Sidenav";
import ImageSlider from "./components/RentalProperty/ImageSlider";
import PropertyCard from "./components/RentalProperty/PropertyCard";
import axios from "axios";

const route = createBrowserRouter([
	{
		path: "sidebar",
		element: <Sidebar />,
	},
	{
		path: "card",
		element: <PropertyCard />,
	},
	{
		path: "sidenav",
		element: <Sidenav />,
	},
	{
		path: "img",
		element: <ImageSlider />,
	},
	{
		path: "/",
		element: <Outlet />,
		children: [
			{
				path: "register",
				Component: RegisterPage,
			},
			{
				path: "login",
				Component: LoginPage,
			},
		],
	},
	{
		path: "*",
		Component: () => <div>404</div>,
	},
]);
// const route = createBrowserRouter([
// 	{
// 		path: "/user",
// 		element: <Outlet />,
// 		children: [
// 			{
// 				path: "contact",
// 				element: <ContactUsPage />,
// 			},
// 			{
// 				index: true,
// 				//   path: "login",
// 				element: <LoginPage />,
// 				//   loader: ({ request }) =>
// 				// 	fetch("/api/dashboard.json", {
// 				// 	  signal: request.signal,
// 				// 	}),
// 			},
// 			{
// 				element: <RegisterPage />,
// 				children: [
// 					{
// 						path: "login",
// 						element: <LoginPage />,
// 						//   loader: redirectIfUser,
// 					},
// 					// {
// 					//   path: "logout",
// 					//   action: logoutUser,
// 					// },
// 				],
// 			},
// 		],
// 	},
// ]);
export default route;
