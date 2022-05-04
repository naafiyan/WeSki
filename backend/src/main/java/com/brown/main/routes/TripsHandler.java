package com.brown.main.routes;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.mongodb.client.model.Filters.eq;

public class TripsHandler {

  public static JsonObject getAllTrips(MongoDatabase db) {
    ArrayList<Document> tripsDocs = db.getCollection("trips").find().into(new ArrayList<Document>());
    // convert areasDocs to json
    List<String> tripStrings = new ArrayList<>();
    for (Document areaDoc : tripsDocs) {
      tripStrings.add(areaDoc.toJson());
    }

    ArrayList<JsonObject> trips = new ArrayList<JsonObject>();

    Gson gson = new Gson();
    String jsonString = null;
    for (Document doc : tripsDocs) {
      jsonString = gson.toJson(doc);
      trips.add(new Gson().fromJson(jsonString, JsonObject.class));
    }
    // return all the areas as a json
    JsonObject res = new JsonObject();
    res.add("trips", gson.toJsonTree(trips));
    return res;
  }

  public static JsonObject getTrip(MongoDatabase db, String id) {
    ArrayList<Document> tripsDocs = db.getCollection("trips").find(eq("_id", new ObjectId(id))).into(new ArrayList<Document>());
    return new Gson().fromJson(tripsDocs.get(0).toJson(), JsonObject.class);
  }

  public static String getComments(MongoDatabase db, String id) {
    ArrayList<Document> commentsDocs = db.getCollection("comments").find(eq("_id", new ObjectId(id))).into(new ArrayList<Document>());
    Gson gson = new Gson();
    ArrayList<String> comments = new ArrayList<>();
    for (Document doc: commentsDocs) {
      comments.add(gson.toJson(doc));
    }
    Map<String, ArrayList<String>> res = new HashMap<>();
    res.put("comments", comments);
    return gson.toJson(res);
  }
}
