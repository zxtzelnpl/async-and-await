// 函数声明
async function foo1(){}

// 函数表达式
const foo2 = async function(){}

// 对象的方法
let obj = {
    async foo3(){

    }
}

// 箭头函数
const foo4 = async () => {}

// class方法
class Storage{
    constructor(name){
        this.name = name
    }

    async getAvatars(name){
        
    }
}

// 定义个Promise对象
const longTimPromise = function(){

    console.log('longTimePromise begin');
    return new Promise((resolve,reject)=>{
        console.log('before setTimeout');
        setTimeout(()=>{
            console.log('before resolve');
            resolve('abc');
        },1000);
    });
};

export default async function demo(){
    console.log('demo');

    console.log('before await');
    let res = await longTimPromise();
    console.log('after await');
    console.log(res);
}