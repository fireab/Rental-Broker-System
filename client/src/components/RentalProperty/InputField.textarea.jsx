import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Textarea } from "@chakra-ui/react";
import { Field, useField } from "formik";
import React from "react";

import capitalize from "../../utils/Capitalize";

const InputFieldTextarea = ({ label, leftIcon, rightIcon, isValidating, liveValidate, inputLeftAddon, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isInvalid={meta.error && meta.touched}>
			<FormLabel fontSize={"sm"}>
				<span className="whitespace-nowrap">{capitalize(label)}</span>
			</FormLabel>

			<InputGroup size="lg" className="bg-white/40">
				<Textarea placeholder="Here is a sample placeholder" size="sm" resize="vertical" />
			</InputGroup>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default InputFieldTextarea;
