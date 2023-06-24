import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { Field, useField } from "formik";
import React from "react";
import { PulseLoader } from "react-spinners";

import capitalize from "../../utils/Capitalize";

const InputField = ({ label, leftIcon, rightIcon, isValidating, liveValidate, inputLeftAddon, rightButton, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<FormControl isInvalid={(meta.error && meta.touched) || (meta.error && liveValidate == true)}>
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

				{/* <InputRightElement>{liveValidate && field.value !== undefined && (isValidating ? <PulseLoader color={"#2b6cb0"} loading={true} speedMultiplier={0.6} size={6} /> : meta.error ? <SmallCloseIcon fontSize={"2xl"} color="red" /> : <CheckIcon fontSize={"lg"} color="green.600" />)}</InputRightElement> */}
				<div className="flex items-center space-x-2">
					<InputRightElement>{liveValidate && (meta.error ? <SmallCloseIcon fontSize={"2xl"} color="red" /> : <CheckIcon fontSize={"lg"} color="green.600" />)}</InputRightElement>
					{rightButton}
				</div>
				{rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
			</InputGroup>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default InputField;
