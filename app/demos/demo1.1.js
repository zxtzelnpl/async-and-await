import {get,CountTime} from '../utils';

export default function demo11(){
    console.log('demo1-1');
    const countTime = CountTime();
    countTime.begin();
    get('a',1000)
    .then(json=>{
        if(json.letter==='a'){
            get('b',1000)
            .then(json=>{
                if(json.letter==='b'){
                    get('c',1000)
                    .then(json=>{
                        if(json.letter==='c'){
                            get('d',1000)
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
}
