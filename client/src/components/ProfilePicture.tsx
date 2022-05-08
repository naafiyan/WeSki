import { useState, useEffect, useContext } from 'react';
import { auth, getUser, signInWithGoogle } from '../auth/firebase';
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { User } from 'firebase/auth';
import { UserContext } from '../providers/UserProvider';

function ProfilePicture() {
    const user = useContext(UserContext);

    const [loading, setLoading] = useState<boolean>(true);
    const [photoUrl, setPhotoUrl] = useState<string>("../images/blankProfile.jpg");
    const [username, setUsername] = useState<string>("Not logged in");

    useEffect(() => {
        if (user) {
            setLoading(false);
            if (user.photoURL) setPhotoUrl(user.photoURL);
            if (user.displayName) setUsername(user.displayName);
        }
    }, [user])

    const page = (
        <>
            {!loading && <div className="leftSide">
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
                </div>
            </div>}
        </>
    )


    return (
        <>
            {user && page}
        </>
    );
}
export default ProfilePicture;

