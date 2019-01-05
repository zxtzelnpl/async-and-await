import {
    chalk
} from './utils';
import _ from 'lodash';
import demo from './demos/demo';
import demo11 from './demos/demo1.1';
import demo12 from './demos/demo1.2';
import demo13 from './demos/demo1.3';

import demo21 from './demos/demo2.1';
import demo22 from './demos/demo2.2';
import demo23 from './demos/demo2.3';
import demo24 from './demos/demo2.4';
import demo25 from './demos/demo2.5';
import demo26 from './demos/demo2.6';
import demo27 from './demos/demo2.7';

import demo31 from './demos/demo3.1';
import demo32 from './demos/demo3.2';
import demo33 from './demos/demo3.3';
import demo34 from './demos/demo3.4';

import demo41 from './demos/demo4.1';
import demo42 from './demos/demo4.2';
import demo43 from './demos/demo4.3';

import demo51 from './demos/demo5.1';
import demo52 from './demos/demo5.2';
import demo53 from './demos/demo5.3';

import demo61 from './demos/demo6.1';
import demo62 from './demos/demo6.2';
import demo63 from './demos/demo6.3';

import demo71 from './demos/demo7.1';

import demo81 from './demos/demo8.2';
import demo82 from './demos/demo8.1';

chalk([{
        text: '文件地址:',
        style: 'color:blue;'
    },
    {
        text: '/app/main.js',
        style: 'color:blue;font-weight:bold'
    }
])

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join([
        `<button id="${demo.name}">demo</button>`,
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
        `<button id="${demo27.name}">demo2-7</button>`,
        '<hr />',
        `<button id="${demo31.name}">demo3-1</button>`,
        `<button id="${demo32.name}">demo3-2</button>`,
        `<button id="${demo33.name}">demo3-3</button>`,
        `<button id="${demo34.name}">demo3-4</button>`,
        '<hr />',
        `<button id="${demo41.name}">demo4-1</button>`,
        `<button id="${demo42.name}">demo4-2</button>`,
        `<button id="${demo43.name}">demo4-3</button>`,
        '<hr />',
        `<button id="${demo51.name}">demo5-1</button>`,
        `<button id="${demo52.name}">demo5-2</button>`,
        `<button id="${demo53.name}">demo5-3</button>`,
        '<hr />',
        `<button id="${demo61.name}">demo6-1</button>`,
        `<button id="${demo62.name}">demo6-2</button>`,
        `<button id="${demo63.name}">demo6-3</button>`,
        '<hr />',
        `<button id="${demo71.name}">demo7-1</button>`,
        '<hr />',
        `<button id="${demo81.name}">demo8-1</button>`,
        `<button id="${demo82.name}">demo8-2</button>`,
    ], '<br>');

    return element;
}



document.getElementById('app').appendChild(component());
document.getElementById('app').addEventListener('click', function (e) {
    const id = e.target.id;
    switch (id) {
        case demo.name:
            demo();
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
        case demo27.name:
            demo27();
            break;
        case demo31.name:
            demo31();
            break;
        case demo32.name:
            demo32();
            break;
        case demo33.name:
            demo33();
            break;
        case demo34.name:
            demo34();
            break;
        case demo41.name:
            demo41();
            break;
        case demo42.name:
            demo42();
            break;
        case demo43.name:
            demo43();
            break;
        case demo51.name:
            demo51();
            break;
        case demo52.name:
            demo52();
            break;
        case demo53.name:
            demo53();
            break;
        case demo61.name:
            demo61();
            break;
        case demo62.name:
            demo62();
            break;
        case demo63.name:
            demo63();
            break;
        case demo71.name:
            demo71();
            break;
        case demo81.name:
            demo81();
            break;
        case demo82.name:
            demo82();
            break;
        default:
            return;
    }

})