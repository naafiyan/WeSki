package com.brown.main.models;

import org.bson.types.ObjectId;

import java.util.List;
import java.util.Objects;

public class Area implements Model{
  private ObjectId id;
  private String name;
  private List<ObjectId> comments;
  private ObjectId weather;
  private double acreage;
  private double base;
  private double price;
  private SnowType snow_type;
  private List<Integer> trails;
  private double recent_snowfall;

  public Area() {}

  public Area(String name, List<ObjectId> comments, ObjectId weather, double acreage,
              double base, SnowType snow_type, List<Integer> trails, double recent_snowfall,
              double price) {
    this.name=name;
    this.comments=comments;
    this.weather=weather;
    this.acreage=acreage;
    this.base=base;
    this.snow_type=snow_type;
    this.trails=trails;
    this.recent_snowfall=recent_snowfall;
    this.price = price;
  }

  @Override
  public Class<Area> getThisClass() {
    return Area.class;
  }

  @Override
  public String getCollectionName() {
    return "areas";
  }

  @Override
  public String toString() {
    final StringBuffer sb = new StringBuffer("Weather{");
    sb.append("id=").append(this.id);
    sb.append(", name=").append(this.name);
    sb.append(", comments=").append(this.comments);
    sb.append(", weather=").append(this.weather);
    sb.append(", acreage=").append(this.acreage);
    sb.append(", base=").append(this.base);
    sb.append(", snow_type=").append(this.snow_type);
    sb.append(", trails=").append(this.trails);
    sb.append(", recent_snowfall=").append(this.recent_snowfall);
    sb.append(", price=").append(this.price);
    sb.append('}');
    return sb.toString();
  }

  @Override
  public boolean equals(Object o) {
    if (this==o) {
      return true;
    }
    return false;
  }

  @Override
  public int hashCode() {
    return 0;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setPrice(double pr) {this.price=pr;}

  public double getPrice() {return this.price;}

  public List<ObjectId> getComments() {
    return comments;
  }

  public void setComments(List<ObjectId> comments) {
    this.comments = comments;
  }

  public ObjectId getWeather() {
    return weather;
  }

  public void setWeather(ObjectId weather) {
    this.weather = weather;
  }

  public double getAcreage() {
    return acreage;
  }

  public void setAcreage(double acreage) {
    this.acreage = acreage;
  }

  public double getBase() {
    return base;
  }

  public void setBase(double base) {
    this.base = base;
  }

  public SnowType getSnow_type() {
    return snow_type;
  }

  public void setSnow_type(SnowType snow_type) {
    this.snow_type = snow_type;
  }

  public List<Integer> getTrails() {
    return trails;
  }

  public void setTrails(List<Integer> trails) {
    this.trails = trails;
  }

  public double getRecent_snowfall() {
    return recent_snowfall;
  }

  public void setRecent_snowfall(double recent_snowfall) {
    this.recent_snowfall = recent_snowfall;
  }

  public ObjectId getId() {
    return id;
  }

  public void setId(ObjectId id) {
    this.id = id;
  }
}