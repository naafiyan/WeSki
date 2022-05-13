import { initializeApp } from 'firebase/app';
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User, IdTokenResult } from 'firebase/auth'

export type UserDoc = {
    displayName: string;
    photoUrl: string;
    uid: string;
}

/**
 * This sets up the firebase connection to allow authorization of users.
 */
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "weski-d72a8",
    storageBucket: "weski-d72a8.appspot.com",
    messagingSenderId: "353135543479",
    appId: "1:353135543479:web:be6cdb47da331bec3b7932"
};

//This initializes Firebase
export const app = initializeApp(firebaseConfig);

const blankProfile = require('../images/blankProfile.jpg');

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

let userID = "";
let userName: string = "Guest";
let userEmailAddress = "";
let userProfilePic = blankProfile;
let userVerifiedStatus = false;

let user: User | null = null;


// check if user is auth or not
if (auth.currentUser) user = auth.currentUser;

/**
 * This method creates variables and sets them
 * correctly when the user changes. 
 */
auth.onAuthStateChanged(user => {
    console.log("User is logged in: " + user);
    if (user) {
        user = user;
        userID = user.uid;
        if (user.displayName) userName = user.displayName;
        if (user.email) userEmailAddress = user.email;
        userProfilePic = user.photoURL;
        userVerifiedStatus = user.emailVerified;
        localStorage.setItem("userName", userName);
        localStorage.setItem("userProfilePic", userProfilePic);
    } else {
        userID = "";
        userName = "Guest";
        userEmailAddress = "";
        userProfilePic = blankProfile;
        userVerifiedStatus = false;
        localStorage.setItem("userName", userName);
        localStorage.setItem("userProfilePic", userProfilePic);
    }
});

/**
 * This method uses a google pop up to sign the user into the website
 */
export const signInWithGoogle = () => {
    if (user) {
        signOut(auth).then(() => {
            // setUsername("Guest")
            // setProfilePicture(blankProfile)
            // setSignedIn("Sign In")
        }).catch((error) => {
            console.log(error)
        });
    } else {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("User " + auth.currentUser?.toJSON());
                user = result.user;
            })
            .catch(error => {
                console.log(error)
            });
    }
};

/**
 * This method signs the user out of the website.
 */
export const signOutWithGoogle = () => {
    signOut(auth).then(() => {
        console.log("User signed out");
    }).catch((error) => {
        console.log(error)
    });
}
