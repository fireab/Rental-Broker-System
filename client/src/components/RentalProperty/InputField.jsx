import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement } from "@chakra-ui/react";
import { Field, useField } from "formik";
import React from "react";

import capitalize from "../../utils/Capitalize";

const InputField = ({ label, leftIcon, rightIcon, required,inputLeftAddon, inputRightAddon, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isRequired={required} isInvalid={meta.error && meta.touched}>
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
					fontSize={"sm"}
					color={"black"}
					{...field}
					autoComplete="off"
					{...props}
					spellCheck={false}
					// border={0.8}
					className="border-[0.8px !important] border-[#2b6aa0]"
					_placeholder={{ color: "#ced4da", fontSize: "sm" }}
				/>

				{rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
				{inputRightAddon && (
					<InputRightAddon bgColor={"#2b6aa0"}>
						<span className="text-white font-bold text-sm">{inputRightAddon}</span>
					</InputRightAddon>
				)}
			</InputGroup>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default InputField;
