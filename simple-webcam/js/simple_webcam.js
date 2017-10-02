'user strict';

// VARIABLES
// ---------
// Variables are in global scope so we can look at them through debuggers
var video = document.getElementById('video');

var windowUrl = window.URL || window.webkitURL;

navigator.getMedia = navigator.getUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.msGetUserMedia;

var constraints = {
  video: true
};

// getUserMedia CALLBACKS
// ----------------------
function successCallback(stream) {
  console.log("Getting the media stream succeded!", stream);
  video.src = windowUrl.createObjectURL(stream);
}

function errorCallback(error) {
  console.log("Getting the media stream failed: ", error);
}

navigator.getMedia(constraints, successCallback, errorCallback);
