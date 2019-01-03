// 请求a和b
// 如果a先返回则显示a。
// 如果b先返回则等待，a返回后显示a,再显示b。

import {get,CountTime} from '../utils';

export default async function demo52(){
    console.log('demo5-2');
    let countTime = CountTime();
    countTime.begin();
    const responseA =get('a',2000).then(res=>res.json());
    const responseB =get('b',1000).then(res=>res.json());
    const jsonA = await responseA;
    countTime.end(jsonA.letter);
    const jsonB = await responseB;
    countTime.end(jsonB.letter);
}