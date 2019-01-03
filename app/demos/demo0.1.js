const longTimPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('abc');
    },3000)
});

let foo = async function(){
    console.log(await 'foo');
    let res = await 'foo';
    return res;
}

export default async function demo01(){
    console.log('demo0-1');
    console.log(foo)
    console.log(foo())
    let res = await foo();
    console.log(res);
}