import Button from "@mui/material/Button";
import { Box, FormControlLabel, FormGroup, Slider, Stack, Switch, TextField } from "@mui/material";
import Header from "../components/Header";
import Form from "react-bootstrap/Form"
import MySlider from "../components/Slider"
import Input from "@mui/material/Input"
import {Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import StyledSlider from "../components/Slider";

function MountainPage() {
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
            <div className = "flex-child-left">

                <br/>
            <FormGroup >
                <FormControlLabel control={<Switch defaultChecked />} label="Use suggestions?" labelPlacement="start"/>
            </FormGroup>
                <br/>
                <TextField
                    name="name"
                    label="Name"
                    InputLabelProps={{ shrink: true, required: true, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:'Roboto', fontSize:'18px'} }}
                    type="text"
                    placeholder="Enter name"
                    InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
                />
                <br/>
                <TextField
                    name="email"
                    label="Email"
                    InputLabelProps={{ shrink: true, required: true, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:'Roboto', fontSize:'18px'} }}
                    type="name@example.com"
                    InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
                />
                <br/>
                <TextField
                    name="location"
                    label="Location"
                    InputLabelProps={{ shrink: true, required: true, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:'Roboto', fontSize:'18px'} }}
                    type="Providence, RI"
                    InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
                />
                <br/>
                <TextField
                    name="startDate"
                    label="Start Date"
                    InputLabelProps={{ shrink: true, required: true, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:"Roboto", fontSize:'18px'} }}
                    type="date"
                    InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
                />
                <br/>
                <TextField
                    name="endDate"
                    label="End Date"
                    InputLabelProps={{ shrink: true, required: true, style: { fontWeight: 700, color:'#1E1E1E', fontFamily:'Roboto', fontSize:'18px'} }}
                    type="date"
                    InputProps={{ style: {border: "1px solid #C2C2C2", padding: 6, width:480, height:51} }}
                />
            </div>
            <br/>
            <div className = "flex-child-right" >
                <br/>
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
            </div>
            </div>
            <br/>
            <div className = "button">
            <Button variant = "contained" color="secondary" size={"large"}>
                Find a mountain
            </Button>
            </div>
        </>
    );
}

export default MountainPage;
