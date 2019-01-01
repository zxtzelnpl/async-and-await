import {get,CountTime, chalk} from '../utils';

export default function demo21(){
    console.log('demo2-1');
    const countTime = CountTime();
    countTime.begin();
    get('a',1000)
    .then(res=>res.json())
    .then(json=>{
        if(json.letter==='a'){
            return get('b',1000)
            .then(res=>res.json())
            .then(json=>{
                if(json.letter==='b'){
                    /* 如果错误发生在fetch函数 则需要考虑另外的情况*/
                    throw new Error('I make an error');
                    return get('c',1000)
                    .then(res=>res.json())
                    .then(json=>{
                        if(json.letter==='c'){
                            return get('d',1000)
                            .then(res=>res.json())
                            .then(json=>{
                                console.log(json);
                                countTime.end();
                            })
                        }
                    })
                }
            })
        }
    })
    .catch(error=>{
        chalk({
            text:'I catch the error',
            style:'color:red;'
        })
        console.log(error.message);
        console.trace(error);
    })
}
