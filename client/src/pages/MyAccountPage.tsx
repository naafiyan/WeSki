import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import StyledSlider from "../components/Slider";
import ProfilePicture from '../components/ProfilePicture';
import FavoriteMountain from '../components/FavoriteMountain';
<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../auth/firebase";
=======
import LocationSelector from '../components/LocationSelector';
>>>>>>> Zsickles-Week3



/**
 * This sets up some basic functionality around handling accounts. 
 * Specifically signing in, out, and viewing profile information.
 * @returns The React element for profile handling.
 */
export function MyAccountPage() {
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
    const user = useContext(UserContext);

<<<<<<< HEAD
    const [ticketPref, setTicketPref] = useState<number>(0);
    const [locPref, setLocPref] = useState<number>(0);
    const [weatherPref, setWeatherPref] = useState<number>(0);
    const [trailsPref, setTrailsPref] = useState<number>(0);
    const [difficultyPref, setDifficultyPref] = useState<number>(0);
    const [zipcode, setZipcode] = useState<string>("");

    const handleUpdatePrefs = async () => {
        const token = await user?.getIdToken();
        const res = await fetch("http://localhost:4567/user/" + user?.uid + "/prefs", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify({
                ticketPref: ticketPref,
                locPref: locPref,
                weatherPref: weatherPref,
                trailsPref: trailsPref,
                difficultyPref: difficultyPref,
                zipcode: zipcode,
            }),
        });
        const resJson = await res.json();
        console.log(resJson);
    }

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
                setZipcode(resJson.zipcode);
                console.log(resJson);
                // go through prefs and set name and value pairs
                // const prefsMap = new Map();
                // for (const pref of resJson.prefs) {
                //     prefsMap.set(pref.name, pref.value);
                // }
                // console.log(prefsMap);
                // setPrefs(prefsMap);
            }
        });
    }


    useEffect(() => {
        console.log("hello");
        handleFetchPrefs();
    }, []);



    return (
        <>
            {/* Center the content */}
            <div className="flex-container">
                <div className="left-side" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '80vh' }}>
                    <ProfilePicture></ProfilePicture>
                    <div className="CurrentLocationTextBox">
                        <br />
                        <TextField
                            label="Current Location"
                            placeholder="Providence, RI"
                            style = {{width: 480}}
                        />
                    </div>
                    <div className="FavoriteMountainTextBox">
                        <br />
                        <FavoriteMountain></FavoriteMountain>
                    </div>
                </div>
                <br />
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
                        Your Preferences
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
                    <Button variant="contained" size={"medium"} style={{
                        borderRadius: 20,
                        backgroundColor: "#5A9B85",
                        padding: "14px 30px",
                        fontSize: "18px",
                        fontFamily: "Roboto"
                    }} onClick={handleUpdatePrefs}>
                        Save Preferences
                    </Button>
                </div>
            </div>

        </>


    );
=======
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
        <div className = "User">  
        <br/>
        <h2>Current User Information:</h2>
        </div>
        <div className = "LeftSideTextBoxes">  
        <br/>
        <LocationSelector></LocationSelector>
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
>>>>>>> Zsickles-Week3
};

export default MyAccountPage;

