(function(){
    function ModalCtrl(Room, $uibModalInstance, $scope, $cookies) {
        $scope.close = function () {
            $uibModalInstance.dismiss();
        };
        $scope.submit = function (roomName) {
            console.log(Room);
            Room.add(roomName);
            $uibModalInstance.close();
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
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$scope', '$cookies', ModalCtrl]);
})();
