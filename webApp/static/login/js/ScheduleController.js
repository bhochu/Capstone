var app = angular.module('signup', []);

app.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);

app.controller('ScheduleController', function($http, $window, $scope) {

	var vm = this;


	vm.teams = []

	vm.team = []

    vm.sports = []

	vm.formInfo = {};

	vm.index = function() {
	}

	//vm.show = function(admin) {
	//    vm.admin = admin;
	//    console.log(vm.admin);
	//    //return vm.admin;
	//}

	vm.reset = function() {
		vm.formInfo = {};
	}

	vm.getAllTeams = function() {
		$http.get('/team/getAllTeams')
			.then(function success(response) {
				vm.teams = response.data.teams;
			}, function error(response) {
				console.log(response);
				toastr.error("Failure : " + response.data.reason);
			});
	}

	vm.create = function() {
		$http.post('/team/create/', vm.formInfo)
			.then(function success(response) {
				console.log(response);
				toastr.success("Team has been submitted");
				$window.location.href='/student/team/createTeam/';
				//vm.reset();
			},
				function error(response) {
					console.log(response);
					toastr.error("Failure : " + response.data.reason);
				});
	}

	vm.update = function() {
	}

	vm.delete = function() {
	}

    vm.getAllSports = function() {
        $http.get('/sport/getAllSports')
        .then(function success(response) {
            vm.sports = response.data.sports;
        }, function error(response) {
            console.log(response);
            toastr.error("Failure : " + response.data.reason);
        });
    }
});