import { FormControl, FormErrorMessage, FormLabel, InputGroup, InputLeftElement, InputRightElement, Select } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

import capitalize from "../../utils/Capitalize";

const InputFieldSelect = ({ label, leftIcon, rightIcon, options, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isInvalid={meta.error && meta.touched}>
			<FormLabel fontSize={"sm"}>
				<span className="whitespace-nowrap">{capitalize(label)}</span>
			</FormLabel>
			<InputGroup size="lg" className="bg-white/40 ">
				{leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
				<Select
					fontSize={"sm"}
					color={"black"}
					{...field}
					{...props}
					className="border-[0.8px !important] border-[#2b6aa0]"
					_placeholder={{ color: "#ced4da", fontSize: "sm" }}
					spellCheck={false}
					autoComplete="off"
				>
					{options.map((option, index) => {
						return (
							<option key={index} value={option.value}>
								{capitalize(option.name)}
							</option>
						);
					})}
				</Select>
				{rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
			</InputGroup>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default InputFieldSelect;
