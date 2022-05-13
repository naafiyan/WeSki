package com.brown.main.routes;

import com.brown.main.recsys.Areas;
import com.brown.main.recsys.TreeInfo;
import com.mongodb.client.MongoDatabase;
import spark.Spark;
import spark.Request;

import java.util.List;

public class RouteWrapper {

  private MongoDatabase db;

  /**
   * Tnis is the constructor for the RouteWrapper class, whicn initializes the API routes.
   * @param db
   */
  public RouteWrapper(MongoDatabase db) {
    this.db = db;
    this.initRoutes();
  }

  /**
   * This method initializes all routes.
   */
  public void initRoutes() {
    // route handled by static methods called inside lamba functions in individual handler classes
    Spark.get("/", (req, res) -> AreasHandler.getAllAreas(db));
    this.initAreaRoutes();
    this.initUserRoute();
    this.initTripsRoutes();
    this.initTableRoutes();
  }

  /**
   * This method initializes the table routes.
   */
  private void initTableRoutes() {
    Spark.get("/table", (req, res) -> TableHandler.getTable(db));
  }

  /**
   * This method initializes the area routes.
   */
  private void initAreaRoutes() {
    // AreasHandler.addArea(db);
    Spark.get("/areas", (req, res) -> AreasHandler.getAllAreas(db));
    Spark.get("/area/:id", (req, res) -> AreasHandler.getArea(db, req.params(":id")));
  }

  /**
   * This method initializes the user routes.
   */
  private void initUserRoute() {

    // validate jwt!
    // route to fetch basic user info by id
    Spark.get("/user/:id", (req, res) -> UsersHandler.getUserById(db, req.params(":id")));
    Spark.get("/user/authcheck", (req, res) -> UsersHandler.validateUserToken(db, req));
    Spark.post("/users", (req, res) -> UsersHandler.userLogin(db, req));
    // route to fetch user prefs (need to validate user auth first)
    Spark.get("/user/:id/prefs", (req, res) -> UsersHandler.getUserPrefs(db, req));
    Spark.put("/user/:id/prefs", (req, res) -> UsersHandler.updateUserPrefs(db, req));
    // Spark.put("/users/:id", (req, res) -> UsersHandler.updateUser(db, req.params(":id"), req.body()));
    // Spark.post("/users/:id/new", (req, res) -> UsersHandler.newUser(db, req.params(":id")));
    // Spark.get("/users/:id/prefs", (req, res) -> UsersHandler.getUserPrefs(db, req.params(":id")));
  }

  /**
   * This method initializes the trip routes.
   */
  private void initTripsRoutes() {
    List<TreeInfo> list1 = new Areas().getInfo();
    Spark.post("/recommend", (req, res) -> RecHandler.recommend(db, req, list1));
    Spark.get("/trips", (req, res) -> TripsHandler.getAllTrips(db));
    Spark.get("/trips/:id", (req, res) -> TripsHandler.getTrip(db, req.params(":id")));
    // get comments for a trip
    Spark.get("/trips/:id/comments", (req, res) -> TripsHandler.getComments(db, req.params(":id")));
  }
}
