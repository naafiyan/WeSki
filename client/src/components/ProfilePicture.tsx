import { useState, useEffect, useContext } from 'react';
import { signOutWithGoogle } from '../auth/firebase';
import Button from "@mui/material/Button";
import { UserContext } from '../providers/UserProvider';
import { Link } from 'react-router-dom';

function ProfilePicture() {
    let user = useContext(UserContext);

    const [loading, setLoading] = useState<boolean>(true);
    const [photoUrl, setPhotoUrl] = useState<string>("../images/blankProfile.jpg");
    const [username, setUsername] = useState<string>("Not logged in");

    useEffect(() => {
        if (user) {
            setLoading(false);
            if (user.photoURL) setPhotoUrl(user.photoURL);
            if (user.displayName) setUsername(user.displayName);
        }
    }, [user]);

    const page = (
        <>
            {!loading && user ? (<div className="leftSide">
                <div className="profilePhoto">
                    <div className="profile" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '30vh' }}>
                        <br />
                        <br />
                        <br />
                        <img src={photoUrl}
                            color="#321124"
                            width="150"
                            height="150" />
                        <div className="profile-Name">
                            <h1>{username}</h1>
                        </div>
                    </div>
                    <div className="sign-in-button">
                        <br />
                        <Link to={"/"}>
                            <Button sx={{ width: 475 }}
                                variant="contained" size={"medium"} onClick={signOutWithGoogle}
                                style={{
                                    borderRadius: 20,
                                    backgroundColor: "#5A9B85",
                                    padding: "14px 30px",
                                    fontSize: "18px",
                                    fontFamily: "Roboto"
                                }}>
                                Sign Out
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>) : <div>Please Sign in!</div>}
        </>
    )


    return (
        <>
            {user && page}
        </>
    );
}
export default ProfilePicture;

