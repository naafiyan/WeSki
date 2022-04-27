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

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

let userID = "";
let userName = "";
let userEmailAddress = "";
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
        userVerifiedStatus = user.emailVerified;
        
    } else {
        userID = "";
        userName = "";
        userEmailAddress = "";
        userVerifiedStatus = false;
    }
});

/**
 * This method uses a google pop up to sign the user into the website
 */
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
        console.log("User " + result.user.displayName + " sign in successful")
    })
    .catch(error => {
        console.log(error)
    });
};

/**
 * This method signs out the current user
 */
export const accountSignOut = () => {
    signOut(auth).then(() => {
        console.log("Sign out successful")
    }).catch((error) => {
        console.log(error)
    });
};

/**
 * This simple method demonstrates what information we have
 * for this user, which we can put into the database.
 */
export const showAccountInformation = () => {
    if(userVerifiedStatus){
        alert(userName + " with the email address  " +  userEmailAddress + " has the unique ID: " + userID);
    } else{
        alert("You are not signed in.");
    }
    
};
