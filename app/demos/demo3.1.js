// 页面数据用到a,b,c三个接口的数据。
import {get,CountTime} from '../utils';

export default function demo31(){
    let countTime = CountTime();

    countTime.begin();
    get('a',1000)
    .then(json=>{
        console.log(json);
        countTime.end('a');
    });

    get('b',1000)
    .then(json=>{
        console.log(json);
        countTime.end('b');
    });

    get('c',1000)
    .then(json=>{
        console.log(json);
        countTime.end('c');
    });   
}