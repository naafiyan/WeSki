import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MountainPage from "./pages/MountainPage";
import Homepage from "./pages/Homepage";
import TestPage from "./pages/Test";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Account from "./pages/Account"



function App() {
    return (
        // <ThemeProvider theme={theme}>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/trips" element={<MountainPage />} />
                <Route path="/account" element={<Account/>} />
            </Routes>
        </Router>
        // </ThemeProvider>

    );
}

export default App;
