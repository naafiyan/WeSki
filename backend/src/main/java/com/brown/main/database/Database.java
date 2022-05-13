package com.brown.main.database;

/**
 * interface for database connections
 */
public interface Database<T> {

  /**
   * Initializes the database
   * @param db string to database file
   * @return
   */
  T initDb(String db);

  /**
   * Retrieves the database
   * @param db string to database file
   * @return
   */
  T getDb(String db);

  void close();
}
