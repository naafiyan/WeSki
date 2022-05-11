package com.brown.main.recsys.kdtree;

/**
 * An interface that defines the distance metric for KD-tree searches.
 */
public interface DistanceMetric {
  /**
   * Calculates distance between l0 and l1.
   *
   * @param l0 array 1 to find distance
   * @param l1 array 2 to find distance
   * @return distance between the points
   */
  double calculateDistance(double[] l0, double[] l1);
}
