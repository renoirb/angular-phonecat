'use strict';

function PhoneController () {
    var ctrl = this;

    ctrl.delete = function phoneDelete() {
      ctrl.onDelete({phone: ctrl.phone});
    };

    ctrl.update = function phoneUpdate(property, value) {
      ctrl.onUpdate({phone: ctrl.phone, prop: property, value: value});
    };
}

// Define the `core.phone` module
angular
  .module('core.phone', ['ngResource'])
  .component('phone', {
    templateUrl: 'core/phone/phone.template.html',
    controller: PhoneController,
    bindings: {
      phone: '=',
      onDelete: '&',
      onUpdate: '&'
    }
  });;
