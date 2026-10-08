/**
 * Merges three pre-sorted integer collections into one ascending array.
 *
 * Constraints (given by the caller, not re-checked):
 * - `collection_1` is already sorted from max to min (descending).
 * - `collection_2` and `collection_3` are already sorted from min to max (ascending).
 *
 * Does not call any sort function. Each input is read once with a pointer,
 * so the merge runs in linear time relative to the total number of elements.
 */
export function merge(
  collection_1: readonly number[],
  collection_2: readonly number[],
  collection_3: readonly number[],
): number[] {
  const result: number[] = [];
  const total =
    collection_1.length + collection_2.length + collection_3.length;

  // Smallest remaining value of the descending collection sits at the end.
  let i = collection_1.length - 1;
  let j = 0;
  let k = 0;

  while (result.length < total) {
    const has1 = i >= 0;
    const has2 = j < collection_2.length;
    const has3 = k < collection_3.length;

    let source: 1 | 2 | 3 = 1;
    let smallest = Number.POSITIVE_INFINITY;

    if (has1) {
      source = 1;
      smallest = collection_1[i];
    }
    if (has2 && (!has1 || collection_2[j] < smallest)) {
      source = 2;
      smallest = collection_2[j];
    }
    if (has3 && ((!has1 && !has2) || collection_3[k] < smallest)) {
      source = 3;
      smallest = collection_3[k];
    }

    result.push(smallest);
    if (source === 1) {
      i -= 1;
    } else if (source === 2) {
      j += 1;
    } else {
      k += 1;
    }
  }

  return result;
}
