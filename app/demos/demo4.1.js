// 先请求a
// 用a的请求数据请求b
// 用请求a和请求b的到的数据请求c

export default function demo(){
    console.log('demo3');

    async function async1() {
        console.log('a');
        await async2();
        console.log('b');
    }

    async function async2(){
        console.log('c')
    }

    async1();

    new Promise(function(resolve){
        console.log('d');
        resolve();
    }).then(function(){
        console.log('e')
    })
}