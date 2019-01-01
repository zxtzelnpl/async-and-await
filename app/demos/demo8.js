export default function demo8(){
    console.log('demo8');

    new Promise(resolve => {
        setTimeout(()=>{
            resolve(1)
        },1000)
    })
    .then(t=>{
        console.log('then:'+1);
    })
    .catch(e => {
        console.log(e)
    })
}