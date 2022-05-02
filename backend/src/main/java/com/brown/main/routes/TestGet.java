package com.brown.main.routes;

import spark.Request;
import spark.Response;
import spark.Route;

public class TestGet implements Route {
  @Override
  public Object handle(Request request, Response response) throws Exception {
    System.out.println("GET /");
    return "Hello World";
  }
}
