import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { Field, useField } from "formik";
import React from "react";

import Capitalize from "../../utils/Capitalize";
import capitalize from "../../utils/Capitalize";

const InputField = ({ label, leftIcon, rightIcon, liveValidate, inputLeftAddon, ...props }) => {
	const [field, meta] = useField(props);
	return (
		// <FormControl isInvalid={(meta.error && meta.touched) || (meta.error && liveValidate != undefined)}>
		<FormControl isInvalid={meta.error && meta.touched}>
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
			</InputGroup>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default InputField;
