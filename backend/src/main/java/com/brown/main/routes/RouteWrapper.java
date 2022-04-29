package com.brown.main.routes;

import com.brown.main.database.Database;
import spark.Spark;

public class RouteWrapper {

  private Database db;

  public RouteWrapper(Database db) {
    this.db = db;
    this.initRoutes();
  }

  public void initRoutes() {
    Spark.get("/", new TestGet());

  }

}
