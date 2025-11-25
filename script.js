//your JS code here. If required.

// Step 0: Initial array
let arr = [1, 2, 3, 4];

// Create output div
let body = document.querySelector("body");
let div = document.createElement("div");
div.id = "output";
body.appendChild(div);

// Step 1: Initial Promise - resolves after 3 seconds with the array
const initialPromise = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(arr);       // return the full array after 3 sec
    }, 3000);
  });
};

// Step 2: Filter even numbers (after 1 second)
const filterEvenPromise = (nums) => {
  return new Promise((res) => {
    setTimeout(() => {
      let evens = nums.filter(x => x % 2 === 0);
      res(evens);
    }, 1000);
  });
};

// Step 3: Multiply even numbers by 2 (after 2 seconds)
const multiplyPromise = (nums) => {
  return new Promise((res) => {
    setTimeout(() => {
      let doubled = nums.map(x => x * 2);
      res(doubled);
    }, 2000);
  });
};

// RUN the chain using async/await
async function run() {
  try {
    // Step 1: Wait for 3 seconds
    const data0 = await initialPromise();

    // Step 2: Filter (1 sec)
    const data1 = await filterEvenPromise(data0);
    div.innerHTML = data1;  // Output: 2,4 after 1 sec

    // Step 3: Multiply (2 sec)
    const data2 = await multiplyPromise(data1);
    div.innerHTML = data2;  // Output: 4,8 after total 3 sec

  } catch (e) {
    console.log(e);
  }
}

run();
