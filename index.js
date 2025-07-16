const fs = require("fs");
const input = process.argv[2];

if (!input) {
    console.error("Error");
    process.exit(1);
}

fs.writeFile("./demo.txt", input, function(err) {
    if (err) return console.error(err);
    console.log(input);
});
