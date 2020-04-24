'use strict';

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.contextMenus.create({
  id: "copy-extension-id",
  title: "Copy this text",
  contexts: ["all"],
}, function () {

})

chrome.contextMenus.onClicked.addListener(function ({ selectionText }) {
  chrome.storage.sync.get('textList', function (data) {
    const { textList } = data;
    if (textList) {
      textList.unshift(selectionText);
      chrome.storage.sync.set({ textList });
    } else {
      chrome.storage.sync.set({ textList: [selectionText] });
    }
  });
});
