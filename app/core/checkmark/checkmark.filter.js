
import angular from 'angular';

function CheckmarkFilter() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
}

export default angular.
    module('core', []).
    filter('checkmark', CheckmarkFilter);
