import { createBrowserRouter, Outlet } from "react-router-dom";

import Layout from "./Layout";
import AboutPage from "./pages/About.page";
import LoginPage from "./pages/Authentication/Login.page";
import RegisterPage from "./pages/Authentication/Register.page";
import ContactUsPage from "./pages/ContactUs.page";
import Homepage from "./pages/Homepage";
import Message from "./pages/Message/Message";
import Messages from "./pages/Message/Messages";
import PropertyDetailPage from "./pages/Rentals/PropertyDetail.page";
import PropertyListPage from "./pages/Rentals/PropertyList.page";
import RentalsPage from "./pages/Rentals/Rentals.page";
import SearchResultsPage from "./pages/Rentals/SearchResults.page";
import AccountSettingPage from "./pages/User/Account/AccountSetting.page";
import EditProfilePage from "./pages/User/Account/EditProfile.page";
import FavoriteRentalsPage from "./pages/User/Account/FavoriteRentals.page";
import ProfilePage from "./pages/User/Profile.page";
import CreateListingPage from "./pages/User/RentalProperty/CreateListing.page";
import EditPropertyPage from "./pages/User/RentalProperty/EditProperty.page";

const route = createBrowserRouter([
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
		path: "/",
		element: (
			<Layout>
				<Outlet />
			</Layout>
		),
		children: [
			{
				index: true,
				Component: Homepage,
			},
			{
				path: "contact",
				Component: ContactUsPage,
			},

			{
				path: "about",
				Component: AboutPage,
			},
			{
				path: "*",
				Component: () => <div>404</div>,
			},
		],
	},
	{
		path: "rentals",
		element: (
			<Layout>
				<Outlet />
			</Layout>
		),
		children: [
			{
				index: true,
				Component: RentalsPage, // list of properties for rent from all users
			},
			{
				path: "search",
				Component: SearchResultsPage, // list of searched properties from a users
			},
			{
				path: ":id",
				Component: PropertyDetailPage, // property detail page for a specific property from other user
			},
		],
	},
	{
		path: ":user",
		element: (
			<Layout>
				<Outlet />
			</Layout>
		),
		children: [
			{
				index: true,
				Component: ProfilePage,
			},
			{
				path: "CreateAd",
				Component: CreateListingPage,
			},
			{
				path: "EditAd/:id",
				Component: EditPropertyPage,
			},
			{
				path: "Ad/:id",
				Component: PropertyDetailPage,
			},
			{
				path: "messages",
				Component: Messages,
			},
			{
				path: "messages/:id",
				Component: Message,
			},
			{
				path: "rentals",
				Component: PropertyListPage, // list of all user properties from a other user
			},
			{
				path: "settings",
				Component: AccountSettingPage,
			},
			{
				path: "favorites",
				Component: FavoriteRentalsPage,
			},
			{
				path: "EditProfile",
				Component: EditProfilePage,
			},
		],
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