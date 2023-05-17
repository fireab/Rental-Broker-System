import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { Field, useField } from "formik";
import React from "react";
import Capitalize from "../../utils/Capitalize";
import capitalize from "../../utils/Capitalize";

const InputField = ({ label, leftIcon, rightIcon, liveValidate, inputLeftAddon, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isInvalid={(meta.error && meta.touched) || (meta.error && liveValidate != undefined)}>
			<FormLabel fontSize={"sm"}>
				<span className="whitespace-nowrap">{capitalize(label)}</span>
			</FormLabel>

			<InputGroup size="md" className="bg-white/40">
				{inputLeftAddon && (
					<InputLeftAddon bgColor={"#2b6aa0"}>
						<span className="text-white font-bold">{inputLeftAddon}</span>
					</InputLeftAddon>
				)}
				{leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
				<Input {...field} autoComplete="off" {...props} spellCheck={false} border={"1px"} _hover={{ borderColor: "#2b6cb0" }} borderColor={"gray"} />
				{rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
			</InputGroup>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default InputField;
