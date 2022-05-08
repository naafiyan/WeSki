import { User } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";



export const UserContext = createContext<User | null>(null);

function UserProvider(props: { children: React.ReactNode }) {

    const [user, setUser] = useState<User | null>(null);

    const handleMount = () => {
        auth.onAuthStateChanged(async (user) => {
            // make req to backend to get user prefs if user exists
            if (user) {
                const token = await user.getIdToken();
                console.log(token);
                // make backend call to first check if user exists -> if it does -> get user prefs else add user to db and assign default prefs
                const res = await fetch("http://localhost:4567/users/" + user.uid);
                const resJson = await res.json();
                if (resJson.success) setUser(user);
                else {
                    const res = await fetch("http://localhost:4567/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + token,
                        },
                        body: JSON.stringify({
                            uid: user.uid,
                            username: user.displayName,
                            email: user.email,
                        })
                    });
                }
                console.log(resJson);
            }
            setUser(user);
        });
    }

    useEffect(() => {
        handleMount();
    }, []);

    useEffect(() => {
        console.log("User", user);
    }, [user]);

    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;