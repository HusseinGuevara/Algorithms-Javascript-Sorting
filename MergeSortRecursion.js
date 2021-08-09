/* 
Stable sort.
Visualization:
https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
Space: O(n) linear
steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
        - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
        
        previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
        can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Merges two already sorted arrays into a new sorted array.
 * - Time: O(n + m) -> O(n) linear n = left.length, m = right.length.
 *    Every item from each array is visited once.
 * - Space: O(n + m) -> O(n) linear.
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(leftArr, rightArr) {
    var mergedArr = [];
    var leftIdx = 0;
    var rightIdx = 0;
    var current = 0;

    while( current < leftArr.length + rightArr.length) {
        const unmerged1 = leftArr[leftIdx] === undefined ? Infinity : leftArr[leftIdx];
        const unmerged2 = rightArr[rightIdx] === undefined ? Infinity : rightArr[rightIdx];

        if(unmerged1 < unmerged2) {
            mergedArr.push(unmerged1);
            leftIdx ++;
        } else {
            mergedArr.push(unmerged2);
            rightIdx ++;
        }
        current ++;
    }
    return mergedArr;
}
console.log(merge(sortedA1, sortedB1));
console.log(merge(sortedA2, sortedB2));
console.log(merge(sortedA3, sortedB3));
console.log(merge(sortedA4, sortedB4));

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
    if (nums.length === 1) {
      // return once we hit an array with a single item
        return nums;
    }

    const middle = Math.floor(nums.length / 2); // get the middle item of the array rounded down
    const left = nums.slice(0, middle); // items on the left side
    const right = nums.slice(middle); // items on the right side

    return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort(sortedB3))