package com.brown.main.routes;

import com.google.gson.Gson;
import com.mongodb.client.MongoDatabase;
import spark.Request;

import java.util.Map;

public class RecHandler {
  public static String recommend(MongoDatabase db, Request req) {
    String reqJson = req.body();
    Gson gson = new Gson();
    Map<String, String> reqMap = gson.fromJson(reqJson, Map.class);

    return "bob the builder";
  }
}
