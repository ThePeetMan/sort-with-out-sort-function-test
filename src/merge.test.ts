import { describe, expect, it } from "vitest";
import { merge } from "./merge.js";

describe("merge", () => {
  it("merges a descending collection with two ascending collections", () => {
    const collection1 = [9, 7, 5, 3, 1];
    const collection2 = [0, 2, 4, 6, 8];
    const collection3 = [0, 1, 2, 3];

    expect(merge(collection1, collection2, collection3)).toEqual([
      0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it("returns an empty array when every collection is empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it("returns the remaining values when two collections are empty", () => {
    expect(merge([5, 3, 1], [], [])).toEqual([1, 3, 5]);
    expect(merge([], [1, 3, 5], [])).toEqual([1, 3, 5]);
    expect(merge([], [], [1, 3, 5])).toEqual([1, 3, 5]);
  });

  it("merges when only one collection is empty", () => {
    expect(merge([4, 2], [1, 3], [])).toEqual([1, 2, 3, 4]);
    expect(merge([], [1, 4], [2, 3])).toEqual([1, 2, 3, 4]);
    expect(merge([4, 1], [], [2, 3])).toEqual([1, 2, 3, 4]);
  });

  it("keeps duplicate values from every collection", () => {
    expect(merge([2, 2, 1], [1, 2], [1, 2, 2])).toEqual([
      1, 1, 1, 2, 2, 2, 2, 2,
    ]);
  });

  it("handles a single element in each collection", () => {
    expect(merge([3], [1], [2])).toEqual([1, 2, 3]);
  });

  it("handles negative numbers and zero", () => {
    expect(merge([1, 0, -5], [-4, -1, 2], [-3, 4])).toEqual([
      -5, -4, -3, -1, 0, 1, 2, 4,
    ]);
  });

  it("does not mutate the input collections", () => {
    const collection1 = [6, 4, 2];
    const collection2 = [1, 3];
    const collection3 = [0, 5];

    merge(collection1, collection2, collection3);

    expect(collection1).toEqual([6, 4, 2]);
    expect(collection2).toEqual([1, 3]);
    expect(collection3).toEqual([0, 5]);
  });
});
