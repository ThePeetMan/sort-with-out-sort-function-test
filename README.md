# Merge three sorted collections

TypeScript function that merges three pre-sorted integer arrays into one **ascending** array.

```ts
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

| Input | Order already given |
| --- | --- |
| `collection_1` | max → min (descending) |
| `collection_2` | min → max (ascending), starting at index 0 |
| `collection_3` | min → max (ascending), starting at index 0 |

The implementation never calls a sort function. It walks `collection_1` from the end (where the smallest value is) and walks the other two from the start, always taking the smallest current value.

## Setup

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
git clone https://github.com/ThePeetMan/sort-with-out-sort-function-test.git
cd sort-with-out-sort-function-test
npm install
```

## Run the example

```bash
npm start
```

Example output:

```text
collection_1 (max → min): [ 9, 7, 5, 3, 1 ]
collection_2 (min → max): [ 0, 2, 4, 6, 8 ]
collection_3 (min → max): [ 0, 1, 2, 3 ]
merged (min → max):       [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9 ]
```

## Run the unit tests

```bash
npm test
```

Watch mode while editing:

```bash
npm run test:watch
```

## Compile

```bash
npm run build
```

Compiled files are written to `dist/`.
