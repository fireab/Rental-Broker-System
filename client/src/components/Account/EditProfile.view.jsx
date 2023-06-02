import { Button, FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import InputField from "../RentalProperty/InputField";
import InputFieldSelect from "../RentalProperty/InputField.select";
import { cities, regions } from "../../utils/list";
import { editProfileValidationSchema as validationSchema } from "../../utils/validation";

const EditProfileView = () => {
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
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		username: "",
		region: "Addis Ababa",
		city: "",
	};
	const handelSubmit = (values) => {
		console.log(values);
		alert(JSON.stringify(values, null, 2));
	};
	return (
		<div className="">
			<Formik initialValues={intialValues} validationSchema={validationSchema} onSubmit={handelSubmit}>
				{(formik) => (
					<Form>
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
							<InputField name="phoneNumber" label="Phone Number" inputLeftAddon ="+251" />
							<InputFieldSelect name="city" label="City" options={cities[formik.values.region]} type="select" />
						</div>
						<Button className="w-full md:w-1/2" type="submit" colorScheme="blue" mt={4} isLoading={formik.isSubmitting}>
							update
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default EditProfileView;
