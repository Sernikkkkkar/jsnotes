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

 ### Дополнительно
  
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

::: warning
__Для запуска Web Audio API на локальном компьютере необходимо__
Запускать функции API только после полной загрузки страницы в браузере.   
Основные переменные,используемые в API должны быть глобальными.

::: 
__Пример для локального запуска__
 Запуск функций API происходит после нажатия кнопки ___Start___ .    
  <a href="../examples/audio1.html">Посмотреть</a>

```html{19,42}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="НTML, tag, Web Audio API">

    <title>Web Audio API(в браузере клиента)</title>

    <link rel="stylesheet" href="">
    <!--[if lt IE 9]>
      <script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
  </head>

  <body>
    <h1>decodeAudioData example</h1>
    <button onclick='startAudio()'>Start</button>
    <br />

    <button class="play">Play</button>
    <button class="stop">Stop</button>

    <h2>Set playback rate</h2>
    <input class="playback-rate-control" type="range" min="0.25" max="3" step="0.05" value="1">
    <span class="playback-rate-value">1.0</span>
    <!-- volume -->
    <h2>Set volume</h2>
    <input class="volume-control" type="range" min="0.0" max="1" step="0.1" value="1">
    <span class="volume-value">1.0</span>
    
    <h2>Set loop start and loop end</h2>
    <input class="loopstart-control" type="range" min="0" max="20" step="1" value="0">
    <span class="loopstart-value">0</span>

    <input class="loopend-control" type="range" min="0" max="20" step="1" value="0">
    <span class="loopend-value">0</span>

  </body>
<script>
/*Глобальные переменные*/
var audioCtx;
var source;
var gainNode;

function startAudio() {
// define variables
audioCtx = new AudioContext();

/* for volume*/
gainNode = audioCtx.createGain(); // Create a gainNode reference.
    gainNode.connect(audioCtx.destination);


var songLength;

var play = document.querySelector('.play');
var stop = document.querySelector('.stop');

var playbackControl = document.querySelector('.playback-rate-control');
var playbackValue = document.querySelector('.playback-rate-value');
playbackControl.setAttribute('disabled', 'disabled');

var volumeControl = document.querySelector('.volume-control');
var volumeValue = document.querySelector('.volume-value');

var loopstartControl = document.querySelector('.loopstart-control');
var loopstartValue = document.querySelector('.loopstart-value');
loopstartControl.setAttribute('disabled', 'disabled');

var loopendControl = document.querySelector('.loopend-control');
var loopendValue = document.querySelector('.loopend-value');
loopendControl.setAttribute('disabled', 'disabled');

// use XHR to load an audio track, and
// decodeAudioData to decode it and stick it in a buffer.
// Then we put the buffer into the source

function getData() {
  source = audioCtx.createBufferSource();
  request = new XMLHttpRequest();

  request.open('GET', 'http://tts.voicetech.yandex.net/tts?text=Hello%20world.%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20%20%D0%9C%D0%B8%D0%BC%D0%BE%20%D0%BE%D0%BA%D0%BE%D0%BD%20%D0%B8%D0%B4%D1%83%D1%82%20%D0%BF%D0%BE%D0%B5%D0%B7%D0%B4%D0%B0%2B%D0%B0&speaker=zahar&format=mp3&quality=hi&platform=web&application=translate&lang=ru_RU', true);

  request.responseType = 'arraybuffer';


  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        myBuffer = buffer;
        songLength = buffer.duration;
        source.buffer = myBuffer;
        source.playbackRate.value = playbackControl.value;
        source.connect(gainNode);
        gainNode.connect(audioCtx.destination);  //Connecting gain to source
        gainNode.gain.value = 0.1;
        
        source.loop =true;

        loopstartControl.setAttribute('max', Math.floor(songLength));
        loopendControl.setAttribute('max', Math.floor(songLength));
        source.onended = function () {
          alert('ended');
         };
      },

      function(e){"Error with decoding audio data" + e.error});

  }

  request.send();
}

// wire up buttons to stop and play audio, and range slider control

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
  playbackControl.removeAttribute('disabled');
  loopstartControl.removeAttribute('disabled');
  loopendControl.removeAttribute('disabled');
}

stop.onclick = function() {
  source.stop(0);
  play.removeAttribute('disabled');
  playbackControl.setAttribute('disabled', 'disabled');
  loopstartControl.setAttribute('disabled', 'disabled');
  loopendControl.setAttribute('disabled', 'disabled');
}

playbackControl.oninput = function() {
  source.playbackRate.value = playbackControl.value;
  playbackValue.innerHTML = playbackControl.value;
}

volumeControl.oninput = function() {
  gainNode.gain.value = volumeControl.value;
  volumeValue.innerHTML = volumeControl.value;
}

loopstartControl.oninput = function() {
  source.loopStart = loopstartControl.value;
  loopstartValue.innerHTML = loopstartControl.value;
}

loopendControl.oninput = function() {
  source.loopEnd = loopendControl.value;
  loopendValue.innerHTML = loopendControl.value;
}

}
 </script>
</html>

```  



### Дополнительно
 [Getting Started with Web Audio API](http://htmlbook.ru/html/audio)
 [Общие концепции и использование Web Audio](https://developer.mozilla.org/ru/docs/Web/API/Web_Audio_API)
 [Web Audio API](https://github.com/yandex/audio-js/blob/master/tutorial/web-audio-api.md) 
 
## Использование base64 при работе с аудио файлами.
 В ряде случаев при работе с аудио файлами можно использовать строку текста в формате base64 для представления звукового файла.   
 Просейший пример использования аудио строки в формате base65 представлен ниже.    
 [Просмотр](../examples/audio2.html)     
```html
 <!DOCTYPE HTML>
<html lang="ru-RU">
<head>
  <title>аудио строка в base64</title>
  <meta charset="UTF-8">
  <meta name="description" content="audio,blob, base64">
  <script type="text/javascript">
window.beeb = new Audio('data:audio/ogg;base64,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')  
  </script>
</head>
<body>
 <button onclick="beeb.play()">Play</button> 
</body>
</html>
```
 В следующем примере выполняется загрузка двоичного звукового файла, возможна загрузка по ссылке (с яндекса) или непосредственно с локального компьютера. Далее двоичные данные преобразуются в текстовую строку формата base64.   
 Далее данные эти данные могут быть прослушаны.   
   
 [Просмотр](../examples/audio3.html)     
 ```html
<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
  <title>mp3 и base64</title>
  <meta charset="UTF-8">
  <meta name="description" content="audio, Web Audio API, base64, binary">
  <style type="text/css">
/* 
original:
https://github.com/dondido/MP3-to-Base64-Encoder-and-Decoder
*/  
  </style>
</head>
<body>
 <h2>Преобразование MP3 в base64</h2>
 <p>В примере покзана реализация преобразование двоичного mp3 файла в текстовый base64 и прослушивание этого файла с помощью Web Audio API</p>
<h3>Загрузка mp3</h3>
<input type="file" accept="audio/*">
&nbsp;&nbsp;
<button onclick='loadSoundFile("http://tts.voicetech.yandex.net/tts?text=%D0%B4%D0%BE%20%D1%81%D0%BA%D0%BE%D1%80%D1%8B%D1%85%20%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87&speaker=jane&format=mp3&quality=hi&platform=web&application=translate&lang=ru_RU");'>Загрузка по ссылке</button>
<h3>Управление прослушиванием</h3>
<button onclick="playSound()" disabled>Start</button>
<button onclick="stopSound()" disabled>Stop</button>
<div>
<p>Содержимое строки base64, представляющей звуковой файл.</p>
<textarea id="encodedResult" cols="100" rows="10">
</textarea>
</div>
<script type="text/javascript">
/*
https://codepen.io/xewl/pen/NjyRJx
*/
/*глобальные переменные*/  
var context = new AudioContext();
var source = null;
var audioBuffer = null;
// Converts an ArrayBuffer to base64, by converting to string 
// and then using window.btoa' to base64. 
var bufferToBase64 = function (buffer) {
    var bytes = new Uint8Array(buffer);
    var len = buffer.byteLength;
    var binary = "";
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
};
/*string to binary*/
var base64ToBuffer = function (buffer) {
    var binary = window.atob(buffer);
    var buffer = new ArrayBuffer(binary.length);
    var bytes = new Uint8Array(buffer);
    for (var i = 0; i < buffer.byteLength; i++) {
        bytes[i] = binary.charCodeAt(i) & 0xFF;
    }
    return buffer;
};
/*control sound*/
function stopSound() {
    if (source) {
        source.stop(0);
    }
}
function playSound() {
    // source is global so we can call .stop() later.
    source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.loop = false;
    source.connect(context.destination);
    source.start(0); // Play immediately.
}
function initSound(arrayBuffer) {
    var base64String = bufferToBase64(arrayBuffer);
    var audioFromString = base64ToBuffer(base64String);
    document.getElementById("encodedResult").value=base64String;
    context.decodeAudioData(audioFromString, function (buffer) {
        // audioBuffer is global to reuse the decoded audio later.
        audioBuffer = buffer;
        var buttons = document.querySelectorAll('button');
        buttons[0].disabled = false;
        buttons[1].disabled = false;
    }, function (e) {
        console.log('Error decoding file', e);
    });
}
// User selects file, read it as an ArrayBuffer and pass to the API.
var fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener('change', function (e) {
    var reader = new FileReader();
    reader.onload = function (e) {
        initSound(this.result);
    };
    reader.readAsArrayBuffer(this.files[0]);
}, false);
// Load file from a URL as an ArrayBuffer.
// Example: loading via xhr2: loadSoundFile('sounds/test.mp3');
function loadSoundFile(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function (e) {
        initSound(this.response); // this.response is an ArrayBuffer.
    };
    xhr.send();
}  
  </script> 
</body>
</html> 
 ```
 
 
 