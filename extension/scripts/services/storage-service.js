app.factory('storageService', function() {

    this.getLocal = {
        json: function(key) {
            var encodedValue = localStorage.getItem(key);
            var decodedValue = null;
            if (encodedValue) {
                decodedValue = JSON.parse(encodedValue);
            }
            return decodedValue;
        }
    }

    this.setLocal = {
        json: function(key, value) {
            try {
                var encodedValue = JSON.stringify(value);
                localStorage.setItem(key, encodedValue);
            } catch (err) {
                return false;
            }
            finally {
                return true;
            }
        }
    };

    /*
     * Returns the value of a cookie given its name
     * @param {String} cookieName - the name of the cookie to get
     * @param {String} cookiesString (optional) - cookies to pass to extract from
     * @return {String|undefined} the cookie or undefined if it does not exist
    */
    this.getCookie = function (cookieName, cookiesString) {
        var cookieValue;
        // if optional cookies were passed then extract against that
        var cookies = cookiesString ? cookiesString.split(';') : document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var trimmedCookie = cookies[i].match(/^\s*(.*)/)[1];
            if (trimmedCookie.indexOf(cookieName + "=") === 0) {
                cookieValue = trimmedCookie.substring(cookieName.length + 1, trimmedCookie.length);
                break;
            }
        }
        return cookieValue;
    };
    /*
     * Stores a cookie; does not support expiration times.
     * @param {String} cookieName - the name of the cookie to set
     * @param {String} value - the value for the cookie
     * @param {String|undefined} expires (optional) - time to cookie expiration (defaults to 1 week)
    */
    this.setCookie = function (cookieName, value, expires) {
        var cookieStr = cookieName + "=" + value + "; path=/";
        if (!!expires) {
            cookieStr += "; expires=" + expires;
        } else {
            var weekInMs = 1000 * 60 * 60 * 24 * 7;
            expires = new Date(new Date().getTime() + weekInMs);
            cookieStr += "; expires=" + expires;
        }
        document.cookie = cookieStr;
    };

});

