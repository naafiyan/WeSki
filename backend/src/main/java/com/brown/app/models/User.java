package com.brown.app.models;

import org.bson.types.ObjectId;

import java.util.List;
import java.util.Objects;

public class User {
  private ObjectId id;
  private String name;
  private String email;
  private List<ObjectId> prefs;
  private List<ObjectId> comments;
  private SkierType type;
  private String location;
  private ObjectId pref_area;

  public User(String name, String email, List<ObjectId> prefs, List<ObjectId> comments,
              SkierType type, String location, ObjectId pref_area) {
    this.name=name;
    this.email=email;
    this.prefs=prefs;
    this.comments=comments;
    this.type=type;
    this.location=location;
    this.pref_area=pref_area;
  }

  @Override
  public String toString() {
    final StringBuffer sb = new StringBuffer("Weather{");
    sb.append("id=").append(this.id);
    sb.append(", name=").append(this.name);
    sb.append(", email=").append(this.email);
    sb.append(", prefs=").append(this.prefs);
    sb.append(", comments=").append(this.comments);
    sb.append(", type=").append(this.type);
    sb.append(", location=").append(this.location);
    sb.append(", pref_area=").append(this.pref_area);
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
    return Objects.hash(id, name, email, prefs, comments, type, location, pref_area);
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public List<ObjectId> getPrefs() {
    return prefs;
  }

  public void setPrefs(List<ObjectId> prefs) {
    this.prefs = prefs;
  }

  public List<ObjectId> getComments() {
    return comments;
  }

  public void setComments(List<ObjectId> comments) {
    this.comments = comments;
  }

  public SkierType getType() {
    return type;
  }

  public void setType(SkierType type) {
    this.type = type;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public ObjectId getPref_area() {
    return pref_area;
  }

  public void setPref_area(ObjectId pref_area) {
    this.pref_area = pref_area;
  }
}
