// 页面数据用到a,b,c三个接口的数据。
import {get,CountTime} from '../utils';

export default async function demo34(){
    console.log('demo3-4')
    let countTime = CountTime();

    countTime.begin();
    const jsons = await Promise.all([
        get('a',1000),
        get('b',1000),
        get('c',1000)
    ]);

    console.log(jsons)

    countTime.end();
}