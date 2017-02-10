/**
 * Created by bengeos on 1/19/17.
 */
angular
    .module('inspinia')
    .controller('NewsCtrl', function($scope,$timeout,$filter,$state) {
        console.log("controller loaded");
        var user = firebase.auth().currentUser;
        if (!user) {
            console.log("Invalid user");
            $state.go("login.signin");
        }
        var database = firebase.database();
        var databaseRef = database.ref();
        var NewsRef = databaseRef.child("News");

        NewsRef.on('value', function (snapshot) {
            $timeout(function () {
                console.log("Firebase All News Snapshot",snapshot.val());
                $scope.AllNews = snapshot.val()
                console.log("All Newses :",$scope.AllNews);
            })
        });
        $scope.addNewNews = function (newNews) {
            console.log("Add New News: ",newNews);
            var foundNews = {
                Title:newNews.Title,
                Summary:newNews.Summary,
                Detail:newNews.Detail,
                ImageURL:newNews.ImageURL,
                PubDate:$filter('date')(new Date(), 'dd/MM/yyyy')
            };
            console.log("Adding New News: ",foundNews);
            NewsRef.push(foundNews);
        }
    });