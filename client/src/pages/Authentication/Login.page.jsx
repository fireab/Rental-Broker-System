import { BellIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";
import { Button, Checkbox, FormControl, FormErrorMessage, FormHelperText, FormLabel, Image, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { Field, useFormik } from "formik";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronLeft, Plus } from "tabler-icons-react";

const LoginPage = () => {
	const [loading, setLoding] = useState(false);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
		onSubmit: (values) => {
			setLoding(true);
			setTimeout(() => {
				setLoding(false);
				alert(JSON.stringify(values, null, 2));
			}, 2000);
		},
	});

	return (
		<main className="bg-[#EDF2F4]">
			<div className="fixed w-full">
				<div className="flex  items-center">
					<div className="hidden md:block md:w-1/2 p-4 ">
						<span className="bg-red-500 ">Logo</span>
					</div>
					<div className="w-full md:w-1/2">
						<div className="flex justify-between items-center p-4">
							<div>
								<RouterLink to="/">
									<div className="text-[#2b6cb0] font-bold p-3  flex justify-center items-center">
										<ChevronLeft />
										<span>Back</span>
									</div>
								</RouterLink>
							</div>
							<div>
								<RouterLink to="/signup">
									<Button backgroundColor={"#EDF2FA"} className="shadow-sm hover:shadow-xl hover:scale-110" _hover={{ backgroundColor: "#2b6cb0", color: "white", transition: "all 0.1s ease-in" }} colorScheme="facebook" variant={"outline"} leftIcon={<Plus size={18} />}>
										<span className="text-xs font-bold">CREATE AN ACCOUNT</span>
									</Button>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex h-screen w-screen ">
				<Image className="hidden md:block lg:w-1/2  bg-contain" src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80" />
				<div className="w-full flex-1 py-4	">
					<div className="h-full w-full flex flex-col justify-center items-center space-y-6">
						<div className=" text-center">
							<div className="md:hidden block p-4 ">
								<span className="bg-red-500 ">Logo</span>
							</div>
							<span className="font-bold text-2xl tracking-wider">Login to your account</span>
						</div>
						<div className="w-full px-8 md:px-24">
							<form onSubmit={formik.handleSubmit}>
								<Stack spacing="6">
									<FormControl id="email">
										<FormLabel>
											<span className="text-sm">Email address</span>
										</FormLabel>
										<InputGroup className="bg-white/40">
											<InputLeftElement pointerEvents="none">
												<EmailIcon color={"#2b6cb0"} />
											</InputLeftElement>
											<Input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} />
										</InputGroup>
									</FormControl>

									<FormControl id="password">
										<FormLabel>
											<span className="text-sm">Password</span>
										</FormLabel>
										<InputGroup className="bg-white/40">
											<InputLeftElement pointerEvents="none">
												<LockIcon color={"#2b6cb0"} />
											</InputLeftElement>
											<Input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} />
										</InputGroup>
									</FormControl>
									{/* <Field as={Checkbox} id="rememberMe" name="rememberMe" colorScheme="purple"> */}
									<Checkbox name="rememberMe" border={"20px"} borderColor={"#2b6aa0"} value={formik.values.rememberMe} onChange={formik.handleChange}>
										Remember me?
									</Checkbox>
									{/* </Field> */}

									<Button type="submit" isLoading={loading} loadingText="Logging In " _hover={{ bgColor: "#2b6aa0" }} bgColor="#2b6cb0" size="lg" fontSize="md">
										<span className="text-white">Login</span>
									</Button>
								</Stack>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
