import { FormControl, FormLabel, InputGroup, Switch } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

import capitalize from "../../utils/Capitalize";

const InputFieldCheckbox = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl className="flex my-2">
			<FormLabel fontSize={"sm"}>
				<span className="text-sm whitespace-nowrap self-center">{capitalize(label)}</span>
			</FormLabel>
			<InputGroup size="md">
				<Switch {...field} {...props} />
			</InputGroup>
		</FormControl>
	);
};

export default InputFieldCheckbox;
