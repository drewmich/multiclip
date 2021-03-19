$(function(){

  chrome.storage.sync.get(['clipVal1'], function(clipboard){

    $('#clipVal1').text(clipboard.clipVal1);

  });

  chrome.storage.sync.get(['clipVal2'], function(clipboard){

    $('#clipVal2').text(clipboard.clipVal2);

  });

  chrome.storage.sync.get(['clipVal3'], function(clipboard){

    $('#clipVal3').text(clipboard.clipVal3);

  });

  

  $('#textButt1').click(function(){
    console.log("Clicked the button 1")

    chrome.storage.sync.get(['clipVal1'], function(clipboard){

      var newVal1 = $('#clipText1').val();

      chrome.storage.sync.set({'clipVal1': newVal1}, function(){

        console.log("clipVal1 set to: " + newVal1);

      });

      $('#clipVal1').text(newVal1);

      $('#clipText1').text('test');

    });
  });

  $('#textButt2').click(function(){
    console.log("Clicked the button 2")

    chrome.storage.sync.get(['clipVal2'], function(clipboard){

      var newVal2 = $('#clipText1').val();

      chrome.storage.sync.set({'clipVal2': newVal2}, function(){

        console.log("clipVal2 set to: " + newVal2);

      });

      $('#clipVal2').text(newVal2);

      $('#clipText2').text('test');

    });
  });

  $('#textButt3').click(function(){
    console.log("Clicked the button 3")

    chrome.storage.sync.get(['clipVal3'], function(clipboard){

      var newVal3 = $('#clipText1').val();

      chrome.storage.sync.set({'clipVal3': newVal3}, function(){

        console.log("clipVal3 set to: " + newVal3);

      });

      $('#clipVal3').text(newVal3);

      $('#clipText3').text('test');

    });
  });
});
