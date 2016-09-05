'use strict';

import angular from 'angular';
import ngResource from 'angular-resource';

function PhoneController () {
    var ctrl = this;

    ctrl.delete = function phoneDelete() {
        ctrl.onDelete({phone: ctrl.phone});
    };

    ctrl.update = function phoneUpdate(property, value) {
        ctrl.onUpdate({phone: ctrl.phone, prop: property, value: value});
    };
}

angular
  .module('core.phone', [ngResource])
  .component('phone', {
      template: require('./phone.template.html'),
      controller: PhoneController,
      bindings: {
          phone: '=',
          onDelete: '&',
          onUpdate: '&'
      }
  });
