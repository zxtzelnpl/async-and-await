


export default function demo8(){
    console.log('demo9');

    new Promise(resolve => {


        resolve(1)
    })
    .then(t=>{
        let number = 1;
        number();
        console.log('then:'+1);
    })
    .catch(e => {
        console.log(e)
    })
}