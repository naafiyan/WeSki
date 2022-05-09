package com.brown.main.routes;

import com.google.common.collect.ImmutableMap;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.client.MongoDatabase;

import java.util.Map;

public class RecHandler {
  public static String recommend(MongoDatabase db, String json) {
    if(db==null){
      System.out.println("ERROR: Please use the load_data command to load in a database");
      return null;
    }
    Gson gson = new Gson();
    JsonObject reqJson = new JsonParser().parse(json).getAsJsonObject();
    String table = reqJson.get("table").getAsString();
    String columns = reqJson.get("columns").getAsString();
    String values = reqJson.get("values").getAsString();
    //int end = this.db.insert(table, columns, values);
    //System.out.println("Number of Rows Inserted: " + end);
//    if(end>=0){
//      Map<String, String> matchMap = ImmutableMap.of("result", "Great Success!");
//      return gson.toJson(matchMap);
//    }else{
//      Map<String, String> matchMap = ImmutableMap.of("result", "Not Great Success:(");
//      return gson.toJson(matchMap);
//    }

    return null;
  }
}
