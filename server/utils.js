exports.waiting = function (time) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve();
        }, time)
    })
}

exports.getMode = function(args){
    let index = args.indexOf('--mode');
    let mode = args[index+1]||'development';
    return mode;
}