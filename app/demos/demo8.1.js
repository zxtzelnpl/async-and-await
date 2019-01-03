// fetch abort 方法。
export default function demo81() {
    console.log('demo8-1');

    let controller = new AbortController();
    let signal = controller.signal;
    console.log(signal)
    fetch(`http://localhost:3000/query/a/1000`, {
        method: 'GET',
        mode: 'cors',
        signal: signal
    })
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
    })
    .catch(err=>{
        console.log(err)
    });
    
    controller.abort();
    console.log(signal)
}