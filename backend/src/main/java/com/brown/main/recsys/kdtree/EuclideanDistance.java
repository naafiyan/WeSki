package com.brown.main.recsys.kdtree;

/**
 * Implements DistanceMetric to calculate distance using the Pythagorean Theorem.
 */
public class EuclideanDistance implements DistanceMetric {

  /**
   * Calculates straight-line distance using the pythagorean theorem.
   *
   * @param l0 n-dimensional list of points
   * @param l1 n-dimensional list of points
   * @return distance between points
   * @throws IllegalArgumentException when lists do not have the same dimensions
   */
  @Override
  public double calculateDistance(double[] l0, double[] l1) throws IllegalArgumentException {
    if (l0 == null || l1 == null) {
      throw new IllegalArgumentException("Error: Inputs cannot be null");
    }
    if (l0.length != l1.length) {
      throw new IllegalArgumentException("Error: Points must be of same dimensionality");
    }
    double acc = 0;
    for (int i = 0; i < l0.length; i++) {
      acc += Math.pow(l0[i] - l1[i], 2);
    }
    return Math.sqrt(acc);
  }
}
