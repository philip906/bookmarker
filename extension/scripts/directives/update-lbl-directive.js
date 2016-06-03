app.directive('slUpdateLbl', function() {
    return {
        restrict: 'A',
        template:
            '<div data-mode="{{mode}}" class="update-option" ng-click="toggleSelected()">' +
                '<span >{{title}}</span>' +
            '</div>',
        replace: true,
        scope: {
           currentMode: "=slArgCurrentMode",
           nextMode: "@slArgNextMode",
           title: "@slArgTitle",
           defaultMode: "@slArgIsDefaultMode"
        },
        link: function(scope, element, attrs) {
            if (scope.defaultMode == "true") {
                angular.element(element).addClass('selected');
            }

            scope.toggleSelected = function() {
                angular.element(element).parent().children().removeClass('selected');
                angular.element(element).addClass('selected');
                scope.currentMode = scope.nextMode;
            };
        }
    }
});