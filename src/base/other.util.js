/**
 * 使用iframe进行文件下载
 * @param {*} url - 待下载的文件的Url 
 */
function downloadFileByIFrame(url) {
    if (!window) {
        return;
    }

    if (typeof (window.LM_DOWNLOAD_IFRAME) === "undefined") {
        document.body.appendChild(window.LM_DOWNLOAD_IFRAME = document.createElement("iframe"));
    }

    window.LM_DOWNLOAD_IFRAME.src = url;
    window.LM_DOWNLOAD_IFRAME.style.display = "none";
}

module.exports = {
    downloadFileByIFrame: downloadFileByIFrame
};