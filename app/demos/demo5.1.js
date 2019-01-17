// 先请求数据a。
// 根据a的数据请求b。
// 根据a，b请求c。
import { get, CountTime} from '../utils';

export default function demo51(){
    console.log('demo5.1');
    const countTime = CountTime();
    countTime.begin();
    get('a',1000)
    .then(json=>{
        let A = json.letter;
        get(A+'b',1000)
        .then(json=>{
            let B = json.letter;
            get(A+B+'c',1000)
            .then(json=>{
                let C = json.letter;
                countTime.end(C);
            })
        })
    });
}