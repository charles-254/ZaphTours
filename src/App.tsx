import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Theme } from "./components/Theme";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import ContactUs from "./pages/ContactUs";
import TripTypes from "./pages/TripTypes";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/trip-types" element={<TripTypes />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
