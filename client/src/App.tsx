import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MountainPage from "./pages/MountainPage";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/Test";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";

const theme = createTheme({
    palette: {
        primary: {
            main: "#04080F",
        },
    },
});

function App() {
    return (
        // <ThemeProvider theme={theme}>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/trips" element={<MountainPage />} />
            </Routes>
        </Router>
        // </ThemeProvider>

    );
}

export default App;
