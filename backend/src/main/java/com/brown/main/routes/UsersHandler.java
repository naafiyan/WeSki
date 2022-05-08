package com.brown.main.routes;

import com.brown.main.database.FirebaseHelper;
import com.brown.main.models.SkierType;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.types.ObjectId;

import spark.Request;

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
      
      public static JsonObject getUserById(MongoDatabase db, String id) {
        Document userDoc = db.getCollection("users").find(eq("uid", id)).first();
        // create new JsonObject with success if userDoc not null and fail if userDoc is null
        JsonObject user;
        if (userDoc != null) {

          user = new Gson().fromJson(userDoc.toJson(), JsonObject.class);
          user.addProperty("success", true);
        } else {
          user = new JsonObject();
          user.addProperty("success", false);
        }
        return user;
      }

      public static synchronized JsonObject userLogin(MongoDatabase db, Request req) {
        // Post request body should be in the form of:
        // {
        //   "email": "
        // "username": "
        // "uid": "
        // }

        JsonObject body = new Gson().fromJson(req.body(), JsonObject.class);
        String email = body.get("email").getAsString();
        String username = body.get("username").getAsString();
        String uid = body.get("uid").getAsString();
        // check if user with uid exists in database
        Document userDoc = db.getCollection("users").find(eq("uid", uid)).first();
        if (userDoc == null) {
          // user does not exist, create user
          Document newUserDoc = new Document();
          newUserDoc.append("email", email);
          newUserDoc.append("name", username);
          newUserDoc.append("uid", uid);
          // user doc has comments field so we need to initialize it
          newUserDoc.append("comments", new ArrayList<ObjectId>());
          newUserDoc.append("prefs", new ArrayList<ObjectId>());
          newUserDoc.append("type", "Ski");
          newUserDoc.append("location", "");
          // TODO: probably assign default values to pref area
          newUserDoc.append("pref_area", new ObjectId());
          System.out.println("Getting here!!!");
          db.getCollection("users").insertOne(newUserDoc);
          userDoc = newUserDoc;
          return new Gson().fromJson(newUserDoc.toJson(), JsonObject.class);
        } else {
          // user exists and return user in json
          return new Gson().fromJson(userDoc.toJson(), JsonObject.class);
        }
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
