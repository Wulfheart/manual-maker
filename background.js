
chrome.action.onClicked.addListener((tab) => {
    console.log(tab)
    console.log("Clicked")
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content-script.js']
    });
});
