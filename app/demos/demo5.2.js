// 先请求数据a。
// 根据a的数据请求b。
// 根据a，b请求c。
import { get, CountTime} from '../utils';

export default async function demo52(){
    console.log('demo5.2');
    const countTime = CountTime();
    countTime.begin();
    let jsonA = await get('a',1000);
    let A = jsonA.letter;
    let jsonB = await get(A+'b',1000);
    let B = jsonB.letter;
    let jsonC = await get(A+B+'c',1000);
    let C = jsonC.letter;

    countTime.end(C);
}