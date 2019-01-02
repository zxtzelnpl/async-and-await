export function chalk(contents){
    let texts = '';
    let styles = []
    if(Array.isArray(contents)){
        contents.forEach(content=>{
            const {text,style} = content;
            texts += `%c${text}`;
            styles.push(style);
        })
    }
    else if(typeof contents === 'object'){
        const {text,style} = contents;
        texts = `%c${text}`;
        styles.push(style);
    }
    else{
        texts = '输入格式错误';
        styles = 'color:red;';
    }
    console.log(texts,...styles);
}

export function get(letter,time){
    return fetch(`http://localhost:3000/query/${letter}/${time}`,{
        method: 'GET',
        mode: 'cors',
    })
}

function formateTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}

export function rejectP (text){
    let message ='I make the rejectP';
    if(text){
        message += (' '+ text);
    }
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject({
                message:message
            })
        },1000)
    })
}

export function resolveP(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },1000)
    })
}

export function CountTime(){
    return {
        beginTime:null,
        begin:function(){
            this.beginTime = new Date();
        },
        end:function(mark){
            let endTime = new Date();
            let deltaTime = (endTime - this.beginTime);
            let contents = [
                {
                    text:'使用时间：',
                    style:'color:blue;font-weight:bold;'
                },
                {
                    text:`${deltaTime}ms`,
                    style:'color:red;'
                }
            ];
            if(mark){
                contents.unshift({
                    text:`(${mark})`,
                    style:'color:blue;'
                })
            }
            chalk(contents)
        },
    }
}