import { useState, useEffect } from 'react';
import { auth, getUser, signInWithGoogle } from '../auth/firebase';
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { User } from 'firebase/auth';

function ProfilePicture() {
    const [user, setUser] = useState<User | null>();
    const [profileUrl, setProfileUrl] = useState<string | undefined>();

    useEffect(() => {
        setUser(getUser());
    }, [])

    useEffect(() => {
        if (user?.photoURL) {
            setProfileUrl(user.photoURL);
        } else {
            setProfileUrl(undefined);
        }
    }, [user]);

    const page = (
        <div className="leftSide">
            <div className="profilePhoto">
                <div className="profile" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '30vh' }}>
                    <br />
                    <br />
                    <br />
                    <img src={profileUrl}
                        color="#321124"
                        width="150"
                        height="150" />
                    <div className="profile-Name">
                        <h1>{user?.displayName}</h1>
                    </div>
                </div>
                {/* <div className="sign-in-button">
                    <br />
                    <Button sx={{ width: 475 }}
                        variant="contained" color="info" size={"large"} onClick={signInWithGoogle}>
                        {signedIn}
                    </Button>
                </div> */}
            </div>
        </div>
    )


    return (
        <>
            {user && page}
        </>
    );
}
export default ProfilePicture;

