// 请求a和b
// 如果a先返回则显示a。
// 如果b先返回则等待，a返回后显示a,在显示b。

import {get,CountTime} from '../utils';

export default function demo51(){
    console.log('demo5');
    let countTime = CountTime();
    countTime.begin();

    const callbacks = {
        index:0,
        array:[],
        fire:function(){
            while(this.array[this.index]){
                countTime.end(this.array[this.index]);
                this.index++;
            }
        }
    }

    get('a',1000)
    .then(res=>res.json())
    .then(json=>{
        callbacks.array[0] = json.letter;
        countTime.end('received a')
        callbacks.fire();
    })
    ;
    get('b',2000)
    .then(res=>res.json())
    .then(json=>{
        callbacks.array[1] = json.letter;
        countTime.end('received b')
        callbacks.fire();
    })
    ;
}