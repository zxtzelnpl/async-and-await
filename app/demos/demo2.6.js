import {get,CountTime,chalk,rejectP} from '../utils';

// 可以精确的显示当前报错的函数

export default async function demo26(){
    console.log('demo2-6');

    try{
        const countTime = CountTime();
        countTime.begin();
        const responseA =  await get('a',1000);
        if(responseA.letter!=='a'){return}
    
        const responseB =  await get('b',1000);
        if(responseB.letter!=='b'){return}
    
        const responseC =  await get('c',1000);
        if(responseC.letter!=='c'){return}
    
        await rejectP();

        const responseD =  await get('d',1000);
        console.log(responseD.letter);

        countTime.end();
    }
    catch(error){
        chalk({
            text:'I catch the error',
            style:'color:red;'
        })
        console.log(error.message);
        console.trace(error);
    }

}

