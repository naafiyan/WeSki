import { getAuth } from "firebase/auth";
import { app } from "./firebase";

const checkIfUserIsLoggedIn = () => {
    return new Promise((resolve, reject) => {
        getAuth(app).onAuthStateChanged(user => {
            if (user) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        })
    })
}