const fs = require("fs");
console.log(fs);
console.log("start");

setImmediate(() => {
    console.log("setimmediate");

})

setTimeout(() => {
    console.log("setTimeout");
}, 0);


fs.readFile("demo.txt","utf-8",(data)=>{
    
    console.log("file read");
    console.log(data);
})

function someTask(){
    return new Promise((resolve,reject)=>{
        resolve("promise")
    })
}
someTask().then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

process.nextTick(()=>{
    console.log("next tick")
})
console.log("end");