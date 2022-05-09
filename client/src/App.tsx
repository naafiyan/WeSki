import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MountainPage from "./pages/MountainPage";
import Homepage from "./pages/Homepage";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Account from "./pages/Account";
import Recommendation from "./pages/Recommendation";
import MyAccountPage from "./pages/MyAccountPage"
import CompareVenue from "./pages/CompareVenue";
import UserProvider from "./providers/UserProvider";


function App() {
    return (
        <UserProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/trips" element={<MountainPage />} />
                    <Route path="/recommendation" element={<Recommendation />} />
                    <Route path="/MyAccountPage" element={<MyAccountPage />} />
                    <Route path="/venues" element={<CompareVenue/>}/>
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
