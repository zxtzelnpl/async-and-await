// 语法标准还不确定

// export default function demo71() {
//     console.log('demo7-1');
//     async function async1() {
//         console.log("async1 start");
        
//         new Promise(resolve=>{
//             async2()
//             .then(res=>{
//                 resolve(res);
//             })
//         })
//         .then(res=>{
//             console.log("async1 end");
//         })
//     }

//     async function async2() {
//         console.log('async2');
//     }

//     setTimeout(()=>{
//         console.log('setTimeout');
//     })

//     async1();
//     new Promise(function (resolve) {
//         console.log("promise1");
//         resolve();
//     }).then(function () {
//         console.log("promise2");
//     });
// }

export default function demo72() {
    console.log('demo7-2');
    async function async1() {
        console.log("async1 start");
        
        new Promise(resolve=>{
            async2()
            .then(res=>{
                resolve(res);
            })
        })
        .then(res=>{
            console.log("async1 end");
        })
    }

    const async2 = function(){
        return new Promise(resolve=>{
            console.log('async2');
            resolve(undefined);
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
}
