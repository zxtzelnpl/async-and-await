// 请求数据a，根据返回a的结果请求b。
// 请求数据c，根据返回c的解说请求d。

import { get, CountTime } from '../utils';

async function getOne(done){
    const reponseA = await get('a', 1000);
    const stringB = reponseA.letter + 'b';
    const reponseB = await get(stringB, 1000);
    done(reponseB.letter);
}

async function getTwo(done){
    const reponseC = await get('c', 1000);
    const stringD = reponseC.letter + 'd';
    const reponseD = await get(stringD, 1000);
    done(reponseD.letter);
}

export default function demo43() {
    console.log('demo4-3');

    let countTime = CountTime();
    countTime.begin();
    getOne(countTime.end.bind(countTime));
    getTwo(countTime.end.bind(countTime));
}