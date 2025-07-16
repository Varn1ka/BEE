const fs = require("fs");
const input = process.argv[2];

fs.writeFile("./demo.txt",input,function(err){
    if(err)return console.log(err);
    console.log(input)
})