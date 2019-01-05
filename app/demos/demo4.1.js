// 先请求a
// 用a的请求数据请求b
// 用请求a和请求b的到的数据请求c
import {get} from '../utils';

export default function demo41(){
    let markA;

    get('a',1000)
    .then(json=>{
        markA = json.letter;
        let stringB = markA+'b';
        return get(stringB,1000);
    })
    .then(json=>{
        let markB =json.letter;

        let string = markA+markB;
        return get(string,1000);
    })
    .then(json=>{
        console.log(json)
    });
}