package com.brown.main.models;

import org.bson.types.ObjectId;

import java.util.Objects;

/**
 * This class models the Comment data structure.
 */
public class Comment implements Model{
  private ObjectId id;
  private ObjectId ski_area;
  private ObjectId user;
  private int rating;
  private String text;

  /**
   * Empty constructor for mongo codex.
   */
  public Comment(){}

  /**
   * Normal constructor to create the comment class.
   * @param ski_area area the comment is for.
   * @param user user the comment is by.
   * @param rating rating out of 5 stars
   * @param text plain-text of the comment
   */
  public Comment(ObjectId ski_area, ObjectId user, int rating, String text) {
    this.ski_area=ski_area;
    this.user=user;
    this.rating=rating;
    this.text=text;
  }

  /**
   * These methods are required for codexes.
   * @return
   */
  @Override
  public Class<Comment> getThisClass() {
    return Comment.class;
  }

  @Override
  public String getCollectionName() {
    return "comments";
  }

  @Override
  public String toString() {
    final StringBuffer sb = new StringBuffer("Weather{");
    sb.append("id=").append(this.id);
    sb.append(", ski_area=").append(this.ski_area);
    sb.append(", user=").append(this.user);
    sb.append(", rating=").append(this.rating);
    sb.append(", text=").append(this.text);
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
    return 1;
  }

  /**
   * Getters and setters for the fields in Comment
   */
  public ObjectId getSki_area() {
    return ski_area;
  }

  public void setSki_area(ObjectId ski_area) {
    this.ski_area = ski_area;
  }

  public ObjectId getUser() {
    return user;
  }

  public void setUser(ObjectId user) {
    this.user = user;
  }

  public int getRating() {
    return rating;
  }

  public void setRating(int rating) {
    this.rating = rating;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public void setId(ObjectId id) {
    this.id = id;
  }

  public ObjectId getId() {
    return this.id;
  }
}