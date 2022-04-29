package com.brown.main.routes;

import com.brown.main.database.Database;
import com.mongodb.client.MongoDatabase;
import spark.Spark;

public class RouteWrapper {

  private MongoDatabase db;

  public RouteWrapper(MongoDatabase db) {
    this.db = db;
    this.initRoutes();
  }

  public void initRoutes() {
    Spark.get("/", (req, res) -> AreasHandler.getAllAreas(db));
  }
}
