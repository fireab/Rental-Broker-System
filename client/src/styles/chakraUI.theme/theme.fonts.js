import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		// default: `'SegoeUI', sans-serif` // font-family: 'SegoeUI', sans-serif; in css
		default: `'Roboto', sans-serif`,
		body: `'Roboto', sans-serif`,
	},
	// borderWidth props for 0.8px
	borderWidth: {
		0.8: "0.8px",
	}, 

	// make border of input field thinner than default when focused or hovered over it or when it is active (has value) or when it is invalid (has error) or when it is disabled (isReadOnly) or when it is readonly (isReadOnly) or when it is invalid (isInvalid) or when it is disabled (isDisabled)
	components: {
		Input: {
			baseStyle: {
				field: {
					borderWidth: "0.8px",
					_hover: {
						borderWidth: "0.8px",
					},
					_focus: {
						borderWidth: "0.8px",
					},
					_active: {
						borderWidth: "0.8px",
					},
					_disabled: {
						borderWidth: "0.8px",
					},
					_readOnly: {
						borderWidth: "0.8px",
					},
					_invalid: {
						borderWidth: "0.8px",
					},
				},
			},
		},
	},
});

export default theme;
