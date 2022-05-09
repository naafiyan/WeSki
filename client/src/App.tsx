import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MountainPage from "./pages/MountainPage";
import Homepage from "./pages/Homepage";
import TestPage from "./pages/Test";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import MyAccountPage from "./pages/MyAccountPage"
import UserProvider from "./providers/UserProvider";



function App() {

    return (
        <UserProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/trips" element={<MountainPage />} />
                    <Route path="/MyAccountPage" element={<MyAccountPage />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
