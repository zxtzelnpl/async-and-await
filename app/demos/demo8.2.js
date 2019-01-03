// fetch abort 方法。
import { get, CountTime,chalk } from '../utils';

const _fetch = (function (get) {
    return function (url, time) {
        let abort = null;
        const abort_promise = new Promise((resolve, reject) => {
            abort = () => {
                reject('abort.');
                chalk({
                    text: 'abort done.',
                    style:'color:skyblue;'
                });
            };
        });
        const promise = Promise.race([
            get(url, time),
            abort_promise
        ]);
        promise.abort = abort;
        return promise;
    };
})(get);

export default function demo82(){
    console.log('demo8-2');

    let p = _fetch('a',3000);
    p.then(function (res) {
        console.log('response:', res);
    }, function (e) {
        console.log('error:', e);
    });
    p.abort();
}