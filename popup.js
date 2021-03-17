$(function(){

  $('#textButt').click(function(){
    console.log("Clicked the button")

    chrome.storage.sync.get(['clipVal'], function(clipboard){

      var newVal = $('#clipText').val();

      chrome.storage.sync.set({'clipVal': newVal}, function(){

        console.log("clipVal set to: " + newVal);

      });

      $('#clipVal').text(newVal);

      $('#clipText').text('test');

    });
  });
});
