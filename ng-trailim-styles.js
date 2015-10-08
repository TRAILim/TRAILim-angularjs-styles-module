/**
 * Created by shaiyerushalmi on 4/29/15.
 * 
 */
(function(window, angular, undefined) {
    'use strict';

    angular.module('ngTrailimStyles', []).
        factory('$trailimStyles', [function() {

        }]);

    /**
     * Angularjs directive to resize the height of an element as percentage of other element
     * 
     * The height is updated on window resize 
     * 
     */

    angular.module('ngTrailimStyles').directive('trResize', ['$window', function ($window) {

        return {
            restrict: 'A',
            link: function(scope, element, attrs){

                /**
                 * Get attributes from the directive
                 *
                 * example:
                 * <div resize percentage-height="10" relative-to-element-selector="#unique_selector">
                 *
                 *
                 * relative-to-element-selector
                 *
                 * optional, default value is the 'body' object             *
                 *
                 *
                 * percentage-height
                 * the height of the object as percent of the element in relative
                 *
                 */
                var percentageHeight = attrs.percentageHeight;
                var relativeToElementSelector = attrs.relativeToElementSelector || 'body';
                var $el = angular.element(relativeToElementSelector);

                var updateHeight = function(){
                    var relativeElementHeight = $el.height();

                    var relativeHeightPx = (relativeElementHeight * percentageHeight / 100) + 'px';

                    element.css('height', relativeHeightPx);
                };

                /**
                 * update height on initiation
                 */
                updateHeight();

                /**
                 * bind window resize event to update height of the elements
                 */

                angular.element($window).resize(function() {

                    updateHeight();
                });
            }

        }

    }]);
})(window, window.angular);
