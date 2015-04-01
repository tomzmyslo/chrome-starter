window.onload = function() {
  
  chrome.system.cpu.getInfo(
    function(info) {
      var a = document.getElementById("processor");
      a.innerHTML = info.modelName;
    }
  );
  
  chrome.system.memory.getInfo(
    function(info) {
      var a = document.getElementById("memory");
      var x = (((info.capacity / 1024) / 1024) / 1024)
      a.innerHTML = x + " GB";
    }
  );
  
  chrome.system.network.getNetworkInterfaces(
    function(info) {
      var a = document.getElementById("network");
      a.innerHTML = info[0].name + " @ " + info[0].address;
    }
  );
  
}