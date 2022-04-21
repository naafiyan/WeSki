package com.brown.app.main;

import com.brown.app.models.Comment;
import com.brown.app.models.Preference;
import com.brown.app.models.Trip;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.types.ObjectId;

public class TestMapping {

  public TestMapping() {
    //These 3 lines are boilerplate to connect to the database
    MongoClientSettings settings = MongoHelper.makeSettings();
    try (MongoClient client = MongoClients.create(settings)) {
      MongoDatabase db = client.getDatabase("notSkiQL");

      //Example of putting a Java object into a collection. Typically we'd want to actually get the
      // ObjectIds of an existing document and put them as the first two arguments, but this is
      // just to test, so it doesn't matter
      MongoCollection<Comment> commentsCollection = db.getCollection("comments", Comment.class);
      Comment comment = new Comment(new ObjectId(), new ObjectId(), 5, "great ski day");
      commentsCollection.insertOne(comment);

      //Example of mapping a Mongo document to a Java object. In this case, it just takes the first
      //document in the collection and makes it into a Java Trip object.
      MongoCollection<Preference> prefsCollection = db.getCollection("prefs", Preference.class);
      Preference pref = prefsCollection.find().first();
      System.out.println(pref.toString());
    }
  }
}
