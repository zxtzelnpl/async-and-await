import {get,CountTime,chalk,rejectP} from '../utils';

// 没有意义，等待删除

const ControllPromise = function(){
    let promise = null;
    let stop;
    let end;
    promise = new Promise((resolve,reject)=>{
        end = ()=>{
            chalk({
                text:'end',
                style:'color:blue;'
            })
            resolve('end')
        };
        stop = ()=>{
            chalk({
                text:'stop',
                style:'color:red;'
            })
            reject('stop')
        };
    });
    promise.end = end;
    promise.stop = stop;
    return promise;
}

export default async function demo27(){
    console.log('demo2-7');

    try{
        const countTime = CountTime();
        countTime.begin();

        let controlPromise1 = ControllPromise(); 
        let controlPromise2 = ControllPromise(); 
        let controlPromise3 = ControllPromise(); 
        let controlPromise4 = ControllPromise(); 

        setTimeout(function(){ controlPromise1.end() },1000)
        setTimeout(function(){ controlPromise2.end() },2000)
        setTimeout(function(){ controlPromise3.end() },3000)
        setTimeout(function(){ controlPromise4.stop() },4000)

        let get1 = await controlPromise1;
        console.log('get:',get1);
        let get2 = await controlPromise2;
        console.log('get:',get2);
        let get3 = await controlPromise3;
        console.log('get:',get3);
        let get4 = await controlPromise4;
        console.log('get:',get4);

        countTime.end();
    }
    catch(error){
        chalk({
            text:'I catch the error',
            style:'color:red;'
        })
        console.log(error.message);
        console.trace(error);
    }
}
