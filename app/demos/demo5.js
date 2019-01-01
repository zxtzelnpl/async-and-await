// 请求a和b
// 如果a先返回则显示a。
// 如果b先返回则等待，a返回后显示a,在显示b。

import {get,CountTime} from '../utils';

export default async function demo4(){
    console.log('demo4');
    let countTime = CountTime();
    countTime.begin();
    const a =await get('a',1000);
    const b =await get('b',1000);
    const a_json = await a.json();
    const b_json = await b.json();
    console.log(a)
    console.log(a_json)
    console.log(b)
    console.log(b_json)
    countTime.end();
}