import React, { useState, useEffect } from 'react';
import { signInWithGoogle, accountSignOut, showAccountInformation } from "../Firebase"
/**
 * This sets up some basic functionality around handling accounts. 
 * Specifically signing in, out, and viewing profile information.
 * @returns The React element for profile handling.
 */
export function Account() {

  return (
    <div className="Account">
        <button onClick={signInWithGoogle}>Sign In With Google Account</button>
        <button onClick={showAccountInformation}>What is the Specific Account ID</button>
        <button onClick={accountSignOut}>LogOut</button>
    </div>
  );
}

export default Account;
