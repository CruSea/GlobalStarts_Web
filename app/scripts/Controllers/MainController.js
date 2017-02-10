/**
 * Created by bengeos on 12/1/16.
 */
angular
    .module('inspinia')
    .controller('DashboardCtrl', function($scope) {
        console.log("Log in controller loaded");
        $scope.userSignIn = function (Users) {
            console.log("Sign in");
            console.log(Users);
        }
    });