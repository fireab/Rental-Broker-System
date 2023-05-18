import { FormControl, FormErrorMessage, FormLabel, InputGroup, InputLeftElement, InputRightElement, Select } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

const InputFieldSelect = ({ label, leftIcon, rightIcon, options, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isInvalid={meta.error && meta.touched}>
			<FormLabel fontSize={"sm"}>
				<span className="whitespace-nowrap">{label.toUpperCase()}</span>
			</FormLabel>
			<InputGroup size="lg" className="bg-white/40 ">
				{leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
				<Select
					{...field}
					{...props}
					// font size of the text inside the select
					fontSize={"sm"}
					border={0.8}
					//placeholder size
				>
					{options.map((option, index) => {
						return (
							<option key={index} value={option.value}>
								{option.name}
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
