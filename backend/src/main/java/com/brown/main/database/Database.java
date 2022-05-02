package com.brown.main.database;

public interface Database<T> {

  T initDb(String db);

  T getDb(String db);

  void close();
}
