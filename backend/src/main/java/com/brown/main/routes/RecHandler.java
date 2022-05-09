package com.brown.main.routes;

import com.google.common.collect.ImmutableMap;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.brown.main.recsys.TreeInfo;
import com.google.gson.Gson;
import com.mongodb.client.MongoDatabase;
import spark.Request;

import java.util.Map;

import java.util.Map;

public class RecHandler {

  public static String recommend(MongoDatabase db, Request req) {
    String reqJson = req.body();
    Gson gson = new Gson();
    Map<String, String> reqMap = gson.fromJson(reqJson, Map.class);
    System.out.println(reqMap.toString());

    TreeInfo inf = new TreeInfo("usr", Double.parseDouble(reqMap.get("experience")), Double.parseDouble(reqMap.get("weatherImportance")),
        Double.parseDouble(reqMap.get("priceImportance")), Double.parseDouble(reqMap.get("openTrilsImportance")), Double.parseDouble(reqMap.get("")));

    return null;
  }
}
