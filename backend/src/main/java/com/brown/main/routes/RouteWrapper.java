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
    // route handled by static methods called inside lamba functions in individual handler classes
    Spark.get("/", (req, res) -> AreasHandler.getAllAreas(db));
    this.initAreaRoutes();
    this.initUserRoute();
    this.initTripsRoutes();
  }

  private void initAreaRoutes() {
    Spark.get("/areas", (req, res) -> AreasHandler.getAllAreas(db));
     Spark.get("/areas/:id", (req, res) -> AreasHandler.getArea(db, req.params(":id")));
  }

  private void initUserRoute() {
    // Spark.get("/users/:id", (req, res) -> UsersHandler.getUser(db, req.params(":id")));
    // Spark.put("/users/:id", (req, res) -> UsersHandler.updateUser(db, req.params(":id"), req.body()));
    // Spark.put("/users/:id/new", (req, res) -> UsersHandler.newUser(db, req.params(":id")));
    // Spark.get("/users/:id/prefs", (req, res) -> UsersHandler.getUserPrefs(db, req.params(":id")));
  }

  private void initTripsRoutes() {
     Spark.get("/trips", (req, res) -> TripsHandler.getAllTrips(db));
     Spark.get("/trips/:id", (req, res) -> TripsHandler.getTrip(db, req.params(":id")));
    // get comments for a trip
     Spark.get("/trips/:id/comments", (req, res) -> TripsHandler.getComments(db, req.params(":id")));
  }
}
