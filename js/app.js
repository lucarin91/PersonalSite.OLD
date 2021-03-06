"use strict";

angular.module('PersonalSite',[
  'ngRoute',
  'Controllers',
  'Factories'
  ])
.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'html/home.html',
    controller: 'HomeCtrl',
    resolve: {
      me:function(JsonLoader){
        return JsonLoader.get('json/me.json');
      }
    }
  })
  .when('/curriculum', {
    title: 'curriculum',
    templateUrl: 'html/curriculum.html',
    controller: 'CurriculumCtrl',
    resolve: {
      curriculum:function(JsonLoader){
        return JsonLoader.get('json/curriculum.json');
      },
      skills:function(JsonLoader){
        return JsonLoader.get('json/skills.json');
      }
    }
  })
  .when('/project',{
    title: 'project',
    templateUrl: 'html/project.html',
    controller: 'ProjectCtrl',
    resolve: {
      projects:function(JsonLoader){
        return JsonLoader.get('json/projects.json');
      }
    }
  })
  .when('/contact',{
    title: 'contact',
    templateUrl: 'html/contact.html',
    controller: 'ContactCtrl',
    resolve: {}
  })
  .otherwise({
    redirectTo: '/'
  });
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
}]);
