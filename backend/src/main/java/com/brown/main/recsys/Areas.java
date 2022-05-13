package com.brown.main.recsys;

import com.brown.main.database.MongoHelper;
import com.google.maps.GeoApiContext;
import com.google.maps.GeocodingApi;
import com.google.maps.errors.ApiException;
import com.google.maps.model.ComponentFilter;
import com.google.maps.model.GeocodingResult;
import com.google.maps.model.LatLng;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * THis is the class that gets the areas from the database and stores them in a list of TreeInfo instances.
 */
public class Areas {

    private List<TreeInfo> areaList;

    /**
     * This is the constructor for the class. It gets the areas from the database and stores them in a list of TreeInfo
     * instances.
     */
    public Areas(){
        MongoDatabase db = MongoHelper.client.getDatabase("notSkiQL");
        ArrayList<Document> areaDocs = db.getCollection("areas").find().into(new ArrayList<Document>());
        this.areaList = new ArrayList<>();
        TreeInfo info;
        for (Document doc: areaDocs){
            info = new TreeInfo();
            info.setName(doc.get("name", String.class));
            info.setLocation(this.getCoords(doc));
            info.setWeather(this.scaleWeather(doc));
            info.setPrice(this.scalePrice(doc));
            info.setsize(this.scaleSize(doc));
            info.setSkillLevel(this.scaleSkill(doc));
            this.areaList.add(info);
        }
    }

    /**
     * This normalizes the weather data from the database.
     * @param doc
     * @return
     */
    public double scaleWeather(Document doc){
        Double snow_quality = doc.get("snow_quality", Double.class);
        Double temperature = doc.get("temperature", Double.class)/50.;
        return snow_quality+temperature/2.;
    }

    /**
     * This gets the coordinates from the google maps API.
     * @param doc
     * @return
     */
    public double[] getCoords(Document doc){
        return this.getCoordsFromZipcode(doc.get("location", String.class));
    }

    /**
     * This uses the google maps API to get the coordinates from a zipcode.
     * @param s
     * @return
     */
    public static double[] getCoordsFromZipcode(String s){
        try{
            GeoApiContext context = new GeoApiContext.Builder().apiKey(getApiKey()).build();
            GeocodingResult[] results = GeocodingApi.newRequest(context).components(ComponentFilter.postalCode(s)).await();
            LatLng location = results[0].geometry.location;
            return new double[]{location.lat, location.lng};
        }catch(InterruptedException e){
            e.printStackTrace();
        }catch(IOException e){
            e.printStackTrace();
        }catch(ApiException e){
            e.printStackTrace();
        }
        return null;
    }

    /**
     * This uses the google maps API to get the coordinates from a address.
     * @param s
     * @return
     */
    public static double[] getCoordsFromAddress(String s){
        try{
            GeoApiContext context = new GeoApiContext.Builder().apiKey(getApiKey()).build();
            GeocodingResult[] results = GeocodingApi.newRequest(context).address(s).await();
            LatLng location = results[0].geometry.location;
            return new double[]{location.lat, location.lng};
        }catch(InterruptedException e){
            e.printStackTrace();
        }catch(IOException e){
            e.printStackTrace();
        }catch(ApiException e){
            e.printStackTrace();
        }
        return null;
    }

    /**
     * This normalizes the size data from the database.
     * @param doc
     * @return
     */
    public double scaleSize(Document doc){
        Double num_trails = ((double)doc.get("num_trails", Integer.class))/162.;
        Double vert_drop = ((double)doc.get("vert_drop", Integer.class))/3050.;
        Double num_lifts = ((double)doc.get("num_lifts", Integer.class))/21.;
        Double acres = ((double)doc.get("acreage", Integer.class))/1509.;
        return (num_trails+vert_drop+num_lifts+acres)/4.;
    }

    /**
     * This normalizes the price data from the database.
     * @param doc
     * @return
     */
    public double scalePrice(Document doc){
        return 1.-((double)doc.get("price", Integer.class)/175);
    }

    /**
     * This normalizes the skill data from the database.
     * @param doc
     * @return
     */
    public double scaleSkill(Document doc){
        return doc.get("difficulty", Double.class);
    }

    /**
     * This helper method returns the list of areas as instances of the TreeInfo class.
     * @return
     */
    public List<TreeInfo> getInfo(){
        return areaList;
    }

    /**
     * This gets the api key from the file.
     * @return
     */
    public static String getApiKey() {
        KeyParser parser = new KeyParser("secret/api.txt");
        return parser.readLine();
    }
}
