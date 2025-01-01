function firstOccurance(value, target) {
  let start = 0;
  let end = value.length - 1;
  let result = -1;
  while (start <= end) {
    let mid = Math.round((start + end) / 2);
    if (value[mid] === target) {
        result = mid
        end = mid - 1;
    } else if (value[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    
  }

  return result;
 
}
nums = [1, 2,3,3,3, 4, 5];
target = 3;
console.log(firstOccurance(nums, target));
