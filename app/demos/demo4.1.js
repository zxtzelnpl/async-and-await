// 先请求数据a和b。
// 根据a的返回请求数据c。
// 获得abc的数据渲染页面。
import { get, CountTime} from '../utils';

export default function demo41(){
    console.log('demo4.1');
    const countTime = CountTime();
    countTime.begin();
    let promiseA = get('a',1000);
    let promiseB = get('b',1000);
    let promiseC = promiseA.then(json=>{
        let stringC = 'c' + json.letter + 'c';
        return get(stringC,1000);
    });

    Promise.all([promiseA,promiseB,promiseC])
    .then(([a,b,c])=>{
        console.log(a,b,c);
        countTime.end();
    });
}