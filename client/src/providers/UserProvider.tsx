import { User } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";



export const UserContext = createContext<User | null>(null);

function UserProvider(props: { children: React.ReactNode }) {

    const [user, setUser] = useState<User | null>(null);

    const handleMount = () => {
        auth.onAuthStateChanged(user => {
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