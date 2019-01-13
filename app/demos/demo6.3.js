// 请求a和b
// 如果a先返回则显示a。
// 如果b先返回则等待，a返回后显示a,再显示b。
// 错误捕获

import {get,errorThen,CountTime,chalk} from '../utils';

export default async function demo63(){
    console.log('demo6-3');
    let countTime = CountTime();
    countTime.begin();
    const responseA =get('a',3000)
    .then(json => [null, json.letter])
    .catch(err=>[err])
    ;
    const responseB =get('b',2000)
    .then(json=>[null,json.letter])
    .catch(err=>[err])
    ;
    const [errA,letterA] = await responseA;
    if(!letterA){
        chalk({
            text:'request a error',
            style:'color:red'
        })
    }
    else{
        countTime.end(letterA);
    }
    
    const [errB,letterB] = await responseB;
    if (!letterB) {
        chalk({
            text:'request b error',
            style:'color:red'
        })
    }
    else {
        countTime.end(letterB);
    }
}