package com.brown.main.database;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;

public class FirebaseHelper {
    
    public static void initFirebase() {
        FileInputStream serviceAccount;
        try {
            serviceAccount = new FileInputStream("secrets/ski-trip-planner-84981-firebase-adminsdk-gyigm-702f49d20c.json");
       
        } catch (FileNotFoundException e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
            return;
        }
        FirebaseOptions options;
        try {
            options = new FirebaseOptions.Builder()
            .setCredentials(GoogleCredentials.fromStream(serviceAccount))
            .build();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return;
        }
        FirebaseApp.initializeApp(options);
    }

    public static void validateToken(String idToken) throws FirebaseAuthException{
        FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(idToken);
        String uid = decodedToken.getUid();
        System.out.println(uid);
    }

}
