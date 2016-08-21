import template from './header.html';
import controller from './header.controller';
import './header.scss';

let navbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default navbarComponent;
