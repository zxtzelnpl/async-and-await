import {get,noFunction,errorThen,error404,error500,CountTime, chalk} from '../utils';

// 1. 在本链中抛出错误。 ---> 可以捕获到位置
// 2. 在外链同步中抛出错误。---> 可以捕获到位置
// 3. 在外链异步中抛出错误。---> 可以捕获到位置
// 4. 抛出404或500错误。 ---> 
export default function demo21(){
    console.log('demo2-1');
    const countTime = CountTime();
    countTime.begin();
    get('a',1000)
    .then(json=>{
        if(json.letter==='a'){
            return get('b',1000)
            .then(json=>{
                if(json.letter==='b'){
                    return get('c',1000)
                    .then(json=>{
                        if(json.letter==='c'){
                            return get('d',1000)
                            .then(json=>{
                                /* 如果错误发生在fetch函数 则需要考虑另外的情况*/
                                throw new Error('I make an error');
                                console.log(json);
                                countTime.end();
                            })
                        }
                    })
                }
            })
        }
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
