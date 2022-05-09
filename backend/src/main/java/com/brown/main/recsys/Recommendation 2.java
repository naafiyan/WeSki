package com.brown.main.recsys;

import com.brown.main.recsys.kdtree.BasicComparator;
import com.brown.main.recsys.kdtree.EuclideanDistance;
import com.brown.main.recsys.kdtree.GenericKDTree;

import java.util.List;

public class Recommendation {

    List<String> k_nearest;

    public Recommendation(TreeInfo user){
        GenericKDTree tree = new GenericKDTree(new EuclideanDistance(), new BasicComparator());
        List<TreeInfo> list = new Areas().getInfo();
        for (TreeInfo info: list){
            //Get locations in [lat.,  long.] form
        }
        list.add(user);
        tree.load(list);
        tree.similar(5, user.getName());
    }

    public List<String> getNearest(){
        return k_nearest;
    }
}
