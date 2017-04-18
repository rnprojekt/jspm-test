
import 'samsara/dist/samsara.css!';
import 'spectre/dist/spectre.min.css!';
import 'main.css!';

// import './test/reactor2';

import Samsara from 'samsara';

let Surface = Samsara.DOM.Surface;
let Context = Samsara.DOM.Context;

let surface = new Surface({
    content : 'hello',      // innerHTML
    size : [100, 100],      // [width, height] in pixels
    properties : {          // CSS style properties
        background : 'red'
    }
});

let context = new Context();

context.add(surface);
// let root = window.document.createElement('div');
// root.setAttribute("id", "root");
// window.document.body.appendChild(root);

context.mount(document.querySelector('#main'));


// TODO: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching

/*
import page from 'page';
import Dispatch from 'reactor2/core/Dispatch';
import SiteApp from './apps/SiteApp';

// Global dispatch
let dispatch = new Dispatch();
let app = new SiteApp( {
  id: 'app',
  dispatch: dispatch,
  route: page
} );
*/
