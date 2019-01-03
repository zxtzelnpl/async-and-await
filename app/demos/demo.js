const longTimPromise = function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('abc');
        },2000);
    })
};

export default async function demo(){
    console.log('demo');

    let res = await longTimPromise();
    console.log(res);
}