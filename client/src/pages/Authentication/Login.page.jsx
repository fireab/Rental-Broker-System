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
		<main className="min-h-screen flex flex-col bg-gray-700/20">
			<div className="w-full h-16">
				<div className="flex  items-center p-4">
					<div className="hidden md:block md:w-1/2 ">
						<span className="bg-red-500 ">Logo</span>
					</div>
					<div className="w-full md:w-1/2 px-2">
						<div className="flex justify-end space-x-8 items-center">
							<div>
								<RouterLink to="/">
									<div className="text-[#2b6cb0] font-bold flex justify-center items-center">
										<span>Home</span>
									</div>
								</RouterLink>
							</div>
							<div>
								<RouterLink to="/register">
									<Button color={"#2b6cb0"} backgroundColor={"#EDF2FA"} className="shadow-sm hover:shadow-xl hover:scale-110" _hover={{ backgroundColor: "#2b6cb0", color: "white", transition: "all 0.1s ease-in", borderColor: "#2b6cb0" }} border={"1px"} variant={"outline"} leftIcon={<Plus size={18} />}>
										<span className="text-xs font-bold ">CREATE AN ACCOUNT</span>
									</Button>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div style={{ maxHeight: "calc(100vh - 4rem)" }} className="flex flex-1 rounded-2xl">
				{/* <Image height={"full"} className="hidden h- md:block lg:w-1/2  bg-" src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343" /> */}
				<div className="flex flex-1 md:my-5 sm:mx-10  sm:rounded-2xl overflow-auto">
					<img className="hidden  md:block lg:w-1/2 object-cover bg-contain" src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343" alt="" />

					<div className="max-w-full flex-1 md:py-4 flex justify-center items-center bg-[#EDF2F4]	">
						<div className="h-full lg:w-3/4 w-full flex flex-col px-4 justify-center items-center space-y-6">
							<Header title="Login to your account" />

							<div className="w-full">
								<Formik initialValues={initialValues} validateOnBlur={true} validateOnChange={false} validationSchema={validationSchema} onSubmit={handelSubmit}>
									{(formik) => (
										<Form className="space-y-4">
											<InputField placeholder="Enter Your Email" name="email" label="Email" leftIcon={<Mail size={22} strokeWidth={1.5} color={"#2b6cb0"} />} type="text" />

											<InputField placeholder="Password" name="password" label="Password" leftIcon={<Lock size={22} strokeWidth={1.5} color={"#2b6cb0"} />} type="password" />
											<div className="flex justify-between">
												<InputFieldCheckbox size={"md"}
												 name="rememberMe" label="Remember me?" />
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
			</div>
		</main>
	);
};

export default LoginPage;
