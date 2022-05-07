import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MountainPage from "./pages/MountainPage";
import Homepage from "./pages/Homepage";
import TestPage from "./pages/Test";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import MyAccountPage from "./pages/MyAccountPage"



function App() {

    const fetchHandler = async () => {
        const res = await fetch("http://localhost:4567/users/6261da18466b956a5e436c27");
        const resJson = await res.json();
        console.log(resJson);
    }

    useEffect(() => {
        fetchHandler();
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/trips" element={<MountainPage />} />
                <Route path="/MyAccountPage" element={<MyAccountPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
