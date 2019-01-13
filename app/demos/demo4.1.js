// 请求数据a，根据返回a的结果请求b。
// 请求数据c，根据返回c的解说请求d。

import { get, CountTime } from '../utils';

export default function demo41() {
    console.log('demo4-1');
    let countTime = CountTime();
    countTime.begin();

    get('a', 1000)
        .then(json => {
            let stringB = json.letter + 'b';
            return get(stringB, 1000)
        })
        .then(res => res.json())
        .then(json => {
            countTime.end(json.letter);
        });

    get('c', 1000)
        .then(json => {
            let stringD = json.letter + 'd';
            return get(stringD, 1000)
        })
        .then(res => res.json())
        .then(json => {
            countTime.end(json.letter);
        });
}