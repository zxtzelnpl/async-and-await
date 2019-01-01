// 页面数据用到a,b,c三个服务器的数据。

import {get,CountTime} from '../utils';

export default async function demo(){
    console.log('demo5');
    let countTime = CountTime();
    countTime.begin();
    const a_get =get('a',1000);
    const b_get =get('b',1000);
    const a = await a_get;
    const b = await b_get;
    const a_json = await a.json();
    const b_json = await b.json();
    console.log(a)
    console.log(a_json)
    console.log(b)
    console.log(b_json)
    countTime.end();
}