package com.brown.main.routes;

import spark.Request;
import spark.Response;
import spark.Route;

/**
 * Class that tests a get request
 */
public class TestGet implements Route {

  /**
   * Prints when something calls this route.
   * @param request post request
   * @param response post response
   * @return 'hello world'
   * @throws Exception when something goes wrong
   */
  @Override
  public Object handle(Request request, Response response) throws Exception {
    System.out.println("GET /");
    return "Hello World";
  }
}
