package com.brown.main.recsys.kdtree;

import com.brown.main.recsys.TreeInfo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * A generic kd-tree class that models a KD tree.
 */
public class GenericKDTree{
  private DistanceMetric metric;
  private Map<String, Double> metrics;
  private Map<String, double[]> values;
  private TreeNode root;
  private BasicComparator comparator;

  /**
   * Constructor for the KD tree.
   *
   * @param metric     distance metric to use for calculating nearest neighbors
   * @param comparator comparator to use for building and searching the tree
   */
  public GenericKDTree(DistanceMetric metric, BasicComparator comparator) {
    this.metric = metric;
    this.comparator = comparator;
    this.values = new HashMap<>();
  }

  /**
   * Loads a list of TreeInfos into a KD tree.
   * @param collection list of TreeInfos to build the tree
   */
  public void load(List<TreeInfo> collection) {
    Map<String, double[]> toLoad = new HashMap<>();
    for (TreeInfo info : collection) {
      toLoad.put(info.getName(), new double[] {info.getDistance(), info.getNum(), info.getPrice(), info.getSkill(), info.getWeather()});
    }
    this.loadUp(toLoad);
  }

  /**
   * Helper method for load
   * @param toLoad map to load tree from
   */
  public void loadUp(Map<String, double[]> toLoad) {
    ArrayList<TreeNode> nodes = new ArrayList<>();
    for (Map.Entry<String, double[]> entry : toLoad.entrySet()) {
      this.values.put(entry.getKey(), entry.getValue());
      nodes.add(new GenericNode(entry.getKey(), entry.getValue()));
    }
    this.create(nodes);
  }

  /**
   * Calculates the k most similar nodes to the node with the given id
   * @param k number of similar nodes to find
   * @param id id of the node to find neighbors of
   * @return list of ids of the closest neighbors
   */
  public List<String> similar(int k, String id) {
    //Check inputs for validity
    if (k < 0) {
      System.out.println("ERROR: k cannot be negative");
      return null;
    }

    //Instantiate new metrics map
    this.metrics = new HashMap<>();

    if (!this.values.containsKey(id)) {
      System.out.println("ERROR: Student with given ID number not found in database");
      return null;
    }

    GenericNode targetNode = new GenericNode(id, this.values.get(id));

    ArrayList<TreeNode> neighbors = new ArrayList<>();
    //Find and print k nearest neighbors
    this.neighborFinder(this.getRoot(), targetNode, neighbors, k + 1);

    List<String> closest = new ArrayList<>();
    for (int i = 1; i < neighbors.size(); i++) {
      closest.add(neighbors.get(i).getID());
    }

    //Calculate distance from TargetNode to each node
    for (Map.Entry<String, double[]> entry : this.values.entrySet()) {
      this.metrics.put(entry.getKey(), this.metric.calculateDistance(entry.getValue(),
          targetNode.getVals()));
    }
    return closest;
  }

  /**
   * Prints the kd-tree.
   */
  public void print() {
    System.out.println(this.preOrderTraverse(this.root));
  }

  /**
   * Retrieves the distance metric of this kd tree.
   * @return a map.
   */
  public Map<String, Double> getMetrics() {
    return this.metrics;
  }

  /**
   * Recursive method that builds the KD tree using a comparator.
   *
   * @param nodes list of treenodes from which to build the tree
   * @param layer layer of the tree the construction is on. this begins at
   * @return root node of the tree
   */
  public TreeNode buildTree(List<TreeNode> nodes, int layer) {
    // Base case: only one node in the list. In this case, return it since it is a leaf
    if (nodes.size() == 1) {
      return nodes.get(0);
    }

    // Sort nodes list by distance using the comparator
    Collections.sort(nodes, this.comparator);

    // Find center node in the list
    int median = (nodes.size() / 2);
    TreeNode centerNode = nodes.get(median);
    centerNode.setLayer(layer);

    // Initialize list of left children of the root node
    List<TreeNode> leftChildren = new ArrayList<TreeNode>();
    for (int i = 0; i < median; i++) {
      leftChildren.add(nodes.get(i));
    }

    // Initialize list of right children of the root node
    List<TreeNode> rightChildren = new ArrayList<TreeNode>();
    for (int i = median + 1; i < nodes.size(); i++) {
      rightChildren.add(nodes.get(i));
    }

    // Recur on right and left children to build the tree
    if (leftChildren.size() > 0) {
      this.comparator.setLayer(layer + 1);
      centerNode.setLeft(this.buildTree(leftChildren, layer + 1));
    }
    if (rightChildren.size() > 0) {
      this.comparator.setLayer(layer + 1);
      centerNode.setRight(this.buildTree(rightChildren, layer + 1));
    }

    return centerNode;
  }

  /**
   * Calls buildTree to create the tree from a list of TreeNodes.
   *
   * @param list list of TreeNodes from which to instantiate the tree
   */
  public void create(List<TreeNode> list) {
    this.root = this.buildTree(list, 0);
  }

  /**
   * Returns the root node of the tree.
   *
   * @return root
   */
  public TreeNode getRoot() {
    return this.root;
  }

  /**
   * Recursive function that uses the kd-tree nearest neighbors algorithm to calculate the nearest
   * neighbors of the given node.
   *
   * @param currentNode root node to begin the search from
   * @param targetNode  node to search for nearest neighbors of
   * @param neighbors   empty arraylist to be filled with neighbors
   * @param k           number of neighbors to find. Must be greater than 0 and less than
   *                    the number of nodes in the tree minus one
   */
  public void neighborFinder(TreeNode currentNode, TreeNode targetNode,
                             ArrayList<TreeNode> neighbors, int k) {
    //Calculate distance from current node to target
    double distance = this.metric.calculateDistance(currentNode.getVals(), targetNode.getVals());

    //If the neighbors array is unfilled, add current node
    if (neighbors.size() < k) {
      //Todo: factor into helper method
      this.insert(distance, neighbors, targetNode, currentNode);

      //If a neighbor is farther than the current node, add the node to the neighbors list
    } else if (distance
        < this.metric.calculateDistance(neighbors.get(neighbors.size() - 1).getVals(),
        targetNode.getVals())) {
      this.insert(distance, neighbors, targetNode, currentNode);
      neighbors.remove(neighbors.size() - 1);
    }

    int currLayer = currentNode.getLayer();

    //If distance between target point and furthest neighbor is greater than the axis distance
    //between current node and target point, recur on both children (if they exist)
    if (this.metric.calculateDistance(neighbors.get(neighbors.size() - 1).getVals(),
        targetNode.getVals()) > Math.abs(
        neighbors.get(neighbors.size() - 1).getVals()[currLayer % currentNode.getVals().length]
            - targetNode.getVals()[currLayer % currentNode.getVals().length])) {
      if (currentNode.getLeft() != null) {
        this.neighborFinder(currentNode.getLeft(), targetNode, neighbors, k);
      }
      if (currentNode.getRight() != null) {
        this.neighborFinder(currentNode.getRight(), targetNode, neighbors, k);
      }

    } else {
      //If current node's axis coordinate is less than target's axis coordinate, recur on right
      //child (if it exists)
      if (currentNode.getVals()[currLayer % currentNode.getVals().length]
          < targetNode.getVals()[currLayer % currentNode.getVals().length]
          && currentNode.getRight() != null) {
        this.neighborFinder(currentNode.getRight(), targetNode, neighbors, k);

        //If current node's axis coordinate is greater than target's axis coordinate, recur on
        //left child (if it exists
      } else if (currentNode.getVals()[currLayer % currentNode.getVals().length]
          > targetNode.getVals()[currLayer % currentNode.getVals().length]
          && currentNode.getLeft() != null) {
        this.neighborFinder(currentNode.getLeft(), targetNode, neighbors, k);
      }
    }
  }

  /**
   * Helper function that inserts the current node into the neighbors list at the proper location
   * so that it remains ordered by distance.
   *
   * @param distance    distance from currentNode to targetNode
   * @param neighbors   list of TreeNodes to insert currentNode into
   * @param targetNode  the target node of the nearest neighbors search
   * @param currentNode the node to insert into neighbors
   */
  private void insert(double distance, List<TreeNode> neighbors, TreeNode targetNode,
                      TreeNode currentNode) {
    int index = 0;
    for (int i = 0; i < neighbors.size(); i++) {
      if (distance
          > this.metric.calculateDistance(neighbors.get(i).getVals(), targetNode.getVals())) {
        index++;
      }
    }
    neighbors.add(index, currentNode);
  }

  /**
   * Returns the tree in string form to be printed to the terminal.
   *
   * @param node tree root to begin search from
   * @return String to print to the terminal
   */
  public String preOrderTraverse(TreeNode node) {

    if (node == null) {
      return "";
    }

    StringBuilder sb = new StringBuilder();
    sb.append(node.getID() + Arrays.toString(node.getVals()));

    String pointerRight = "└──";
    String pointerLeft = (node.getRight() != null) ? "├──" : "└──";

    traverseNodes(sb, "", pointerLeft, node.getLeft(), node.getRight() != null);
    traverseNodes(sb, "", pointerRight, node.getRight(), false);

    return sb.toString();
  }

  /**
   * Helper function for the print functionality that recursively goes through the tree and adds
   * the proper things to the StringBuilder to print out.
   *
   * @param sb              string builder that contains the root's printable values
   * @param padding         empty string
   * @param pointer         string that, when printed, indicates either a left or right child
   * @param node            current node in the search
   * @param hasRightSibling true if node has a right sibling (ie, its parent also has a right
   *                        child) else false
   */
  public void traverseNodes(StringBuilder sb, String padding, String pointer, TreeNode node,
                            boolean hasRightSibling) {
    if (node != null) {
      sb.append("\n");
      sb.append(padding);
      sb.append(pointer);
      sb.append(node.getID() + Arrays.toString(node.getVals()));

      StringBuilder paddingBuilder = new StringBuilder(padding);
      if (hasRightSibling) {
        paddingBuilder.append("│  ");
      } else {
        paddingBuilder.append("   ");
      }

      String paddingForBoth = paddingBuilder.toString();
      String pointerRight = "└──";
      String pointerLeft = (node.getRight() != null) ? "├──" : "└──";

      traverseNodes(sb, paddingForBoth, pointerLeft, node.getLeft(), node.getRight() != null);
      traverseNodes(sb, paddingForBoth, pointerRight, node.getRight(), false);
    }
  }
}
