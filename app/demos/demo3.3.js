// 页面数据用到a,b,c三个接口的数据。
import {get,CountTime} from '../utils';

export default async function demo33(){
    console.log('demo3-3')
    let countTime = CountTime();

    countTime.begin();
    const getA = get('a',1000);
    const getB = get('b',1000);
    const getC = get('c',1000);
    
    const responseA = await getA;
    const jsonA = await responseA.json();
    console.log(jsonA);

    const responseB = await getB;
    const jsonB = await responseB.json();
    console.log(jsonB);

    const responseC = await getC;
    const jsonC = await responseC.json();
    console.log(jsonC);

    countTime.end();
}