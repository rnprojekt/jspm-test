/*
import chai from 'chai';
const assert = chai.assert;
import mocha from 'mocha';
mocha.setup('bdd');
*/

import _ from 'underscore';
import {mix} from 'mixwith';

import Component from 'reactor2/core/Component';
import ModalComponent from 'reactor2/comp/modal/LoadingModalComponent';
import AppModuleComponent from './AppModuleComponent';

import {template} from './MainContentComponentTemplate';

const DEFAULTS = {
  id: 'main_content',
  template: template,
  properties: {
    display: 'table'
  },
  render: {
    template: 'default',
    options: {},
    elements: ['app1']
  }
};

export default class extends Component {
  // 0 constructor
  constructor(options) {

    super( _.extend( _.clone( DEFAULTS ), options ) );

    this.initState();

    // register global routes
    this.initRoutes();

    // start component
    this.transition( 'init' );
  }

  initView() {
    super.initView();

    // add app modules
    this._app_module = new AppModuleComponent( {
      id: 'app_module',
      dispatch: this._dispatch,
      size: [undefined,undefined]
    });
    this.addChild(this._app_module);

    // add loading module
    this._loading_modal = new ModalComponent( {
      id: 'loading_modal',
      dispatch: this._dispatch,
      size: [undefined,undefined]
    });
    this.addChild(this._loading_modal);
  } // initView

  initEvent() {
    this.onClickTarget('app1', (event) => {
      console.debug(event);
      // goto global route
      this._route('/main/app1');
    });

    this.onDispatch( '/main/app1', () => {
      this._loading_modal.transition( 'open' );
      setTimeout( () => {
        this._loading_modal.transition( 'closed' );
        this._app_module.show();
      }, 1000);
    });
  } // initEvent

  onDeploy(event) {
    this.render({
      template: 'default',
      options: {},
      elements: ['app1']
    }, () => {
      this._resolveDeploy("OK");
    });
  } // onDeploy

} // class Component
