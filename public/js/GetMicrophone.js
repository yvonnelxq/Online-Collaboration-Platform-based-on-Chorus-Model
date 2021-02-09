const btn_audioRec = document.querySelector(".btn_audioRec");
const player = document.querySelector(".audio-player");
var eleButton = document.querySelector(".completeBtn");

if (navigator.mediaDevices.getUserMedia) {
  var chunks = [];
  const constraints = { audio: true }; 
//	其中 constraints 为需要获取的权限列表，这里只需要指定音频 audio 即可。
  navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      console.log("授权成功！");
      const mediaRecorder = new MediaRecorder(stream);
//成功回调里得到的入参 stream 为 MediaStream 对象
      btn_audioRec.onclick = () => {
        if (mediaRecorder.state === "recording") {
          mediaRecorder.stop();
          
          console.log("录音结束");
        } else {
          mediaRecorder.start();
          console.log("录音中...");
          
        }
        console.log("录音器状态：", mediaRecorder.state);
      };

      mediaRecorder.ondataavailable = e => {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = e => {
        var blob = new Blob(chunks, { type: "audio/wav; codecs=opus" });
        chunks = [];
        
        var audioURL = window.URL.createObjectURL(blob);
       
        player.src = audioURL;

        var funDownload = function (content, filename) {
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};

if ('download' in document.createElement('a')) {
    // 作为test.html文件下载
    eleButton.addEventListener('click', function () {
        funDownload(audioURL, 'recordResult.wav');    
    });
} else {
    eleButton.onclick = function () {
        alert('浏览器不支持');    
    };
}
      };
    },
    () => {
      console.error("授权失败！");
    }
  );
} else {
  console.error("浏览器不支持 getUserMedia");
}