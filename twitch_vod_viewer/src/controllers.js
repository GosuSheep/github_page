var app = angular.module('twitch-vod-viewer',[]);
app.controller('MainController',function MainController($scope,$http){
	$http.jsonp('https://api.twitch.tv/kraken/games/top?limit=20&callback=JSON_CALLBACK').
		success(function(data){
			$scope.games = [];
			grid = 'a';
			$.each(data.top,function(index,value){
				$scope.games[index] = value;
				if (grid=='a'){
					grid='b';
				}else if (grid=='b'){
					grid='c';
				}else if (grid=='c'){
					grid='a';
				}
				$scope.games[index].grid = grid;
			});
		}).error(function(data){
			console.log('Could not get top games');
		});
});

