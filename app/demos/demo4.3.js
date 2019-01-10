// 先请求数据a和b。
// 根据a的返回请求数据c。
// 获得abc的数据渲染页面。
import { get, CountTime} from '../utils';

async function getAC(){
    const responseA = await get('a', 1000);

    const string = 'c'+responseA.letter+'c';
    const responseC = await get(string, 1000);
    
    return [responseA,responseC];
}

export default async function demo43(){
    console.log('demo4-3');

    const countTime = CountTime();
    countTime.begin();
    const jsonAC = getAC();
    const jsonB = get('b',1000);

    const [[a, c], b] = await Promise.all([jsonAC, jsonB]);
    console.log(a,b,c);
    countTime.end();
}