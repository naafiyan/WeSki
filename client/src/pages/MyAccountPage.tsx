import React, { useState, useEffect } from 'react';
import { signInWithGoogle, accountSignOut, showAccountInformation } from "../Firebase"
import Button from "@mui/material/Button";
import { Box, FormControlLabel, FormGroup, Slider, Stack, Switch, TextField } from "@mui/material";
import Header from "../components/Header";
import Form from "react-bootstrap/Form"
import MySlider from "../components/Slider"
import Input from "@mui/material/Input"
import {Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import StyledSlider from "../components/Slider";
/**
 * This sets up some basic functionality around handling accounts. 
 * Specifically signing in, out, and viewing profile information.
 * @returns The React element for profile handling.
 */
export function MyAccountPage() {

  return (
    <div className="MyAccountPage">

        <button onClick={signInWithGoogle}>Sign In With Google Account</button>
        <button onClick={showAccountInformation}>What is the Specific Account ID</button>
        <button onClick={accountSignOut}>LogOut</button>
    </div>
  );
}

export default MyAccountPage;
