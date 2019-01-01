import {
    chalk
} from './utils';
import _ from 'lodash';
import demo0 from './demos/demo0';
import demo11 from './demos/demo1.1';
import demo12 from './demos/demo1.2';
import demo13 from './demos/demo1.3';
import demo21 from './demos/demo2.1';
import demo22 from './demos/demo2.2';
import demo23 from './demos/demo2.3';
import demo24 from './demos/demo2.4';
import demo25 from './demos/demo2.5';
import demo26 from './demos/demo2.6';

chalk([{
        text: '文件地址:',
        style: 'color:blue;font-weight:bold'
    },
    {
        text: '/app/main.js',
        style: 'color:red'
    }
])

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join([
        `<button id="${demo0.name}">demo0</button>`,
        `<button id="${demo11.name}">demo1-1</button>`,
        `<button id="${demo12.name}">demo1-2</button>`,
        `<button id="${demo13.name}">demo1-3</button>`,
        '<hr />',
        `<button id="${demo21.name}">demo2-1</button>`,
        `<button id="${demo22.name}">demo2-2</button>`,
        `<button id="${demo23.name}">demo2-3</button>`,
        `<button id="${demo24.name}">demo2-4</button>`,
        `<button id="${demo25.name}">demo2-5</button>`,
        `<button id="${demo26.name}">demo2-6</button>`,
    ], '<br>');

    return element;
}



document.getElementById('app').appendChild(component());
document.getElementById('app').addEventListener('click', function (e) {
    const id = e.target.id;
    switch (id) {
        case demo0.name:
            demo0();
            break;
        case demo11.name:
            demo11();
            break;
        case demo12.name:
            demo12();
            break;
        case demo13.name:
            demo13();
            break;
        case demo21.name:
            demo21();
            break;
        case demo22.name:
            demo22();
            break;
        case demo23.name:
            demo23();
            break;
        case demo24.name:
            demo24();
            break;
        case demo25.name:
            demo25();
            break;
        case demo26.name:
            demo26();
            break;
        default:
            return;
    }

})