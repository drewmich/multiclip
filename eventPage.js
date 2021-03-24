var contextMenuItem1 = {
  "id": "one_c",
  "title": "copy 1",
  "contexts": ["selection"]
};

var contextMenuItem2 = {
  "id": "two_c",
  "title": "copy 2",
  "contexts": ["selection"]

};

var contextMenuItem3 = {
  "id": "three_c",
  "title": "copy 3",
  "contexts": ["selection"]

};

var contextMenuItem11 = {
  "id": "one_p",
  "title": "paste 1",
  "contexts": ["editable"]
};

var contextMenuItem22 = {
  "id": "two_p",
  "title": "paste 2",
  "contexts": ["editable"]

};

var contextMenuItem33 = {
  "id": "three_p",
  "title": "paste 3",
  "contexts": ["editable"]

};

chrome.contextMenus.create(contextMenuItem1)
chrome.contextMenus.onClicked.addListener(function(clickData){
  if (clickData.menuItemId == "one_c" && clickData.selectionText){

    chrome.storage.sync.set({'copynum': 1});

    chrome.tabs.executeScript(null, {
      code: 'var param = 1'
    }, function() {
      chrome.tabs.executeScript(null, {file: './content.js'});
    });

  }
})

chrome.contextMenus.create(contextMenuItem2)
chrome.contextMenus.onClicked.addListener(function(clickData){
  if (clickData.menuItemId == "two_c" && clickData.selectionText){

    chrome.storage.sync.set({'copynum': 2});

    chrome.tabs.executeScript(null, {
      code: 'var param = 2'
    }, function() {
      chrome.tabs.executeScript(null, {file: './content.js'});
    });

  }
})

chrome.contextMenus.create(contextMenuItem3)
chrome.contextMenus.onClicked.addListener(function(clickData){
  if (clickData.menuItemId == "three_c" && clickData.selectionText){

    chrome.storage.sync.set({'copynum': 3});

    chrome.tabs.executeScript(null, {
      code: 'var param = 3'
    }, function() {
      chrome.tabs.executeScript(null, {file: './content.js'});
    });

  }
})

chrome.contextMenus.create(contextMenuItem11)
chrome.contextMenus.onClicked.addListener(function(clickData){
  if (clickData.menuItemId == "one_p"){

      chrome.storage.sync.set({'pastenum': 1});

      chrome.tabs.executeScript(null, {
        code: 'var param = 1'
      }, function() {
        chrome.tabs.executeScript(null, {file: './paste.js'});
      });

  }
})

chrome.contextMenus.create(contextMenuItem22)
chrome.contextMenus.onClicked.addListener(function(clickData){
  if (clickData.menuItemId == "two_p"){

    chrome.storage.sync.set({'pastenum': 2});

    chrome.tabs.executeScript(null, {
      code: 'var param = 2'
    }, function() {
      chrome.tabs.executeScript(null, {file: './paste.js'});
    });

  }
})

chrome.contextMenus.create(contextMenuItem33)
chrome.contextMenus.onClicked.addListener(function(clickData){
  if (clickData.menuItemId == "three_p"){

    chrome.storage.sync.set({'pastenum': 3});

    chrome.tabs.executeScript(null, {
      code: 'var param = 3'
    }, function() {
      chrome.tabs.executeScript(null, {file: './paste.js'});
    });

  }
})
