import {get,CountTime} from '../utils';

// 请求数据a
// 根据a的结果，请求数据b
// 根据b的结果，请求数据c
// 根据c的结果，请求数据d

export default function demo12(){
    console.log('demo1-2');
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
            return get('d',1000)
        }
    })
    .then(json=>{
        console.log(json);
        countTime.end();
    })
}