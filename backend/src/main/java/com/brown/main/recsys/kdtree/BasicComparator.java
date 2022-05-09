package com.brown.main.recsys.kdtree;

import java.util.Comparator;

/**
 * A basic comparator to pair with the BasicNode to demo KD tree functionality.
 */
public class BasicComparator implements Comparator<TreeNode> {
  private int layer;

  /**
   * This is the constructor. For some reason Checkstyle wanted a header comment here.
   */
  public BasicComparator() {
    this.layer = 0;
  }

  /**
   * Compares the TreeNodes based on the nth dimension of their values, where n is the layer % num
   * layers. This allows the KD tree to alternate which dimension it splits the data on
   *
   * @param o1 node 1 to compare
   * @param o2 node 2 to compare
   * @return -1 if o1 less than o2 else 1
   */
  @Override
  public int compare(TreeNode o1, TreeNode o2) {
    if (o1.getVals()[this.layer % o1.getVals().length]
        < o2.getVals()[this.layer % o2.getVals().length]) {
      return -1;
    } else if (o1.getVals()[this.layer % o1.getVals().length]
        == o2.getVals()[this.layer % o2.getVals().length]) {
      return 0;
    }
    return 1;
  }

  /**
   * Sets the layer for the comparator.
   *
   * @param layer layer to set comparator's layer to
   */
  public void setLayer(int layer) {
    this.layer = layer;
  }
}
