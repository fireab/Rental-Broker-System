import { createBrowserRouter, Outlet } from "react-router-dom";

import ChangePasswordView from "./components/Account/ChangePassword.view";
import EditProfileView from "./components/Account/EditProfile.view";
import ProfilePageView from "./components/Account/ProfilePage.view";
import UserprofileView from "./components/Account/userprofile.view";
import IsAuthorized from "./components/isAuthorized";
import IsNotAuthorized from "./components/isNotAuthorized";
import Layout from "./Layout";
import LayoutLogged from "./Layout.logged";
import LayoutLoggedMin from "./Layout.logged.min";
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
import FavoriteRentalsPage from "./pages/User/Account/FavoriteRentals.page";
import FollowersPage from "./pages/User/Account/Followers.page";
import FollowingPage from "./pages/User/Account/Following.page";
import CreateListingPage from "./pages/User/RentalProperty/CreateListing.page";
import EditPropertyPage from "./pages/User/RentalProperty/EditProperty.page";
import RequestRental from "./pages/User/RentalProperty/Request.rental";
import SavedPropertyList from "./pages/User/RentalProperty/SavedPropertyList";
import ProfileLayout from "./Profile.Layout";
import UserLayout from "./User.Layout";
import FAQ from "./pages/FAQ";

const route = createBrowserRouter([
  {
    path: "/",
    element: <IsNotAuthorized />,
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
      {
        path: "faq",
        element: (
          <Layout>
            <FAQ />
          </Layout>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <IsAuthorized />,
    children: [
      {
        index: true,
        element: <LayoutLogged>Homepage</LayoutLogged>,
      },
      {
        path: "followers",
        element: (
          <LayoutLogged>
            <FollowersPage />
          </LayoutLogged>
        ),
      },
      {
        path: "following",
        element: (
          <LayoutLogged>
            <FollowingPage />
          </LayoutLogged>
        ),
      },
      {
        path: "requests",
        element: (
          <LayoutLogged>
            <RequestRental />
          </LayoutLogged>
        ),
      },
      {
        path: "report",
        element: (
          <LayoutLogged>
            <h1>Report</h1>
          </LayoutLogged>
        ),
      },
      {
        path: "report",
        element: (
          <LayoutLogged>
            <h1>help</h1>
          </LayoutLogged>
        ),
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
            index: true,
            Component: ProfilePageView,
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
        path: "user",
        element: (
          <LayoutLogged>
            <UserLayout>
              <Outlet />
            </UserLayout>
          </LayoutLogged>
        ),
        children: [
          {
            path: ":username",
            Component: UserprofileView,
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
            Component: RentalsPage,
          },
          {
            path: "search",
            Component: SearchResultsPage,
          },
          {
            path: "saved",
            Component: SavedPropertyList,
          },
          {
            path: ":postId",
            Component: PropertyDetailPage,
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
            path: "my",
            Component: PropertyListPage,
          },
          {
            path: "settings",
            Component: AccountSettingPage,
          },
          {
            path: "userpost",
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
