
import Samsara from 'samsara';
// http://samsarajs.org/docs/render-tree.html#context
const Surface = Samsara.DOM.Surface;
const View = Samsara.Core.View;

// Global router
// import page from 'page';

import Dispatch from 'reactor2/core/Dispatch';
// import RTCio from 'reactor2/core/rtc/RTCio';
import ReactorApp from 'reactor2/ReactorApp';

import LoginComponent from 'reactor2/comp/login/LoginComponent';
import MainComponent from '../main/MainComponent';

// console.log("TODO: jspm install github:paperjs/paper.js@master -o {main: 'dist/paper-core.js'}");

export default class extends ReactorApp {
  constructor(options) {
    super(options);
    this.transition( 'init' );
  }

  initEvent() {
    super.initEvent();
    // this.onDispatch('test', (message) => console.log(`${this.id()} dispatch:`,message) );
    // this.emit('test', {msg: 'msg'});
  }

  initFrontend(callback) {
    // most upper is last

    const main = new MainComponent( {
      id: 'main',
      dispatch: this._dispatch,
      route: this._route
    });
    this.addChild(main);

    const login = new LoginComponent( {
      id: 'login',
      dispatch: this._dispatch,
      route: this._route
    });
    this.addChild(login);

    super.initFrontend(callback);
  }
} // class
