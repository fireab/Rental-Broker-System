import { Button, FormControl, FormLabel, Input, InputGroup, useDisclosure } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { useUser } from "../../hooks/user";
import { useSetupOTPMutation } from "../../redux/api/authApi";
import { cities, regions } from "../../utils/list";
import { editProfileValidationSchema as validationSchema } from "../../utils/validation";
import OTPModal from "../Authentication/OTP.modal";
import InputField from "../RentalProperty/InputField";
import InputFieldSelect from "../RentalProperty/InputField.select";

const EditProfileView = () => {
	
	const { getUserProfile, isGetUserProfileLoading, refetchUserProfile, isGetUserProfileFetching, editUserProfile, isEditUserProfileFetching } = useUser();

	const [setupOTP, { isLoading: setupOTPLoading, isError: setupOTPError, error: setupOTPErrorData, isSuccess: setupOTPSuccess }] = useSetupOTPMutation();
	const { isOpen: isOTPOpen, onOpen: onOTPOpen, onClose: onOTPClose } = useDisclosure(true);
	// usestate setPhoneisVerified
	const [phoneisVerified, setPhoneisVerified] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		refetchUserProfile();
	}, [refetchUserProfile]);

	if (isGetUserProfileLoading || isGetUserProfileFetching || !getUserProfile) {
		return <div>Loading...</div>;
	}

	const validateYupSchema = Yup.object({
		firstName: Yup.string().required("Required"),
		lastName: Yup.string().required("Required"),
		email: Yup.string().email("Invalid email format").required("Required"),
		phoneNumber: Yup.string().required("Required"),
		username: Yup.string().required("Required"),
		region: Yup.string().required("Required"),
		city: Yup.string().required("Required"),
	});
	const intialValues = {
		firstName: getUserProfile.firstName,
		lastName: getUserProfile.lastName,
		email: getUserProfile.email,
		phoneNumber: getUserProfile.phoneNumber,
		username: getUserProfile.username,
		region: getUserProfile.address[0].region,
		city: getUserProfile.address[0].city,
	};

	const handelSubmit = async (values) => {
		// if (intialValues.phoneNumber !== values.phoneNumber) {
		// 	setupOTP({ email: getUserProfile.email, phoneNumber: values.phoneNumber, username: getUserProfile.username });
		// 	onOTPOpen();
		// } else {

		// }
		// change object to array
		const updateFields = {};
		Array.from(Object.keys(values)).forEach((key) => {
			if (values[key] !== intialValues[key]) {
				updateFields[key] = values[key];
			}
		});
		await editUserProfile(updateFields);
		navigate("/user");
	};
	return (
		<div className="">
			<Formik initialValues={intialValues} validationSchema={validationSchema} onSubmit={handelSubmit}>
				{(formik) => (
					<Form>
						<OTPModal
							setPhoneisVerified={setPhoneisVerified}
							handelSubmit={async (values) => {
								formik.submitForm();
							}}
							onClose={onOTPClose}
							isOpen={isOTPOpen}
						/>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<InputField name="username" label="Username" />
							<InputField name="firstName" label="First Name" />
							<InputField name="lastName" label="Last Name" />
							<InputField name="email" label="Email" />
							<InputFieldSelect
								name="region"
								label="Region"
								options={regions}
								type="select"
								onChange={(e) => {
									formik.setFieldValue("region", e.target.value);
									formik.setFieldValue("city", e.target.value == "" ? "" : cities[e.target.value][0].value);
								}}
							/>
							<InputField name="phoneNumber" label="Phone Number" inputLeftAddon="+251" />
							<InputFieldSelect name="city" label="City" options={cities[formik.values.region]} type="select" />
						</div>
						<Button loadingText="Updating ..." className="w-full md:w-1/2" type="submit" colorScheme="blue" mt={4} isLoading={formik.isSubmitting}>
							update
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default EditProfileView;
