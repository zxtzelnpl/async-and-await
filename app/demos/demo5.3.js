// 请求a和b
// 如果a先返回则显示a。
// 如果b先返回则等待，a返回后显示a,再显示b。

import {get,CountTime} from '../utils';

export default async function demo53(){
    console.log('demo5-3');
    let countTime = CountTime();
    countTime.begin();
    const responseA =get('a',3000)
    .then(res=>res.jso())
    .then(json => [null, json.letter])
    .catch(err=>[err])
    ;
    const responseB =get('b',2000)
    .then(res=>res.jso())
    .then(json=>[null,json.letter])
    .catch(err=>[err])
    ;
    const [errA,letterA] = await responseA;
    if(!letterA){
        console.error('request a error')
    }
    else{
        countTime.end(letterA);
    }
    
    const [errB,letterB] = await responseB;
    if (!letterB) {
        console.error('request b error')
    }
    else {
        countTime.end(letterB);
    }
}