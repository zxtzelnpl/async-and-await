console.log('./app/main.js');

import _ from 'lodash';
import demo1 from './demos/demo1';
import demo2 from './demos/demo2';

function component(){
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    demo2();


    return element;
}

document.getElementById('app').appendChild(component());