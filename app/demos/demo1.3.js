import {get,CountTime} from '../utils';

export default async function demo13(){
    console.log('demo1-3');

    const countTime = CountTime();
    countTime.begin();
    const responseA =  await get('a',1000);
    const jsonA = await responseA.json();
    if(jsonA.letter!=='a'){return}

    const responseB =  await get('b',1000);
    const jsonB = await responseB.json();
    if(jsonB.letter!=='b'){return}

    const responseC =  await get('c',1000);
    const jsonC = await responseC.json();
    if(jsonC.letter!=='c'){return}

    const responseD =  await get('d',1000);
    const jsonD = await responseD.json();
    console.log(jsonD.letter);
    countTime.end();
}
