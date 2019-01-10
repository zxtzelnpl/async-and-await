import {get,CountTime, chalk, rejectP} from '../utils';

// 调试出现的函数名不准确 	Object.then.then.then.then.then.catch.error

export default function demo25(){
    console.log('demo2-5');
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
            return rejectP('rejectP after c')
        }
    })
    .then(t=>{
        return get('d',1000)
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
