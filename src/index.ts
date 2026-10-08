import { merge } from "./merge.js";

const collection1 = [9, 7, 5, 3, 1];
const collection2 = [0, 2, 4, 6, 8];
const collection3 = [0, 1, 2, 3];

const merged = merge(collection1, collection2, collection3);

console.log("collection_1 (max → min):", collection1);
console.log("collection_2 (min → max):", collection2);
console.log("collection_3 (min → max):", collection3);
console.log("merged (min → max):      ", merged);
