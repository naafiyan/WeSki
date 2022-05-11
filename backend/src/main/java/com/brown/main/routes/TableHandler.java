package com.brown.main.routes;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.brown.main.models.Area;
import com.google.gson.Gson;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class TableHandler {
  public static String getTable(MongoDatabase db) {
    ArrayList<Document> areaList = db.getCollection("areas").find().into(new ArrayList<>());
    ArrayList<ArrayList<String>> headersList = new ArrayList<>();
    ArrayList<String> headers = new ArrayList<>();
    headersList.add(headers);
    headersList.get(0).add("Ski Area");
    headersList.get(0).add("# Trails Open");
    headersList.get(0).add("Acreage Open");
    headersList.get(0).add("Price");
    headersList.get(0).add("Temperature");
    headersList.get(0).add("Difficulty");

    ArrayList<ArrayList<String>> rows = new ArrayList<ArrayList<String>>();
    System.out.println(areaList.get(0));
    for(Document area: areaList) {
      ArrayList<String> row = new ArrayList<>();
      row.add(area.get("name").toString());
      row.add(area.get("num_trails").toString());
      row.add(area.get("acreage").toString());
      row.add(area.get("price").toString());
      row.add(area.get("temperature").toString());
      row.add(area.get("difficulty").toString());
      rows.add(row);
    }

    Map<String, ArrayList<ArrayList<String>>> res = new HashMap<>();
    res.put("headers", headersList);
    res.put("rows", rows);
    return new Gson().toJson(res);
  }
}
