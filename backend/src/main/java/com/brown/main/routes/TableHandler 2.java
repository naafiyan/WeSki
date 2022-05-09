package com.brown.main.routes;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.brown.main.models.Area;
import com.google.gson.Gson;
import com.mongodb.client.MongoDatabase;

public class TableHandler {
  public static String getTable(MongoDatabase db) {
    ArrayList<Area> areaList = db.getCollection("areas", Area.class).find().into(new ArrayList<>());
    ArrayList<ArrayList<String>> headersList = new ArrayList<>();
    ArrayList<String> headers = new ArrayList<>();
    headersList.add(headers);
    headersList.get(0).add("Ski Area");
    headersList.get(0).add("Weather");
    headersList.get(0).add("# Trails Open");
    headersList.get(0).add("Acreage Open");
    headersList.get(0).add("Base");
    headersList.get(0).add("Recent Snowfall");
    headersList.get(0).add("Weekend Price");

    ArrayList<ArrayList<String>> rows = new ArrayList<ArrayList<String>>();
    for(Area area: areaList) {
      ArrayList<String> row = new ArrayList<>();
      row.add(area.getName());
      row.add("placeholder");
      row.add(Integer.toString(area.getTrails().size()));
      row.add(Double.toString(area.getAcreage()));
      row.add(Double.toString(area.getBase()));
      row.add(Double.toString(area.getRecent_snowfall()));
      row.add("placeholder");
    }

    Map<String, ArrayList<ArrayList<String>>> res = new HashMap<>();
    res.put("headers", headersList);
    res.put("rows", rows);
    return new Gson().toJson(res);
  }
}
