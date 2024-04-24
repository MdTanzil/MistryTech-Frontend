import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import AuthProvider from "../provider/AuthProvider";
import SearchContextProvider from "../provider/SearchContextProvider";
import Footer from "../shared/Footer/Footer";
import UpperNavbar from "../shared/UpperNavbar/UpperNavbar";
import NavBar from "./../shared/Navbar/Navbar";

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
const Main = () => {
  return (
    <div className="">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <SearchContextProvider>
            <div className="sticky top-0 z-20 ">
              <UpperNavbar></UpperNavbar>
              <NavBar></NavBar>
            </div>

            <Outlet></Outlet>
            <Footer></Footer>
          </SearchContextProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default Main;
