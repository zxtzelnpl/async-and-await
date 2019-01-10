import {get,CountTime} from '../utils';

// 请求数据a
// 根据a的结果，请求数据b
// 根据b的结果，请求数据c
// 根据c的结果，请求数据d

export default async function demo13(){
    console.log('demo1-3');

    const countTime = CountTime();
    countTime.begin();
    const responseA =  await get('a',1000);
    if(responseA.letter!=='a'){return}

    const responseB =  await get('b',1000);
    if(responseB.letter!=='b'){return}

    const responseC =  await get('c',1000);
    if(responseC.letter!=='c'){return}

    const responseD =  await get('d',1000);
    console.log(responseD.letter);
    countTime.end();
}
