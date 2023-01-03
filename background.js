chrome.runtime.onInstalled.addListener(async() => {
    let url = chrome.runtime.getURL('hello.html');
    let tab = await chrome.tabs.create({ url });
    console.log(`created tab ${tab.id}`);
})