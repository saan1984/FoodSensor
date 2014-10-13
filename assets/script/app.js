 var FoodSensor ={

        videoPlayer : document.getElementById("video-player"),

        mediaTypeVideo : {video: true},
        /*Returns the user media object*/
        initNavigator : function(){
            navigator.getUserMedia = (
                    navigator.getUserMedia ||
                    navigator.webkitGetUserMedia ||
                    navigator.mozGetUserMedia ||navigator.msGetUserMedia
                    );
            return  navigator.getUserMedia;
        },

        /*Success handler for media load*/
        handleMediaCallback : function(mediaStream){
            var windowURL = window.webkitURL || window.URL;
            FoodSensor.videoPlayer.src= windowURL.createObjectURL(mediaStream);
            FoodSensor.videoPlayer.play();
        },

        /*Error handler for media load*/
        handleErrorCallback : function(error){

        },

        /*Init user media */
        initMedia : function(videoMediaType,
                             callbackMediaLoad,callbackErrorMedia){
            return navigator.getUserMedia(videoMediaType,callbackMediaLoad,callbackErrorMedia)
        }
}
var userMedia =videoMediaType = FoodSensor.mediaTypeVideo,
    callbackMediaLoad = FoodSensor.handleMediaCallback,
    callbackErrorMedia = FoodSensor.handleErrorCallback,
    videoMedia = null;

    FoodSensor.initNavigator();

if (navigator.getUserMedia) {
   videoMedia = FoodSensor.initMedia(userMedia,videoMediaType,
   callbackMediaLoad,callbackErrorMedia);
}else{
   alert("media not supported");
}