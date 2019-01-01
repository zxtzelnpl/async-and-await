import {get,CountTime} from '../utils';

export default function demo12(){
    console.log('demo1-2');
    const countTime = CountTime();
    countTime.begin();
    get('a',1000)
    .then(res=>res.json())
    .then(json=>{
        if(json.letter==='a'){
            return get('b',1000)
        }
    })
    .then(res=>res.json())
    .then(json=>{
        if(json.letter==='b'){
            return get('c',1000)
        }
    })
    .then(res=>res.json())
    .then(json=>{
        if(json.letter==='c'){
            return get('d',1000)
        }
    })
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
        countTime.end();
    })
}