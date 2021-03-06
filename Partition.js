/* 
    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
    Steps:
    1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
    2. Partition the array IN PLACE such that all values less than the pivot
        value are to the left of it and all values greater than the pivot value
        are to the right (not perfectly sorted).
    3. return: the index where the left section of smaller items ends.
    "Choosing a random pivot minimizes the chance that you will encounter
    worst-case O(n^2) performance (always choosing first or last would cause
    worst-case performance for nearly-sorted or nearly-reverse-sorted data).
    Choosing the middle element would also be acceptable in the majority of
    cases."
    https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * Hoare’s partitioning scheme, named for Sir Charles Anthony Richard Hoare,
 * who developed the quicksort algorithm in 1959. It does fewer swaps than
 * other schemes
 * NOTE that in this scheme, the pivot’s final location is not necessarily at
 * the index that was returned (some edge cases).
 * - Time: O(n) linear despite nested loops because we still don't visit an
 *    index more than once.
 * - Space: O(1) constant.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {number} The index where the smaller section ends.
 */
function partition(nums, left = 0, right = nums.length - 1) {
    var middleIdx = Math.floor((left + right) / 2);
    var pivotValue = nums[middleIdx];
    let leftIdx = left;
    let rightIdx = right;
    // console.log(pivotValue);
    

    while(true) {

        while(nums[leftIdx] < pivotValue) {
            leftIdx ++;
            
        }

        while(nums[rightIdx] > pivotValue) {
            rightIdx --;
            
        } 

        if(leftIdx >= rightIdx) {
            return rightIdx;
        }
        
        [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];
        leftIdx ++;
        rightIdx --;
        
        
        
        
    }
}
console.log(partition(nums1));
console.log(partition(nums2));
console.log(partition(nums3));

module.exports = {
    partition,
};

