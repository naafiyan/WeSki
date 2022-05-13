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

/**
 * Class that contains methods for handling routes related to trips
 */
public class TripsHandler {

  /**
   * Handles the API endpoint /trips and returns all trips stored in the database.
   * @param db MongoDatabase object of the connection to the Atlas db
   * @return JsonObject that contains a list of the trips in the database
   */
  public static JsonObject getAllTrips(MongoDatabase db) {
    //Gather all trips into an arraylist
    ArrayList<Document> tripsDocs = db.getCollection("trips").find().into(new ArrayList<Document>());
    // convert areasDocs to json
    List<String> tripStrings = new ArrayList<>();
    for (Document areaDoc : tripsDocs) {
      tripStrings.add(areaDoc.toJson());
    }

    ArrayList<JsonObject> trips = new ArrayList<JsonObject>();

    //Iterate over the list and add the json object of each trip to a new arraylist
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

  /**
   * Retrieves a specific trip from the database, by ID
   * @param db mongo atlas connection
   * @param id objectID of the trip to get informatino about
   * @return json representation of the trip object
   */
  public static String getTrip(MongoDatabase db, String id) {
    ArrayList<Document> tripsDocs = db.getCollection("trips").find(eq("_id", new ObjectId(id))).into(new ArrayList<Document>());
    return tripsDocs.get(0).toJson();
  }

  /**
   * Retrieves a specific comment from the database.
   * @param db mongo atlas connection
   * @param id objectID of the comment to retrieve
   * @return string representing the comment object
   */
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
