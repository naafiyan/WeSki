import Button from "@mui/material/Button";
import {Box, FormControlLabel, FormGroup, Switch, TextField, ThemeProvider, Typography } from "@mui/material";
import StyledSlider from "../components/Slider";
import {createTheme } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import IconButton from '@mui/material/IconButton'
import {Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

function MountainPage() {
    const navigate = useNavigate();
    async function useFetchRecommend() {
        const res = await fetch("http://localhost:4567/recommend", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                zipcode : 'string',
                experience : 'number',
                priceImportance :  'number',
                locationImportance : 'number',
                weatherImportance : 'number',
                openTrailsImportance : 'number',
            })
        })
        const resJson = await res.json();
        console.log(resJson);
        if (resJson.success) {
            // navigate('../recommend', { replace: true });
        }


    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#5A9B85'
            },
            secondary: {
                main: '#FFFFFF'
            }
        }
    });

    const [startValue, setStartValue] = React.useState<Date | null>(
        new Date('2022-05-04T21:11:54'),
    );

    const [endValue, setEndValue] = React.useState<Date | null>(
        new Date('2022-05-04T21:11:54'),
    );

    const handleStartChange = (newValue: Date | null) => {
        setStartValue(newValue);
    };

    const handleEndChange = (newValue: Date | null) => {
        setEndValue(newValue);
    };

    const interestMarks = [
        {
            value: 0,
            label: 'Irrelevant to me',
        },
        {
            value: 50,
            label: 'Meh',
        },
        {
            value: 100,
            label: 'Super important',
        },
    ];
    const difficultyMarks = [
        {
            value: 0,
            label: 'Green',
        },
        {
            value: 33,
            label: 'Blue',
        },
        {
            value: 66,
            label: 'Black',
        },
        {
            value: 100,
            label: 'Double Black',
        }
    ];

    return (
        <>
            <div className = "flex-container">
                    <FormGroup >
                        <br/>
                        <Typography style={{
                            color:'#1E1E1E',
                            fontSize: "32px",
                            fontWeight: "medium",
                            fontStyle: "italic",
                            fontFamily: "Roboto"
                        }}>
                            Personal Information
                        </Typography>
                        <ThemeProvider theme={theme}>
                            <TextField
                                label="Name"
                                placeholder="Enter Name"
                                style = {{width: 480}}
                            />
                            <br/>
                            <TextField
                                label="Email"
                                placeholder="name@example.com"
                                style = {{width: 480}}
                            />
                            <br/>
                            <TextField
                                label="Location"
                                placeholder="02912"
                                style = {{width: 480}}
                            />
                            <Box >
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <br/>
                                    <DesktopDatePicker
                                        label="Start Date"
                                        inputFormat="MM/dd/yyyy"
                                        value={startValue}
                                        onChange={handleStartChange}
                                        renderInput={(params) => <TextField {...params} sx={{width: 230}}/>}
                                    />
                                    <DesktopDatePicker
                                        label="End Date"
                                        inputFormat="MM/dd/yyyy"
                                        value={endValue}
                                        onChange={handleEndChange}
                                        renderInput={(params) => <TextField {...params} sx={{width: 230}}/>}
                                    />
                                </LocalizationProvider>
                            </Box>
                            <br/>
                            <Typography style={{
                                color:'#1E1E1E',
                                fontSize: "16px",
                                fontFamily: "Roboto"
                            }}>
                                What type of trails are you looking for?
                            </Typography>
                            <StyledSlider marks={difficultyMarks}/>
                            <br/>
                        </ThemeProvider>

                    </FormGroup>
                <br/>
                <div className = "flex-child-right" >
                    <br/>
                    <Typography style={{
                        color:'#1E1E1E',
                        fontSize: "32px",
                        fontWeight: "medium",
                        fontStyle: "italic",
                        fontFamily: "Roboto"
                    }}>
                        What is most important to you?
                    </Typography>

                    <br/>
                    <Typography style={{
                        color:'#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Cheap Lift Tickets
                    </Typography>
                    <StyledSlider marks={interestMarks}/>
                    <br/>
                    <Typography style={{
                        color:'#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Distance from your Location
                    </Typography>
                    <StyledSlider marks={interestMarks}/>
                    <br/>
                    <Typography style={{
                        color:'#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Weather Conditions
                    </Typography>
                    <StyledSlider marks={interestMarks}/>
                    <br/>
                    <Typography style={{
                        color:'#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Number of Trails Open
                    </Typography>
                    <StyledSlider marks={interestMarks}/>
                    <br/>
                </div>
            </div>
            <br/>

            <div className = "button">
                <Button variant = "contained" size={"large"} style={{
                    borderRadius: 20,
                    backgroundColor: "#5A9B85",
                    padding: "18px 36px",
                    fontSize: "18px",
                    fontFamily: "Roboto"
                }} onClick={
                    useFetchRecommend
                }>
                    Find a mountain
                </Button>
            </div>
        </>
    );
}


export default MountainPage;
