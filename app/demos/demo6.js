// 请求数据a，根据返回a的结果请求b。
// 请求数据c，根据返回c的解说请求d。

import {get,CountTime} from '../utils';

export default async function demo(){
    console.log('demo6');
    let countTime = CountTime();
    countTime.begin();
    const a_get = get('a',1000);
    const b_get = get('b',1000);
    await Promise.all([a_get,b_get]);
    countTime.end();
}