// 页面数据用到a,b,c三个接口的数据。
import {get} from '../utils';

export default async function demo32(){
    const responseA = await get('a',1000);
    console.log(responseA);

    const responseB = await get('b',1000);
    console.log(responseB);

    const responseC = await get('c',1000);
    console.log(responseC);
}