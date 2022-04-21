package com.brown.app.models;

import java.util.Objects;

public class Weather {
  private double temp;
  private int img;
  private String desc;

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

  @Override
  public String toString() {
    final StringBuffer sb = new StringBuffer("Weather{");
    sb.append("temp=").append(this.temp);
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
    return Objects.hash(temp, img, desc);
  }
}
