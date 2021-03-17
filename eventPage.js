var contextMenuItem1 = {
  "id": "one",
  "title": "1",
  "contexts": ["selection"]
};

var contextMenuItem2 = {
  "id": "one_c",
  "title": "copy",
  "parentId":"one"
};

chrome.contextMenus.create(contextMenuItem1)
chrome.contextMenus.onClicked.addListener(function(clickData){
  if (clickData.menuItemId == "one" && clickData.selectionText){
    chrome.storage.sync.get([])
  }
})
