package com.brown.main.database;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;

import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

/**
 * Wrapper class for the MongoDB database.
 * Handles initializing and creating the connection to the DB.
 */
public class MongoHelper implements Database<MongoDatabase> {

  public static MongoClient client;
  public MongoClientSettings clientSettings;

  /**
   * Constructor for the wrapper class.
   * @param db the name of the database that we want to connect to
   */
  public MongoHelper(String db) {
    this.initDb(db);
  }

  /**
   * Initializes the connection to the database
   * @param db string to database file
   * @return the mongo database object
   */
  @Override
  public MongoDatabase initDb(String db) {
    System.out.println(System.getProperty("mongodb.uri"));
    ConnectionString connectionString = new ConnectionString(System.getProperty("mongodb.uri"));
    CodecRegistry pojoCodecRegistry = fromProviders(PojoCodecProvider.builder().automatic(true).build());
    CodecRegistry codecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(), pojoCodecRegistry);
    this.clientSettings = MongoClientSettings.builder()
        .applyConnectionString(connectionString)
        .codecRegistry(codecRegistry)
        .build();

    MongoHelper.client = MongoClients.create(this.clientSettings);

    if (MongoHelper.client == null) {
      throw new NullPointerException("ERROR: Client is null");
    }
    return MongoHelper.client.getDatabase(db);
  }

  /**
   * Retrieves client settings for creating a connection to the mongo database
   * @return clientsettings object
   */
  public MongoClientSettings getClientSettings() {
    return this.clientSettings;
  }

  /**
   * Retrieves the current active database
   * @param db string to database file
   * @return mongodatabase object
   */
  @Override
  public MongoDatabase getDb(String db) {
    return MongoHelper.client.getDatabase(db);
  }

  /**
   * Closes the connection to the mongodatabase
   */
  @Override
  public void close() {
    MongoHelper.client.close();
  }
}
