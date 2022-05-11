package com.brown.main.routes;

import com.brown.main.database.Database;
import com.brown.main.database.MongoHelper;
import com.brown.main.recsys.Areas;
import com.brown.main.recsys.Recommendation;
import com.google.common.collect.ImmutableMap;
import com.mongodb.client.model.Filters;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.brown.main.recsys.TreeInfo;
import com.google.gson.Gson;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import spark.Request;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class RecHandler {

  public static List<String> recommend(MongoDatabase db, Request req) {
    String reqJson = req.body();
    Gson gson = new Gson();
    Map<String, String> reqMap = gson.fromJson(reqJson, Map.class);
    System.out.println(reqMap.toString());
    TreeInfo info = new TreeInfo();
    info.setName("User");
    info.setLocation(Areas.getCoordsFromZipcode(reqMap.get("zipcode")));
    info.setWeather(Double.parseDouble(reqMap.get("weatherPref")));
    info.setPrice(1-Double.parseDouble(reqMap.get("ticketPref")));
    info.setsize(Double.parseDouble(reqMap.get("trailsPref")));
    info.setSkillLevel(Double.parseDouble(reqMap.get("difficultyPref")));
    info.setDistance(1-Double.parseDouble(reqMap.get("locPref")));
    List<String> nearest = new Recommendation(info).getNearest();
    List<String> best = new ArrayList<>();
    for (String s: nearest){
      best.add(new MongoHelper("notSkiQL").getDb("notSkiQL").getCollection("areas").find(Filters.eq("name", s)).first().toJson());
    }
    return nearest;
  }
}
