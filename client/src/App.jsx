import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, RouterProvider } from "react-router-dom";

// import loggedRoute from "./route.logged";
import route from "./route.all";
// import route from "./routes";
import theme from "./styles/chakraUI.theme/theme.fonts";

import "./App.css";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<RouterProvider router={route} />
				</ChakraProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
