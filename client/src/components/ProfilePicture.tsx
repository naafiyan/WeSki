import { useState, useEffect } from 'react';
import { signInWithGoogle } from "../Firebase"
import Button from "@mui/material/Button";
import {TextField } from "@mui/material";



function ProfilePicture() {


    
    const [userName, setUserName] = useState<string>("Guest");
    const [profileURL, setProfileURL] = useState<string>('../images/blankProfile.png');
    const [signedIn, setSignedIn] = useState<string>("Sign In");

    useEffect(() => {
        
    }, [profileURL]);

    useEffect(() => {
        
    }, [userName]);

    useEffect(() => {
        
    }, [signedIn]);
 
    return (
        <div className="leftSide">
        <div className="profilePhoto">
        <div className="profile" style={{display: 'flex',  justifyContent:'space-around', alignItems:'center', height: '30vh'}}>
        <br/>
        <br/> 
        <br/> 
        <img src={profileURL}
            color="#321124"
            width="150"
            height="150"/>    
        <div className = "profile-Name">
        <h1>{userName}</h1>
        </div>
        </div>
        <div className = "sign-in-button">
        <br/>
        <Button sx={{width: 475}}
            variant = "contained" color="info" size={"large"} onClick={() => signInWithGoogle(setUserName, setProfileURL, setSignedIn)}>
            {signedIn}
        </Button>
        </div>
        </div>
        </div>
    );
  }
export default ProfilePicture;

