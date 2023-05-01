import "./App.css";
import { RouterProvider } from "react-router-dom";
import route from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/chakraUI.theme/theme.fonts";

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
