app.service('bookmarkService', function($http, apiService, storageService){
    var baseUrl = 'v1/chrome/bookmark';
    var routes = {
        getAll: baseUrl + '',
        update: baseUrl + ''
    };

    this.getAll = function(callback) {
        var request = $http.get(routes.getAll);
        request.success(function(response) {
            callback(response.data || []);
        })
    };
    this.update = function(bookmarks, callback) {
        var request = $http.post({
            method: "post",
            url: routes.update,
            data: {
                bookmarks: bookmarks
            }
        });
        request.success(function() {
            callback(response.data || []);
        });
    };
});

