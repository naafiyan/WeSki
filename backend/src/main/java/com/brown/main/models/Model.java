package com.brown.main.models;

/**
 * Model interface that allows for generic construction of Connection classes (deprecated).
 * See models/README.md for method descriptions.
 */
public interface Model {
  public String getCollectionName();
  public Class getThisClass();
}