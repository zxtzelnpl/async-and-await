// 语法标准还不确定

export default async function demo71() {
    console.log('demo7-1');
    async function async1() {
        console.log("async1 start");
        await async2();
        console.log("async1 end");
    }
    async function async2() {
        console.log('async2');
    }
    async1();
    new Promise(function (resolve) {
        console.log("promise1");
        resolve();
    }).then(function () {
        console.log("promise2");
    });
}
