package com.brown.main.routes;

import com.brown.main.recsys.Areas;
import com.brown.main.recsys.Recommendation;
import com.brown.main.recsys.TreeInfo;
import com.google.gson.Gson;
import com.mongodb.client.model.Filters;
import com.mongodb.client.MongoDatabase;
import spark.Request;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * This class is used to handle the request for recommendations.
 */
public class RecHandler {

  /**
   * This method is used to get the recommendations for the user.
   * @param db The database to get the recommendations from.
   * @param req Request
   * @param list List of areas
   * @return
   */
  public static List<String> recommend(MongoDatabase db, Request req, List<TreeInfo> list) {
    // validate user
    if (!UsersHandler.validateUserToken(db, req)) {
      return null;
    }
    String reqJson = req.body();
    Gson gson = new Gson();
    Map<String, String> reqMap = gson.fromJson(reqJson, Map.class);
    System.out.println(reqMap.toString());
    TreeInfo info = new TreeInfo();
    info.setName("User");
    info.setLocation(Areas.getCoordsFromAddress(reqMap.get("zipcode")));
    info.setWeather(Double.parseDouble(reqMap.get("weatherPref")));
    info.setPrice(Double.parseDouble(reqMap.get("ticketPref")));
    info.setsize(Double.parseDouble(reqMap.get("trailsPref")));
    info.setSkillLevel(Double.parseDouble(reqMap.get("difficultyPref")));
    info.setDistance(1-Double.parseDouble(reqMap.get("locPref")));
    List<String> nearest = new Recommendation(info, list).getNearest();
    List<String> best = new ArrayList<>();
    for (String s: nearest){
      best.add(db.getCollection("areas").find(Filters.eq("name", s)).first().toJson());
    }
    return best;
  }
}
