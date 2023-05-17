import { Button, Image } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronLeft, Lock, Mail, Plus } from "tabler-icons-react";
import * as yup from "yup";

import Header from "../../components/Authentication/header";
import InputField from "./../../components/Authentication/InputField";
import InputFieldCheckbox from "./../../components/Authentication/InputField.checkbox";

const LoginPage = () => {
	const [loading, setLoding] = useState(false);
	const initialValues = {
		email: "",
		password: "",
		rememberMe: false,
	};
	const handelSubmit = (values) => {
		setLoding(true);
		setTimeout(() => {
			setLoding(false);
			alert(JSON.stringify(values, null, 2));
		}, 2000);
	};
	const validationSchema = yup.object().shape({
		email: yup.string().email("Invalid email").required("Email is required"),
		password: yup.string().required("Password is required").min(1, "Password must be at least 6 characters").max(20, "Password must not exceed 20 characters"),
		rememberMe: yup.boolean().oneOf([true, false], ""),
	});
	return (
		<main className="h-screenbg-[#EDF2F4]">
			<div className=" w-full">
				<div className="flex  items-center p-4">
					<div className="hidden md:block md:w-1/2 ">
						<span className="bg-red-500 ">Logo</span>
					</div>
					<div className="w-full md:w-1/2 px-2">
						<div className="flex justify-between items-center">
							<div>
								<RouterLink to="/">
									<div className="text-[#2b6cb0] font-bold flex justify-center items-center">
										<ChevronLeft />
										<span>Back</span>
									</div>
								</RouterLink>
							</div>
							<div>
								<RouterLink to="/register">
									<Button backgroundColor={"#EDF2FA"} className="shadow-sm hover:shadow-xl hover:scale-110 " _hover={{ backgroundColor: "#2b6cb0", color: "white", transition: "all 0.1s ease-in", borderColor: "#2b6cb0" }} border={"1px"} variant={"outline"} leftIcon={<Plus size={18} />}>
										<span className="text-xs font-bold">CREATE AN ACCOUNT</span>
									</Button>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex h-full w-screen ">
				<Image className="hidden md:block lg:w-1/2  bg-contain" src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80" />
				<div className="w-full flex-1 py-4 flex justify-center items-center	">
					<div className="h-full lg:w-3/4 w-full flex flex-col px-4 justify-center items-center space-y-6">
						<Header title="Login to your account" />

						<div className="w-full">
							<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handelSubmit}>
								{(formik) => (
									<Form className="space-y-4">
										<InputField name="email" label="Email" leftIcon={<Mail color={"#2b6cb0"} />} type="text" />
										<InputField name="password" label="Password" leftIcon={<Lock color={"#2b6cb0"} />} type="password" />
										<div className="flex justify-between">
											<InputFieldCheckbox name="rememberMe" label="Remember me?" />
											<RouterLink to="/resetPassword">
												<span className="text-sm whitespace-nowrap text-[#2b6cb0]"> Forgot password?</span>
											</RouterLink>
										</div>

										<Button w={"full"} type="submit" isLoading={loading} _loading={{ color: "white" }} loadingText="Logging In " _hover={{ bgColor: "#2b6aa0" }} bgColor="#2b6cb0" size="lg" fontSize="md">
											<span className="text-white">Login</span>
										</Button>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
