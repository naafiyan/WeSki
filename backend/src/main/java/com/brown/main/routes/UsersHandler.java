package com.brown.main.routes;

import com.brown.main.database.FirebaseHelper;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.mongodb.client.MongoCollection;
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
          newUserDoc.append("zipcode", "02912");
          newUserDoc.append("ticket_pref", 0.5);
          newUserDoc.append("loc_pref", 0.5);
          newUserDoc.append("weather_pref", 0.5);
          newUserDoc.append("trails_pref", 0.5);
          newUserDoc.append("difficulty_pref", 0.5);
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
        // if bearerToken is null, return false
        if (bearerToken == null) {
          return false;
        } 
        String[] bearerTokenSplit = bearerToken.split(" ");
        // if bearerTokenSplit is not of length 2, return false
        if (bearerTokenSplit.length != 2) {
          return false;
        }
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

      public static JsonObject getUserPrefs(MongoDatabase db, Request req) {
        // get user id from req params
        String userId = req.params("id");

        // get header bearer token
        if (!validateUserToken(db, req)) {
          // return json object where success is false
          JsonObject res = new JsonObject();
          res.addProperty("success", false);
          return res;
        }
        // get user doc from database
        Document userDoc = db.getCollection("users").find(eq("uid", userId)).first();
        // if user doc is null, return json object where success is false
        if (userDoc == null) {
          JsonObject res = new JsonObject();
          res.addProperty("success", false);
          return res;
        }

        System.out.println(userDoc.get("pref_area"));
        System.out.println("pref area is above^");
        Document favMtnDoc = db.getCollection("areas").find(eq("_id", new ObjectId(userDoc.get("pref_area").toString()))).first();

        JsonObject res = new JsonObject();
        System.out.println(userDoc.get("zipcode").toString());
        res.addProperty("success", true);
        res.addProperty("zipcode", userDoc.get("zipcode").toString());
        res.addProperty("ticketPref", userDoc.get("ticket_pref").toString());
        res.addProperty("locPref", userDoc.get("loc_pref").toString());
        res.addProperty("weatherPref", userDoc.get("weather_pref").toString());
        res.addProperty("trailsPref", userDoc.get("trails_pref").toString());
        res.addProperty("difficultyPref", userDoc.get("difficulty_pref").toString());
        res.addProperty("type", userDoc.get("type").toString());
        res.addProperty("favoriteMountain", favMtnDoc.get("name").toString());
        return res;
      }

      public static JsonObject updateUserPrefs(MongoDatabase db, Request req) {
        // get user id from req params
        String userId = req.params("id");
        // get header bearer token
        if (!validateUserToken(db, req)) {
          // return json object where success is false
          JsonObject res = new JsonObject();
          res.addProperty("success", false);
          return res;
        }
        // get user doc from database
        Document userDoc = db.getCollection("users").find(eq("uid", userId)).first();
        // if user doc is null, return json object where success is false
        if (userDoc == null) {
          JsonObject res = new JsonObject();
          res.addProperty("success", false);
          return res;
        }
        // get request body
        JsonObject body = new Gson().fromJson(req.body(), JsonObject.class);

//        System.out.println(body);
//        System.out.println(db.getCollection("areas").find(eq("name", "Cannon Mountain")).first());
//        System.out.println(body.get("favoriteMountain").toString().replace("\"", ""));
        Document areaDoc = db.getCollection("areas").find(eq("name", body.get("favoriteMountain").toString().replace("\"", ""))).first();
//        System.out.println(body.get("favoriteMountain"));

        // update user doc with new prefs
        System.out.println(body.get("zipcode"));
        userDoc.replace("zipcode", body.get("zipcode").getAsString());
        userDoc.replace("ticket_pref", body.get("ticketPref").getAsDouble());
        userDoc.replace("loc_pref", body.get("locPref").getAsDouble());
        userDoc.replace("weather_pref", body.get("weatherPref").getAsDouble());
        userDoc.replace("trails_pref", body.get("trailsPref").getAsDouble());
        userDoc.replace("difficulty_pref", body.get("difficultyPref").getAsDouble());
        userDoc.replace("pref_area", areaDoc.get("_id"));
        // update user doc in database
        db.getCollection("users").replaceOne(eq("uid", userId), userDoc);
        // return json object where success is true
        JsonObject res = new JsonObject();
        res.addProperty("success", true);
        return res;
      }

}
