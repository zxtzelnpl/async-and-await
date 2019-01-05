import {get,CountTime} from '../utils';

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
