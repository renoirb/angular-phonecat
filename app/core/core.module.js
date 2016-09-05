'use strict';

import angular from 'angular';

import './phone/phone.service.js';
import './phone/phone.component.js';

angular
	.module('core', ['core.phone']);
