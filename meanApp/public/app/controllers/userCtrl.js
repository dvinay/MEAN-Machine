/**
 * Created by vinayduvvada on 4/27/16.
 */
(function() {
    angular.module('userCtrl', ['userService'])
        .controller('userController', function(User) {

            var vm = this;
            vm.processing = true;
            // grab all the users at page load
            User.all()
                .success(function(data) {
                // when all the users come back, remove the processing variable
                vm.processing = false;
                // bind the users that come back to vm.users
                vm.users = data;
            });

            vm.deleteUser = function(id) {
                vm.processing = true;
                User.delete(id)
                    .success(function(data) {
                        User.all()
                        .success(function(data) {
                            vm.processing = false;
                            vm.users = data;
                        });
                    });
            };

        })
        .controller('userCreateController', function(User) {
            var vm = this;
            vm.type = 'create';
            // function to create a user
            vm.saveUser = function() {
                vm.processing = true;

                // clear the message
                vm.message = '';

                // use the create function in the userService
                User.create(vm.userData)
                    .success(function(data) {
                        vm.processing = false;
                        // clear the form
                        vm.userData = {};
                        vm.message = data.message;
                });
            };
        })
        .controller('userEditController', function($routeParams, User) {
            var vm = this;
            vm.type = 'edit';
            User.get($routeParams.user_id)
                .success(function(data) {
                    vm.userData = data;
            });
            // function to save the user
            vm.saveUser = function() {
                vm.processing = true;
                vm.message = '';

                // call the userService function to update
                User.update($routeParams.user_id, vm.userData)
                    .success(function(data) {
                        vm.processing = false; // clear the form
                        vm.userData = {};
                        // bind the message from our API to vm.message
                        vm.message = data.message;
                });
            };
        });

})();