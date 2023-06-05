//restore previous options
chrome.storage.sync.get(["toggle"], function (result) {
  if (result.toggle == "checked") {
    document.getElementById("toggle").checked = true;
  }
  if (document.getElementById("counter").value) {

  }
  else if (result.toggle == "unchecked") {
    document.getElementById("toggle").checked = false;
  }
  else {
    document.getElementById("toggle").checked = true;
  }
});

chrome.storage.sync.get(["counter"], function (result) {
  if (result.counter != "NaN" || result.counter != null) {
    document.getElementById("counter").value = +result.counter;
  }
  else {
    document.getElementById("counter").value = 0;
  }
});


document.getElementById('toggle').addEventListener("click", function () {
  saveToggleOptions(); //save any changes
});

document.getElementById('counter').addEventListener("input", function () {
  saveCounterOptions(); //save any changes
});

function saveToggleOptions() {
  var state = document.getElementById("toggle").checked ? "checked" : "unchecked";
  chrome.storage.sync.set({ "toggle": state }, function () {
    console.log("saving it as " + state);
  });
}

function saveCounterOptions() {
  let value = document.getElementById("counter").value
  var state = value ? value : 0;
  chrome.storage.sync.set({ "counter": state }, function () {
    console.log("counter saving it as " + state);
  });
  chrome.runtime.sendMessage({ message: true });

}




