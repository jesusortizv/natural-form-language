import angular from 'angular';
import uiRouter from 'angular-ui-router';
import naturalComponent from './natural.component';

let naturalModule = angular.module('naturalForm', [
  uiRouter
])

.component('naturalForm', naturalComponent)

.name;

export default naturalModule;
