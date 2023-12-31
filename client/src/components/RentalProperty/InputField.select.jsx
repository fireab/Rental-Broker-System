import { FormControl, FormErrorMessage, FormLabel, InputGroup, InputLeftElement, InputRightElement, Select } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

import capitalize from "../../utils/Capitalize";

const InputFieldSelect = ({ label, leftIcon, required, rightIcon, options, defaultValue, del, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<FormControl isRequired={required} isInvalid={meta.error && meta.touched}>
				<FormLabel fontSize={"sm"}>
			{label ? (
					<span className="whitespace-nowrap">{capitalize(label)}</span>
			):(

					<span className="whitespace-nowrap opacity-0 ">label</span>
			)
			}
				</FormLabel>
			<InputGroup size="lg" className="bg-white/40 flex justify-center space-x-2 ">
				{leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
				<Select fontSize={"sm"} color={"black"} {...field} {...props} className="border-[0.8px !important] border-[#2b6aa0]" _placeholder={{ color: "red", fontSize: "sm" }} spellCheck={false} autoComplete="off">
					{options.map((option, index) => {
						return (
							<option key={index} value={option.value}>
								{capitalize(option.name)}
							</option>
						);
					})}
				</Select>
				{rightIcon}
			</InputGroup>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default InputFieldSelect;
