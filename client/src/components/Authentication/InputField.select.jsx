import { FormControl, FormErrorMessage, FormLabel, InputGroup, InputLeftElement, InputRightElement, Select } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

const InputFieldSelect = ({ label, leftIcon, rightIcon, options, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isInvalid={meta.error && meta.touched}>
			<FormLabel fontSize={"sm"}>
				<span className="text-sm whitespace-nowrap">{label.toUpperCase()}</span>
			</FormLabel>
			<InputGroup size="lg" className="bg-white/40 ">
				{leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
				<Select {...field} {...props}>
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
