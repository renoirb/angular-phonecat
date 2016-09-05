'use strict';

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';

import './core/core.module.js';
import './phone-list/phone-list.component.js';
import './phone-detail/phone-detail.component.js';

import './app.css';
import './app.animations.css';

angular
  .module('phonecatApp', [
      ngAnimate
    ,ngResource
    ,ngRoute
    ,'core'
    ,'phoneList'
    ,'phoneDetail'
  ]);
