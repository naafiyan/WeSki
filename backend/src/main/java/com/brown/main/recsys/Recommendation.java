package com.brown.main.recsys;

import com.brown.main.recsys.kdtree.BasicComparator;
import com.brown.main.recsys.kdtree.EuclideanDistance;
import com.brown.main.recsys.kdtree.GenericKDTree;
import com.google.firebase.database.core.utilities.Tree;

import java.util.List;

public class Recommendation {

    List<String> k_nearest;

    public Recommendation(TreeInfo user){
        GenericKDTree tree = new GenericKDTree(new EuclideanDistance(), new BasicComparator());
        List<TreeInfo> list = new Areas().getInfo();
        for (TreeInfo info: list){
            Double dist = TreeInfo.calDistance(user.getLocation()[0], user.getLocation()[1], info.getLocation()[0], info.getLocation()[1]);
            info.setDistance(dist);
            //Get locations in [lat.,  long.] form
        }
        list.add(user);
        tree.load(list);
        this.k_nearest = tree.similar(5, user.getName());
    }

    public List<String> getNearest(){
        return k_nearest;
    }
}
