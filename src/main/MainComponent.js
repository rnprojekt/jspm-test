/*
import chai from 'chai';
const assert = chai.assert;
import mocha from 'mocha';
mocha.setup('bdd');
*/

import _ from 'underscore';
import {mix} from 'mixwith';

import HeaderComponent from 'reactor2/comp/header/HeaderComponent';
import HeaderFooterLayoutComponent from 'reactor2/layout/HeaderFooterLayoutComponent';

import MainContentComponent from './MainContentComponent';

import {template} from './MainComponentTemplate';

const DEFAULTS = {
  id: 'main',
  origin: [0,0],
  size: [undefined,undefined],
  align: [0,0],
  template: template
};

export default class extends HeaderFooterLayoutComponent {
  // 0 constructor
  constructor(options) {
    super( _.extend( _.clone( DEFAULTS ), options ) );
  }

  initLayout() {
    let header = new HeaderComponent( {
      origin: [0,0],
      align: [0,0],
      id: 'header'
    } );
    this._options.header = header;

    let content = new MainContentComponent( {
      origin: [0,0],
      align: [0,0],
      id: 'content',
      route: this._route,
      dispatch: this._dispatch
    } );
    this._options.content = content;
  } // initLayout

  initRoutes() {
    // register global routes
    this._route('/main/app1', () => {
      this.emit('/main/app1');
      this.show();
    });

    this._route('/main', () => this.show() );
  }

  // override
  show() {
    super.show();
    this._options.header.show();
    this._options.content.show();
  }

  hide() {
    super.hide();
    this._options.header.hide();
    this._options.content.hide();
  }

} // class Component
