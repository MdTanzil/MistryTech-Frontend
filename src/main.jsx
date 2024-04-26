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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </React.StrictMode>
  </React.StrictMode>
);
