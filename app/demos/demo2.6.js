import {get,CountTime,chalk,rejectP} from '../utils';

export default async function demo26(){
    console.log('demo2-6');

    try{
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
    
        await rejectP();

        const responseD =  await get('d',1000);
        const jsonD = await responseD.json();
        console.log(jsonD.letter);

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

