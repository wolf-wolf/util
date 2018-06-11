class LM_util_image {
    /**
     * base64图像转Blob对象
     * @param  {String} dataUrl - base64图片
     * @return {object} - Blob对象
     */
    static dataURLtoBlob(dataUrl) {
        let [mime, dataStr] = dataUrl.match(/[^:]*:([^;]*);[^,]*,(.*)/).slice(1);
        return new Blob([Uint8Array.from(window.atob(dataStr).split('').map(value => value.charCodeAt(0)))], {type: mime});
    }

    /**
     * @description 获取图片的Base64码
     * @param {Object} img
     */
    static getImageBase64ByCanvas(img) {
        let canvas = document.createElement('canvas');
        canvas.height = img.height;
        canvas.width = img.width;

        let ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);

        return canvas.toDataURL('image/png');
    }

    /**
     * @description 获取图片的Base64码
     * @param {Object} img
     * @param {Function} callback
     */
    static getImageBase64ByReader(img, callback) {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => {
            callback(reader.result);
        };
    }

    /**
     * 图片加载器
     *
     * @param {Array} imgList 要加载的图片地址列表，['aa/asd.png','aa/xxx.png']
     * @param {Object} config 每个图片加载的超时时间
     *
     * @return {Promise} 返回Promise结果
     */
    static loadImg(imgList = [], config = {step: 300, timeout: 3000}) {
        let total = imgList.length;
        let now = new Date().getTime();
        let images = [];

        for (let i = 0; i < total; i++) {
            if (imgList[i] && imgList[i].trim()) {
                images[i] = new Image();
                images[i].src = imgList[i];
            }
        }

        return new Promise(resolve => {
            if (images.length === 0) {
                resolve();
            }
            let intervalHandler = setInterval(() => {
                let compCount = images.reduce((a, b) => {
                    return +b.complete + a;
                }, 0);

                if (compCount === total || new Date().getTime() - now > config.timeout) {
                    clearInterval(intervalHandler);
                    resolve();
                }
            }, config.step);
        });
    }
}

module.exports = LM_util_image;