package com.brown.main.models;

import org.bson.BsonDateTime;
import org.bson.types.ObjectId;
import java.util.Date;
import java.util.List;
import java.util.Objects;

public class Trip implements Model{
  private ObjectId id;
  private ObjectId owner;
  private List<ObjectId> members;
  private Date start_date;
  private Date end_date;
  private ObjectId area;

  public Trip(){}

  public Trip(ObjectId owner, List<ObjectId> members,
              Date start_date, Date end_date, ObjectId area) {
    this.owner=owner;
    this.members=members;
    this.start_date=start_date;
    this.end_date=end_date;
    this.area=area;
  }

  @Override
  public Class<Trip> getThisClass() {
    return Trip.class;
  }

  @Override
  public String getCollectionName() {
    return "trips";
  }

  @Override
  public String toString() {
    final StringBuffer sb = new StringBuffer("Weather{");
    sb.append("id=").append(this.id);
    sb.append(", owner=").append(this.owner);
    sb.append(", members=").append(this.members);
    sb.append(", start_Date=").append(this.start_date);
    sb.append(", end_date=").append(this.end_date);
    sb.append(", area=").append(this.area);
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
    return 3;
  }


  public ObjectId getOwner() {
    return owner;
  }

  public void setOwner(ObjectId owner) {
    this.owner = owner;
  }

  public List<ObjectId> getMembers() {
    return members;
  }

  public void setMembers(List<ObjectId> members) {
    this.members = members;
  }

  public Date getStart_date() {
    return start_date;
  }

  public void setStart_date(Date start_date) {
    this.start_date = start_date;
  }

  public Date getEnd_date() {
    return end_date;
  }

  public void setEnd_date(Date end_date) {
    this.end_date = end_date;
  }

  public ObjectId getArea() {
    return area;
  }

  public void setArea(ObjectId area) {
    this.area = area;
  }

  public void setId(ObjectId id) {
    this.id = id;
  }

  public ObjectId getId() {
    return this.id;
  }
}