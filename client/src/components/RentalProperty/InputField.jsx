import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { Field, useField } from "formik";
import React from "react";

import capitalize from "../../utils/Capitalize";

const InputField = ({ label, leftIcon, rightIcon, isValidating, liveValidate, inputLeftAddon, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isInvalid={(meta.error && meta.touched) }>
			<FormLabel fontSize={"sm"}>
				<span className="whitespace-nowrap">{capitalize(label)}</span>
			</FormLabel>

			<InputGroup size="lg" className="bg-white/40">
				{inputLeftAddon && (
					<InputLeftAddon bgColor={"#2b6aa0"}>
						<span className="text-white font-bold text-sm">{inputLeftAddon}</span>
					</InputLeftAddon>
				)}
				{leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
				<Input
				/>

				<InputRightElement>{liveValidate && (meta.error ? <SmallCloseIcon fontSize={"2xl"} color="red" /> : <CheckIcon fontSize={"lg"} color="green.600" />)}</InputRightElement>
				{rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
			</InputGroup>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default InputField;
