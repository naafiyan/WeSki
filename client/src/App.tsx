import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MountainPage from "./pages/MountainPage";
import Homepage from "./pages/Homepage";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import MyAccountPage from "./pages/MyAccountPage"
import CompareVenue from "./pages/CompareVenue";



function App() {
    return (
        // <ThemeProvider theme={theme}>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/trips" element={<MountainPage/>}/>
                <Route path="/MyAccountPage" element={<MyAccountPage/>}/>
                <Route path="/venues" element={<CompareVenue/>}/>
            </Routes>
        </Router>
        // </ThemeProvider>

    );
}

export default App;
