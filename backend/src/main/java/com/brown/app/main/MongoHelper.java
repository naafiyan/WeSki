package com.brown.app.main;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;

import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

public class MongoHelper {
  static MongoClientSettings makeSettings() {
    ConnectionString connectionString = new ConnectionString(System.getProperty("mongodb.uri"));
    CodecRegistry pojoCodecRegistry = fromProviders(PojoCodecProvider.builder().automatic(true).build());
    CodecRegistry codecRegistry = fromRegistries(MongoClientSettings.getDefaultCodecRegistry(), pojoCodecRegistry);
    MongoClientSettings clientSettings = MongoClientSettings.builder()
        .applyConnectionString(connectionString)
        .codecRegistry(codecRegistry)
        .build();

    return clientSettings;
  }
}
