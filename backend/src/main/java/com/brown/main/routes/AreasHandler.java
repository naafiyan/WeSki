package com.brown.main.routes;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class AreasHandler {

  public static JsonObject getAllAreas(MongoDatabase db) {
    Document areaFirst = db.getCollection("areas").find().first();
    areaFirst.toJson();
    JsonObject areaFirstJson = new Gson().fromJson(areaFirst.toJson(), JsonObject.class);
    return areaFirstJson;
  }
}
