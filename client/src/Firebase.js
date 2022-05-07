import { initializeApp } from "firebase/app";
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'

/**
 * This sets up the firebase connection to allow authorization of users.
 */
const firebaseConfig = {
  apiKey: "AIzaSyDL9JfTKHNORq_4VKblbWjALh2Ir51gicU",
  authDomain: "weski-d72a8.firebaseapp.com",
  projectId: "weski-d72a8",
  storageBucket: "weski-d72a8.appspot.com",
  messagingSenderId: "353135543479",
  appId: "1:353135543479:web:be6cdb47da331bec3b7932"
};

//This initializes Firebase
const app = initializeApp(firebaseConfig);

const blankProfile = require('./images/blankProfile.jpg');

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

let userID = "";
let userName = "Guest";
let userEmailAddress = "";
let userProfilePic = blankProfile;
let userVerifiedStatus = false;


/**
 * This method creates variables and sets them
 * correctly when the user changes. 
 */
auth.onAuthStateChanged(user => {
    if (user) {
        userID = user.uid;
        userName = user.displayName;
        userEmailAddress = user.email;
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
export const signInWithGoogle = (setUsername, setProfilePicture, setSignedIn) => {
    if(userVerifiedStatus){
        signOut(auth).then(() => {
            setUsername("Guest")
            setProfilePicture(blankProfile)
            setSignedIn("Sign In")
        }).catch((error) => {
            console.log(error)
    });
    } else{
        signInWithPopup(auth, provider)
        .then((result) => {
            setUsername(result.user.displayName)
            setProfilePicture(result.user.photoURL)
            setSignedIn("Sign Out")
        console.log("User " + result.user.displayName + " sign in successful")
    })
    .catch(error => {
        console.log(error)
    });
    }
    
};
