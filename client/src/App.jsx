import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, RouterProvider } from "react-router-dom";

// import route from "./routes";
import theme from "./styles/chakraUI.theme/theme.fonts";

import "./App.css";
// import loggedRoute from "./route.logged";
import route from "./route.all";

function App() {


	return (
		<>
			<ChakraProvider theme={theme}>
				<RouterProvider router={route} />
			</ChakraProvider>
		</>
	);
}

export default App;
