import { getAuth } from "firebase/auth";
import { app } from "./Firebase";

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