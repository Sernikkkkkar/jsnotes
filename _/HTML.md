## Элементы Календарь и Расписание
### calendar scheduller gannt
## Библиотека DayPilot

Мощный инструмент для визуализации расписаний и календаря.

 * [Пример](data/daypilot/demo/index.html)
## FileReader
### file open read
# FileReader.js

__Кратко__

Утилита  для чтения файла, в качестве аргумента использует значение из элемента input file.

* [Пример](data/filereader.js-master/index.html)

__readme__

http://bgrins.github.com/filereader.js/

A small library independant wrapper for the JavaScript FileReader interface.

This plugin is open source under the MIT License.  It was developed in conjunction with a CSS sprite generator project: http://instantsprite.com.

## Specifications
* See http://www.w3.org/TR/FileAPI/#dfn-filereader to read about FileReader.
* See http://www.w3.org/TR/FileAPI/#FileReaderSync to read about FileReaderSync.
* See http://www.w3.org/TR/FileAPI/#event-handler-attributes-section for details on Options/on.* callbacks.

## Usage:
	FileReaderJS.setupInput(document.getElementById('file-input'), opts);
	FileReaderJS.setupDrop(document.getElementById('dropzone'), opts);
	FileReaderJS.setupClipboard(document.body, opts);

## If you have jQuery:
	$("#file-input, #dropzone").fileReaderJS(opts);
	$("body").fileClipboard(opts);

## FileReaderJS.sync

Use the `FileReaderSync` object when available to load the files in a separate worker.  `false` by default.  This will cause only the `load` or `error` events to fire (there will be none of the other ProgressEvents, as the operation is synchronous).

## Options

	readAsMap: A collection taking key as a string that will be matched with regex against
		file types and the type to read as.  If no match is found, it will use readAsDefault.
		The default map is:
		{
			'image/*': 'DataURL',
			'text/*' : 'Text'
		}
	readAsDefault: 'ArrayBuffer' | 'Text' | 'DataURL' (default)
	accept: A regex string to match the contenttype of a given file.
			For example: 'image/*' to only accept images.
			on.skip will be called when a file does not match the filter.
	dragClass: A CSS class to add onto the element called with setupDrop while dragging
	on:
		loadstart: function(e, file) { }
		progress: function(e, file) { }
		load: function(e, file) { }
		abort: function(e, file) { }
		error: function(e, file) { }
		loadend: function(e, file) { }
		beforestart: function(file) { } Called before a file is passed to the FileReader.  Return false to prevent processing.  This is used along with the 'accept' parameter to skip a file (ex: an image is too big to process).  This wouldn't be needed, except that Chrome sometimes crashes when calling abort(): http://code.google.com/p/chromium/issues/detail?id=60979
		skip: function(file) { } Called only when a read has been skipped because of the accept string
		groupstart: function(group) { }
		groupend: function(group) { }

## Parameters to events:

	e - the native ProgressEvent created by the FileReader

	file - an extension of the original File object.  See W3 link above for all native parameters.  Here are the extra fields

	file.extra = {
		fileID: a generated int id for this file.
		groupID: the group that it belongs to
		nameNoExtension: 'myImage' instead of 'myImage.png'
		extension: 'png' instead of 'myImage.png'
		prettySize: '46.47' kb instead of 47585 (size field)
	}

	group: simple grouping of files.  Each time a change event or drop even happens and a FileList is created, and all of these files are stored inside a group object.

		groupID: a generated int id for this group
		files: the FileList associated with the group
		started: the Date the group was recieved as input
		ended: the Date all files in the group finished loading

Any contributions are welcome.
Author: Brian Grinstead.


## Дата и время
### date time clock timeout timer
## Получение даты и времени

Общий вывод даты и времени, а также отдельно выводятся: день месяца, день недели, месяц и год.

```javascript
 <HTML>
<HEAD>
<TITLE>ЏаЁ¬Ґал ўл§®ў  VBA</TITLE>
<script type="text/javascript">
var datTim;
function knowTime() {
	
		var date = new Date();
		date.setTime(date.getTime());
		 datTim= "Время :"+date.toGMTString();
                datTim= "Время 2 :"+date.toString();
		}
//month


Date.prototype.getMonthName = function() {
          var monthNames = [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
                        "Июль", "Август", "Сенттябрь", "Октябрь", "Ноябрь", "Декабрь" ];
          return monthNames[this.getMonth()];
     }

//It can be used as
      //var month_Name = new Date().getMonthName();
//weekday
function getweekday() {
var d = new Date();
var wday=["Вск","Пн","Вт","Ср","Чт","Пт","Сб"];
var n = wday[d.getDay()];
alert(n);
}




</script>
</HEAD>
<BODY>


Работа со Временем
 

<input type='button' onclick='knowTime();alert(datTim);' value='Посмотреть'/>
<button onclick="var n=new Date().getDate();alert((n<10)? '0' +n : ''+n);">Day of mpnth</button>
<button onclick="getweekday();">weekday</button>
<button onclick="alert(new Date().getMonthName());">Month</button>
<button onclick="alert(1900+new Date().getYear());">Year</button>
</BODY>
</HTML>

```



## Часы

Пример реализации простейших часов в jquery/<br>
```javascript

<script type="text/javascript">
 function getdate(){
                var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            if(m<10){
                 m = "0"+m;
             }
            var s = today.getSeconds();
             if(s<10){
                 s = "0"+s;
             }

           document.getElementById("clock").innerHTML=h+" : "+m+" : "+s;
             setTimeout(function(){getdate()}, 500);
            }

</script>


<button id="st" onclick="getdate();">start clock</button>
<h1 id="clock"></h1>
```


## Задержка (timeout)

В ряде случаев необходимо задержать выполнение функции на промежуток времени ( анимация объекта, синхронизация задач, загрузка большого массива данных). Для этих целей в jquery используется объект timer.

В примере сделаны две задержки:

 * при загрузке страницы
 *  при нажатии кнопки

```javascript
<script>
function func() {
  alert( 'Привет' );
}

setTimeout(func, 5000);

</script>
<div id="div1">
Example
</div>
<button id="mcTxb" onclick="setTimeout(func, 5000);">Click</button>

```

## Секундомер

Запускается подсчет секунд после нажатия кнопки.Останов подсчет останавливается, по кнопке Сброс таймер устанавливается в 0.
```javascript
<html>
<head>
<script type="text/javascript">
var c=0;
var t;
var timer_is_on=0;

function timedCount()
{
document.getElementById('txt').value=c;
c=c+1;
t=setTimeout("timedCount()",1000);
}
function clearTimer() {
c=0;
document.getElementById('txt').value=c;
}
function doTimer()
{
if (!timer_is_on)
  {
  timer_is_on=1;
  timedCount();
  }
}

function stopCount()
{
clearTimeout(t);
timer_is_on=0;
}
</script>
</head>

<body>
<input type="button" value="Start count!" onClick="doTimer()">
<input type="text" id="txt">
<input type="button" value="Stop count!" onClick="stopCount()">
<button onclick="clearTimer();">Сброс</button>
</body>
</html>
```


## Запуск с параметрами
### location search substring arguments
__Запуск с аргументами__

При запуске html файла есть возможность передать аргументы в скрипт, запускаемый в этом файле.
Структура строки запуска должна быть следующая:

```text
<имя файла>?<аргумент 1>&<аргумент n>...&<аргумент 2>

```

Обработка полученной информации:

```text
//for string http://example.com/index.htm?foo=bar&text=hello
   var sparam=location.search.substring(1); //foo=bar&text=hello
   var parametr=sparam.split("&");
```

__Получение параметров__

Для получения параметров запуска из командной строки можно использовать функцию:

```text
function getParams() {
//var url="ind.htm?file=12.txt&title=hello";
//var params =url.split("&"), 
  var params = window.location.search.substring(1).split('&'),
    i = 0,
    pair = null,
    result = {};

  while (pair = params[i++]) {
    pair = pair.split('=');
    result[pair[0]] = decodeURIComponent(pair[1]);
  }
  
return result;
  
    
  }
  var res=getParams();
```
 
## Input File
### html tag file css
##Элемент input  file

 Для открытия диалога "Открыть файл"  с возможностью просмотра папок на компьютере  используется элемент
___&lt;input type="file"&gt;___

__простой вариант со ссылкой для просмотра файла__
 
```javascript
<HTML>
<HEAD>
<script>
function openFileOption()
{
alert(document.getElementById("file2").value);
}

</script>
</HEAD>
<BODY>
<input type="file" id="file1" style="display:none">
<a href="#" onclick="openFileOption();return;">open File Name</a>

<input type="file" id="file2" >

</BODY>
</HTML>
```

__Замена кнопки Обзор на иконку__

Элемент input file замена кнопки на иклнку с помощью CSS.
```javascript


<HTML>
<HEAD>
<style>
div.fileinputs {
    position: relative;
}
div.fakefile {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
}
input.file {
    position: relative;
    text-align: right;
    -moz-opacity:0 ;
    filter:alpha(opacity: 0);
    opacity: 0;
    z-index: 2;
}



</style>
<script></script>
</HEAD>
<BODY>
<div class="fileinputs">
    <input type="file" class="file" />
    <div class="fakefile">
        <input />
        <img src="1.gif" />
    </div>
</div>

</BODY>
</HTML>

```

__Замена элемента file на иконку__


 При формировании меню или toolbar возникает необходимость подмены кнопки __Обзор__ , какой-нибудь иконкой, указывающей на открытие файла.
Для этого в стиле необходимо:

 *  убрать элемент файл на задний план;
 * уменьшить его размеры
 * имитировать нажатие на кнопку Обзор при клике по рисунку.




```javascript
<html>
<head>
<style>
input {
position: relative;
width:20px;
opacity: 0;
z-index: 3;
}

img {
position: relative;
left: -23px;
z-index: 2;
background-color:blue;
}
</style>
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js" charset="utf-8"></script>

<script>
$(document).ready(function (){

$('#fl').on("change", function(){
 alert('ready');   
});

});
</script>
</head>
<body>
<input type="file" id="fl" size="chars">
<img src="css/open.png"  width="20" height="20">
</body>

</html>
```

►


►

## File list
### html tag file
## Листинг файлов 

Использует возможности HTML 5 , формирует листинг из выделенных файлов с указанием их атрибутов, в FF отсутствует путь к файлам
```javascript
<html>
<head>
  <meta charset="utf-8" />
<title>Выберите файлы</title>


</head>
 
<body>
<input type="file" id="files" name="files[]" multiple />
<output id="list"></output>

<script>
  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate.toLocaleDateString(), '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
</script>
</body>
 
</html>
```

## File Open
### JS HTML file load 
__Загрузка файла__

Загрузка текстового файла 

+Работает только в блоке (alt+click)_
```javascript
<html>
<head>
<title>Выберите файл</title>
<script src="https://bgrins.github.io/filereader.js/filereader.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2014-11-29/FileSaver.min.js"></script>
<script >
// Load a JSON document
  FileReaderJS.setupInput(document.getElementById('ltext'), {
    readAsDefault: 'Text',
    on: {
      load: function (event, file) {
        alert(event.target.result);
        
      }
    }
  });
</script>
</head>

<body>
<h2>загрузка файла</h2>
<input type="file" id="ltext" />
</body>

</html>
```

## Загрузка текстового файла
### js xhr file load text
__Загрузка текстового файла__

В данном примере используется запрос __xhr.__

    Примечание. Работает только в своем домене или url.


```javascript
<script type="text/javascript">
function read(textFile){
    var xhr=new XMLHttpRequest;
    xhr.open('GET',textFile);
    xhr.onload=show;
    xhr.send()
}

function show(){
    var pre=document.createElement('pre');
    pre.textContent=this.response;
    //document.body.appendChild(pre);
    document.getElementById("test").appendChild(pre);
}

</script>
<h1>Loading text file</h1>
<div id="test"></	div>
<script type="text/javascript">
read('data/example.json');
show();
</script>
```

## Загрузка бинарного файла (load audio mp3)
### html file binary audio load mp3
## Загрузка бинарного файла (аудио).

Загружает аудио файл (mp3) и дает возможность его прослушать.

Загрузка файла происходит при нажатии на "обзор", таким образом можно открывать любой файл на компьютере.

По кнопке Click происходит подключение аудиофайла к тегу audio


    убрать jquery
    запуск по alt+click

```javascript
<HTML>
<HEAD>

<script src="http://code.jquery.com/jquery.min.js" charset="utf-8"></script>
<script type="text/javascript">
    $(document).ready(function(){
          $("#click").click(function(){
                var audio = $("input[type='file']").get(0).files[0];

                readFile(audio, function(e) {
                    var result = e.target.result;   // here I get a binary string of my original audio file*
                    //encodedData = btoa(result);   // encode it to base64*
                    //alert(audio.name)
                    alert(result);
                    $("#au1").html('<audio  controls><source src="'+result+'" type="audio/mpeg"></audio>	');
                    //$("audio").html('<source src="'+result+'" type="audio/mpeg">');     //add the source to audio*
                });
          });

    });

    function readFile(file, onLoadCallback){
        var reader = new FileReader();
        reader.onload = onLoadCallback;
        reader.readAsDataURL(file);
    }


</script>
</HEAD>
<BODY>
<input type="file" id="files" />
<br />
<button id="click">Click</button> 
<br />
<div id="au1">
 <audio  controls>
  
  <source src="akse01.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio> 
</div>
</BODY>
</HTML>

```

## Загрузка бинарного файла (load inage)
### xhr image tag base64 load binary
## Загрузка  файла (image)

Загрузка двоичного файла рисунка с выводом его на страницу. Для загрузки нажать Load

     Работает при нажатии alt+click

```javascript
<!DOCTYPE html>
<html>
<head>

<script type='text/javascript'>
var ss=1;
function init(p)
{
    if (p==""){
      alert("address not found");
      return;
      ss=0;
    }
    var xmlHTTP = new XMLHttpRequest();
    ss=1;
    document.getElementById('status').innerHTML="failed";
    xmlHTTP.open('GET',p,true);

    // Must include this line - specifies the response type we want
    xmlHTTP.responseType = 'arraybuffer';

    xmlHTTP.onload = function(e)
    {
      
      var arr = new Uint8Array(this.response);


        // Convert the int array to a binary string
        // We have to use apply() as we are converting an *array*
        // and String.fromCharCode() takes one or more single values, not
        // an array.
        var raw = String.fromCharCode.apply(null,arr);

        // This works!!!
        var b64=btoa(raw);
        
        //document.getElementById('status').innerHTML="success";
        var dataURL="data:image/jpeg;base64,"+b64;
        document.getElementById("image").src = dataURL;
        
    
    

    };
    
 
    xmlHTTP.send();
    document.getElementById('status').innerHTML="success";
    ss=ss+1;
 //alert("ok");
 //alert("status : "+ss);   
}

</script>
</head>
<body>
<img id="image" alt="data url loaded image" />
</br>
<b>Path </b>
<input type="text" id="path" value="data/page_copy.png"/>  
<input type="button" onclick="init(document.getElementById('path').value);" value="load"/>
</br>
</br>
<div id="status">not load<div>
</body>
</html>
```

## File save
### JS HTML  file save 
__Сохранение данных в файле__



```javascript
<script src="https://bgrins.github.io/filereader.js/filereader.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2014-11-29/FileSaver.min.js"></script>
<script>
function save() {
var str='{name:"Peter", years:25}';
alert(str);
var blob = new Blob([str], {type: 'application/jsont;charset=utf-8'});
 saveAs(blob, 'test.json');
}
</script>
<h2>Save</h2>
<button onclick="save()">click</button>
```

## File save zip
### JS  file save jszip
### Сохранение файла в формате zip

Сохранение данных в архиве(zip), может сохраняться как файл, так и каталог. Используется библиотека jszip
```javascript
<HTML>
<HEAD>
<meta http-equiv='Content-Type' content='text/html; charset=windows-1251'>
<script type="text/javascript" src="https://dl.dropbox.com/u/44057871/jslib/jszip.js"></script>

<script type="text/javascript">
function zipText(){
var zip = new JSZip();
 

var str ='<?xml version="1.0" encoding="Windows-1251" ?>';
var str2='<searchable_index><item>John</item><item>Paul</item><item>George</item><item>╨а┬а╨б╤Я╨а┬а╨Т┬░╨а┬а╨атАа╨а┬а╨Т┬╡╨а┬а╨Т┬╗</item><item>Paulina</item></searchable_index>';
var str3="Helo h╨а┬а╨б╤Я╨а╨О╨атАЪ╨а┬а╨бтАШ╨а┬а╨атАа╨а┬а╨Т┬╡╨а╨О╨▓╨В╤Щ ╨а┬а╨бтАФ╨а╨О╨атАЪ╨а┬а╨бтАв╨а┬а╨атАа╨а┬а╨Т┬╡╨а╨О╨атАЪ╨а┬а╨бтАЭ╨а┬а╨Т┬░ ╨а┬а╨бтАЭ╨а┬а╨бтАв╨а┬а╨втАШ╨а┬а╨бтАШ╨а╨О╨атАЪ╨а┬а╨бтАв╨а┬а╨атАа╨а┬а╨бтАЭ╨а┬а╨бтАШ";
zip.add("Hello.txt", str3);
img = zip.folder("images");
//img.add("smile.gif", imgData, {base64: true});
content = zip.generate();
location.href="data:application/zip;base64,"+content;
}
</script>
<BODY>
<h1>╨а┬а╨б╤Я╨а┬а╨Т┬╡╨а╨О╨атАЪ╨а┬а╨Т┬╡╨а╨О╨а╤У╨а╨О╨▓╨ВтДЦ╨а┬а╨Т┬╗╨а┬а╨бтАЭ╨а┬а╨Т┬░ ╨а╨О╨▓╨В╤Ы╨а┬а╨Т┬░╨а┬а╨▓тАЮтАУ╨а┬а╨Т┬╗╨а┬а╨Т┬░ ╨а┬а╨атАа ╨а┬а╨Т┬░╨а╨О╨атАЪ╨а╨О╨▓╨В┬ж╨а┬а╨бтАШ╨а┬а╨атАа╨а┬а╨Т┬╡ (zip)</h1>
<input type='button' onclick='zipText()' value='Change Text'/>
</BODY>
</HTML>


```

## Элемент Blob
### blob file binary save open
## Объект Blob

Объект Blob представляет из себя объект наподобии файла с неизменёнными, сырыми данными. Blob-ы представляют данные которые не важны в родном формате JavaScript. Интерфейс File основан на Blob, и наследует функциональность blob и расширяет его для поддержки файлов на системе пользователя.

* [Описание](https://www.google.ru/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&sqi=2&ved=0ahUKEwiImOah1aTOAhUDiSwKHRtkBiQQFggbMAA&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fru%2Fdocs%2FWeb%2FAPI%2FBlob&usg=AFQjCNEq6yPDsbpS2wJMPI663xpCK4vOYw&bvm=bv.128617741,d.bGg&cad=rjt)
 http://www.javascripture.com/Blob
https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-22/blobs

__Создание blob

```text
var debug = {hello: "world"};
var blob = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
```
также можно создать blob из двоичного массива.

```text
var buffer = new ArrayBuffer(8); // allocates 8 bytes
var data = new DataView(buffer);
data.setUint8 (0, 0x01);
data.setUint16(1, 0x2345);
data.setUint32(3, 0x31323334);
data.setUint8 (7, 0xEF);
var blob = new Blob([data], {type:"example/binary"});
```

__запись двоичного файла__

В примере представлена запись данных из двоичного массива в фаил.

```javascript
Имя файла<input type="text" id="fName" value=""  />

<input type="button" id="bin" value="binary"  onClick="savebin()"/>

<script>
//defs
var buffer = new ArrayBuffer(8); // allocates 8 bytes
var data = new DataView(buffer);
data.setUint8 (0, 0x01);
data.setUint16(1, 0x2345);
data.setUint32(3, 0x31323334);
data.setUint8 (7, 0xEF);
function saveTextAsFile(txt,typefile)
{
	var textToWrite = txt;
	var textFileAsBlob = new Blob([textToWrite], {type:typefile});
	var fileNameToSaveAs = document.getElementById("fName").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}
</script>
```


__Чтение файла__

```javascript
<textarea id="ta1" style="width:512px;height:256px"></textarea>
<br>
<br />
<input type="button" id="lbin" value="Load test"  onClick="loadbin('jj',data)"/>

<script>
function loadbin(fn, dv) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', fn, true);
 xhr.responseType = 'arraybuffer';
xhr.onload = function(e) {
   alert("test")
   dv = new DataView(e.currentTarget.response);

   document.getElementById("ta1").value=_read_null_terminated(dv,3, 4);

 }
 xhr.send();
}
function _read_null_terminated(dv, offset, max) {
  var str = "";
  var code;
  while((code = dv.getUint8(offset++)) != 0 && max--) {
    str += String.fromCharCode(code);
  }
  return str;
}
</script>
```

## Blob и base64
### blob base64 file binary
## Blob и base64

Рассмотрено преобразование между blob и текстовым представлением двоичных данных base64.

__Blob в base64

В примере скачивается рисунок в blob, blob отображается в элементе img. Кроме того blob преобразуется в строку base64.
```javascript
<html>
<head>
<script>
function getImage() {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://i.imgur.com/sBJOoTm.png', true);

xhr.responseType = 'blob';

xhr.onload = function(e) {
  if (this.status == 200) {
var blob = this.response;
document.getElementById("myImage").src = window.URL.createObjectURL(blob);
//blob to base64
var reader = new window.FileReader();
 reader.readAsDataURL(blob); 
 reader.onloadend = function() {
                base64data = reader.result;                
                alert(base64data );
                }

  }
};

xhr.onerror = function(e) {
  alert("Error " + e.target.status + " occurred while receiving the document.");
};

xhr.send();

}
</script>
</head>
<body>
<button onclick="getImage()">Click</button>

<div>
<img id="myImage">
</div>
</body>
</html>
```

__base64 в blob__

```text
function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }
    
  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}


var contentType = 'image/png';
var b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

var blob = b64toBlob(b64Data, contentType);
var blobUrl = URL.createObjectURL(blob);

var img = document.createElement('img');
img.src = blobUrl;
document.body.appendChild(img);

```
## Использование LocalStorage
### JS browser HTML5 browser LocalStorage read save
## LocalStorage

Сохранение данных с последующем чтением из локальной памяти браузера
```javascript
<!DOCTYPE html>
<html>
<body>

<div id="result"></div>
<script>
if(typeof(Storage)!=="undefined")
  {
  localStorage.lastname="Sam";
  document.getElementById("result").innerHTML="Last name: " + localStorage.lastname;
  }
else
  {
  document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
  }
</script>

</body>
</html>
```

## Cookies 
### browser coolies
## Работа с cookies

Создание, чтение и удаление Cookies
```javascript
 <HTML>
<HEAD>
<TITLE>ЏаЁ¬Ґал ўл§®ў  VBA</TITLE>
<script type="text/javascript">
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
        alert(document.cookie);
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
                alert(c);
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
function ToCookie() {
var nC=document.getElementById("us1").value;
var vC=document.getElementById("us2").value;
createCookie(nC, vC,2);

}

function readCookies() {
	
        var rescook="<table>";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
                alert(ca[i]);
		var cab = ca[i].split('=');
                var cas=cab[1].split('&');
                rescook=rescook+"<tr>";
                for(var ii=0;ii < cas.length;ii++) {
                rescook=rescook+"<td>"+cas[ii]+"</td>";
                }
                rescook=rescook+"</tr>";
                }
rescook=rescook+"</table>";
document.getElementById('res1').innerHTML =rescook;
	
}

</script>
</HEAD>
<BODY>


Работа с Coockie
<br>
Имя Coockie <input type='text' id='us1' value='' />
<br>
Значение Coockie <input type='text' id='us2' value='Enter Text Here' />

<br>
<input type='button' onclick='ToCookie()' value='Создать'/>
<input type='button' onclick='alert(readCookie(document.getElementById("us1").value))' value='Читать Coockie'/>
<input type='button' onclick='eraseCookie(document.getElementById("us1").value)' value='Удалить'/>
<br>
<p align="center" id="res0">Результаты</p>
<input type='button' onclick='readCookies()' value='Результаты'/>
<br>
<p align="center" id="res1">______________</p>

</BODY>
</HTML>

```

## Обрацение к элементам DOM
### html DOM getelementby id class name tag
## Обращение к элементам DOM

__Обращение к идентификатору__

     getElementById()

Наиболее известный и популярный способ обращения далее используется в примерах.


__Работа с классами__

    getElementsByClassName()

```javascript

<div class="example">First div element with class="example".</div>

<div class="example">Second div element with class="example".</div>

<p style="background:lightgrey">Click the button to change the text of the first div element with class="example" (index 0).</p>

<button onclick="myFunction()">Try it</button>

<p><strong>Note:</strong> The getElementsByClassName() method is not supported in Internet Explorer 8 and earlier versions.</p>

<script>
function myFunction() {
    var x = document.getElementsByClassName("example");
    x[0].innerHTML = "Hello World!";
}
</script>
```
__Обращение к тегу.__

    getElementsByTagName()

```javascript

<ul>
  <li>Coffee</li>
  <li>Tea</li>
</ul>

<p style="background:lightgrey;">Click the button to change the text of the first list item (index 0).</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    var list = document.getElementsByTagName("UL")[0];
    list.getElementsByTagName("LI")[0].innerHTML = "Milk";
}
</script>

```

__Обращение к элементу по атрибуту name__

    getElementsByName()

Это устаревший атрибут, в ранних версиях использовался вместо id.
```javascript

First Name: <input name="fname" type="text" value="Michael"><br>
First Name: <input name="fname" type="text" value="Doug">

<p style="background:lightgrey;">Click the button to get the tag name of the first element in the document that has a name attribute with the value "fname".</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x = document.getElementsByName("fname")[0].tagName;
    document.getElementById("demo").innerHTML = x;
}
</script>

```

__Обращение к специальным тегам документа (style,title,script)__

    getElementsByTagName("STYLE")

```javascript
<!DOCTYPE html>
<html>
<head>
<title>Special Tag</title>
<style>
#demo {
    background-color: yellow; 
    color: red;
}
</style>
</head>
<body>

<p>Click the button to display the style properties of this document.</p>

<button onclick="myFunction()">Style</button>
<button onclick="myFunction1()">Title</button>

<p id="demo"></p>

<script>
function myFunction1() {
    var x = document.getElementsByTagName("TITLE")[0];
    document.getElementById("demo").innerHTML = x.innerHTML;
}
function myFunction() {
    var x = document.getElementsByTagName("STYLE")[0];
    document.getElementById("demo").innerHTML = x.innerHTML;
}
</script>

</body>
</html>
```


## Обращение к элементам DOM (querySelector)
### html DOM querySelector CSSselector matches closest id class name tag
## Метод querySelector

Данный метод также как и метод getElementById() и подобные позволяет обращаться к элементам DOM по id, class. tag

В качестве аргумента этот метод использует CSS selector.

Описание CSS selectors
 * [W3C](http://www.w3schools.com/cssref/css_selectors.asp)
 * [Современные технологии](https://learn.javascript.ru/css-selectors)

    querySelector()

```javascript
<h2 class="example">A heading with class="example"</h2>
<p>A paragraph with class="example".</p> 

<p>Click the button to add a background color to the first element in the document with class="example".</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    document.querySelector(".example").style.backgroundColor = "red";
}
</script>

```

_Данный метод возвращает только первый элемент выборки. Для получения всего массива выборки необходимо использовать метод __querySelectorAll()___

__Метод querySelectorAll__

Возвращает весь массив выборки, в качестве аргумента также использует css selector

    querySelectorAll()

```javascript
<ul>
  <li>Этот</li>
  <li>тест</li>
</ul>
<ul>
  <li>полностью</li>
  <li>пройден</li>
</ul>
<script>
  var elements = document.querySelectorAll('ul > li:last-child');

  for (var i = 0; i < elements.length; i++) {
    alert( elements[i].innerHTML ); // "тест", "пройден"
  }
</script>

```

__Метод matches__

matches

Предыдущие методы искали по DOM.

Метод elem.matches(css) ничего не ищет, а проверяет, удовлетворяет ли elem селектору css. Он возвращает true либо false.

Не поддерживается в IE8-.

Этот метод бывает полезным, когда мы перебираем элементы (в массиве или по обычным навигационным ссылкам) и пытаемся отфильтровать те из них, которые нам интересны.

```javascript
<a href="http://example.com/file.zip">1</a><br />
<a href="http://ya.ru">2</a>

<script>
  var elems = document.body.children;

  for (var i = 0; i < elems.length; i++) {
    if (elems[i].matches('a[href$="zip"]')) {
      alert( "Ссылка на архив: " + elems[i].href );
    }
  }
</script>
```

__Метод closest__

Метод elem.closest(css) ищет ближайший элемент выше по иерархии DOM, подходящий под CSS-селектор css. Сам элемент тоже включается в поиск.

Иначе говоря, метод closest бежит от текущего элемента вверх по цепочке родителей и проверяет, подходит ли элемент под указанный CSS-селектор. Если подходит – останавливается и возвращает его.

Он самый новый из методов, рассмотренных в этой главе, поэтому старые браузеры его слабо поддерживают. Это, конечно, легко поправимо, как мы увидим позже в главе Современный DOM: полифиллы.

Пример использования (браузер должен поддерживать closest):
```javascript
<ul>
  <li class="chapter">Глава I
    <ul>
      <li class="subchapter">Глава <span class="num">1.1</span></li>
      <li class="subchapter">Глава <span class="num">1.2</span></li>
    </ul>
  </li>
</ul>

<script>
  var numberSpan = document.querySelector('.num');

  // ближайший элемент сверху подходящий под селектор li
  alert(numberSpan.closest('li').className) // subchapter

  // ближайший элемент сверху подходящий под селектор .chapter
  alert(numberSpan.closest('.chapter').tagName) // LI

  // ближайший элемент сверху, подходящий под селектор span
  // это сам numberSpan, так как поиск включает в себя сам элемент
  alert(numberSpan.closest('span') === numberSpan) // true
</script>
```
 

## Атрибут tabindex и кнопка tab
### html tabindex keyboard tab
## Атрибут tabindex и кнопка Tab

Если в тегах установить атрибуты tabindex, то можно переключать фокус между тегами с помощью кнопки Tab (движение по возрастанию значения tabindex) или Tab+Shift (уменьшение tabindex).

В примере при изменении фокуса изменяется цвет ячейки.


```javascript
<!DOCTYPE HTML>
<html>
 <head>
  <meta charset="windows-1251">
  <title>Тег А, атрибут tabindex</title>
 <style>
 p {
 background:green;
 }
 p:focus {
 background:yellow;
 }
 </style>
<script></script>
 </head>
 <body>
  <table>
   <tr>
    <td>
     <p tabindex="1">Ссылка 1</p>
     <p tabindex="3">Ссылка 3</p>
    </td>
    <td>
     <p tabindex="2">Ссылка 2</p>
     <p tabindex="4">Ссылка 4</p>
    </td>
   </tr>
  </table>
 </body>
</html>
```
## Обращение к данным и атрибуту элемента
### html DOM innerHTML innerText value attribute get set
## Обращение к данным в элементе DOM

__Свойство innerHTML__

Позволяет считывать и записывать html код из элемента DOM

```javascript
<div id="first">Это<b> пример текста</b></div>
<script>
var s=document.getElementById("first");
alert(s.innerHTML);
s.innerHTML="Hello<b>world</b>"
</script>

```

__Свойство innerText__

Позволяет считывать и записывать текст из элемента DOM

```javascript
<div id="first">Это<b> пример текста</b></div>
<script>
var s=document.getElementById("first");
alert(s.innerText);
s.innerText="Hello<b>world</b>"
</script>

```
__Свойство value__

Позволяет считывать и записывать значение из элемента DOM

В примере представлено два варианта обращения к значению value.
```javascript
<input type="text" id="first" value="Пример"/>
<script>
var s=document.getElementById("first");
alert("value :"+s.value);
alert("attribute value :"+s.getAttribute("value"));
s.value="Hello"
</script>

```

##Работа с аттрибутами элемента DOM.

__Чтение атрибута__


__Установка атрибута__

    getAttribute()

```javascript
<p  id="p1" style="background : red">Hello world</p>
<button onclick='myfunc()'>Hello World</button>

<script>
function myfunc() {
 var b = document.getElementById("p1"); 
alert(b.getAttribute("style")) 
}
</script>
```
__Установка атрибута__

    setAttribute()

```javascript
<p  id="p1" style="background : red">Hello world</p>
<button onclick='myfunc()'>Hello World</button>

<script>
function myfunc() {
 var b = document.getElementById("p1"); 
b.setAttribute("style", "");
}
</script>
```
__Обращение к атрибуту style в элементе__

В примере с помощью  идет обращение к первому элементу класса  класса example.

```javascript


<h2 class="example">A heading with class="example"</h2>
<p>A paragraph with class="example".</p> 

<p style="background:lightgrey">Click the button to add a background color to the first element in the document with class="example".</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    document.getElementsByClassName("example")[0].style.backgroundColor = "red";
}
</script>

```
## Тег iframe
### html tag iframe
##Тег iframe

__Пример загрузки сайта (атрибут src).__

Открывает фрейм поверх страницы

```javascript
<html>
   <head>
     <script>

function ShowWebSite(val)
{
 document.getElementById("myFrame").src=val;
 document.getElementById("myFrame").style.visibility="visible";
}

function Button1_onclick() {
 var v = document.getElementById("txtWebSite").value;
 ShowWebSite(v);
}
</script>
  </head>
  <body>
   <iframe  id="myFrame"  frameborder="0"  vspace="0"  hspace="0"  marginwidth="0"  marginheight="0" width="400"  scrolling="yes"  height="200"  style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; Z-INDEX: 999; LEFT: 20px; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid; POSITION: absolute; TOP: 100px; visibility:hidden;">
  </iframe>
  <b>Enter website:</b><input  type="text"  id="txtWebSite"    value="http://www.gazeta.ru">
   <button onclick="return Button1_onclick()">Go</button>


<h1>Просто для примера заполнения места на экране</h1>
</body>
</html>
```

__ Загрузка данных во фрейм __

В примере в элементе input на странице формирутся контент для загрузки в iframe. Содержимое загружается по кнопке
```javascript
<html>
 <head>
  <script>
function Show(val)
{
 var testFrame =  document.getElementById("myFrame");
  var doc = testFrame.contentDocument;
      if (doc == undefined || doc == null)
        doc = testFrame.contentWindow.document;
      doc.open();
      doc.write(val);
      doc.close();       
document.all.myFrame.style.visibility="visible";
}

function ButtonShowMsg_onclick() {
 var v = document.getElementById("txtContent").value;
 Show(v);
}

  </script>
 </head>
 <body>
  <iframe  id="myFrame"  frameborder="0"  vspace="0"  hspace="0" marginwidth="0"
marginheight="0"  width="100"  scrolling=yes  height="100"
style="BORDER-RIGHT: black 1px solid; BORDER-TOP: black 1px solid; Z-INDEX: 999; LEFT: 20px; BORDER-LEFT: black 1px solid; BORDER-BOTTOM: black 1px solid; POSITION: absolute; TOP: 100px; visibility:hvisible" srcdoc="Привет">
</iframe>
 <b>Enter content:<b>
 <input  type="text"  id="txtContent" value="This is going to be sample content in IFRAME"> 
 <button onclick="return ButtonShowMsg_onclick()">Show</button>
   </body>
</html>
```
    Для передачи данных при загрузке фрейма используется srcdoc

__Пример с чтением содержимого тега из фрейма в основное окно__

```javascript
<html>
<head>
<title>Second frame</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.js"></script>
<script type="text/javascript">
$(document).ready(function(){

$("button").click(function() {

    //here you have the control over the body of the iframe document
    var iBody = $("#iView").contents().find("body");

    //here you have the control over any element (#myContent)
    var myContent = iBody.find("span").html();
    alert(myContent);

});
});

</script>
</head>
<body>
 Основной контент
<button>Click</button>
<br />
<iframe id="iView" srcdoc="Это <span>второй</span> фрейм"/>


</body>
</html>


```


## Тег select(Combobox)
### html tag select combobox multiselect
## Тег select (combobox)

__Обычное использование__

Пример использования стандаартноого Combobox в js
```javascript

<script type="text/javascript">
function getIndex()
{
var x=document.getElementById("mySelect");
alert(x.value);
}

function setSelvalue()
{
var x=document.getElementById("mySelect");
var x1=document.getElementById('attrName');
x1.value=x.options[x.selectedIndex].text;
}
</script>
Имя атрибута<input type='text' id='attrName' value='' />
<br />
Select your favorite fruit:
<select id="mySelect" onChange="setSelvalue()">
  <option></option>
  <option>Orange</option>
  <option>Pineapple</option>
  <option>Banana</option>
</select>
<br /><br />
<input type="button" onclick="getIndex()" value="Alert selected option">
```

__Выбор нескольких элементов (multiselect)__

```javascript

<script type="text/javascript">
// select is an HTML select element
function getSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}
</script>
<select multiple>
  <option>Apple</option>
 <option>Grape</option>
<option value="favorite">Orange</option>
  
</select>
<button onclick="
  var el = document.getElementsByTagName('select')[0];
  alert(getSelectValues(el));
">Show selected values</button>
```
__Вставка ссылки в option__

Пример вставки ссылок в combobpx
```javascript
<script></script>
<select onchange="window.open(this.options[this.selectedIndex].value)">
        <option value="">Go to page...</option>
        <option value="http://stackoverflow.com/">stackoverflow</option>
        <option value="http://facebook.com/">facebook</option>
        <option value="http://twitter.com/">twitter</option>
    </select>
```

__Радактирование option__

Можно редактировать элементы стандартного Combo непосредственно на странице
```javascript
<html>
<head>
</head>
<body>
<SCRIPT>



var o = null;
var isNN = (navigator.appName.indexOf("Netscape")!=-1);
var selectedIndex = 0;
var pointer = "|";
var blinkDelay = null;
var pos = 0;

function beginEditing(menu) {
	finishEditing();
	if(menu.selectedIndex > -1 && menu[menu.selectedIndex].value != "read-only") {
alert(menu[menu.selectedIndex].text);		
o = new Object();
		o.editOption = menu[menu.selectedIndex];
		o.editOption.old = o.editOption.text;
		o.editOption.text += pointer;
		selectedIndex = menu.selectedIndex;
		if(navigator.userAgent.toLowerCase().indexOf("msie") != -1) //user is using IE
			document.onkeydown = keyPressHandler;
		else
			document.onkeypress = keyPressHandler;
	pos = o.editOption.text.indexOf(pointer);
	blinkDelay = setTimeout("blinkPointer()", 300);
	}

	function keyPressHandler(e){
		stopBlinking();
		menu.selectedIndex = selectedIndex;
		var option = o.editOption;	
		var keyCode = (window.event) ? event.keyCode : e.keyCode;
		var specialKey = true;
		if(keyCode == 0){
			keyCode = (isNN) ? e.which : event.keyCode;
			specialKey = false;
		}		
		
		if(keyCode == 16)
			return false;
		else if(keyCode == 116 && specialKey){
			finishEditing();
			window.location.reload(true);
		}
		else if(keyCode == 8)
			option.text = option.text.substring(0,option.text.indexOf(pointer)-1) + pointer + option.text.substring(option.text.indexOf(pointer)+1,option.text.length);
		else if(keyCode == 46  && option.text.indexOf(pointer) < option.text.length)
			option.text = option.text.substring(0,option.text.indexOf(pointer)) + pointer + option.text.substring(option.text.indexOf(pointer)+2,option.text.length);
		else if (keyCode == 13) 
			finishEditing();
		else if(keyCode == 37 && option.text.indexOf(pointer) > 0 && specialKey)
			option.text = option.text.substring(0,option.text.indexOf(pointer)-1) + pointer + option.text.substring(option.text.indexOf(pointer)-1,option.text.indexOf(pointer)) + option.text.substring(option.text.indexOf(pointer)+1,option.text.length);
		else if(keyCode == 39 && option.text.indexOf(pointer) < option.text.length && specialKey)
			option.text = option.text.substring(0,option.text.indexOf(pointer)) + option.text.substring(option.text.indexOf(pointer)+1,option.text.indexOf(pointer)+2) + pointer + option.text.substring(option.text.indexOf(pointer)+2,option.text.length);
		else if(((keyCode == 37 && option.text.indexOf(pointer) <= 0) || (keyCode == 39 && option.text.indexOf(pointer) >= option.text.length) || keyCode == 40 || keyCode == 38 || keyCode == 20 || keyCode == 33 || keyCode == 34) && specialKey){
			//do nothing
		}else if(keyCode == 36 && specialKey)
			option.text = pointer + option.text.substring(0,option.text.indexOf(pointer)) + option.text.substring(option.text.indexOf(pointer)+1,option.text.length);
		else if(keyCode == 35 && specialKey)
			option.text = option.text.substring(0,option.text.indexOf(pointer)) + option.text.substring(option.text.indexOf(pointer)+1,option.text.length) + pointer;
		else
			option.text = option.text.substring(0,option.text.indexOf(pointer)) + String.fromCharCode(keyCode) + pointer + option.text.substring(option.text.indexOf(pointer)+1,option.text.length);
		
		pos = option.text.indexOf(pointer);
		blinkDelay = setTimeout("blinkPointer()", 300);
		
		if(!((keyCode >= 48 && keyCode <= 90) || (keyCode >= 96 && keyCode <= 122)))
			return false;
			
	}
	
}

function blinkPointer(){
	if(o == null)
		return;
	pos = o.editOption.text.indexOf(pointer);
	o.editOption.text = o.editOption.text = o.editOption.text.substring(0,o.editOption.text.indexOf(pointer)) + "." + o.editOption.text.substring(o.editOption.text.indexOf(pointer)+1,o.editOption.text.length)
	blinkDelay = setTimeout("blinkPointer2()", 300);	
}
	
function blinkPointer2(){
	o.editOption.text = o.editOption.text = o.editOption.text.substring(0,pos) + pointer + o.editOption.text.substring(pos+1,o.editOption.text.length)
	blinkDelay = setTimeout("blinkPointer()", 300);
}

function stopBlinking(){
	clearTimeout(blinkDelay);
	if(o.editOption.text.charAt(pos) != pointer)
		o.editOption.text = o.editOption.text = o.editOption.text.substring(0,pos) + pointer + o.editOption.text.substring(pos+1,o.editOption.text.length)
}

function finishEditing() {
	if(o != null) { 		
		stopBlinking();
		option = o.editOption;
		option.text = option.text.substring(0,option.text.indexOf(pointer)) + option.text.substring(option.text.indexOf(pointer)+1,option.text.length);
			
		option.value = option.text;	
		document.onkeypress = null;
		document.onkeydown = null;
		o = null;
	}
}
</SCRIPT>

<form>
<select name="test" size="5" onClick="beginEditing(this);" onBlur="finishEditing();" style="width:250px;">
<option value="test">test 01</option>
<option value="test">test 02</option>
</select>
</form>
</body>
</html>

```

## Тег Select. Изменение стиля.
### html select combobox css
## Тег select Изменение стиля.

__Изменение стиля элемента__

В примере представлен вариант изменения стиля для элемента select<br>
```javascript
<html>
<head>
<script src="http://code.jquery.com/jquery-latest.min.js"
 type="text/javascript"></script>
<script>

 $(document).ready(function(){
$('select > option:selected:disabled').each(function() {
    var select = this.parentNode;
    select.classList.add("select-with-disabled-selected-option");
    $(select).change(function() {
        this.classList.remove("select-with-disabled-selected-option");
    });
});
 });
</script>
<style>
.select-with-disabled-selected-option {
    color: red;
    font-weight: bold;
   /* background-color:black;*/
}
select {
  margin: 50px;
  border: 1px solid #111;
  background: transparent;
  background: #58B14C;
  width: 250px;
  padding: 5px 35px 5px 50px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(http://www.stackoverflow.com/favicon.ico) 6% / 15% no-repeat #eee;
}
/*target Internet Explorer 9 and Internet Explorer 10:*/

@media screen and (min-width: 0\0) {
  select {
    background: none;
    padding: 5px;
  }
}
#mainselection {
    overflow: hidden;
    width: 350px;
    -moz-border-radius: 9px 9px 9px 9px;
    -webkit-border-radius: 9px 9px 9px 9px;
    border-radius: 9px 9px 9px 9px;
    box-shadow: 1px 1px 11px #330033;
    background: url("arrow.gif") no-repeat scroll 319px 5px #58B14C;
}
</style>
</head>
<body>
<div id="mainselection">
<select>
    <option>test1</option>
    <option selected disabled>test2</option>
    <option disabled selected style='display:none;'>test3</option>
    <option>test4</option>
</select>
</div>
</body>
</html>
```

__Combobox как элемент меню__

Пример реализации splitbutton из элемента combobox
```javascript
<script>
function clearcombo(){
$("#gr_val1").val("1");
//document.getElementById("gr_val1").text="Файл";
}
</script>
<style>
.com1 {
      font-size: 24px;
      padding: 7px 9px;
      background: #ccc;
      color: black;
      cursor: pointer; cursor: hand;
    }
.com0 {
      font-size: 0px;
     /* padding: 1px 1px; */
      background: #ccc;
      color: #ccc;
      cursor: pointer; cursor: hand;
    }
</style>
Значение <select id="gr_val1" class="com1"  onClick='clearcombo()'>
  <option class="com0"  value="1">Файл</option>
   <option  onClick='alert("Save")'>Сохранить</option>
 <option  onClick='alert("Open")'>Открыть</option>

</select>
```




## Создание combo из table
### html table combobox
## Создание combobox из элемента table

В примере combobox  создан на основе таблицы.
Нестандартная версия элемента

```javascript
<html>
<head>
<style type="text/css">
<!--
div.cbhide {
position:absolute;
visibility:hidden;
overflow:hidden;
height:0px;
}
div.cbshow {
position:absolute;
visibility:visible;
overflow:visible;
}
table.combo {
width:100%;
border: 1px solid #000000;
}
#cbtext {
background-color:#FFFF99;
}
#cbbtn{
border-color:#FFFFFF;
border-width:2px;
border-style:outset;
cursor:pointer;
background-color:#CCCCCC;
text-align:center
vertical-align:middle;
margin:0px;
padding:0px;
height:100%;
}
td.passive {
color:#000000;
background-color:#FFFF99;
}
td.active {
color:#FFFFFF;
background-color:#0000FF;
}
-->
</style>

<script type="text/javascript">
<!--
function mousedown(obj) {
var select = document.getElementById('cbselect');
var temp = obj.target;
while(temp != null && temp != select) {
temp = temp.parentNode;
}
if(temp == select) {
obj.target.handleEvent(obj);
} else {
hide();
}
}

function hide() {
document.getElementById('cbselect').className='cbh ide';
document.getElementById('cbbtn').onclick=show;
document.onmousedown = null;
return true;
}

function show() {
var node = document.getElementById('cbtext');
var x = Number(node.offsetLeft) + Number(document.body.leftMargin);
var y = Number(node.offsetTop) + Number(node.offsetHeight) +
Number(document.body.topMargin);
var w = Number(node.offsetWidth)
var div = document.getElementById('cbselect');
div.className='cbshow';
div.style.top = y;
div.style.left = x;
div.style.width = w;
document.getElementById('cbbtn').onclick=hide;
if(document.addEventListener) {
document.onmousedown = mousedown;
} else {
document.getElementById('cbbtn').onblur=hide;
}
}

function select(td) {
td.className='passive'
var text = td.firstChild.nodeValue;
document.getElementById('cbtext').value = text;
hide();
}
//-->
</script>
</head>
<body>
<table class="comboinput" cellspacing="0" cellpadding="0">
<tr class="comboinput">
<td class="comboinput"><input id="cbtext" type="text"
name="test"></td>
<td class="comboinput">
<button id="cbbtn" type="button"
onmousedown = "this.style.borderStyle='inset'"
onmouseup = "this.style.borderStyle='outset'"
onmouseout = "this.style.borderStyle='outset'"
onclick="show()">
<img src="open.gif">
</button>
</td>
<!-- <td class="comboinput">
<button type="button" onclick="alert('Click')">Click</button>
</td> -->
</tr>
</table>

<div id="cbselect" class="cbhide">
<table class="combo" cellspacing="0" cellpadding="0" >
<tr class="option">
<td class="passive" onMouseover="this.className='active';"
onMouseout="this.className='passive';" onClick="select(this)"
onFocus="select(this)">Apple</td>
</tr>
<tr class="option">
<td class="passive" onMouseover="this.className='active';"
onMouseout="this.className='passive';" onClick="select(this)"
onFocus="select(this)">Cherry</td>
</tr>
<tr class="option">
<td class="passive" onMouseover="this.className='active';"
onMouseout="this.className='passive';" onClick="select(this)"
onFocus="select(this)">Melon</td>
</tr>
<tr class="option">
<td class="passive" onMouseover="this.className='active';"
onMouseout="this.className='passive';" onClick="select(this)"
onFocus="select(this)">Lemon</td>
</tr>
<tr class="option">
<td class="passive" onMouseover="this.className='active';"
onMouseout="this.className='passive';" onClick="select(this)"
onFocus="select(this)">Peach</td>
</tr>
<tr class="option">
<td nowrap class="passive" onMouseover="this.className='active';"
onMouseout="this.className='passive';" onClick="select(this)"
onFocus="select(this)">Plum</td>
</tr>
</table>
</div>
</body>
</html>
```


## Тег textarea insert text cursor
### html textarea css draganddrop
## Тег textarea

__Изменение стиля элемента__

Изменяется стиль элемента с помощью класса CSS
```javascript
<script>
</script>
<style>
.TA{
	background-color : #FFFF99;
        FONT: bold 20px Tahoma;
}
</style>
		
<textarea cols="60" rows="10" class="TA">Привет мир</textarea>

```
__Вставка текста в позицию курсора__
```javascript
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<title>Extended functionaly for textelements</title>
	<script type="text/javascript">
		// See http://pastebin.parentnode.org/78
	function insertAtCaret(obj, text) {
		if(document.selection) {
			obj.focus();
			var orig = obj.value.replace(/\r\n/g, "\n");
			var range = document.selection.createRange();

			if(range.parentElement() != obj) {
				return false;
			}

			range.text = text;
			
			var actual = tmp = obj.value.replace(/\r\n/g, "\n");

			for(var diff = 0; diff < orig.length; diff++) {
				if(orig.charAt(diff) != actual.charAt(diff)) break;
			}

			for(var index = 0, start = 0; 
				tmp.match(text) 
					&& (tmp = tmp.replace(text, "")) 
					&& index <= diff; 
				index = start + text.length
			) {
				start = actual.indexOf(text, index);
			}
		} else if(obj.selectionStart) {
			var start = obj.selectionStart;
			var end   = obj.selectionEnd;

			obj.value = obj.value.substr(0, start) 
				+ text 
				+ obj.value.substr(end, obj.value.length);
		}
		
		if(start != null) {
			setCaretTo(obj, start + text.length);
		} else {
			obj.value += text;
		}
	}
	
	function setCaretTo(obj, pos) {
		if(obj.createTextRange) {
			var range = obj.createTextRange();
			range.move('character', pos);
			range.select();
		} else if(obj.selectionStart) {
			obj.focus();
			obj.setSelectionRange(pos, pos);
		}
	}
	</script>
</head>
<body>
	<form name="form">
		<input type="button" value="Insert text" onclick="insertAtCaret(this.form.text, this.form.string.value)">
		<input type="text" name="string"><br />		
		<textarea name="text" cols="60" rows="10"></textarea>
	</form>
</body>
</html>
```

__Вставка текста в textarea со страницы__

Добавляет выделенный текст из документа в Textarea, в конец введенного текста.
```javascript

<HTML>
<HEAD>

<BODY>
<FORM NAME="myForm">
<TEXTAREA NAME="myArea" COLS="40" ROWS="4"></TEXTAREA>
</FORM>

<SCRIPT LANGUAGE="JavaScript">
<!--

function display() {
  if (document.getSelection) {
    var str = document.getSelection();
  } else if (document.selection && document.selection.createRange) {
    var range = document.selection.createRange();
    var str = range.text;
  } else {
    var str = "Sorry, this is not possible with your browser.";
  }
  alert(str);
  var str2=document.myForm.myArea.value
  if (str!=str2){
     if (str!="")
     document.myForm.myArea.value =str2 + str;
     }
  
}

if (window.Event)
  document.captureEvents(Event.MOUSEUP);
document.onmouseup = display;

// -->
</SCRIPT>
Привет мир
</body>
</html>

```
__Перетаскивание текста в textarea(draganddrop)__

Событие dnd  Отмечаем текст и перетаскиваем в textarea
```javascript
<HTML>
<HEAD>
<TITLE>onBeforeCopy Event Handler</TITLE>
<SCRIPT LANGUAGE="JavaScript">
function selectWhole() {
    var obj = window.event.srcElement
    var range = document.body.createTextRange()
    range.moveToElementText(obj)
    range.select()
    event.returnValue = false
}
</SCRIPT>
</HEAD>
<BODY>
<H1>onBeforeCopy Event Handler</H1>
<HR>
<P>Select one or more characters in the following paragraph. Then 
execute a Copy command via Edit or context menu.</P>
<P ID="myP" onBeforeCopy="selectWhole()">Lorem ipsum dolor sit amet, 
consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut 
labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
<FORM>
<P>Paste results here:<BR>
<TEXTAREA NAME="output" COLS="60" ROWS="5"></TEXTAREA>
</P>
</FORM>
</BODY>
</HTML>
```










## Тег img. Встроенный рисунок
### html binary image
## Встроенный в html рисунок.

В примере код рисунка помещен внутрь HTML
 
 * [рисунок](data/binary data/ex1.html)


```text
   <img  src="data:image/jpeg;base64,.....//2Q==" alt="" />

```


## Графика. Тег canvas
### html Графика canvas
## Графика.Тег canvas

__Рисование фигуры__

Рисование в теге canvas фигуры звезда
```javascript

<script type="text/javascript">

function drawPoly(id, arr) {
var canvas = document.getElementById(id).getContext('2d');
canvas.beginPath();
for (var i = 0; i < arr.length; i++) {
  if (i == 0) canvas.moveTo(arr[i][0], arr[i][1]);
 else canvas.lineTo(arr[i][0], arr[i][1]);
}
canvas.fillStyle = "rgba(255,128,128,1.0)";
canvas.fill();
}

var coordArray = [
[100, 50],
[115, 80],
[150, 80],
[125, 100],
[135, 130],
[100, 110],
[65, 130],
[75, 100],
[50, 80],
[85, 80]
];

document.write("<canvas id='canvasId' width='200' height='200'></canvas>");
document.write("<br/><br/>");
document.write("<input type='button' value='Draw' onclick='drawPoly("+'"canvasId", coordArray)'+"' />");

// определение типа и версии браузера
function canvasBrowser() {
      // ╨а╤Ы╨а╤Ч╨б╨В╨а┬╡╨а╥С╨а┬╡╨а┬╗╨б╨П╨а┬╡╨а╤Ш ╨бтАЪ╨а╤С╨а╤Ч ╨а┬▒╨б╨В╨а┬░╨б╤У╨а┬╖╨а┬╡╨б╨В╨а┬░
      var ua = navigator.userAgent.toLowerCase();
      var isIE = (ua.indexOf("msie") != -1 && ua.indexOf("opera") == -1 && ua.indexOf("webtv") == -1);
      var isOpera = ua.indexOf("opera") != -1;
      var isFF = ua.indexOf("firefox") != -1;

      var result = false;
      if (isIE) result = true;
     else if (isFF) {
            var ffVersion = parseFloat(ua.substring(ua.indexOf("firefox") + 8, ua.length));
            if (ffVersion >= 1.5) result = true;
       } else if (isOpera) {
            var operaVersion = parseFloat(ua.substring(ua.indexOf("opera") + 6, ua.length));
            if (operaVersion >= 9.0) result = true;
      }
      return result;
}

</script>

```

__Второй пример__

```javascript
Пример вывода графики с помощью JS


<script type="text/javascript">
// Функция, принимающая id тега <canvas> и массив координат
function drawPoly(id, arr) {
var canvas = document.getElementById(id).getContext('2d');
// Начинаем отрисовку
canvas.beginPath();
for (var i = 0; i < arr.length; i++) {
// Ставим точку на исходную позицию
if (i == 0) canvas.moveTo(arr[i][0], arr[i][1]);
// Рисуем линии от точки к точке
else canvas.lineTo(arr[i][0], arr[i][1]);
}
canvas.fillStyle = "rgba(0,0,255,0.5)";
// Зальем полученный многоугольник цветом
canvas.fill();
//canvas.beginPath();
canvas.moveTo(100, 50);
canvas.lineTo(120, 50);
canvas.lineTo(120, 80);
canvas.lineTo(100, 80);
// Задаем цвет заливки в формате RGBA
canvas.fillStyle = "rgba(0,0,0,0.5)";
// Зальем полученный многоугольник цветом
canvas.fill();
}

// Многомерный массив с координатами
var coordArray = [
[100, 50],
[150, 50],
[150, 100]

];

// Выведем в HTML-поток тег <canvas> и кнопку для запуска рисовалки
document.write("<canvas id='canvasId' width='200' height='200'></canvas>");
document.write("<br/><br/>");
document.write("<input type='button' value='Draw' onclick='drawPoly("+'"canvasId", coordArray)'+"' />");

/*Проверено в
- IE6;
- Mozilla Firefox 1.5;
- Opera 9.01+;

Для того, чтобы скрипт не срабатывал в других обозревателях, ставьте ограничения. Воспользуйтесь простой функцией, которая определяет тип и версию браузера из приведенного выше списка:
*/
function canvasBrowser() {
      // Определяем тип браузера
      var ua = navigator.userAgent.toLowerCase();
      var isIE = (ua.indexOf("msie") != -1 && ua.indexOf("opera") == -1 && ua.indexOf("webtv") == -1);
      var isOpera = ua.indexOf("opera") != -1;
      var isFF = ua.indexOf("firefox") != -1;

      var result = false;
      // Разрешим все версии IE
      if (isIE) result = true;
      // Лису разрешим только с полторашки
      else if (isFF) {
            var ffVersion = parseFloat(ua.substring(ua.indexOf("firefox") + 8, ua.length));
            if (ffVersion >= 1.5) result = true;
      // Оперу, начиная с версии 9.0
      } else if (isOpera) {
            var operaVersion = parseFloat(ua.substring(ua.indexOf("opera") + 6, ua.length));
            if (operaVersion >= 9.0) result = true;
      }
      return result;
}

</script>

```
Load text
►

## SVG. Примеры
### html svg graphic animation
## SVG

Примеры  использования svg в html:

 * <a href="data/svg/html/1.htm" target="_blank">Простой пример</a></li><li><a href="data/svg/html/Change_color.html" target="_blank">Смена цвета</a>
 * <a href="data/svg/html/4.htm" target="_blank">Ссылки на svg файл</a></li><li><a href="data/svg/html/2.html" target="_blank">Анимация текста</a>
 * <a href="data/svg/html/animated-svg-icon/index.html" target="_blank">Анимация рисунка</a>
 * <a href="data/svg/html/button_1.html" target="_blank">Кнопка</a></li><li><a href="data/svg/html/link_button.html" target="_blank">Ссылка</a>
 * <a href="data/svg/html/visio_2010.htm" target="_blank">Импорт из Visio</a>

__SVG рисунки__

* <a href="data/svg/draws/index_cat.htm" target="_blank">Архив рисунков</a>
 * <a href="data/svg/draws/" target="_blank">Рисунки</a></li></ul><br><br>


## Векторная графика (SVG)
### HTML5 svg graphic animation
## SVG
Векторная графика формат svg может включаться в HTML файл:<br><ul><li>&nbsp;в виде тега &lt;svg&gt; и его свойств</li><li>&nbsp;в виде ссылки на svg файл в тегах &lt;img&gt;&lt;iframe&gt;&lt;a&gt;</li></ul><p>формат поддерживает изменения стиля рисунка(цвет, размеры), а также движение и трансформацию рисунка</p><p>
```javascript
 <!DOCTYPE html>
<html>
<head><script></script></head>
<body>

<h1>My first SVG</h1>

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

</body>
</html>
```

## Закрыть страницу в браузере
### browser close window onbeforeunload
Выдача предупреждающего сообщения при закрытии окна браузера
```javascript
<HTML>
<head>
<script>
function closeIt()
{
  return "Any string value here forces a dialog box to \n" + 
         "appear before closing the window.";
}
window.onbeforeunload = closeIt;
</script>
</head>
<body>
  <a href="http://www.microsoft.com">Click here to navigate to 
      www.microsoft.com</a>
</body>
</html>

```

## Слои (z-index)
### Layer z-index css
## Слои (z-index)
Представлена работа со слоями

__Установка параметров блоков__

В примере представлены 3 блока с различным значением z-index. Третий блок
может быть показан или скрыт.

```javascript
<html>
<head>
<title>Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1253">
<script language="JavaScript">

</script>
<style type="text/css">
#apDiv1 {
	position:absolute;
	left:197px;
	top:342px;
	width:91px;
	height:24px;
	z-index:2;
}
</style>
</head>

<body bgcolor="#FFFFFF" text="#000000">
<div id="Layer1" style="position:absolute; width:560px; height:555px; z-index:3; left: 263px; top: 69px; background-color: #00FF00; layer-background-color: #00FF00; border: 1px none #000000" onClick="document.all('Layer2').style.visibility = 'visible';"> 
  <p><font size="20">New</font></p>
  <p><font size="20"> Layer</font></p>
  <div id="Layer2" style="position:absolute; width:200px; height:115px; z-index:2; left: 96px; top: 93px; visibility: hidden;  background-color: #66CCFF; layer-background-color: #66CCFF; border: 1px none #000000"> 
    <img src="nextcomment.gif" width="40" height="40" border=0
 onClick="document.all('Layer2').style.display='none';">
 </div>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
</div>
<div id="apDiv1"  onClick="document.all('Layer2').style.visibility = 'hidden';" style="background-color: #FF0000; z-index: 4">Example</div>
Another layer 
</body>
</html>

```

__Перетаскивание блоков__

Перетаскивание объектов их видимость
```javascript
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>

<title>Drag and Drop</title>
<meta http-equiv="content-type" content="text/html; charset=ISO-8859-1">
<meta http-equiv="content-script-type" content="text/javascript">
<meta http-equiv="content-style-type" content="text/css">


<style type="text/css">
.dragclass{
position : relative;
cursor : move;
}
</style>



<SCRIPT>


if  (document.getElementById){

(function(){

//Stop Opera selecting anything whilst dragging.
if (window.opera){
document.write("<input type='hidden' id='Q' value=' '>");
}

var n = 500;
var dragok = false;
var y,x,d,dy,dx;

function move(e){
if (!e) e = window.event;
 if (dragok){
  d.style.left = dx + e.clientX - x + "px";
  d.style.top  = dy + e.clientY - y + "px";
  return false;
 }
}

function down(e){
if (!e) e = window.event;
var temp = (typeof e.target != "undefined")?e.target:e.srcElement;
if (temp.tagName != "HTML"|"BODY" && temp.className != "dragclass"){
 temp = (typeof temp.parentNode != "undefined")?temp.parentNode:temp.parentElement;
 }
if (temp.className == "dragclass"){
 if (window.opera){
  document.getElementById("Q").focus();
 }
 dragok = true;
 temp.style.zIndex = n++;
 d = temp;
 dx = parseInt(temp.style.left+0);
 dy = parseInt(temp.style.top+0);
 x = e.clientX;
 y = e.clientY;
 document.onmousemove = move;
 return false;
 }
}

function up(){
dragok = false;
document.onmousemove = null;
}

document.onmousedown = down;
document.onmouseup = up;

})();
}//End.

function hide() {

  document.getElementById('apDiv1').style.zIndex=2;
}
function show() {

  document.getElementById('apDiv1').style.zIndex=4;
}
</SCRIPT>


</head>
<body>






<p class="dragclass" style="top:0px;left:0px;width:200px;text-align:center;background-color:#ff0000;color:#ffffff">
P tag 
</p>


<div class="dragclass" style="height:20px;width:150px;top:0px;left:0px;background-color:#ff0000;color:#ffffff">
Div: Relative position
</div>

<p>.</p>



<img src="http://www.java2s.com/style/logo.png" class="dragclass" style="top:0px;left:0px;height:100px;width:150px;padding:0px"/>
<p>.<p>


<b class="dragclass" style="top:0px;left:0px;background-color:#ff0000;color:#ffffff">
B tag
</b>



<img src="http://www.java2s.com/style/logoRed.png" class="dragclass" style="position:absolute;top:400px;left:200px;height:105px;width:150px;padding:0px"/>

<div id="test" class="dragclass" style="position:absolute;top:330px;left:160px;height:20px;width:150px;background-color:#ff0000;color:#ffffff">
Div: Absolute position
</div>
<div id="Layer1" style="position:absolute; width:560px; height:555px; z-index:3; left: 200px; top: 69px; background-color: #00FF00; layer-background-color: #00FF00; border: 1px none #000000"> 
  <p><font size="20">New</font></p>
  <p><font size="20"> Layer</font></p>
  
  <p>&nbsp;</p>
<img src="nextcomment.gif" width="40" height="40" border=0
 onClick="show()">
  <p>&nbsp;</p>
</div>
<div id="apDiv1" class="dragclass"   style="position:absolute; width:80px; height:100px; z-index:2; left: 220px; top: 350px; background-color:#FFFF00;">
<img src="nextcomment.gif" width="40" height="40" border=0
 onClick="hide()">
<br>Example
</div>

</body>
</html>
```

## Изменение вида элемента при выборе
### css focus
## Изменение вида элемента при фокусе (_только CSS)_

В примере изменяется внешний вид элемента __input type="text"__ при его выборе. Для изменеия вида используется стили класс __#enter .form-text:focus__

```javascript
<html>
 <head>
  <meta charset="windows-1251">
  <title>focus</title>
  <style>
   #enter .label {
     width: 80px; /* Ширина блока с текстом */
     float: left; /* Расположение в одну строку с полем */
     text-align: right; /* Выравнивание по правому краю */
   }
   #enter .form-text {
     width: 240px; /* Ширина поля */
     margin-left: 10px; /* Расстояние между полем и текстом */
     border: 1px solid #abadb3; /* Рамка вокруг текстового поля */
     padding: 2px; /* Поля вокруг текста */
   }
   #enter .form-item {
     margin-bottom: 5px; /* Отступ снизу */
   }
   #enter .form-text:focus {
     background: yellow; /* Цвет фона */
     border: 4px solid #29B0D9; /* Параметры рамки */
   }
   #enter p {
    margin-left: 90px; /* Сдвиг вправо */
   }
  </style>
<script></script>
 </head>
 <body>
  <form action="login.php" method="post" id="enter">
   <div class="form-item">
     <span class="label">Логин:</span>
     <span class="field"><input type="text" name="login" value="" class="form-text"></span>
   </div>
   <div class="form-item">
     <span class="label">Пароль:</span>
     <span class="field"><input type="password" name="pass" class="form-text"></span>
   </div>
   
  </form>
 </body>
</html>
```
## Адаптивный стиль (изменение фона)
### css window screen
## Изменение парметров стиля в зависимости от  размера экрана

В примере изменяется цвет фона в зависимости от размеров экрана
```javascript
<html>
<head>
<script type="text/javascript">
function timedMsg()
{
var t=setTimeout("alert('5 seconds!')",5000);
}
</script>
<style>
body {
background-color: grey;
}

@media screen and (max-width: 960px) {
body {
background-color: red;
}
}
@media screen and (max-width: 768px) {
body {
background-color: orange;
}
}
@media screen and (max-width: 550px) {
body {
background-color: yellow;
}
}
@media screen and (max-width: 320px) {
body {
background-color: green;
}
}
@media screen and (max-device-width: 800px) {
h1 { color: green }
}
}
</style>
</head>

<body>
Example text 
<h1>Адаптация к размеру экрана  </h1>

</body>
</html>
```

## Стили плавающий блок
### css div float
В примере используется блок, который в зависимости от размера экрана занимает разные позиции

 *[Пример](data/CSS_adaptivedesign/ex4_html5.htm)


## Элемент Datalist
### HTML5 datalist input text combo   autocomplete
##Элемент Datalist

Элемент Datalist похож на элемент select, основные отличия от элемента select следующие:<br><ul><li>&nbsp;обязательным приложением к нему является элемент input text, с помощью которого осуществляется выборка значения из списка.</li><li>режим автозавершения слова</li></ul><p>К сожалению, элемент datalist не работает со стилями, можно изменить вид только верхней части input text <br></p><br>
```javascript
<html>
<head>
<script src="http://code.jquery.com/jquery-latest.min.js"
 type="text/javascript"></script>

<style>
input[list] { background: yellow; }
#datalist { background: yellow; }
</style>
</head>
<body>

<button onclick='first_combo();'><<</button> 
<button onclick="prev_combo()"><</button>
<input type="text" id="input" list="datalist" onchange='console.log("changed");'/>
<datalist id="datalist">
    <option value="Pen">Pen</option>
    <option selected  value="Pencil">Pencil</option>
    <option value="Paper">Paper <a href="#">пример</a></option>
</datalist>
<button onclick="next_combo();">></button>
<button onclick="last_combo();">>></button>
<script>
var n=0;
var datalist = document.getElementById ("datalist");
var input = document.getElementById ("input");

input.addEventListener ("keyup", function (event) {
    if (event.which === 13) {
        //alert(input.value);
        for (var i=0;i<datalist.options.length;i++)
    if (datalist.options[i].value == input.value) 
        {alert(datalist.options[i].text+" : "+i);n=i;break;}
        
    }
}, false);
function prev_combo(){
 if (n==0) n=datalist.options.length;
 n=n-1;
 input.value=datalist.options[n].value;
 }
function next_combo() {
 if (n==datalist.options.length-1) n=0;
  else n=n+1;
 input.value=datalist.options[n].value;
 }
function last_combo(){
 n=datalist.options.length;
 n=n-1;
 input.value=datalist.options[n].value;
 }
 function first_combo(){
 n=0;
 input.value=datalist.options[n].value;
 }
 $(document).ready(function(){
/*
$('input').change(function(){
  console.log("changed");
});
*/
 });
</script>
</body>
</html>   alert("test");

```

## Новые теги вHTML5(heaer footer)
### html5 tags header footer section article aside
## HTML5 новые теги

Представлено 2 примера, в которых используются теги HTML5<br><a href="data/html5/div_layout4.htm" target="_blank">Пример от W3</a><br><a href="data/html5/div_layout5.htm" target="_blank">Более сложный пример представлен код в окне редактора</a><br>
```javascript
<!DOCTYPE html>
<html>

<head>
<script></script>
<style>
header {
    background-color:black;
    color:white;
    text-align:center;
    padding:5px;	 
}
nav {
    line-height:30px;
    background-color:#eeeeee;
    height:30px;
    /*width:100px;*/
    /*float:left;*/
    padding:5px;	      
}
section {
    width:350px;
    float:left;
    padding:10px;	 	 
}
article {
    background-color:grey;
    float:left;
}
aside {
    background-color:yellow;
    float:right;
}
footer {
    background-color:black;
    color:white;
    clear:both;
    text-align:center;
    padding:5px;	 	 
}
</style>
</head>

<body>

<header>
<h1>City Gallery</h1>
</header>

<nav>
London
Paris
Tokyo
</nav>

<section>
<h1>London</h1>
<p>
London is the capital city of England. It is the most populous city in the United Kingdom,
with a metropolitan area of over 13 million inhabitants.
</p>
<p>
Standing on the River Thames, London has been a major settlement for two millennia,
its history going back to its founding by the Romans, who named it Londinium.
</p>
<article>
<h2>First article</h2>
Some info about city
</article>
<article>
<h2>Second article</h2>
More info about city
</article>
</section>
<section>
<h1>Paris</h1>
<p>
Paris is the capital city of France. It is the most populous city 
</p>

<article>
<h2>First article</h2>
Some info about city
</article>
<article>
<h2>Second article</h2>
More info about city
</article>
</section>
<aside><h3>Adding info</h3></aside>
<footer>
Copyright © W3Schools.com
</footer>

</body>
</html>
```

## Шаблон страницы
### CSS layout rotate text
## Шаблоны страницы

__ Две колонки__

```javascript

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en"><head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Simple 2 column CSS layout, final layout | 456 Berea Street</title>
	<meta name="description" content="How to create a simple two column CSS layout with full width header and footer.">
	<meta name="copyright" content="Copyright (c) 2004 Roger Johansson">
	<meta name="author" content="Roger Johansson">
	<style type="text/css" media="screen, print, projection">
	body,
	html {
		margin:0;
		padding:0;
		color:#000;
		background:#a7a09a;
	}
	#wrap {
		width:750px;
		margin:0 auto;
		background:#99c;
	}
	#header {
    	padding:5px 10px;
		background:#ddd;
	}
	h1 {
	    margin:0;
    }
	#nav {
		padding:5px 10px;
		background:#c99;
	}
	#nav ul {
		margin:0;
		padding:0;
		list-style:none;
	}
	#nav li {
		display:inline;
		margin:0;
		padding:0;
	}
	#main {
		float:left;
		width:480px;
		padding:10px;
		background:#9c9;
	}
	h2 {
		margin:0 0 1em;
	}
	#sidebar {
		float:right;
		width:230px;
		padding:10px;
		background:#99c;
	}
	#footer {
		clear:both;
		padding:5px 10px;
		background:#cc9;
	}
	#footer p {
		margin:0;
    }
	* html #footer {
		height:1px;
	}
	</style>
</head>
<body>
<div id="wrap">
	<div id="header"><h1>Simple 2 column CSS layout, final layout</h1></div>
	<div id="nav">
		<ul>
			<li><a href="http://www.456bereastreet.com/">Option 1</a></li>
			<li><a href="http://www.456bereastreet.com/">Option 2</a></li>
			<li><a href="http://www.456bereastreet.com/">Option 3</a></li>
			<li><a href="http://www.456bereastreet.com/">Option 4</a></li>
			<li><a href="http://www.456bereastreet.com/">Option 5</a></li>
		</ul>
	</div>
	<div id="main">
		<h2>Column 1</h2>
		<p><a href="http://www.456bereastreet.com/">456 Berea Street Home</a></p>
		<p><a href="http://www.456bereastreet.com/lab/developing_with_web_standards/csslayout/2-col/">Simple 2 column CSS layout</a></p>
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris 
vel magna. Mauris risus nunc, tristique varius, gravida in, lacinia vel,
 elit. Nam ornare, felis non faucibus molestie, nulla augue adipiscing 
mauris, a nonummy diam ligula ut risus. Praesent varius. Cum sociis 
natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus.</p>
		<p>Nulla a lacus. Nulla facilisi. Lorem ipsum dolor sit amet, 
consectetuer adipiscing elit. Fusce pulvinar lobortis purus. Cum sociis 
natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec semper ipsum et urna. Ut consequat neque vitae felis. 
Suspendisse dapibus, magna quis pulvinar laoreet, dolor neque lacinia 
arcu, et luctus mi erat vestibulum sem. Mauris faucibus iaculis lacus. 
Aliquam nec ante in quam sollicitudin congue. Quisque congue egestas 
elit. Quisque viverra. Donec feugiat elementum est. Etiam vel lorem.</p>
		<p>Aenean tempor. Mauris tortor quam, elementum eu, convallis a, 
semper quis, purus. Cras at tortor in purus tincidunt tristique. In hac 
habitasse platea dictumst. Ut eu lectus eu metus molestie iaculis. In 
ornare. Donec at enim vel erat tempor congue. Nullam varius. Lorem ipsum
 dolor sit amet, consectetuer adipiscing elit. Nulla feugiat hendrerit 
risus. Integer enim velit, gravida id, sollicitudin at, consequat sit 
amet, leo. Fusce imperdiet condimentum velit. Phasellus nonummy interdum
 est. Pellentesque quam.</p>
		<h3>Consectetuer adipiscing elit</h3>
		<p>Nulla dictum. Praesent turpis libero, pretium in, pretium ac, 
malesuada sed, ligula. Sed a urna eu ipsum luctus faucibus. Curabitur 
fringilla. Suspendisse sit amet quam. Sed vel pede id libero luctus 
fermentum. Vestibulum volutpat tempor lectus. Vivamus convallis tempus 
ante. Nullam adipiscing dui blandit ipsum. Nullam convallis lacus ut 
quam. Mauris semper elit at ante. Vivamus tristique. Pellentesque 
pharetra ante at pede. In ultrices arcu vitae purus. In rutrum, erat at 
mollis consequat, leo massa consequat libero, ac vestibulum libero 
tellus sed risus. Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit.</p>
		<p>Maecenas eu velit nec magna venenatis consequat. In neque. Vivamus 
pellentesque, lacus eu aliquet semper, lorem metus rhoncus metus, a 
ornare orci ante a diam. Nunc sem nisl, aliquet quis, elementum nec, 
imperdiet in, wisi. Proin in lorem. Etiam molestie diam eget ante. Morbi
 quis tortor id lacus mollis venenatis. Lorem ipsum dolor sit amet, 
consectetuer adipiscing elit. Aliquam vel orci sit amet tellus mollis 
eleifend. Donec urna diam, viverra eget, ultricies gravida, ultrices eu,
 erat. Proin vel arcu. Sed diam. Cras hendrerit arcu sed augue. Sed 
justo felis, luctus a, accumsan in, tincidunt facilisis, libero. 
Phasellus eu eros.</p>
	</div>
	<div id="sidebar">
		<h2>Column 2</h2>
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris vel magna.</p>
		<ul>
			<li><a href="http://www.456bereastreet.com/">Link 1</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 2</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 3</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 4</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 5</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 6</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 7</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 8</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 9</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 10</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 11</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 12</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 13</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 14</a></li>
			<li><a href="http://www.456bereastreet.com/">Link 15</a></li>
		</ul>
	</div>
	<div id="footer">
		<p>Footer</p>
	</div>
</div>

</body></html>
```
__Навигация и заголовак
Один из примеров шаблона страницы с боковым навигационным окном и заголовком повернутым на 90 градусов<br><a href="data/div_css/panel_vertical_iitle.htm" target="_blank">Пример</a><br><a href="data/div_css/2col_layout.htm" target="_blank">шаьлон с 2 колонками</a><br><a href="data/div_css/ul_2colunm.htm" target="_blank">2 колонки с помощью элемента ui</a><br><br>
```javascript
<html>
<head>
<script src="http://code.jquery.com/jquery-latest.min.js"
 type="text/javascript"></script>
 <script>
 $(document).ready(function(){
 $("button").click(function(){
   $("#content").toggle();
 });
 });
 </script>
<style>
#div1{
height:300px;
}
.title {
float:left;
background-color:grey;
height:300px;
width:30px;
}
#content {
float:left;
background-color:green;
height:300px;
}
.vertical-text {
	transform: rotate(270deg);
	transform-origin: left top 0;
	text-align: bottom;
	margin-top:75px;
	width:20px;
	height:3;
}
#div2{
height:300px;
width:700px;
}
#complex {
 height:150px;
width:98%;
height:150px;
}
#pict {
float:left;
background-color:blue;
height:150px;
width:39%;
}
#tags {
float:right;
background-color:red;
height:150px;
width:35%;
}
#content2 {
 float:left;
background-color:yellow;
height:150px;
width:75%;
}
</style>
</head>
<body>
<div>
<div class="title" >
<button>O</button>
<p class="vertical-text">Playlist</p>
</div>
<div id="content">
Example of text
<br/>
second line

</div>
</div>

<div id="div2">
<div class="title" >
<button>O</button>
<p class="vertical-text">Playlist</p>
</div>
    <div id="complex">
	   <div id="pict">
	   for picture
	   </div>
	   <div id="tags">
	   for tags
	   </div>
    </div>
  <div id="content2">
  for text
  </div>
</div>
</body>
</html>


```

## Элемент DIV. Варианты стиля
### CSS div rotate
## Элемент DIV. Варианты стиля

__Наклон блока__

Несколько примеров, показывающих изменение положения и формы блока(div)<br><a href="data/div_css/rotete_div_03.html" target="_blank">Повернутый блок</a><br><a href="data/div_css/rotete_div_02.html" target="_blank">Поворот блока</a><br><a href="data/div_css/rotete_div_3D.html" target="_blank">Трансформация блока</a><br>
```javascript
<html>
<head>
<style> 
div {
    width: 200px;
    height: 100px;
    background-color: green;
    /* Rotate div */
    -ms-transform: rotate(30deg); /* IE 9 */
    -webkit-transform: rotate(30deg); /* Chrome, Safari, Opera */
    transform: rotate(-30deg); /* Standard syntax */
}
</style>
<script></script>
</head>
<body>
<h1>Example of div</h1>

<div><p>Hello world</p></div>

</body>
</html>
```
__Вращение блока__

```javascript
<html>
<head>
<script src="http://code.jquery.com/jquery-latest.min.js"
 type="text/javascript"></script>

<style> 
#clicker { 
    width: 100px; 
    height: 50px; 
    background-color: green; 
}

#rotating { 
    width: 100px; 
    height: 300px; 
    background-color: red; 
    margin-top: 50px; 
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.rotated { 
    transform:rotate(25deg); 
    -webkit-transform:rotate(25deg); 
    -moz-transform:rotate(25deg); 
    -o-transform:rotate(25deg); 
}
</style>
<script>
$(document).ready(function() {
    $('#clicker').click(function() {
        $('#rotating').toggleClass('rotated');
    });
});
</script>

</head>
<body>
<h1>Example of div</h1>


<div id="rotating">
<div id="clicker">Click Here</div>
hello</div>
</body>
</html>

```

__Изменение размеров блока__

```javascript
<html>
<head>

<script>
function rotateLeft() {
    document.getElementById("square").style["-webkit-transform"]= "rotateY(60deg)";
    document.getElementById("square").style["-moz-transform"]= "rotateY(60deg)";
    document.getElementById("square").style["transform"]= "rotateY(60deg)";
}
</script>
<style>
#square {
background-color:red;

height:200px;
width:100px;

}
.LeftRotate {
background-color:blue;
/*
height:200px;
width:100px;
*/
}
</style>

</head>
<body>
<h1>Example of div</h1>
<div id = "square">
    <div class="LeftRotate" onclick="rotateLeft()">abcd</div>
</div>


</body>
</html>

```



## Чтение информации из mp3
### audio mp3 ID3 file
## Чтение ID3 из mp3


Вариант утилиты для чтения ID3 тегов из mp3 файла

* [Пример](data/html5-mp3-id3-reader-master/index.html)
## Тег audio
### html audio mp3 api
## Тег audio

__Испльзование  в браузере__

Тег &lt;audio&gt; позволяет проигрывать аудио файл в html Документе<br>
```javascript
<script></script>
<p>Аудио</p>
<audio src="data/abe03.mp3" controls>
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
```

__Audio API__


Данное API позволяет создать аудиоплейер и включают основные функции( запуск, пауза , останов и др.)<br><ul><li><a href="http://www.w3schools.com/tags/ref_av_dom.asp" target="_blank">Описание методов,свойств и событий для API аудио и видео</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events" target="_blank">Отдеkльно по событиям</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video" target="_blank">примеры</a></li></ul>
```javascript
<div id="au1">
	<audio id="demo" controls>
		<source src="" type="audio/mpeg">
	</audio>
</div>
<div>
  <button onclick="document.getElementById('demo').play()">Play the Audio</button>
  <button onclick="document.getElementById('demo').pause()">Pause the Audio</button>
  <button onclick="document.getElementById('demo').volume+=0.1">Increase Volume</button>
  <button onclick="document.getElementById('demo').volume-=0.1">Decrease Volume</button>

<button onclick="alert(document.getElementById('demo').duration)"> Time</button>
<button onclick="document.getElementById('demo').load()">Load </button>
<br />
<button onclick="setCurTime()">set current time </button>
<button onclick="getCurTime()">get current time</button>
<br />
<button onclick="getcursrc()">get current source</button>
<button onclick="setsrc()">set source</button>
</div>	
  <script>
//current time
var aud = document.getElementById("demo");
function getCurTime() { 
    var aud = document.getElementById("demo");
    alert(aud.currentTime);
} 

function setCurTime() {
    var aud = document.getElementById("demo"); 
    aud.currentTime=5;
}
//current source

function getcursrc() { 
    var aud = document.getElementById("demo"); 
    alert(aud.currentSrc);
}
function setsrc() {
    var aud = document.getElementById("demo");
    aud.src="data/abe03.mp3"; 

} 

  
  </script>

```


## Текст в речь (TTS)
###  audio tts window
## Текст в речь (TTS)

Имеется два варианта реализации tts для html страницы (google и yandex)

__Google TTS__

Рбботает __только__ в браузере GoogleChrome и использует внутренние  голосовые кодеки компьютера.

```javascript
<html>
<body>
<button onclick="say()">Say</button>
<script>
/*
Работает только с GoogleChrome 
Использует внутренние кодеки
*/
function say() {
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 2; //0 to 2
msg.text = 'Привет мир';
msg.lang = 'en-US';

msg.onend = function(e) {
  console.log('Finished in ' + event.elapsedTime + ' seconds.');
};

speechSynthesis.speak(msg);

}
</script>
</body>
</html>
```

__yandex__

<a href="http://tts.voicetech.yandex.net/tts?text=Привет&speaker=zahar&format=mp3&quality=hi&platform=web&application=translate&lang=ru_RU" target="_blank">Пример</a>

     http://tts.voicetech.yandex.net/tts?
           text=Привет
          &speaker=zahar
         &format=mp3
         &quality=hi
         &platform=web
         &application=translate
         &lang=ru_RU

_Параметры_

 * text -озвучиваемый текст
 * speaker - Zahar (мужской голос), Jane (женский голос)
 * format - mp3 или wav

__Использование тега audio для yandex tts__

```javascript

<script></script>
<p>Аудио</p>
<audio src="http://tts.voicetech.yandex.net/tts?text=Привет и пока Hello and bye&speaker=zahar&format=mp3&quality=hi&platform=web&application=translate&lang=ru_RU" controls>
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
```
## Элемент дерево (Tree)
### html tree menu
## Tree (дерево)
Элемент tree реализован в "чистом" js и hrml . Позволяет реализовать боковые меню или форму 

 * <a href="data/treeview/index.html" target="_blank">Пример</a>


## Элемент Расписание (scheduller)
### js scheduller
## Sсheduller (сетевой график)

Элемент scheduller(dhtmlxScheduler v.4.1.0 Stardard) позволяет составить план работ на определенный период времени для одного или нескольких человек

 * <a href="data\dhtmlxScheduler_v4.1.0\samples\index.html" target="_blank">Примеры</a>


### Prerequisites

Some samples require PHP and Database support. By default they use SQLLite
database ( samples/common/database.sqlite ), but you can reconfigure samples
and work with MySQL, to do so

- import dump samples/common/dump.sql
- comment SQLite section and uncomment MySQL section in 
  samples/common/config.php



### Database and language support

PHP connectors supports MySQL, MsSQ, Oracle, FireBird, SQLite, PostgreSQL, SQLAnywhere
For Java and .Net you can grab connector packages with scheduler's samples from 
http://dhtmlx.com/docs/products/dhtmlxConnector/index.shtml


### ASP.Net  and MVC .Net

You can check separate product Scheduler.Net


## dhtmlxScheduler v.4.1.0 Stardard

This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.


Useful links
-------------

- Online  documentation
	http://docs.dhtmlx.com/scheduler/
- Downloadable documentation
	CHM version
		http://dhtmlx.com/regular/dhtmlxScheduler_docs_chm.zip
	HTML version
		http://dhtmlx.com/regular/dhtmlxScheduler_docs_html.zip
- Support forum
	http://forum.dhtmlx.com/viewforum.php?f=6
- Skin builder
	http://dhtmlx.com/docs/products/dhtmlxScheduler/skinBuilder/index.shtml


Other editions
--------------

- MVC.Net edition
	http://scheduler-net.com
- Java edition (JSP, Struts, Spring, Grails)
	http://javaplanner.com
- Windows8 edition
	http://dhtmlx.com/download/regular/dhtmlxScheduler_windows.zip
- Scheduler for mobile devices
	http://dhtmlx.com/x/download/regular/dhtmlxScheduler_mobile.zip
http://scheduler-net.com/
which is .Net wrapper for dhtmlxScheduler.


## Калькулятор
### calculate math
## Калькулятор

Небольшая библиотека в качестве заготовки для калькулятора

 * [Пример](data/Calculatre/equation_parse/index.html)


## Календарь
### js calendar
## Элемент Календарь

__Тег input type calendar__

В html существует элемент Календарь

     Работает в Google Chrome

```javascript
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>Календарь</title>
<script> </script>
</head>
 <body>
  <form>
   <p>Выберите дату: 
   <input type="date" name="calendar" value="2012-06-01"
   max="2012-06-04" min="2012-05-29">
   <input type="submit" value="Отправить"></p>
  </form>
 </body>
</html>
```

## Tiger Calendar

Библиотека для работы с календарем, поддерживает несколько календарей. Не требует дополнительных библиотек.

 * <a href="data/calendar/1-simple-calendar/index.html" target="_blank">Пример1</a>
 * <a href="data/calendar/2-customized-calendar/index.html" target="_blank">Пример2</a>
 * <a href="data/calendar/readme.txt" target="_blank">Документация</a>




## DHTML Calendar

Вариант календаря в "чистом" js и html. Поддерживает настройки языков и стили.

 * <a href="data/calendar/1.htm" target="_blank">Базовый вариант</a>
 * <a href="data/calendar/doc/html/reference.html" target="_blank">Документация</a>

Еще одна версия календаря, есть возможность создавать его динамически при нажатии кнопки или другом событии

 * <a href="data/calendar/1-simple-calendar/index.html" target="_blank">Пример</a>


Tigra Calendar readme
----------------------------------------------

Thank you for downloading Tigra Calendar! We appreciate your interest
and we hope that you'll enjoy working with the component.


GETTING STARTED
----------------------------------------------

Tigra Calendar is a JavaScript software component, it is not intended
for stand-alone use. We included several working samples demonstrating
component's features and possible use scenarios, but eventually the
calendar must be configured inside your own web pages. Follow the
steps below to implement the calendar in your application:

1. Test the samples, make sure calendar works in all the targeted browsers
2. Make a copy of one of the samples and customize the calendar's
   configuration for your needs. Check the page after every modification so
   you can roll back if something stops working.
3. Copy calendar related code from the test page into the destination
   page. Adjust paths if needed.


TECHNICAL SUPPORT
----------------------------------------------

For general questions please use our forum at:
http://www.softcomplex.com/forum/forumdisplay_42/

For full list of the available support options visit:
http://www.softcomplex.com/support.html

Subscribe to our feeds to be notified about the bug fixes and new versions of
the component:

   http://www.softcomplex.com/news.xml
   http://twitter.com/#!/softcomplex
   https://www.facebook.com/pages/Softcomplex-Inc/127051081602

--
Thank you and good luck!
Softcomplex Team




## Выделение текста на странице
### html text selection
##Выделение текста  на странице

__Ввделение текста с выводом сообщения__

Пример работает с несколькими браузерами. Сообщение выводится при выделении текста в определенном блоке.
```javascript
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script>
if (!window.x) {
    x = {};
}
x.Selector = {};
x.Selector.getSelected = function() {
    var t = '';
    if (window.getSelection) {
        t = window.getSelection();
    } else if (document.getSelection) {
        t = document.getSelection();
    } else if (document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
}

$(function() {
    $("#sel").bind("mouseup", function() {
        var mytext = x.Selector.getSelected();
        alert(mytext);
    });
});
</script>
<h3>Selection text</h3>


<p id="sel"><b>Здесь можно забрать выделенный текст</b></br>Он будет в <b>  <b>alert()</b> </p>
<p>А здесь нельзя</p>


```

__Выделение текста с форматированием__

Текст выделяется и помещается в переменную. Затем он форматируется (<i><b>bold</b></i>) и помесцается обратно на страницу. Форматирование производится при нажатии на кнопку <span style="color:rgb(0,0,255);"><b style="color: rgb(0, 0, 255);">B</b></span><b></b> в плавающем блоке
```javascript
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<div id="div1" style="height:1000px;width:500px;">
  Привет мир<br />
    Hello world

    <div id="floatbar" style="background:gray;
                                width:200px;
                                height:40px;
                                position:absolute;
                                left:0;top:200px;">
<button id="st1">B</button>
    </div>
</div>
<script>
var text = "";
function getSelectionText() {

    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
function bold(t) {

    
  var exp = new RegExp(t,"gi");
     var str=$('#div1').html();
     str=str.replace(exp, '<b>'+t+'</b>');
     $('#div1').html(str);
}
$(document).ready(function (){
   
  $('#div1').mouseup(function (e){
     text= getSelectionText(); 
     alert(text);
  });
 $(window).scroll(function(){
    if ($(window).scrollTop() >= 200)
    {
        $("#floatbar").css({position:'fixed',left:'0',top:'0'});
    }
    else
    {
        $("#floatbar").css({position:'absolute',left:'0',top:'200px'});
    }
});
   $('#st1').click(function (){
   bold(text);
   }); 
});

</script>

```

__Вставка ссылки вместо выделения__

Функция вставки ссылки&nbsp; на месте выделенной ссылки<br><i><u><span style="color:rgb(204,0,0);">Ограничение</span></u></i> Вставка вместо выделенного текста(текст не должен повторяться в данном фрагменте. Из нескоьких одинаковых текстов будет выбран первый<br>
```javascript
<script src="http://code.jquery.com/jquery-latest.js"></script> 
<script>
function getSelectionText() {
    var selection = window.getSelection();
var text = selection.toString();
var parent = $(selection.focusNode.parentElement);
var oldHtml = parent.html();
var a = prompt("адрес ссылки", "")

var newHtml = oldHtml.replace(text, "<a href="+"'"+a+"'"+" target='_blank'>"+text+"</a>");
parent.html( newHtml );
}
$(document).ready(function (){
   $('#div1').mouseup(function (e){
     getSelectionText();
     
     
   });
});
</script>
<div id="div1">
  Привет мир
  </div>

```



