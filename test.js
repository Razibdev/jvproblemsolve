
function customReducer(nums, fn, init) {
    // let result = init;
    // for(let i = 0; i< nums.length; i++){
    //     result = fn(result, nums[i]);
    // }
    // return result;
    return nums.reverse().reduceRight((val, num) => fn(val, num), init);
    return  nums.reverse().reduceRight((val, num) => fn(val, num), init)
}

let nums = [1, 2, 3, 4, 5, 6, 7];
const reduceFunction = (result, currentValue) => result * currentValue;
const initialValue = 1;
const reduceValue = customReducer(nums, reduceFunction, initialValue);
console.log(reduceValue);