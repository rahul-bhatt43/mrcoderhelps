# mrcoderhelps

A set of helper functions that we use on a daily basis in JavaScript development. This package includes various utility functions for common tasks, making your development process easier and more efficient.

## Installation

You can install the package via npm:

```bash
npm install mrcoderhelps
```

## Usage

Here's how you can use the helper functions in your project:

```typescript
import {
  debounce,
  throttle,
  deepClone,
  mergeObjects,
  capitalize,
  isEmpty,
  randomInt,
  formatDate,
  getQueryParams,
  isEmail,
  flattenArray,
  uniqueArray,
  delay,
  camelCase,
  formatNumber,
  generatePassword,
} from "mrcoderhelps";

// Examples
const debouncedFunc = debounce({
  func: () => console.log("Debounced!"),
  wait: 1000,
});
const throttledFunc = throttle({
  func: () => console.log("Throttled!"),
  limit: 1000,
});

const obj = { a: 1 };
const clonedObj = deepClone({ obj });

const mergedObj = mergeObjects({ target: { a: 1 }, source: { b: 2 } });

const capitalizedStr = capitalize({ str: "hello" });

const isEmptyValue = isEmpty({ value: [] });

const randomNum = randomInt({ min: 1, max: 10 });

const formattedDate = formatDate({ date: new Date(), format: "MM/DD/YYYY" });

const queryParams = getQueryParams({
  url: "http://example.com?param1=value1&param2=value2",
});

const isValidEmail = isEmail({ email: "test@example.com" });

const flattenedArr = flattenArray({
  arr: [
    [1, 2],
    [3, 4],
  ],
});

const uniqueArr = uniqueArray({ arr: [1, 2, 2, 3, 4, 4] });

delay({ ms: 1000 }).then(() => console.log("Delayed for 1 second"));

const camelCasedStr = camelCase({ str: "hello-world" });

const formattedNum = formatNumber({ number: 1234567.89 });

const password = generatePassword({
  length: 12,
  includeNumbers: true,
  includeSymbols: true,
  includeUppercase: true,
});
```

## Functions

### debounce

Creates a debounced function that delays the execution of the given function until after the specified wait time has elapsed.

### throttle

Creates a throttled function that only invokes the provided function at most once per every specified limit of milliseconds.

### deepClone

Creates a deep clone of the given object.

### mergeObjects

Merges two objects into a single object.

### capitalize

Capitalizes the first letter of a string.

### isEmpty

Checks if a value is empty. It supports arrays, objects, and strings.

### randomInt

Generates a random integer between the specified min and max values.

### formatDate

Formats a date object into a string based on the given format.

### getQueryParams

Extracts query parameters from a URL and returns them as an object.

### isEmail

Validates if a given string is a valid email address.

### flattenArray

Flattens a nested array into a single-level array.

### uniqueArray

Returns a new array with unique elements from the original array.

### delay

Returns a promise that resolves after a specified number of milliseconds.

### camelCase

Converts a string to camelCase.

### formatNumber

Formats a number with specified decimal places, decimal point, and thousands separator.

### generatePassword

Generates a random password with specified options for length, including numbers, symbols, and uppercase letters.

## License

This project is licensed under the MIT License.

## Author

Rahul Bhatt(aka Mr.Coder)

```

```
