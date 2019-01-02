// 页面数据用到a,b,c三个接口的数据。
import {get} from '../utils';

export default async function demo32(){
    const responseA = await get('a',1000);
    const jsonA = await responseA.json();
    console.log(jsonA);

    const responseB = await get('b',1000);
    const jsonB = await responseB.json();
    console.log(jsonB);

    const responseC = await get('c',1000);
    const jsonC = await responseC.json();
    console.log(jsonC);
}