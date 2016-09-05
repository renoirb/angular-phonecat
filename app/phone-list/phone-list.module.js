'use strict';

import angular from 'angular';

import '../core/phone/phone.service.js';

import './phone-list.component.js';

angular
  .module('phoneList', [
      'core.phone'
  ]);
