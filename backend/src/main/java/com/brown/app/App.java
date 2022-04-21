package com.brown.app;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

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
        String connectionString = System.getProperty("mongodb.uri");
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            List<Object> databases = mongoClient.listDatabases().into(new ArrayList<>());
            for(Object db : databases) {
                System.out.println(((Document) db).toJson());
            }
        }
    }
}
