export default function demo(){
    console.log('demo1');

    fetch('http://localhost:3000/query/a/1000',{
        method: 'GET',
        mode: 'cors',
    })
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
    })
}
