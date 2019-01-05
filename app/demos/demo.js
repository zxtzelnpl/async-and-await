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