chrome.action.onClicked.addListener(async (tab) => {
    let result = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: autoVideo
    });

    console.log(result);
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        let result = await chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: autoVideo
        });

        console.log(result);
    }
});

const autoVideo = () => {
    setInterval(() => {
        let el = document.querySelector('.jw-video')
        el.currentTime = el.duration
    }, 3000)
}
