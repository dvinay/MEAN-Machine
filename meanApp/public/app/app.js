/**
 * Created by vinayduvvada on 4/26/16.
 */
(function() {
    angular.module('userApp', [
        'ngAnimate',
        'app.routes',
        'authService',
        'mainCtrl',
        'userCtrl',
        'userService'
    ])
        .config(function($httpProvider) {
        // attach our auth interceptor to the http requests
        $httpProvider.interceptors.push('AuthInterceptor');
    });
})();
