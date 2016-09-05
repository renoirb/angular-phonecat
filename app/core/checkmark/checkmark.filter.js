'use strict';

import angular from 'angular';

function CheckmarkFilter() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
}

angular
  .module('core', [])
  .filter('checkmark', CheckmarkFilter);
