async function async1() {
    console.log("async1 start");
    
    Promise
    .resolve(async2())
    .then(res=>{
        console.log(res)
        console.log("async1 end");
    })
}

const async2 = function(){
    return new Promise(resolve=>{
        console.log('async2');
        resolve(1);
    })
}

setTimeout(()=>{
    console.log('setTimeout');
})

async1();
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});