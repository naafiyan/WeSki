import * as React from "react";
import { Component } from "react";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/material/MenuItem";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#04080F",
        },
    },
});

function Homepage() {
    return (
        <div className="container">
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <ToolBar variant="dense">
                        <IconButton edge="start" color="primary">
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            position={"absolute"}
                            width={"175px"}
                            fontStyle={"italic"}
                            fontWeight={300}
                            fontSize={60}
                            lineHeight={70}
                            color={"#5A9B85"}
                        >
                            WeSki
                        </Typography>
                    </ToolBar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}

export default Homepage;
