'use strict';

import angular from 'angular';

import './phone-list.module.js';
import '../core/phone/phone.component.js';

angular
  .module('phoneList')
  .component('phoneList', {
      template: require('./phone-list.template.html')
      ,controller: ['Phone'
      ,function PhoneListController(Phone) {
          this.phones = Phone.query();
          this.orderProp = 'age';
      }
    ]
  });
