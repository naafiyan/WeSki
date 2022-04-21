package com.brown.app;

import com.brown.app.models.Area;
import com.brown.app.models.Comment;
import com.brown.app.models.Preference;
import com.brown.app.models.SkierType;
import com.brown.app.models.SnowType;
import com.brown.app.models.Trip;
import com.brown.app.models.User;
import com.brown.app.models.Weather;
import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.Date;

import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;
import static org.bson.codecs.configuration.CodecRegistries.fromProviders;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        System.out.println("This is a test to see if the running changes");
        ConnectionString connectionString = new ConnectionString(System.getProperty("mongodb.uri"));

        //This is necessary to map POJOs into MongoDB
        CodecRegistry pojoCodecRegistry = fromProviders(PojoCodecProvider.builder().automatic(true).build());
        CodecRegistry codecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(), pojoCodecRegistry);

        MongoClientSettings clientSettings = MongoClientSettings.builder().applyConnectionString(connectionString).codecRegistry(codecRegistry).build();

        try (MongoClient mongoClient = MongoClients.create(clientSettings)) {
            MongoDatabase db = mongoClient.getDatabase("notSkiQL");
            MongoCollection<User> collection = db.getCollection("users", User.class);


            User usr = collection.find().first();
            System.out.println(usr.getEmail());
        }
    }
}
