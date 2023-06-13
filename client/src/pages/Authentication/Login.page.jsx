import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, chakra, Image, shouldForwardProp } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { isValidMotionProp, motion } from "framer-motion";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { redirect, Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { ChevronLeft, Lock, Mail, Plus } from "tabler-icons-react";
import * as yup from "yup";

import Header from "../../components/Authentication/header";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { loginValidationSchema as validationSchema } from "../../utils/validation";
// import { useAuth } from "../../hooks/useAuth";
import InputField from "./../../components/Authentication/InputField";
import InputFieldCheckbox from "./../../components/Authentication/InputField.checkbox";
import Message from './../Message/Message';

const MotionButton = motion(Button);
const LoginPage = () => {
	// const navigate = useNavigate();
	const [loading, setLoding] = useState(false);
	// const { login, isLoading } = useAuth();
	// const [formError, setformError] = useState(undefined);


	const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();
	toast.success('You successfully logged in');
	const navigate = useNavigate();
	const location = useLocation();
	const from = ((location.state)?.from.pathname) || '/rentals';
	useEffect(() => {
		if (isSuccess) {
		  toast.success('You successfully logged in');
		  navigate(from);
		}
		if (isError) {
		  if (Array.isArray((error).data.error)) {
			(error).data.error.forEach((el) =>
			  toast.error(el.message, {
				position: 'top-right',
			  })
			);
		  } else {
			toast.error((error).data.message, {
			  position: 'top-right',
			});
		  }
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [isLoading]);

	const initialValues = {
		email: "",
		password: "",
		rememberMe: false,
	};
	const handelSubmit = async (values) => {
		loginUser(values);
		// setLoding(true);

		// await login(values.email, values.password)
		// 	.then((res) => {
		// 		console.log("Login Success");
		// 		navigate("/rentals", { replace: true });
		// 	})
		// 	.catch((err) => {
		// 		setformError(err)
		// 		console.log("Login Error");
		// 	})
		// 	.finally(() => {
		// 		setLoding(false);
		// 	});
	};

	return (
		<main className="min-h-screen flex flex-col bg-gradient-to-r from-[#870bad] to-[#d60c60]">
			<div className="w-full h-16">
				<div className="flex  items-center p-4">
					<div className="hidden md:block md:w-1/2 ">
						<span className="bg-red-500 ">Logo</span>
					</div>
					<div className="w-full md:w-1/2 px-2">
						<div className="flex justify-end space-x-8 items-center">
							<div>
								<RouterLink to="/">
									<div className="text-white font-bold flex justify-center items-center">
										<span>Home</span>
									</div>
								</RouterLink>
							</div>
							<div>
								<RouterLink to="/register">
									<Button color={"white"} backgroundColor={"transparent"} className="shadow-sm hover:shadow-xl hover:scale-110" _hover={{ backgroundColor: "#2b6cb0", color: "white", transition: "all 0.2s ease-in", borderColor: "#2b6cb0" }} border={"1px"} variant={"outline"} leftIcon={<Plus size={18} />}>
										<span className="text-xs font-bold ">CREATE AN ACCOUNT</span>
									</Button>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div style={{ maxHeight: "calc(100vh - 4rem)" }} className="flex flex-1 rounded-2xl shadow-2xl">
				{/* <Image height={"full"} className="hidden h- md:block lg:w-1/2  bg-" src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343" /> */}
				<motion.div initial={{ opacity: 0.8, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} className="flex flex-1 md:my-5 sm:mx-10  sm:rounded-2xl overflow-auto">
					<img className="hidden  md:block lg:w-1/2 object-cover bg-contain" src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343" alt="" />

					<div className="max-w-full flex-1 md:py-4 flex justify-center items-center bg-[#EDF2F4]	">
						<div className="h-full lg:w-3/4 w-full flex flex-col px-4 justify-center items-center space-y-6">
							<Header title="Login to your account" />
							{isError && (
								<Alert status="error">
									<AlertIcon />
									{/* <AlertTitle>Your browser is outdated!</AlertTitle> */}
									<AlertDescription>{error.data}</AlertDescription>
								</Alert>
							)}
							<div className="w-full">
								<Formik initialValues={initialValues} validateOnBlur={true} validateOnChange={false} validationSchema={validationSchema} onSubmit={handelSubmit}>
									{(formik) => (
										<Form className="space-y-4">
											<InputField placeholder="Enter Your Email" name="email" label="Email" leftIcon={<Mail size={22} strokeWidth={1.5} color={"#2b6cb0"} />} type="text" />

											<InputField placeholder="Password" name="password" label="Password" leftIcon={<Lock size={22} strokeWidth={1.5} color={"#2b6cb0"} />} type="password" />
											<div className="flex justify-between">
												<InputFieldCheckbox size={"md"} name="rememberMe" label="Remember me?" />
												<RouterLink to="/resetPassword">
													<span className="text-sm whitespace-nowrap text-[#2b6cb0]"> Forgot password?</span>
												</RouterLink>
											</div>

											<Button w={"full"} type="submit" isLoading={isLoading} _loading={{ color: "white" }} loadingText="Logging In " _hover={{ bgColor: "#2b6aa0" }} bgColor="#2b6cb0" size="lg" fontSize="md">
												<span className="text-white">Login</span>
											</Button>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</main>
	);
};

export default LoginPage;
