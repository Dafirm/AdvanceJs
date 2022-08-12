
// Your code here

function count(numbers) {
    let num = 1;
    while (num < 100000) {
      console.log(numbers);
      num++;
    }
  }
  console.log("Checking first call");
  setTimeout(() => {
    count("counting numbers");
  }, 1000);
  console.log("Done");