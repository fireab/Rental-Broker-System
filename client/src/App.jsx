import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";
import route from "./routes";
import theme from "./styles/chakraUI.theme/theme.fonts";

import "./App.css";

function App() {
	const { user, isLoading, logout } = useAuth();
	return (
		<>
			<ChakraProvider theme={theme}>
				<RouterProvider router={route} />
			</ChakraProvider>
		</>
	);
}

export default App;
