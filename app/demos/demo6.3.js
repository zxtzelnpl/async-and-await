// 请求数据a，根据返回a的结果请求b。
// 请求数据c，根据返回c的解说请求d。

import { get, CountTime } from '../utils';

async function getOne(){
    const reponseA = await get('a', 1000);
    const jsonA = await reponseA.json();
    const stringB = jsonA.letter + 'b';
    const reponseB = await get(stringB, 1000);
    const jsonB = await reponseB.json();
    return jsonB.letter;
}

async function getTwo(){
    const reponseC = await get('c', 1000);
    const jsonC = await reponseC.json();
    const stringD = jsonC.letter + 'd';
    const reponseD = await get(stringD, 1000);
    const jsonD = await reponseD.json();
    return jsonD.letter;
}

export default async function demo63() {
    console.log('demo6-3');

    let countTime = CountTime();
    countTime.begin();
    const reults = await Promise.all([getOne(),getTwo()]);
    countTime.end(reults.join(','));
}