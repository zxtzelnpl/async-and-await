// 先请求a
// 用a的请求数据请求b
// 用请求a和请求b的到的数据请求c
import {get} from '../utils';

export default async function demo43(){
    console.log('demo4-3')

    const responseA = await get('a',1000);
    const jsonA = await responseA.json();
    const markA = jsonA.letter;

    const stringB = markA+'b';
    const responseB = await get(stringB,1000);
    const jsonB = await responseB.json();
    const markB = jsonB.letter;

    const string = markA+markB;
    const responseC =await get(string,1000);
    const jsonC = await responseC.json();
    console.log(jsonC);
}