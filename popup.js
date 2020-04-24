'use stricy'
chrome.storage.sync.get('textList', function (data) {
  const { textList } = data;
  document.getElementById("copy1").innerHTML = textList[0];
  document.getElementById("copy2").innerHTML = textList[1];
  document.getElementById("copy3").innerHTML = textList[2];
  document.getElementById("copy4").innerHTML = textList[3];
  document.getElementById("copy5").innerHTML = textList[4];
});