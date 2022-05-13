package com.brown.main.routes;

import com.brown.main.models.Area;
import com.brown.main.models.SnowType;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.types.ObjectId;
import spark.Request;

import java.util.ArrayList;
import java.util.List;

import static com.mongodb.client.model.Filters.eq;

/**
 * Class that contains methods for routes relating to areas
 */
public class AreasHandler {

  /**
   * Retrieves all areas from the database.
   * @param db mongo atlas connection
   * @return json object containing a list of area objects
   */
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

  /**
   * Retrieves a specific area, given its id number
   * @param db mongo database connection
   * @param req post parameters
   * @return area corresponding to the input id
   */
  public static JsonObject getAreaById(MongoDatabase db, Request req) {
    String id = req.params(":id");
    Document areaDoc = db.getCollection("areas").find(new Document("_id", id)).first();
    JsonObject area = new Gson().fromJson(areaDoc.toJson(), JsonObject.class);
    return area;
  }

  /**
   * Adds a new area to the database.
   * @param db mongo database connection
   * @return list of all areas in the database
   */
  public static JsonObject addArea(MongoDatabase db) {
    // Document areaDoc = new Document();
    // areaDoc.append("name", "Test 1");
    // areaDoc.append("name", "Test 1");
    // areaDoc.append("name", "Test 1");
    // areaDoc.append("name", "Test 1");
    // areaDoc.append("name", "Test 1");
    // areaDoc.append("name", "Test 1");
    // areaDoc.
    // 
    Area area = new Area();
    area.setName("Test 2");
    area.setBase(1.0);
    area.setAcreage(2.0);
    // Comment comment = new Comment();
    List<ObjectId> comments = new ArrayList<>();
    comments.add(new ObjectId());
    area.setComments(comments);
    area.setWeather(new ObjectId());
    List<Integer> trails = new ArrayList<>();
    trails.add(1);
    trails.add(2);
    trails.add(3);
    trails.add(4);
    area.setTrails(trails);
    area.setSnow_type(SnowType.groomed);
    area.setRecent_snowfall(3.0);
    
    // db.getCollection("areas", Area.class).insertOne(area);
    // // Area area = new Gson().fromJson(req.body(), Area.class);
    // MongoCollection<Area> coll = db.getCollection("areas", Area.class);
    // convert area to document
    Document areaDoc = new Document();
    areaDoc.append("name", area.getName());
    areaDoc.append("base", area.getBase());
    areaDoc.append("acreage", area.getAcreage());
    areaDoc.append("comments", area.getComments());
    areaDoc.append("weather", area.getWeather());
    areaDoc.append("trails", area.getTrails());
    // areaDoc.append("snow_type", area.getSnow_type());
    areaDoc.append("snow_type", area.getSnow_type().toString());
    areaDoc.append("recent_snowfall", area.getRecent_snowfall());
    db.getCollection("areas").insertOne(areaDoc);
    // // coll.insertOne(area);
    // TODO: error check for validation fails i.e. MongoWriteExceptions
    db.getCollection("areas").insertOne(areaDoc);
    return getAllAreas(db);
  }

  /**
   * Gets a specifric area based on the input objectid
   * @param db mongo connection
   * @param id id number of area
   * @return json string representing the area object
   */
  public static String getArea(MongoDatabase db, String id) {
    ArrayList<Document> areasDocs = db.getCollection("areas").find(eq("_id", new ObjectId(id))).into(new ArrayList<Document>());
    return areasDocs.get(0).toJson();
  }
}
