import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routes";
const theme = createTheme({
  palette: {
    primary: {
      main: "#e2492c",
    },
    secondary: {
      main: "#d78e31",
    },
  },
  fonts: {
    body: "Barlow, sans-serif",
    heading: '"Barlow", sans-serif',
    monospace: "Barlow, sans-serif",
  },
  typography: {
    fontFamily: [
      "Barlow", // Use "Barlow" as the primary font
    ].join(","),
  },
});

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
          <Toaster />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </React.StrictMode>
  </React.StrictMode>
);
