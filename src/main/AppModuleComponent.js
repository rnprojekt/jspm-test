/*
import chai from 'chai';
const assert = chai.assert;
import mocha from 'mocha';
mocha.setup('bdd');
*/

import _ from 'underscore';
import {mix} from 'mixwith';

import StepsComponent from 'reactor2/comp/progress/StepsComponent';

import HeaderFooterLayoutComponent from 'reactor2/layout/HeaderFooterLayoutComponent';

import {template} from './AppModuleComponentTemplate';

const DEFAULTS = {
  id: 'app_module',
  origin: [0,0],
  size: [undefined,undefined],
  align: [0,0],
  template: template,
  properties: {
    backgroundColor: '#fff'
  }
};

export default class extends HeaderFooterLayoutComponent {
  // 0 constructor
  constructor(options) {
    super( _.extend( _.clone( DEFAULTS ), options ) );

    // TODO
  }

  initState() {
    super.initState( {

    });
  }

  initLayout() {
    // TODO: progress component
    let header = new StepsComponent( {
      id: `${this.id()}/steps`,
      origin: [0,0],
      align: [0,0],
      backgroundColor: 'transparent',
      size: [undefined,100],
      states: [ {title: 'one', id: '1', active: true },
                {title: 'two', id: '2'},
                {title: 'three', id: '3'} ]
    } );
    header.show();
    this._options.header = header;

    // let content = new MainContentComponent( {
    //   origin: [0,0],
    //   align: [0,0],
    //   id: 'content'
    // } );
    // this._options.content = content;

  }


} // class Component
