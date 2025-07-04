import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import GlobalState from "./context/index.jsx";
import ColorModeScript from "./ColorModeScript";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorModeScript />
    <GlobalState>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </GlobalState>
  </React.StrictMode>
);

reportWebVitals();