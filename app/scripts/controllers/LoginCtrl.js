(function(){
    function LoginCtrl ($uibModalInstance, $scope, $cookies) {
        $scope.close = function () {
            $uibModalInstance.dismiss();
        };

        $scope.createUsername = function(username) {
            $cookies.put('blocChatCurrentUser', username);
            console.log(username);
            if (username !== undefined) {
  					$uibModalInstance.close();
            }
        }
    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['$uibModalInstance', '$scope', '$cookies', LoginCtrl]);
})();
