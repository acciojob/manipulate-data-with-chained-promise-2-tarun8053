//your JS code here. If required.

let arr = [1, 2, 3, 4];

let outputDiv = document.getElementById("output");

// FIRST PROMISE → returns even numbers after 1 second
const promise1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let evens = arr.filter(n => n % 2 === 0);
      resolve(evens);
    }, 1000);   // 1 sec
  });
};

// SECOND PROMISE → multiplies by 2 after 2 seconds
const promise2 = (nums) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let doubled = nums.map(n => n * 2);
      resolve(doubled);
    }, 2000);   // 2 sec
  });
};

async function run() {
  try {
    const step1 = await promise1();     // 1 sec
    outputDiv.innerText = step1;        // "2,4"

    const step2 = await promise2(step1);  // +2 sec
    outputDiv.innerText = step2;          // "4,8"

  } catch (err) {
    console.log(err);
  }
}

run();
