import React, { useState, useEffect } from 'react';
import {signInWithGoogle} from "../Firebase"
import Button from "@mui/material/Button";
import {Autocomplete, TextField } from "@mui/material";
import Header from "../components/Header";
import Form from "react-bootstrap/Form"
import MySlider from "../components/Slider"
import Input from "@mui/material/Input"
import {Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import StyledSlider from "../components/Slider";
import ProfilePicture from '../components/ProfilePicture';
import FavoriteMountain from '../components/FavoriteMountain';



/**
 * This sets up some basic functionality around handling accounts. 
 * Specifically signing in, out, and viewing profile information.
 * @returns The React element for profile handling.
 */
export function MyAccountPage() {
    const priceMarks = [
        {
            value: 0,
            label: '$0',
        },
        {
            value: 25,
            label: '$75',
        },
        {
            value: 50,
            label: '$150',
        },
        {
            value: 75,
            label: '$225',
        },
        {
            value: 100,
            label: '$300',
        },
    ];
    const distanceMarks = [
        {
            value: 0,
            label: '0 miles',
        },
        {
            value: 20,
            label: '100 miles',
        },
        {
            value: 40,
            label: '200 miles',
        },
        {
            value: 60,
            label: '300 miles',
        },
        {
            value: 80,
            label: '400 miles',
        },
        {
            value: 100,
            label: '500 miles',
        },
    ];
    const interestMarks = [
        {
            value: 0,
            label: 'Irrelevant',
        },
        {
            value: 25,
            label: 'Meh',
        },
        {
            value: 50,
            label: 'Neutral',
        },
        {
            value: 75,
            label: 'Kinda',
        },
        {
            value: 100,
            label: 'Super',
        },
    ];
    const difficultyMarks = [
        {
            value: 0,
            label: '0°C',
        },
        {
            value: 20,
            label: '20°C',
        },
        {
            value: 37,
            label: '37°C',
        },
        {
            value: 100,
            label: '100°C',
        },
    ];

    const terrainMarks = [
        {
            value: 0,
            label: '0°C',
        },
        {
            value: 20,
            label: '20°C',
        },
        {
            value: 37,
            label: '37°C',
        },
        {
            value: 100,
            label: '100°C',
        },
    ];
  return (
    <>
        {/* Center the content */}
        <div className = "flex-container">
        <div className = "left-side" style={{display: 'flex',  justifyContent:'center', flexDirection: 'column', alignItems:'center', height: '80vh'}}>
        <ProfilePicture></ProfilePicture>
        <div className = "CurrentLocationTextBox">  
        <br/>
        <TextField
            name="location"
            label="Current Location"
            InputLabelProps={{ shrink: true, required: false, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:'Roboto', fontSize:'18px'} }}
            type="Providence, RI"
            InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
            />
        </div>
        <div className = "FavoriteMountainTextBox">  
        <br/> 
        <FavoriteMountain></FavoriteMountain>
        </div>
        </div>
        <br/>
        <br/>
        <div className = "flex-child-right" >
            <br/>
            <h1>What Is Important To You?</h1>
            <br/>
        Preferred Lift Ticket Price
            <br/>
        <StyledSlider marks={priceMarks}/>
            <br/>
        Distance from Your Location
            <br/>
        <StyledSlider marks={distanceMarks}/>
            <br/>
        Weather Conditions
            <br/>
        <StyledSlider marks={interestMarks}/>
            <br/>
        Terrain Difficuly Level
            <br/>
        <StyledSlider marks={difficultyMarks}/>
            <br/>
        Number of Trails Open
            <br/>
        <StyledSlider marks={interestMarks}/>
            <br/>
            <br/>
        <Button variant = "contained" color="primary" size={"large"}>
            Save Preferences
        </Button>
        </div>
        </div>
        
    </>

    
);
};

export default MyAccountPage;

