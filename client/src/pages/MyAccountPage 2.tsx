import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import StyledSlider from "../components/Slider";
import ProfilePicture from '../components/ProfilePicture';
import FavoriteMountain from '../components/FavoriteMountain';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../auth/firebase";



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

    const [prefs, setPrefs] = useState<Map<string, number>>(new Map());

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
                // go through prefs and set name and value pairs
                const prefsMap = new Map();
                for (const pref of resJson.prefs) {
                    prefsMap.set(pref.name, pref.value);
                }
                console.log(prefsMap);
                setPrefs(prefsMap);
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
                            name="location"
                            label="Current Location"
                            InputLabelProps={{ shrink: true, required: false, style: { fontWeight: 700, color: '#1E1E1E', fontFamily: 'Roboto', fontSize: '18px' } }}
                            type="Providence, RI"
                            InputProps={{ style: { border: "1px solid #C2C2C2", padding: 6, width: 480, height: 51 } }}
                        />
                    </div>
                    <div className="FavoriteMountainTextBox">
                        <br />
                        <FavoriteMountain></FavoriteMountain>
                    </div>
                </div>
                <br />
                <br />
                <div className = "flex-child-right" >
                    <br/>
                    <Typography style={{
                        color:'#1E1E1E',
                        fontSize: "32px",
                        fontWeight: "medium",
                        fontStyle: "italic",
                        fontFamily: "Roboto"
                    }}>
                        Your Preferences
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
                    <br />
                    <Button variant = "contained" size={"medium"} style={{
                        borderRadius: 20,
                        backgroundColor: "#5A9B85",
                        padding: "14px 30px",
                        fontSize: "18px",
                        fontFamily: "Roboto"
                    }} >
                        Save Preferences
                    </Button>
                </div>
            </div>

        </>


    );
};

export default MyAccountPage;

