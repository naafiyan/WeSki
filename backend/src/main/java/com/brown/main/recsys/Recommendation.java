package com.brown.main.recsys;

import com.brown.main.recsys.kdtree.BasicComparator;
import com.brown.main.recsys.kdtree.EuclideanDistance;
import com.brown.main.recsys.kdtree.GenericKDTree;
import com.google.firebase.database.core.utilities.Tree;

import java.util.List;

/**
 * This class is used to recommend a ski mountain.to a user.
 */
public class Recommendation {

    List<String> k_nearest;

    /**
     * This constructor generates the recommendation for the user given a list of areas and a user.
     * @param user The user for which the recommendation is generated.
     * @param trees The list of areas to search in.
     */
    public Recommendation(TreeInfo user, List<TreeInfo> trees){
        GenericKDTree tree = new GenericKDTree(new EuclideanDistance(), new BasicComparator());
        List<TreeInfo> list=trees;
        for (TreeInfo info: list){
            Double dist = TreeInfo.calDistance(user.getLocation()[0], user.getLocation()[1], info.getLocation()[0], info.getLocation()[1]);
            info.setDistance(1-(dist/250.));
            //Get locations in [lat.,  long.] form
        }
        list.add(user);
        tree.load(list);
        this.k_nearest = tree.similar(5, user.getName());
    }

    /**
     * This method returns the list of areas to recommend.
     * @return
     */
    public List<String> getNearest(){
        return k_nearest;
    }
}
