package com.brown.app.models;

import org.bson.types.ObjectId;

import java.util.Objects;

public class Preference {
  private ObjectId id;
  private String name;
  private double value;

  public Preference(){}

  public Preference(String name, double value) {
    this.name=name;
    this.value=value;
  }

  @Override
  public String toString() {
    final StringBuffer sb = new StringBuffer("Weather{");
    sb.append("id=").append(this.id);
    sb.append(", name=").append(this.name);
    sb.append(", value=").append(this.value);
    sb.append('}');
    return sb.toString();
  }

  @Override
  public boolean equals(Object o) {
    if (this==o){
      return true;
    }
    return false;
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, value);
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public double getValue() {
    return value;
  }

  public void setValue(double value) {
    this.value = value;
  }

  public ObjectId getId() {
    return this.id;
  }

  public void setId(ObjectId id) {
    this.id = id;
  }
}
