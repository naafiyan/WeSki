package com.brown.app.main;

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
public class App {
    public static void main( String[] args ) {
        System.out.println( "Hello World!" );
        System.out.println("Currently, POJO mapping is functional. See the 'TestMapping' class!");

        //Comment in the following line to run the things in TestMapping
        new TestMapping();
    }
}
