package com.brown.main.database;

import com.google.firebase.auth.FirebaseAuthException;

import org.junit.Before;
import org.junit.Test;

public class FirebaseHelperTest {

    // before running tests init firebase
    @Before
    public void initFirebase() {
        FirebaseHelper.initFirebase();
    }

    @Test
    public void testValidateToken() {
        // check if FirebaseHelper throws exception on invalid token
        try {
            FirebaseHelper.validateToken("invalidToken");
        } catch (FirebaseAuthException e) {
            return;
        }
    }
}
