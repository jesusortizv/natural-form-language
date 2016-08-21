import angular from 'angular';
import Header from './header/header';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Search from './search/search';
import NaturalForm from './natural-form/natural';
import Solutions from './solutions/solutions';
import Footer from './footer/footer';
import './common.scss';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Header,
  Search,
  NaturalForm,
  Solutions,
  Footer,
])

.name;

export default commonModule;
