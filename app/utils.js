export function chalk(contents) {
    let texts = '';
    let styles = []
    if (Array.isArray(contents)) {
        contents.forEach(content => {
            const {
                text,
                style
            } = content;
            texts += `%c${text}`;
            styles.push(style);
        })
    } else if (typeof contents === 'object') {
        const {
            text,
            style
        } = contents;
        texts = `%c${text}`;
        styles.push(style);
    } else {
        texts = '输入格式错误';
        styles = 'color:red;';
    }
    console.log(texts, ...styles);
}

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

function reqeust(url) {
    return fetch(url, {
            method: 'GET',
            mode: 'cors',
        })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            const errortext = codeMessage[response.status] || response.statusText;
            const error = new Error(errortext);
            error.name = response.status;
            error.response = response;
            throw error;
        })
}

export function get(letter, time) {
    return reqeust(`http://localhost:3000/query/${letter}/${time}`)
}

export function error404() {
    return reqeust('http://localhost:3000/error/404')
}

export function error500() {
    return reqeust('http://localhost:3000/error/500')
}

export function noFunction() {
    return a();
}

export function errorThen() {
    return fetch(`http://localhost:3000/query/errorThen/500`, {
            method: 'GET',
            mode: 'cors',
        })
        .then(response => {
            throw new Error('errorThen')
        })
}

function formateTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}

export function rejectP(text) {
    let message = 'I make the rejectP';
    if (text) {
        message += (' ' + text);
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({
                message: message
            })
        }, 1000)
    })
}

export function resolveP() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

export function CountTime() {
    return {
        beginTime: null,
        begin: function () {
            this.beginTime = new Date();
        },
        end: function (mark) {
            let endTime = new Date();
            let deltaTime = (endTime - this.beginTime);
            let contents = [{
                    text: '使用时间：',
                    style: 'color:blue;'
                },
                {
                    text: `${deltaTime}ms`,
                    style: 'color:green;font-weight:bold;'
                }
            ];
            if (mark) {
                contents.unshift({
                    text: `(${mark})`,
                    style: 'color:blue;'
                })
            }
            chalk(contents)
        },
    }
}