chrome.storage.sync.get(['pastenum'], function(paste){

  let param = paste.pastenum;

});

if (param == 1){

  chrome.storage.sync.get(['clipVal1'], function(paste){

    const input = document.activeElement;

    console.log("clipVal1 is: ", paste.clipVal1);

    const value = input.value;

    const start = input.selectionStart;
    const end = input.selectionEnd;

    input.value = value.slice(0, start) + paste.clipVal1 + value.slice(end);

    input.selectionStart = input.selectionEnd = start + paste.ClipVal1.length;

  })

}
else if (param == 2){

  chrome.storage.sync.get(['clipVal2'], function(paste){

    const input = document.activeElement;

    const value = input.value;

    const start = input.selectionStart;
    const end = input.selectionEnd;

    input.value = value.slice(0, start) + paste.clipVal2 + value.slice(end);

    input.selectionStart = input.selectionEnd = start + paste.ClipVal2.length;

  })

}
else if (param == 3){

  chrome.storage.sync.get(['clipVal3'], function(paste){

    const input = document.activeElement;

    const value = input.value;

    const start = input.selectionStart;
    const end = input.selectionEnd;

    input.value = value.slice(0, start) + paste.clipVal3 + value.slice(end);

    input.selectionStart = input.selectionEnd = start + paste.ClipVal3.length;

  })

}
