'use strict';
var testApp = angular.module('testApp',[]);

testApp.controller('testController',function($scope){
		$scope.contacts=[
		       {
		    	   'name':'Vineet Kumar',
		    	   'contactNumber':'8545856599',
		    		'image':'./image/sumit.jpg'
		       },
		       {
		    	   'name':'Sumit Kumar Sinha',
		    	   'contactNumber':'5462358965',
		    		   'image':'./image/sumit.jpg'
		       }
		];
});