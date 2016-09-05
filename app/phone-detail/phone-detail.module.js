
import angular from 'angular';
import ngRoute from 'angular-route';

import '../core/phone/phone.service.js';
import './phone-detail.component.js';

angular.
  module('phoneDetail', [
      ngRoute
      ,'core.phone'
  ]);
