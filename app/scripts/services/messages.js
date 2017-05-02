(function(){
    function Message($firebaseArray, $cookies){
        var Message ={};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        Message.all = messages;
            return {
                getByRoomId: function(roomId) {
                    return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
                },

                send: function(newMessage, roomId) {
                    messages.$add({
                    username: $cookies.get('blocChatCurrentUser'),
                    content: newMessage,
                    sentAt: firebase.database.ServerValue.TIMESTAMP,
                    roomId: roomId,
                    });
                }
            }
    };

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
