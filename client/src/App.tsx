import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
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

    const fetchHandler = async () => {
        const res = await fetch("http://localhost:4567/areas");
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
                <Route path="/test" element={<TestPage />} />
            </Routes>
        </Router>
    );
}

export default App;
