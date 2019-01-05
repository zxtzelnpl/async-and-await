"use strict";

var demo = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var res1, res2;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return promise1();

                    case 2:
                        res1 = _context.sent;
                        _context.next = 5;
                        return promise2();

                    case 5:
                        res2 = _context.sent;

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function demo() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);
        return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }
            return step("next");
        });
    };
}