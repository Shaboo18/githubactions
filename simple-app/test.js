const greet = require("./index");

// test بسيط
if (greet("Ali") !== "Hello Ali!") {
  console.error("Test failed!");
  process.exit(1);
} else {
  console.log("Test passed!");
}
