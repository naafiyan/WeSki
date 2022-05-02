package com.brown.main.models;

import org.bson.types.ObjectId;

import java.util.Objects;

public class Weather implements Model{
  private ObjectId id;
  private double temp;
  private int img;
  private String desc;

  public Weather(){}

  public Weather(double temp, int img, String desc) {
    this.temp=temp;
    this.img=img;
    this.desc=desc;
  }

  @Override
  public Class<Weather> getThisClass() {
    return Weather.class;
  }

  @Override
  public String getCollectionName() {
    return "weather";
  }

  public double getTemp() {
    return this.temp;
  }

  public Weather setTemp(double temp) {
    this.temp=temp;
    return this;
  }

  public int getImg() {
    return this.img;
  }

  public Weather setImg(int img) {
    this.img = img;
    return this;
  }

  public String getDesc() {
    return this.desc;
  }

  public Weather setDesc(String desc) {
    this.desc=desc;
    return this;
  }

  //Todo: fix the .equals here and in others

  @Override
  public String toString() {
    final StringBuffer sb = new StringBuffer("Weather{");
    sb.append("id=").append(this.id);
    sb.append(", temp=").append(this.temp);
    sb.append(", img=").append(this.img);
    sb.append(", desc=").append(this.desc);
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
    return 5;
  }

  public ObjectId getId() {
    return id;
  }

  public void setId(ObjectId id) {
    this.id = id;
  }
}