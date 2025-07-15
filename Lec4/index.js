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
// function buyProduct(product_name,cb){
//     //some asynchronous operation
//     //1. get product detail from product db
//     //2. write order detail in user db
//     setTimeout(()=>{
//         console.log("order complete");
//         cb();
//     })
// }
buyProduct("Iphone 16",function(err,amount){
    //console.log("product is purchased"); 
    if(err) return console.log(err)
        console.log(amount)
    deductAmount(amount,function(err,message){
        if(err) return console.log(err);
        console.log(message);
    })
})
function buyProduct(product_name,cb){
    let isproduct=null
    for(let i=0;i<products.length;i++){
        if(products[i].name==product_name){
            isproduct=products[i];
        }
    }
    if(!isproduct){
        cb("product is not available",null)
    }
    else{
        cb(null,isproduct.amount)
    }
}
function deductAmount(amount,cb){
    if(account_balance>amount){
        account_balance-=amount;
        cb(null,"amount has been deducted")
    }
    else{
        cb("Low balance",null)
    }
}