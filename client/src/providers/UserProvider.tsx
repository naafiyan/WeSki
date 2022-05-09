import { User } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";



export const UserContext = createContext<User | null>(null);

function UserProvider(props: { children: React.ReactNode }) {

    const [user, setUser] = useState<User | null>(null);

    const handleMount = () => {
        auth.onAuthStateChanged(async (userFb) => {
            // make req to backend to get user prefs if user exists
            if (userFb) {
                const token = await userFb.getIdToken();
                // make backend call to first check if user exists -> if it does -> get user prefs else add user to db and assign default prefs
                const res = await fetch("http://localhost:4567/user/" + userFb.uid);
                const resJson = await res.json();
                if (!resJson.success) {
                    const res = await fetch("http://localhost:4567/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + token,
                        },
                        body: JSON.stringify({
                            uid: userFb.uid,
                            username: userFb.displayName,
                            email: userFb.email,
                        })
                    });
                }
            }
            setUser(userFb);

        });
    }

    useEffect(() => {
        handleMount();
    }, []);

    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;