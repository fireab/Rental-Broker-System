import * as yup from "yup";
import { citiesList, regionsList } from "./list";

export const signupValidationSchema = [
    yup.object().shape({
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        phoneNumber: yup.string().matches(/^\d+$/, "Phone Number must only contain digits").min(10, "Phone Number must be at least 10 digits").required("Phone Number is required"),
    }),
    yup.object().shape({
        username: yup
            .string()
            .required("Username is required")
            .test("username-availability", "Username is already taken", async function (value) {
                // Simulating a 2-second delay
                await new Promise((resolve) => setTimeout(resolve, 500));

                const isAvailable = value !== "taken_username";
                return isAvailable;
            }),
        password: yup.string().required("Password is required").min(1, "Password must be at least 6 characters").max(20, "Password must not exceed 20 characters"),
        confirmPassword: yup
            .string()
            .required("Confirm Password is required")
            .oneOf([yup.ref("password"), null], "Passwords must match"),
    }),
    yup.object().shape({
        preferedLanguage: yup.string().oneOf(["English", "Amheric", "Afan Oromo"], "Prefered Language is required").notRequired().default("English"),
        region: yup.string().required("Region is required"),
        city: yup.string().required("City is required"),
    }),
];

export const loginValidationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required").min(1, "Password must be at least 6 characters").max(20, "Password must not exceed 20 characters"),
    rememberMe: yup.boolean().oneOf([true, false], ""),
});

export const changePasswordValidationSchema = yup.object().shape({
    currentPassword: yup.string().required("Current Password is required").min(1, "Password must be at least 6 characters").max(20, "Password must not exceed 20 characters"),
    newPassword: yup.string().required("New Password is required").min(1, "Password must be at least 6 characters").max(20, "Password must not exceed 20 characters"),
    confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref("newPassword"), null], "Passwords must match"),
})

export const editProfileValidationSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: yup.string().matches(/^\d+$/, "Phone Number must only contain digits").min(10, "Phone Number must be at least 10 digits").required("Phone Number is required"),
    username: yup.string().required("Username is required"),
    region: yup.string().oneOf(regionsList).required("Region is required"),
    city: yup.string().oneOf(citiesList).required("City is required"),
})