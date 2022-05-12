package com.brown.main.recsys;

/**
 * This is the TreeInfo class, which models the user and areas as items in the database.
 */
public class TreeInfo {

    private String name;
    private double skillLevel;
    private double weather;
    private double price;
    private double size;
    private double distance;
    private double[] location;

    /**
     * This is the constructor for the TreeInfo class.  It takes in the name, skill level, weather, price, size, and distance.
     */
    public  TreeInfo(){
    }

    /**
     * This method takes in two pairs of latitude and longitude and returns the distance between them in miles.
     * @return
     */
    public static double calDistance(double lat1, double lon1, double lat2, double lon2) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            double theta = lon1 - lon2;
            double dist = Math.sin(Math.toRadians(lat1)) * Math.sin(Math.toRadians(lat2)) + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) * Math.cos(Math.toRadians(theta));
            dist = Math.acos(dist);
            dist = Math.toDegrees(dist);
            dist = dist * 60 * 1.1515;
            return dist;
        }
    }

    /**
     * Below are the getters and setters for the fields.  I'm not going to bother commenting all of them but they exist.
     * @param coords
     */

    public void setLocation(double[] coords){
        this.location=coords;
    }

    public void setName(String name){
        this.name=name;
    }

    public void setSkillLevel(double level){
        this.skillLevel=level;
    }

    public void setDistance(double dist){
        this.distance=dist;
    }

    public void setWeather(double weather){
        this.weather=weather;
    }

    public void setPrice(double price){
        this.price=price;
    }

    public void setsize(double size){
        this.size=size;
    }


    public String getName(){
        return name;
    }

    public double getSkill(){
        return skillLevel;
    }

    public double getWeather(){
        return weather;
    }

    public double getPrice(){
        return price;
    }

    public double getNum(){
        return size;
    }

    public double getDistance(){
        return distance;
    }

    public double[] getLocation() {
        return location;
    }
}
