import { Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { changePasswordValidationSchema as validationSchema } from "../../utils/validation";
import InputField from "../RentalProperty/InputField";
import { useUser } from "../../hooks/user";
import { useNavigate } from "react-router-dom";

const ChangePasswordView = () => {
	const { changeUserPassword, isChangeUserPasswordFetching } = useUser();
	const navigate = useNavigate();
	const intialValues = {
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	};
	const handelSubmit = async (values) => {
		// alert(JSON.stringify(values, null, 2));
		const res = await changeUserPassword(values)
		console.log(res)
		navigate("/user/profile");
		
	};
	return (
		<div>
			<Formik initialValues={intialValues} validationSchema={validationSchema} onSubmit={handelSubmit}>
				{(formik) => (
					<Form>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<InputField name="currentPassword" label="Current Password" type="password" />
							<div className="hidden md:block"></div>
							<InputField name="newPassword" label="New Password" type="password" />
							<InputField name="confirmPassword" label="Confirm Password" type="password" />
						</div>
						<Button className="w-full md:w-1/2" type="submit" colorScheme="blue" mt={4} isLoading={formik.isSubmitting  || isChangeUserPasswordFetching}> 
							Change Password
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ChangePasswordView;
