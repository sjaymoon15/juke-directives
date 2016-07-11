'use strict';

juke.directive("albumList", function(){
	return {
		restrict: "E",
		templateUrl: '/js/albumlist/albumlist.html',
		scope:{
			albums: "="
		},
		link: function(scope){
		  console.log(scope);
		}
	}
})