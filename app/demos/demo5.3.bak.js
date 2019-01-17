// 先请求数据a。
// 根据a的数据请求b。
// 根据a，b请求c。
import { get, CountTime} from '../utils';

async function getAC(){
    const responseA = await get('a', 1000);

    const string = 'c'+responseA.letter+'c';
    const responseC = await get(string, 1000);
    
    return [responseA,responseC];
}

export default async function demo53(){
    console.log('demo5-3');

    const countTime = CountTime();
    countTime.begin();
    const jsonAC = getAC();
    const jsonB = get('b',1000);

    const [[a, c], b] = await Promise.all([jsonAC, jsonB]);
    console.log(a,b,c);
    countTime.end();
}