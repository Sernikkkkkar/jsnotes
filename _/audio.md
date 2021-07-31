## Тег audio
### Дополнительно
 [htmlbook - Описание тега audio](http://htmlbook.ru/html/audio)   
 [W3C - методы, свойства, события](https://www.w3schools.com/tags/ref_av_dom.asp)
 
### Пример
 В этом примере показано использование основных методов: __play()__ и __pause()__ , событий: __onloadeddata__ и __onended__.
 Также можно посмотреть свойств тега audio. Кроме того в примере реализован небольшой плейлист источником данных для которого являются озвученные с помощью сервиса Яндекса короткие фразы.

  <a href="../examples/audio0.html">Посмотреть</a>

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="windows-1251">
  <title>Тег audio</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="description" content="НTML, tag, audio">
  <meta name="viewport" content="width=device-width">
 </head>

<body>
  
  <div id='au1'>
   <audio id="demo" controls>
    <source src="" type="audio/mpeg">
   </audio>
  </div>
  <h3>Загрузка данных</h3>
   <button onclick="y_read()">Playlist</button>
   <input id="audio_file" type="file" accept="audio/*" />
 <h3>Управление прослушиванием</h3>
  <button onclick='playAudio()'>Play/Pause</button>
  <b>Громкость </b>
  <input id="volume" type="range" min="0.0" max="1" step="0.1" value="1" onchange='document.getElementById("vv").innerHTML=this.value;aud.volume=this.value'>
  <span id="vv">1.0</span>
 <h3>Другие свайства</h3>
 <button onclick='alert(viewProperties(["duration","currentSrc","currentTime"]))'>Properties</button>

 <script>
 var aud = document.getElementById("demo");
 /*Обработка событий*/
 aud.onended = function() {
    next_item();    
};
aud.onloadeddata = function() {
    aud.play();
};
/*Плейлист*/
 var s=[
     "http://tts.voicetech.yandex.net/tts?text=hello&speaker=jane&format=mp3&quality=hi&platform=web&application=translate&lang=ru_RU",
     "http://tts.voicetech.yandex.net/tts?text=%D0%B4%D0%BE%20%D1%81%D0%BA%D0%BE%D1%80%D1%8B%D1%85%20%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87&speaker=jane&format=mp3&quality=hi&platform=web&application=translate&lang=ru_RU",
     "http://tts.voicetech.yandex.net/tts?text=goodbye&speaker=jane&format=mp3&quality=hi&platform=web&application=translate&lang=ru_RU"
]
  var n=0;
 /*Загрузка из сети*/
 function y_read() {
  aud.src=s[0];
 }
 function  viewProperties(prop)
 {
  var s=""
  for (i=0;i<prop.length;i++) {
    s+=prop[i] +" : "+aud[prop[i]]+"\n"
  }
 return s;
 }
 /*загрузка из плейлиста */
 function next_item() {
 n=n+1
 if (n>s.length-1) n=0;
 aud.src=s[n];
 }
 
/*управление прослушиванием*/
function playAudio() {
 if (aud.paused) aud.play();
 else aud.pause();
}
/*загрузка с помощью тега file*/
 audio_file.onchange = function(){
  var files = this.files;
  var file = URL.createObjectURL(files[0]);
  alert(file) 
   aud.src = file; 

};  
</script>
</body>
</html>


```
## Web Audio API
 Это еще одно но более мощное средство для представления аудиоданных, возможно его совместное использование с тегом __audio__. 
 
 ### Примеры и документация
 
 Code examples that accompany the MDN Web Audio documentation https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

The "audio-analyser" directory contains a very simple example showing a graph visualization of audio drawn with data taken from an [AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode). [Run the demo live](http://mdn.github.io/webaudio-examples/audio-analyser/).

The "audio-basics" directory contains a fun example showing a retro-style "boombox" that allows audio to be played, stereo panned, and volume adjusted. [Run the demo live](http://mdn.github.io/webaudio-examples/audio-basics/).

The "audio-buffer" directory contains a very simple example showing how to use an audio buffer in Web Audio API. [Run the demo live](http://mdn.github.io/webaudio-examples/audio-buffer/).

The "audio-param" directory contains some simple examples showing how to use the methods of the Web Audio API AudioParam interface. For more information, see [https://developer.mozilla.org/en-US/docs/Web/API/AudioParam](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam). [Run example live](http://mdn.github.io/webaudio-examples/audio-param/).

The "audiocontext-states" directory contains a simple demo of the new Web Audio API AudioContext states, including the states property and the <code>close()</code>, <code>resume()</code> and <code>suspend()</code> methods. See [https://developer.mozilla.org/en-US/docs/Web/API/AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) for more details. [Run the demo live](http://mdn.github.io/webaudio-examples/audiocontext-states/).

The "compressor-example" directory contains a simple demo to show usage of the Web Audio API createDynamicsCompressor() method and DynamicCompressorNode. For more information, see [https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createDynamicsCompressor](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createDynamicsCompressor). [Run the example live](http://mdn.github.io/webaudio-examples/compressor-example/).

The "create-media-stream-destination" directory contains a simple example showing how Web Audio API [AudioContext.createMediaStreamDestination](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamDestination) which can be used to output a stream, in this case to a MediaRecorder instance, to output a sinewave to an opus file. [Run the demo live](http://mdn.github.io/webaudio-examples/create-media-stream-destination/).

The "decode-audio-data" directory contains a simple example demonstrating usage of the Web Audio API decodeAudioData() method. For more information, see [https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/decodeAudioData](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/decodeAudioData). [View example live](http://mdn.github.io/webaudio-examples/decode-audio-data/).

The "iirfilter-node" directory contains an example showing usage of an [IIRFilterNode](https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode). [Run the demo live](http://mdn.github.io/webaudio-examples/iirfilter-node/).

The "media-source-buffer" directory contains a simple example demonstrating usage of the Web Audio API AudioContext.createMediaElementSource() method. For more information, see [https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource) or [view the demo live](http://mdn.github.io/webaudio-examples/media-source-buffer/).

The "offline-audio-context" directory contains a simple example to show how a Web Audio API OfflineAudioContext object can be used to rapidly process/render audio in the background to create a buffer, which can then be used in any way you please. For more information, see [https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext). [Run example live](http://mdn.github.io/webaudio-examples/offline-audio-context/).

The "offline-audio-context-promise" directory contains a simple example to show how a Web Audio API OfflineAudioContext object can be used to rapidly process/render audio in the background to create a buffer, which can then be used in any way you please. For more information, see [https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/startRendering(promise)](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/startRendering(promise)). [Run the example live](http://mdn.github.io/webaudio-examples/offline-audio-context-promise/).

The "panner-node" directory contains a demo to show basic usage of a Web Audio API PannerNode to control audio spatialisation. See [https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createPanner](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createPanner) for more details. [Run the example live](http://mdn.github.io/webaudio-examples/panner-node/).

The "script-processor-node" directory contains a simple demo showing how to use the Web Audio API's ScriptProcessorNode to process a loaded audio track, adding a little bit of white noise to each audio sample. For more information see [ScriptProcessorNode](https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode) documentation and the [live demo](http://mdn.github.io/webaudio-examples/script-processor-node/).

The "step-sequencer" directory contains a simple step-sequencer that loops and manipulates sounds based on a dial-up modem. For more information see [Advanced techniques: creating sound, sequencing, timing, scheduling](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques). See the [live demo](http://mdn.github.io/webaudio-examples/step-sequencer/) also.

The "stereo-panner-node" directory contains a simple example to show how the Web Audio API StereoPannerNode can be used to pan an audio stream. See [https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode](https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode) for more details.
[Run the example live](http://mdn.github.io/webaudio-examples/stereo-panner-node/).

The "stream-source-buffer" directory contains a simple example demonstrating usage of the Web Audio API AudioContext.createMediaElementSource() method. For more information, see [https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource). [View example live](http://mdn.github.io/webaudio-examples/stream-source-buffer/).


 