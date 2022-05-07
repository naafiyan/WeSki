package com.brown.main.routes;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.brown.main.database.FirebaseHelper;
import com.brown.main.models.Area;
import com.brown.main.models.SnowType;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.types.ObjectId;

import spark.Request;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.ArrayList;
import java.util.List;

import static com.mongodb.client.model.Filters.eq;

public class UsersHandler {

    public static JsonObject getAllUsers(MongoDatabase db) {
        ArrayList<Document> areasDocs = db.getCollection("areas").find().into(new ArrayList<Document>());
        // convert areasDocs to json
        List<String> areaStrings = new ArrayList<>();
        for (Document areaDoc : areasDocs) {
          areaStrings.add(areaDoc.toJson());
        }
    
        ArrayList<JsonObject> areas = new ArrayList<JsonObject>();
    
        Gson gson = new Gson();
        String jsonString = null;
        for (Document doc : areasDocs) {
             jsonString = gson.toJson(doc);              
             areas.add(new Gson().fromJson(jsonString, JsonObject.class));
        }
        // return all the areas as a json
        JsonObject res = new JsonObject();
        res.add("areas", gson.toJsonTree(areas));
        return res;
      }
      
      public static String getUserById(MongoDatabase db, String id) {
        Document userDoc = db.getCollection("users").find(eq("_id", new ObjectId(id))).first();
        return userDoc.toJson();
      }

      public static JsonObject newUser(MongoDatabase db, Request req) {
      // use auth0 to verify jwt from req
        return null;
      }

      public static boolean validateUserToken(MongoDatabase db, Request req) {
        // Bearer token
        String bearerToken = req.headers("Authorization");
        String[] bearerTokenSplit = bearerToken.split(" ");
        String token = bearerTokenSplit[1];
        // verify token
        try {
          FirebaseHelper.validateToken(token);
          return true;
        } catch (FirebaseAuthException e) {
          System.out.println(e.toString());
          return false;
        }
      }

}
