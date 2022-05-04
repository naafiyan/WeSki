package com.brown.main.routes;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

import static com.mongodb.client.model.Filters.eq;

public class AreasHandler {

  public static JsonObject getAllAreas(MongoDatabase db) {
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

  public static String getArea(MongoDatabase db, String id) {
    ArrayList<Document> areasDocs = db.getCollection("areas").find(eq("_id", new ObjectId(id))).into(new ArrayList<Document>());
    return areasDocs.get(0).toJson();
  }
}
