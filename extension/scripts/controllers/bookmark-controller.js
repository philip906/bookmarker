app.controller("BookmarkController", function($scope, bookmarkService) {

	$scope.bookmarks = [];
	$scope.dirtyBookmarks = [];
	$scope.currentMode = 'view';

	$scope.init = function() {
		$scope.getAll(function(bookmarks) {
			$scope.bookmarks = bookmarks;
		});
	}

	$scope.getAll = function(callback) {
		bookmarkService.getAll(callback);
	}

	$scope.update = function() {
		bookmarkService.update(dirtyBookmarks, function() {
			$scope.dirtyBookmarks = [];
		});
	}

	$scope.init();

});
