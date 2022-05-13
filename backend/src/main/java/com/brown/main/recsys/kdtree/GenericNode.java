package com.brown.main.recsys.kdtree;

/**
 * Generic TreeNode implementation.
 */
public class GenericNode implements TreeNode {
  private String id;
  private double[] vals;
  private TreeNode leftChild;
  private TreeNode rightChild;
  private int layer;

  /**
   * Constructor for the generic node.
   * @param id id for the node
   * @param vals list of values for the node
   */
  public GenericNode(String id, double[] vals) {
    this.id = id;
    this.vals = vals;
  }

  /**
   * Setters and getters for the fields of the node.
   */

  @Override
  public TreeNode getRight() {
    return this.rightChild;
  }

  @Override
  public void setRight(TreeNode node) {
    this.rightChild = node;
  }

  @Override
  public void setLeft(TreeNode node) {
    this.leftChild = node;
  }

  @Override
  public TreeNode getLeft() {
    return this.leftChild;
  }

  @Override
  public double[] getVals() {
    return this.vals;
  }

  @Override
  public void setLayer(int layer) {
    this.layer = layer;
  }

  @Override
  public int getLayer() {
    return this.layer;
  }

  @Override
  public String getID() {
    return this.id;
  }
}
