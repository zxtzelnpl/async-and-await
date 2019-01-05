import {get,noFunction,errorThen,error404,error500,CountTime,chalk} from '../utils';

// 1. 在本链中抛出错误。 ---> 可以捕获到位置
// 2. 在外链同步中抛出错误。---> 可以捕获到位置
// 3. 在外链异步中抛出错误。---> 可以捕获到位置
// 4. 抛出404或500错误。 ---> 无法捕获404和500错误
export default function demo22(){
    console.log('demo2-2');
    const countTime = CountTime();
    countTime.begin();
    get('a',1000)
    .then(json=>{
        if(json.letter==='a'){
            return get('b',1000)
        }
    })
    .then(json=>{
        if(json.letter==='b'){
            return get('c',1000)
        }
    })
    .then(json=>{
        if(json.letter==='c'){
            throw new Error('I make an error');
            return get('d',1000)
        }
    })
    .then(json=>{
        console.log(json);
        countTime.end();
    })
    .catch(error=>{
        chalk({
            text:'I catch the error',
            style:'color:red;'
        })
        console.log(error.message);
        console.trace(error);
    })
}

