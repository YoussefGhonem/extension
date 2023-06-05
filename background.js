
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ toggle: 'checked' }, function () {
    console.log('The color is false.');
  });
  chrome.storage.sync.set({ counter: '0' }, function () {
    console.log('The counter is 0.');
  });

});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log('Message received:', message);
  if (message == true) {
    var audio_element = document.createElement("audio");
    audio_element.src = "./audio/notification-sound.mp3";
    let value = getCounter();
    let houres = 24 / value;
    let milliseconds = (houres * 60 * 60) * 1000;
    setInterval(audio_element.play(), milliseconds);
  }
});

function startTimer() {

}

function playNotificationSound() {
  ;
}

function getToggle() {
  return chrome.storage.sync.get(["toggle"]);

}
function getCounter() {
  return +chrome.storage.sync.get(["counter"]);
}

