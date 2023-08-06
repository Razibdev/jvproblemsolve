
function customReducer(nums, fn, init) {
    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
}

// Example usage
const nums = [1, 2, 3, 4, 5];
const reducerFunction = (accumulator, currentValue) => accumulator + currentValue;
const initialValue = 0;

const reducedValue = customReducer(nums, reducerFunction, initialValue);
console.log(reducedValue);