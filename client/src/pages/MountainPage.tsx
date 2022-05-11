import Button from "@mui/material/Button";
import { Box, FormControlLabel, FormGroup, Switch, TextField, ThemeProvider, Typography } from "@mui/material";
import StyledSlider from "../components/Slider";
import { createTheme } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import IconButton from '@mui/material/IconButton'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../auth/firebase";
import LocationSelector from "../components/LocationSelector";
import Reccomendation from "../components/Reccomendation";

function MountainPage() {
    const navigate = useNavigate();

    const user = useContext(UserContext);


    type recommendation = {
        name: string
    }

    // state variables
    const [ticketPref, setTicketPref] = useState<number>(0);
    const [locPref, setLocPref] = useState<number>(0);
    const [weatherPref, setWeatherPref] = useState<number>(0);
    const [trailsPref, setTrailsPref] = useState<number>(0);
    const [difficultyPref, setDifficultyPref] = useState<number>(0);
    const [zipcode, setZipcode] = useState<string>("");
    const [recommendationShowing, setRecommendationShowing] = useState<boolean>(false);
    const [currentRecommendation, setCurrentRecommendation] = useState<recommendation>({ name: "" });

    const handleFetchPrefs = async () => {
        auth.onAuthStateChanged(async (userFb) => {
            if (userFb) {
                const token = await userFb.getIdToken();
                const res = await fetch("http://localhost:4567/user/" + userFb.uid + "/prefs", {
                    headers: {
                        "Authorization": "Bearer " + token,
                    }
                });
                const resJson = await res.json();
                setTicketPref(parseFloat(resJson.ticketPref));
                setLocPref(parseFloat(resJson.locPref));
                setWeatherPref(parseFloat(resJson.weatherPref));
                setTrailsPref(parseFloat(resJson.trailsPref));
                setDifficultyPref(parseFloat(resJson.difficultyPref));
                if (!resJson.zipcode) {
                    setZipcode("02912");
                } else {
                    setZipcode(resJson.zipcode);
                }
            }
        });
    }

    useEffect(() => {
        handleFetchPrefs();
    }, []);


    async function useFetchRecommend() {
        if (!user) {
            console.log("ERROR: User is not logged in!");
            return;
        }
        const jsonBody = JSON.stringify({
            ticketPref: String(ticketPref),
            locPref: String(locPref),
            weatherPref: String(weatherPref),
            trailsPref: String(trailsPref),
            difficultyPref: String(difficultyPref),
            zipcode: String(zipcode),
        });

        console.log(jsonBody);
        const token = await user?.getIdToken();
        const res = await fetch("http://localhost:4567/recommend", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: jsonBody
        })
        const resJson = await res.json();
        console.log(resJson);
        // if (resJson.success) {
        setCurrentRecommendation({ name: resJson[0].name });
        setRecommendationShowing(true);
        // }
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
            <div className="flex-container">
                <FormGroup >
                    <br />
                    <Typography style={{
                        color: '#1E1E1E',
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
                            style={{ width: 480 }}
                            value={user?.displayName}
                        />
                        <br />
                        <TextField
                            label="Email"
                            placeholder="name@example.com"
                            style={{ width: 480 }}
                            value={user?.email}
                        />
                        <br />
                        <LocationSelector setLocation={setZipcode}></LocationSelector>
                        <Box >
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <br />
                                <DesktopDatePicker
                                    label="Start Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={startValue}
                                    onChange={handleStartChange}
                                    renderInput={(params) => <TextField {...params} sx={{ width: 230 }} />}
                                />
                                <DesktopDatePicker
                                    label="End Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={endValue}
                                    onChange={handleEndChange}
                                    renderInput={(params) => <TextField {...params} sx={{ width: 230 }} />}
                                />
                            </LocalizationProvider>
                        </Box>
                        <br />
                        <Typography style={{
                            color: '#1E1E1E',
                            fontSize: "16px",
                            fontFamily: "Roboto"
                        }}>
                            What type of trails are you looking for?
                        </Typography>
                        <StyledSlider marks={difficultyMarks} val={difficultyPref} setVal={setDifficultyPref} />
                        <br />
                    </ThemeProvider>

                </FormGroup>
                <br />
                <div className="flex-child-right" >
                    <br />
                    <Typography style={{
                        color: '#1E1E1E',
                        fontSize: "32px",
                        fontWeight: "medium",
                        fontStyle: "italic",
                        fontFamily: "Roboto"
                    }}>
                        What is most important to you?
                    </Typography>

                    <br />
                    <Typography style={{
                        color: '#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Cheap Lift Tickets
                    </Typography>
                    <StyledSlider marks={interestMarks} val={ticketPref} setVal={setTicketPref} />
                    <br />
                    <Typography style={{
                        color: '#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Distance from your Location
                    </Typography>
                    <StyledSlider marks={interestMarks} val={locPref} setVal={setLocPref} />
                    <br />
                    <Typography style={{
                        color: '#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Weather Conditions
                    </Typography>
                    <StyledSlider marks={interestMarks} val={weatherPref} setVal={setWeatherPref} />
                    <br />
                    <Typography style={{
                        color: '#1E1E1E',
                        fontSize: "16px",
                        fontFamily: "Roboto"
                    }}>
                        Number of Trails Open
                    </Typography>
                    <StyledSlider marks={interestMarks} val={trailsPref} setVal={setTrailsPref} />
                    <br />
                    <br />
                </div>
            </div>
            <br />

            <div className="button">
                <Button variant="contained" size={"large"} style={{
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
                <Reccomendation setShowing={setRecommendationShowing} currentlyShowing={recommendationShowing} rec={currentRecommendation}></Reccomendation>
            </div>
        </>
    );
}


export default MountainPage;
