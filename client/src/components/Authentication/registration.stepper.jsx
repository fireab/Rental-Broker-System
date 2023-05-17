import { Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle } from "@chakra-ui/react";
import React from "react";

const RegistrationStepper = (props) => {
	const { activeStep, setActiveStep, steps } = props;
	return (
		<div className="p-2 self-center hidden md:block md:w-full md:px-5 w-3/4 xl:w-2/3  ">
			<Stepper size="lg" index={activeStep}>
				{steps.map((step, index) => (
					<Step
						key={index}
						onClick={() => {
							console.log(activeStep);
							if (index < activeStep && activeStep !== 0 && activeStep !== 2) {
								setActiveStep(index);
							}
						}}
					>
						<StepIndicator>
							<StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
						</StepIndicator>

						<Box flexShrink="0" className="">
							<StepTitle>{step.title}</StepTitle>
							<StepDescription fontSize={11}>{step.description[0]}</StepDescription>
							<StepDescription fontSize={11}>{step.description[1]}</StepDescription>
						</Box>
						<StepSeparator />
					</Step>
				))}
			</Stepper>
		</div>
	);
};

export default RegistrationStepper;
