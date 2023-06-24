import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// import loggedRoute from "./route.logged";
import route from "./route.all";
import theme from "./styles/chakraUI.theme/theme.fonts";

import "./App.css";
// import route from "./routes";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<RouterProvider router={route} />
					<ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} autoClose={5000} clickToClose={true} />
				</ChakraProvider>
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			</QueryClientProvider>
		</>
	);
}

export default App;
