package com.brown.main.routes;

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
    this.initTableRoutes();
  }

  private void initTableRoutes() {
    Spark.get("/table", (req, res) -> TableHandler.getTable(db));
  }

  private void initAreaRoutes() {
    // AreasHandler.addArea(db);
    Spark.get("/areas", (req, res) -> AreasHandler.getAllAreas(db));
    Spark.get("/area/:id", (req, res) -> AreasHandler.getArea(db, req.params(":id")));
  }

  // private void initRecRoutes() {
  //   Spark.post("/recommend", (req, res) -> RecHandler.recommend(db, req.body()));
  // }

  private void initUserRoute() {

    // validate jwt!
    // route to fetch basic user info by id
    Spark.get("/user/:id", (req, res) -> UsersHandler.getUserById(db, req.params(":id")));
    Spark.get("/user/authcheck", (req, res) -> UsersHandler.validateUserToken(db, req));
    Spark.post("/users", (req, res) -> UsersHandler.userLogin(db, req));
    // route to fetch user prefs (need to validate user auth first)
    Spark.get("user/:id/prefs", (req, res) -> UsersHandler.getUserPrefs(db, req));
    // Spark.put("/users/:id", (req, res) -> UsersHandler.updateUser(db, req.params(":id"), req.body()));
    // Spark.post("/users/:id/new", (req, res) -> UsersHandler.newUser(db, req.params(":id")));
    // Spark.get("/users/:id/prefs", (req, res) -> UsersHandler.getUserPrefs(db, req.params(":id")));
  }

  private void initTripsRoutes() {
     Spark.get("/trips", (req, res) -> TripsHandler.getAllTrips(db));
     Spark.get("/trips/:id", (req, res) -> TripsHandler.getTrip(db, req.params(":id")));
    // get comments for a trip
     Spark.get("/trips/:id/comments", (req, res) -> TripsHandler.getComments(db, req.params(":id")));
  }
}
