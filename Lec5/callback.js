let account_balance=200000;
let products=[{
    name:"samsung",
    amount:70000,
    quantity:6
},
{
    name:"Iphone 16",
    amount:100000,
    quantity:2
}]    
function buyProduct(product_name){
    return new Promise((resolve,reject)=>{
    let isproduct=null
    for(let i=0;i<products.length;i++){
        if(products[i].name==product_name){
            isproduct=products[i];
        }
    }
    if(!isproduct){
        return reject("Not available")
    }
    else{
        return resolve(isproduct.amount)
    }
})  
}
function deductAmount(amount){
    return new Promise((resolve,reject)=>{
        if(account_balance>amount){
        account_balance-=amount;
        return resolve("Product purchased")
    }
    else{
        return reject("Low balance")
    }
})
}
// buyProduct("Iphone 16").then((data)=>{
//     return deductAmount(data)
// })
// .then((message)=>{
//     console.log(message)
//     console.log(account_balance);
// })
// .catch((err)=>{
//     console.log(err)
// })
async function myfun(){
    try{
        let amount = await buyProduct("Iphone 16")
        let message=await deductAmount(amount)
        console.log(message)
    }
    catch(error){
        console.log(error)
    } 
}
console.log(myfun())
console.log("start")
console.log("end")