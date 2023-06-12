import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.jsx";

import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <QueryClientProvider client={queryClient}> */}
		<Provider store={store}>
			<App />
		</Provider>
		{/* </QueryClientProvider> */}
	</React.StrictMode>,
);
