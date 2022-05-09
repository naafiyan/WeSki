package com.brown.main.recsys.kdtree;

/**
 * KD Tree Node interface.
 */
public interface TreeNode {
  /**
   * Returns the right child of the node.
   *
   * @return right child
   */
  TreeNode getRight();

  /**
   * Sets the right child of the node.
   *
   * @param node TreeNode to set as child
   */
  void setRight(TreeNode node);

  /**
   * Sets the left child of the node.
   *
   * @param node TreeNode to set as child
   */
  void setLeft(TreeNode node);

  /**
   * Returns the left child of the node.
   *
   * @return left child
   */
  TreeNode getLeft();

  /**
   * Returns the node's array of values.
   *
   * @return values of the node
   */
  double[] getVals();

  /**
   * Sets the layer of the node so it knows which dimension to sort or search on.
   *
   * @param layer non-negative integer to set as layer
   */
  void setLayer(int layer);

  /**
   * Returns the layer of the node.
   *
   * @return layer of the node
   */
  int getLayer();

  /**
   * Returns the ID of the node.
   *
   * @return id of the node
   */
  String getID();
}
