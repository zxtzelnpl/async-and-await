import {get,CountTime} from '../utils';

let foo = async function(){
    console.log(await 'yes');
    let res = await 'foo';
    return res;
}

export default async function demo0(){
    console.log('demo0');
    console.log(foo)
    console.log(foo())
    let res = await foo();
    console.log(res);
}