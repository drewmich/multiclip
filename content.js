chrome.storage.sync.get(['copynum'], function(copy){

  let param = copy.copynum;

});
console.log(param);

if (param == 1){

  var pasteText = window.getSelection().toString();
  chrome.storage.sync.set({'clipVal1': pasteText}, function(){
    console.log("ClipVal1 changed");
  });

}
else if (param == 2){

  var pasteText = window.getSelection().toString();
  chrome.storage.sync.set({'clipVal2': pasteText}, function(){
    console.log("ClipVal2 changed");
  });

}
else if (param == 3){

  var pasteText = window.getSelection().toString();
  chrome.storage.sync.set({'clipVal3': pasteText}, function(){
    console.log("ClipVal3 changed");
  });

}
