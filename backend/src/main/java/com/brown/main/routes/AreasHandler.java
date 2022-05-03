package com.brown.main.routes;

import com.brown.main.models.Area;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.util.ArrayList;

public class AreasHandler {

  public static JsonObject getAllAreas(MongoDatabase db) {
    ArrayList<Document> areasDocs = db.getCollection("areas").find().into(new ArrayList<Document>());
    // convert areasDocs to json
    ArrayList<Area> areas = new ArrayList<>();
    for (Document doc : areasDocs) {
    }
    Gson gson = new Gson();
    String areasJson = gson.toJson(areas);
    JsonObject areasJsonObject = new JsonObject();
    areasJsonObject.addProperty("areas", areasJson);
    return areasJsonObject;
  }
}


