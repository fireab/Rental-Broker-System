import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		// default: `'SegoeUI', sans-serif` // font-family: 'SegoeUI', sans-serif; in css
    default: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
	},
});

export default theme;
