package com.brown.main.recsys;

import com.brown.main.database.MongoHelper;
import com.brown.main.models.Area;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import java.util.ArrayList;
import java.util.List;

public class Areas {

    private ArrayList<TreeInfo> areaList;

    public Areas(){
        MongoDatabase db = MongoHelper.client.getDatabase("notSkiQL");
        MongoCollection<Area> areas = db.getCollection("areas", Area.class);
        FindIterable<Area> docs = areas.find();
        for (Area doc: docs){
            TreeInfo info = new TreeInfo();
            info.setWeather(this.scaleWeather(doc));
            info.setPrice(this.scalePrice(doc));
            info.setsize(this.scaleSize(doc));
            info.setSkillLevel(this.scaleSkill(doc));
        }
    }

    public double scaleWeather(Area doc){
        return 1.0;
    }

    public double scaleSize(Area doc){
        return 1.0;
    }

    public double scalePrice(Area doc){
        return 1.0;
    }

    public double scaleSkill(Area doc){
        return 1.0;
    }

    public List<TreeInfo> getInfo(){
        return areaList;
    }
}
