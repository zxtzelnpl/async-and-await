// 先请求数据a和b。
// 根据a的返回请求数据c。
// 获得abc的数据渲染页面。
import { get, CountTime} from '../utils';

export default async function demo52(){
    console.log('demo5.2');
    const countTime = CountTime();
    countTime.begin();
    let jsonA = get('a',1000);
    let jsonB = get('b',1000);
    let jsonC = jsonA.then(json=>{
        let stringC = 'c' + json.letter + 'c';
        return get(stringC, 1000);
    });

    let [a,b,c] = await Promise.all([jsonA,jsonB,jsonC]);
    console.log(a,b,c);
    countTime.end();

}