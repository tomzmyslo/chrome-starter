window.onload = function() {
  
  chrome.system.cpu.getInfo(
    function(info) {
      $("#processor").html(info.modelName);
    }
  );
  
  chrome.system.memory.getInfo(
    function(info) {
      var capacity = (((info.capacity / 1024) / 1024) / 1024)
      $("#memory").html(capacity + " GB RAM");
    }
  );
  
  chrome.system.network.getNetworkInterfaces(
    function(info) {
      $("#network").html(info[0].name + " @ " + info[0].address);
    }
  );
  
}