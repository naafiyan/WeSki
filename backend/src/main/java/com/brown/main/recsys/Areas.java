package com.brown.main.recsys;

import com.brown.main.database.MongoHelper;
import com.brown.main.models.Area;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

public class Areas {

    private ArrayList<TreeInfo> areaList;

    public Areas(){
        MongoDatabase db = MongoHelper.client.getDatabase("notSkiQL");
        ArrayList<Document> areaDocs = db.getCollection("areas").find().into(new ArrayList<Document>());
        for (Document doc: areaDocs){
            TreeInfo info = new TreeInfo();
            info.setLocation(this.getCoords(doc));
            info.setWeather(this.scaleWeather(doc));
            info.setPrice(this.scalePrice(doc));
            info.setsize(this.scaleSize(doc));
            info.setSkillLevel(this.scaleSkill(doc));
        }
    }

    public double scaleWeather(Document doc){
        Double snow_quality = doc.get("snow_quality", Double.class);
        Double temperature = doc.get("temperature", Double.class)/50.;
        return snow_quality+temperature/2.;
    }

    public double[] getCoords(Document doc){

        return new double[]{0.};
    }

    public double scaleSize(Document doc){
        Double num_trails = ((double)doc.get("num_trails", Integer.class))/162.;
        Double vert_drop = ((double)doc.get("vert_drop", Integer.class))/3050.;
        Double num_lifts = ((double)doc.get("num_lifts", Integer.class))/21.;
        Double acres = ((double)doc.get("skiable_acres", Integer.class))/1509.;
        return (num_trails+vert_drop+num_lifts+acres)/4.;
    }

    public double scalePrice(Document doc){
        return 1.-((double)doc.get("price", Integer.class)/175);
    }

    public double scaleSkill(Document doc){
        return doc.get("difficulty", Double.class);
    }

    public List<TreeInfo> getInfo(){
        return areaList;
    }
}
