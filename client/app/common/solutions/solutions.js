import angular from 'angular';
import uiRouter from 'angular-ui-router';
import solutionsComponent from './solutions.component';

let solutionsModule = angular.module('solutions', [
  uiRouter
])

.component('solutions', solutionsComponent)

.name;

export default solutionsModule;
