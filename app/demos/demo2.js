export default async function demo(){
    console.log('demo2');

    const response  = await fetch('http://localhost:3000/query/a/1000',{
        method: 'GET',
        mode: 'cors',
    });
    console.log(response);

    const json = response.json();

    console.log(json);

    return json;
}
