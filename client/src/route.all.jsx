import { createBrowserRouter, Outlet } from "react-router-dom";

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
import LayoutLogged from "./Layout.logged";
import IsAuthorized from "./components/isAuthorized";
import Layout from "./Layout";
import IsNotAuthorized from "./components/isNotAuthorized";
import LayoutLoggedMin from "./Layout.logged.min";

const route = createBrowserRouter([
	{
		path: "/",
		element: (
			<IsNotAuthorized>
				<Outlet />
			</IsNotAuthorized>
		),

		children: [
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
						path: "about",
						Component: AboutPage,
					},
					{
						path: "contact",
						Component: ContactUsPage,
					},
				],
			},
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
			// <IsAuthorized>

			<Outlet />
			// </IsAuthorized>
		),
		children: [
			{
				index: true,
				Component: <LayoutLogged>Homepage</LayoutLogged>,
			},
			{
				path: "user",
				element: (
					<LayoutLogged>
						<ProfileLayout>
							<Outlet />
						</ProfileLayout>
					</LayoutLogged>
				),
				children: [
					{
						path: "profile",
						Component: ProfilePageView,
						loader: async ({ request }) => {
							return await axios.get(`https://jsonplaceholder.typicode.com/users/`).then((res) => {
								return res.data;
							});
						},
					},
					{
						path: "Edit",
						Component: EditProfileView,
					},
					{
						path: "changePassword",
						Component: ChangePasswordView,
					},
				],
			},

			{
				path: "rentals",
				element: (
					<LayoutLogged>
						<Outlet />
					</LayoutLogged>
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

					{
						path: "CreateAd",
						Component: CreateListingPage,
					},
					{
						path: "EditAd/:id",
						Component: EditPropertyPage,
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
				],
			},
			{
				path: "/",
				element: (
					<LayoutLoggedMin>
						<Outlet />
					</LayoutLoggedMin>
				),
				children: [
					{
						path: "messages",
						Component: Messages,
					},
					{
						path: "messages/:id",
						Component: Message,
					},
					{
						path: "notifications",
						Component: Notifications,
					},
				],
			},
		],
	},

	{
		path: "*",
		Component: () => <div>404</div>,
	},
]);
export default route;
