package com.brown.main.routes;

import com.brown.main.database.Database;
import com.brown.main.database.MongoHelper;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

public class AreasHandler {

  public static JsonObject getAllAreas(MongoDatabase db) {
    Document areaFirst = db.getCollection("areas").find().first();
    areaFirst.toJson();
    JsonObject areaFirstJson = new Gson().fromJson(areaFirst.toJson(), JsonObject.class);
    return areaFirstJson;
  }
}


