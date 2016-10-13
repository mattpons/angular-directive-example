(function() {
  'use strict';
  var app = angular.module('myApp', []);

  var peopleList = [{
    id: 'MP674',
    firstName: 'Matt',
    lastName: 'Pons'
  }, {
    id: 'BA543',
    firstName: 'Bob',
    lastName: 'Angulard'
  }, {
    id: 'ES792',
    firstName: 'Edward',
    lastName: 'Scopehands'
  }];

  app.directive("myPersonDirective", function() {
    return {
	  scope: {},
      template: '<div class="row" style="margin: 40px;">' +
				  '<div class="col-xs-8 col-md-3">' +
					'<div class="panel panel-default panel-primary">' +
					  '<div class="panel-heading">People' +
						'<button style="float: right;" class="btn btn-default btn-xs" ng-click="vm.reset()">' +
						  '<i class="glyphicon glyphicon-refresh"></i>' +
						'</button>' +
					  '</div>' +
					  '<div class="panel-body">' +
						'<ul class="list-group" style="list-style: none">' +
						  '<li class="list-group-item" ng-repeat="person in vm.people">' +
							'<button class="btn-danger badge" ng-click="vm.delPerson(person.id)">Delete</button>' +
							'<h4 class="list-group-item-heading">ID: {{ ::person.id }}</h4>' +
							'<p class="list-group-item-text">Name: {{ ::vm.getName(person) }}</p>' +
						  '</li>' +
						'</ul>' +
						'<div ng-if="!vm.people.length">' +
						  '<h1>Where did all of the people go?</h1>' +
						'</div>' +
					  '</div>' +
					'</div>' +
				  '</div>' +
				'</div>',
      controller: 'myController',
      controllerAs: 'vm',
      bindToController: true
    };
  }).controller('myController', function() {
    var vm = this;

    vm.reset = function() {
      vm.people = angular.copy(peopleList);
    }

    vm.reset();

    vm.getName = function(person) {
      return person.firstName + ' ' + person.lastName;
    }

    vm.delPerson = function(id) {
      var index = vm.people.findIndex(function(o) {
        return o.id === id;
      });
      vm.people.splice(index, 1);
    };
  });
}());
