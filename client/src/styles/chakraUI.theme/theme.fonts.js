import { extendTheme } from "@chakra-ui/react";

const activeLabelStyles = {
	transform: "scale(0.85) translateY(-24px)"
  };
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
		// Form: {
		// 	variants: {
		// 	//   floating: {
		// 	// 	container: {
		// 	// 	  _focusWithin: {
		// 	// 		label: {
		// 	// 		  ...activeLabelStyles
		// 	// 		}
		// 	// 	  },
		// 	// 	  "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
		// 	// 		...activeLabelStyles
		// 	// 	  },
		// 	// 	  label: {
		// 	// 		top: 0,
		// 	// 		left: 0,
		// 	// 		zIndex: 2,
		// 	// 		position: "absolute",
		// 	// 		backgroundColor: "white",
		// 	// 		pointerEvents: "none",
		// 	// 		mx: 3,
		// 	// 		px: 1,
		// 	// 		my: 2,
		// 	// 		transformOrigin: "left top"
		// 	// 	  }
		// 	// 	}
		// 	//   }
		// 	// }
		//   },
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
