package com.brown.main;

import com.brown.main.database.Database;
import com.brown.main.database.MongoHelper;
import com.brown.main.routes.RouteWrapper;
import jdk.internal.joptsimple.OptionParser;
import jdk.internal.joptsimple.OptionSet;
import spark.Spark;

public final class App {
  private static final int DEFAULT_PORT = 4567;

  public static void main(String[] args) {
    new App(args).run();
  }

  private String[] args;

  private App(String[] args) {
    this.args = args;
  }

  private void run() {
    System.out.println("Starting server...");
    runSparkServer(DEFAULT_PORT);
  }

  private static void runSparkServer(int port) {
    Spark.port(port);

    Spark.options("/*", (request, response) -> {
      String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
      if (accessControlRequestHeaders != null) {
        response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
      }

      String accessControlRequestMethod = request.headers("Access-Control-Request-Method");

      if (accessControlRequestMethod != null) {
        response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
      }

      return "OK";
    });

    Spark.before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

    // create new db
    Database db = new MongoHelper("notSkiQL");
    RouteWrapper rw = new RouteWrapper(db);
    rw.initRoutes();

    Spark.init();
  }
}
