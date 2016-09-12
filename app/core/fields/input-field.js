(function iife(angular){
    'use strict';

    function InputFieldController() {
        var ctrl = this;
        ctrl.editMode = false;

        ctrl.handleModeChange = function handleModeChange() {
            if (ctrl.editMode) {
                ctrl.onUpdate({value: ctrl.fieldValue});
                ctrl.fieldValueCopy = ctrl.fieldValue;
            }
            ctrl.editMode = !ctrl.editMode;
        }

        ctrl.reset = function resetField() {
          ctrl.fieldValue = ctrl.fieldValueCopy;
        }

        ctrl.$onInit = function() {
            ctrl.fieldValueCopy = ctrl.fieldValue;
            if (!ctrl.fieldType) {
                ctrl.fieldType = 'text';
            }
        }
    }

    angular
      .module('core')
      .component('inputField', {
          templateUrl: 'core/fields/input-field.html',
          controller: InputFieldController,
          bindings: {
            fieldValue: '<',
            fieldType: '@?',
            onUpdate: '&'
          }
      });
})(angular);
