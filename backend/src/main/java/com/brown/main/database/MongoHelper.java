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

  /**
   * Constructor for the wrapper class.
   * @param db the name of the database that we want to connect to
   */
  public MongoHelper(String db) {
    this.initDb(db);
  }

  @Override
  public MongoDatabase initDb(String db) {
    ConnectionString connectionString = new ConnectionString(System.getProperty("mongodb.uri"));
    CodecRegistry pojoCodecRegistry = fromProviders(PojoCodecProvider.builder().automatic(true).build());
    CodecRegistry codecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(), pojoCodecRegistry);
    MongoClientSettings clientSettings = MongoClientSettings.builder()
        .applyConnectionString(connectionString)
        .codecRegistry(codecRegistry)
        .build();

    MongoHelper.client = MongoClients.create(clientSettings);

    if (MongoHelper.client == null) {
      throw new NullPointerException("ERROR: Client is null");
    }
    return MongoHelper.client.getDatabase(db);
  }

  @Override
  public MongoDatabase getDb(String db) {
    return MongoHelper.client.getDatabase(db);
  }

  @Override
  public void close() {
    MongoHelper.client.close();
  }
}
