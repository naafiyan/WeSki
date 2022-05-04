package com.brown.main.routes;

import com.brown.main.models.Area;
import com.brown.main.models.SnowType;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.types.ObjectId;

import spark.Request;

import java.util.ArrayList;
import java.util.List;

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
  
  public static JsonObject getAreaById(MongoDatabase db, Request req) {
    String id = req.params(":id");
    Document areaDoc = db.getCollection("areas").find(new Document("_id", id)).first();
    JsonObject area = new Gson().fromJson(areaDoc.toJson(), JsonObject.class);
    return area;
  }

  public static JsonObject addArea(MongoDatabase db) {
    Area area = new Area();
    area.setName("Test 1");
    area.setBase(1.0);
    area.setAcreage(2.0);
    area.setComments(new ArrayList<ObjectId>());
    area.setWeather(new ObjectId());
    area.setTrails(new ArrayList<>());
    area.setSnow_type(SnowType.groomed);
    area.setRecent_snowfall(3.0);
    // Area area = new Gson().fromJson(req.body(), Area.class);
    db.getCollection("areas", Area.class).insertOne(area);
    return getAllAreas(db);
  }
}


