/**
 * Created by vinayduvvada on 4/26/16.
 */
(function() {
    angular.module('userApp', [
        //ngAnimate to add animations to all of our Angular directives (specifically ngShow/ngHide)
        'ngAnimate',
        //app.routes will be the routing for our application
        'app.routes',
        'authService',
        'mainCtrl',
        'userCtrl',
        'userService'
    ]);
})();
