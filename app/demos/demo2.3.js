import {get,noFunction,errorThen,error404,error500,CountTime,chalk} from '../utils';

// 1. 在async function中抛出错误。 ---> 可以捕获到位置
// 2. 在外链同步中抛出错误。---> 可以捕获到位置
// 3. 在外链异步中抛出错误。---> 可以捕获到位置
// 4. 抛出404或500错误。 ---> 无法捕获404和500错误

export default async function demo23(){
    console.log('demo2-3');

    try{
        const countTime = CountTime();
        countTime.begin();
        const responseA =  await error500('a',1000);
        if(responseA.letter!=='a'){return}
    
        const responseB =  await get('b',1000);
        if(responseB.letter!=='b'){return}
    
        const responseC =  await get('c',1000);
        if(responseC.letter!=='c'){return}
    
        const responseD =  await get('d',1000);
        console.log(responseD.letter);
        countTime.end();

        throw new Error('I make an error');
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

