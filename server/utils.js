exports.waiting = function (time) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve();
        }, time)
    })
}