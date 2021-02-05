const fs = require("fs");
const path = require("path");
// Create Directory
fs.mkdir(path.join(__dirname, "test"), (err) => {
  console.log("Creating a directory.");
});

// Write file
fs.writeFile(
  path.join(__dirname, "test", "hello.txt"),
  "Hello world!",
  (err) => {
    if (err) throw err;
    fs.appendFile(
      path.join(__dirname, "test", "hello.txt"),
      "I Love node.",
      () => console.log("File written on...")
    );
  }
);

// Read file
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(`Reading data: ${data}`);
});
