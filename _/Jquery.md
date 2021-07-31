## Запись mp3
### jquery record mp3 save audio
Recorderjs For Mp3
==========

__Кратко__

Утилита для записи mp3. Записывает только при медленном чтении, иначе обрывает запись.

* [Пример](data/jq_plugin/Recorderjs-Recorder.js-For-Mp3/index.html)
* [Пример записи](data/jq_plugin/Recorderjs-Recorder.js-For-Mp3/hello.mp3)

__readme__

A modified version of Recorderjs that saves recordings in mp3 format using libmp3lame.js


License (MIT)
==========
Copyright В© 2013 Remus Negrota

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## jquery.savefile-master
### jquery file save dialog
#### Using

jquery.savefile requires [jQuery](http://jquery.com) to be loadedjquery.savefile
====

A simple jQuery interface to [SaveFile](http://saveile.joshmcarthur.com), making it easier to download files from Javascript.

Requirements
---

#### Using

jquery.savefile requires [jQuery](http://jquery.com) to be loaded

#### Improving

* Clone the source code: `git clone git@github.com:joshmcarthur/jquery.savefile.git`
* Install build dependencies: `npm install -g coffee-script && npm install uglify-js`
* Make changes to `src/jquery.savefile.coffee` ** Note: do NOT change jquery.savefile.js - it is automatically generated from the Coffeescript**
* Run `cake build` in the root of the project to generate jquery.savefile.js and the minified version, jquery.savefile.min.js


Use
---

Before you get started, have a read of the [page at SaveFile](http://savefile.joshmcarthur.com) to understand how this all works.

This jQuery plugin can be used just like any other - just pass an element to it, and it will try and use the value or innerText of the element, like so:

```text
$('textarea#example').savefile();
```

вЂ¦this will download a file called 'file.txt' though - not ideal. You can customize this by passing in some options to savefile, like so:

```text
$('textarea#example').savefile({
  'filename': 'example',
  'extension': 'txt'
});
```

If you don't have an element, that's fine as well - you can pass in your own content to go inside the file, as the final option:

```text
$.savefile({
  'filename': 'custom_content',
  'extension': 'html',
  'content': '<h1>Custom Content!</h1>'
})
```

вЂ¦and downloads are as simple as that!

Credits:
---

The savefile service and jQuery plugin were developed in spare time by [Josh McArthur](http://twitter.com/sudojosh).

Copyright (c) 2012 Josh McArthur

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Диалог FileOpen
### jquery file open
## Диалог Fileopen()

__С иконкой__
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
<img src="open.png"  width="20" height="20">
</body>

</html>
```

__Пример 2__

```javascript
<html>
<head>
<style>
input {
    display: block;
    visibility: hidden;
    width: 0;
    height: 0;
}
</style>
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js" charset="utf-8"></script>

<script>
$(document).ready(function (){
$('div').click(function(){
    $('input').click();
});
});
</script>
</head>
<body>
<input type="file" name="somename" size="chars">
<div><img src="exit.png"  width="20" height="20"></div>
</body>

</html>
```
## jQuery MsgBox
### jquery message alert confirm prompt
##MsgBox

_Кратко__

Предназначен для формирования системных сообщений в стиле firefox.
Возможно управление стилями.


* [Пример](data/jq_plugin/jQuery.MsgBox-master/demo_ru.html)








__readme__

# jQuery MsgBox

0.8.1 BETA

## What is it?

Firefox style simplist dialog form.


## How to install?

before install, you must have [jQuery](http://jquery.com/download/) >= 1.5.0, I strongly recommand you have a lastest version.

That's very simple. just download below lastest version,

 - [Minified (for production)](https://raw.github.com/composite/jQuery.MsgBox/master/jquery.msgbox.min.js)
 - [Unminified (for development)](https://raw.github.com/composite/jQuery.MsgBox/master/jquery.msgbox.js)

If you have bower? just type in your console.

```
bower install msgbox
```

Still not easy? OH PLZ...

## How to use this?

It's quiet simple.

```html
<script src="jquery.lastest.js"></script>
<script src="jquery.msgbox.min.js"></script>
```

    alert("i'm alert");
    -> $.alert("i'm alert");

    confirm("Are you sure?");
    -> $.confirm("Are you sure?");

    prompt("please text me.");
    -> $.prompt("please text me.");

## Wait! YOU MUST SEE BEFORE USE THIS PLUGIN,
this plugin is can't replace as javascript standard function (alert, etc.)
because, this plugin cannot wait user action while showing dialog.
If you want get user's action, put a callback function in next of message param.
when user clicked in a dialog button, such as OK or cancel, msgbox will call your defined function.

Please don't..
```js
form.submit=function(){
    //All MsgBox function returns MsgBox Container Object. so it'll return always true.
    if($.confirm('Are you sure to save it?')){
        return true;//Page will changed without your confirm.
    }
    return false;
}
```
**So, what can I do?**

```js
form.submit=function(){
    if(!form.confirm){//Use variables or DOM objects or whatever you want.
        $.confirm('Are you sure to save it?',function(answer){
            form.confirm=answer;
            if(answer) form.submit();//submit again to verify confirm value.
        });
        return false;//You should use this line to prevent page changes.
    }else return true;
}
```
* You can use another solution to solve this.

## OK. so, How to use with callback function?

jQuery.MsgBox can add your callback function for provide next action after user clicked.
It's Very simple.

```js
$.alert("click me.",function(){
    $.alert('you are clicked!');
});
```
```js
$.confirm("press OK or Cancel.",function(bool){
    $.alert('you are clicked '+(bool?'OK':'cancel'));
});
```
```js
$.prompt("what's your name?",function(string){
    $.alert('your name is '+string);
});
```

## I want view live example.

Sure. [here's an example](http://jsfiddle.net/preFy/ "live example"). 

## What browser can run with this plugin?

first, jQuery 1.5 or later needed.
and, You can run with most popular major browser,
Internet Explorer 8 or above, Firefox 3 or above, Safari 4 or above, Chrome 10 or above, Opera 9 or above.
NOTE : Old school browser, such as IE 7 or lower is have a problem with CSS issue.
that's all. this plugin have NO images or other resources.

## I want use as own style, is it possible?

Yes. check out [Wiki](https://github.com/composite/jQuery.MsgBox/wiki) for detailed usage.

## Wow! It's simple and cool! can I join with you for make better this plugin?

Sure. contributes are welcome! just fork this plugin and get involved to make a better place for you and for me.

## Hey, I'm using IE version under 9, Msgbox flicking when showing MsgBox. What's happening?

Sorry. that is prevent changing width dynamically after center align on IE. I don't know it is bug, but I'll figure out it.

## Goals

 - More Simplify and Optimization.
 - Less Size and Unresolved Issues.
 - **All Methods will returns Deferred Object instead of DOM Container** ??? Well, I'll think about it.

## What's new?

### 0.8.1

 - Some code optimization.
 - Use UglifyJS for minification, instead of YUI compressor.

### 0.8.0

 - Major UI changes: more compatibility to view, Wrapped more a div to centering layer using only CSS (but still vertical centering using JS).
 - NEW property: onopen event property and $.msgbox.onopen static property; Fires after msgbox opened.
 - NEW property: onclose event property and $.msgbox.onclose static property; Fires before msgbox closing.
 - 2 new property for your own CSS or JS animation effect. onclose event also support jQuery Deferred Object. See [Wiki](https://github.com/composite/jQuery.MsgBox/wiki) for details.

### 0.7.5

 - console.log() for test will not fired in production mode.

### 0.7.4

 - Container add for prompt bug fixed.
 - fixed prompt UI.

### 0.7.3 (internal)

 - onresize event callback changed; this keyword will point to msgbox container. plain DOM, not jQuery.

### 0.7.2 (internal)

 - remove static property **customStyle**. just add style ```<link class="msgbox-style"/>``` or ```<style class="msgbox-style"/>``` instead.
 - Fixed minor UI bugs.

### 0.7.1 (Internal)

 - Fixed some bug.
 - console.log() for test is will not fired in production mode.

### 0.7.0 (Internal)

 - Replaced inline style to inline CSS for more performance.
 - Removed css property in $.msgbox() use $.msgbox.css or own standard CSS instead.
 - input property of $.msgbox changed. You can set any human-view type (string, number, etc). if not want prompt, just set false or undefined or null.
 - Fixed ENTER or ESC press event bug in input box
 - new property: onresize; available on $.msgbox() or $.msgbox.onresize static property. You can prepare when window size changes. see wiki for details.
 - new static property: customStyle; You want set own style instead of default style, just add your code : ```$.msgbox.customStyle = true;```

### 0.6.1

 - Fixed forced true callback after press ENTER key. focused button will fired event if you press ENTER key.

### 0.6.0

 - Auto resizing added. Msgbox will show full size when window size less than alert size, If not, revert to original size.

### 0.5.0

 - Use &lt;div&gt; with white-space: pre; instead of &lt;pre&gt; for more better view of MsgBox with CSS Framework such as Bootstrap.
 - Remove Browser compatibility for position:fixed is buggy under IE 7, so this will support jQuery over 1.8! I'll never test freaking old browsers.
 - Remove jQuery in my repository, Use any available jQuery CDN in demo instead.

## License

(The MIT License)

Copyright (c) 2011-2012 Ukjin 'composite' Yang <ukjinplant@msn.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Системные сообщения
### jquery message
## Message

Еще один вариант модельного системного сообщения с использовнием стилей при выводе сообщения.

* [Пример](data/jq_plugin/message_login/index.html)
## JSON2HTML
### jquery json html convert
## JSON2HTML plugin

__Кратко__

json2html является  jquery плагином и предназначен для преобразования json объекта в HTML шаблон


*[Примеры](data/jq_plugin/jquery.json2html-master/examples/)


__readme__

jquery.json2html
=========

What is jquery.json2html?
------------------
jquery.json2html is a jquery plug-in that implements the HTML templating engine <a href='https://github.com/moappi/json2html'>json2html</a> for client side browers

Ok so what is json2html?
------------------
json2html is a javascript HTML templating engine which converts json object to html using json transforms.  Note that this jquery.json2html package includes the latest version of json2html.

For more information check out the <a href='https://github.com/moappi/json2html'>json2html</a> core library

Also implemented in node.js <a href='https://github.com/moappi/node-json2html'>node-json2html</a>


Why json2html?
--------------
Instead of writing HTML templates json2html relies on JSON transforms to convert a source JSON objects to html.  The benefit of using a JSON transform is that they are already readable by the browser and DO NOT require any compilation before use.   In addition, json2html allows the following

+	Short hand notation for mapping data objects to markup
+	Event binding to DOM objects (exclusively with jquery.json2html) 
+	Use of inline functions to allow for complex logic during transformation 
+	Dynamic building of transform objects

Example of a Transform?
--------------
```javascript
var transform = 
 {tag:'li',id:'${id}',children:[
	{tag:'span',html:'${name} ${year}'}
  ]};		
```
Will render into the following html

```html
<li id=1123>
	<span>Jack and Jill (2001)</span>
</li>	
```

Where is the project now?
--------------
Currently json2html (and jquery.json2html) are in beta release.  Performance wise json2html is comparable to other client side templating engines like jsRender.


How do I start?
--------------
Check out our website <a href='http://www.json2html.com'>www.json2html.com</a> for more information including detailed usage notes, downloadable examples and more!


## Проверка вводимых значений (validation)
### jquery form validation input
## Form validation

__Кратко__



* [Примеры](data/jq_plugin/jquery-validation-master/demo/)

__readme__

[jQuery Validation Plugin](http://jqueryvalidation.org/) - Form validation made easy
================================

[![Build Status](https://secure.travis-ci.org/jzaefferer/jquery-validation.png)](http://travis-ci.org/jzaefferer/jquery-validation)
[![devDependency Status](https://david-dm.org/jzaefferer/jquery-validation/dev-status.png?theme=shields.io)](https://david-dm.org/jzaefferer/jquery-validation#info=devDependencies)

The jQuery Validation Plugin provides drop-in validation for your existing forms, while making all kinds of customizations to fit your application really easy.

## [Help the project](http://pledgie.com/campaigns/18159)

[![Help the project](http://www.pledgie.com/campaigns/18159.png?skin_name=chrome)](http://pledgie.com/campaigns/18159)

This project is looking for help! [You can donate to the ongoing pledgie campaign](http://pledgie.com/campaigns/18159)
and help spread the word. If you've used the plugin, or plan to use, consider a donation - any amount will help.

You can find the plan for how to spend the money on the [pledgie page](http://pledgie.com/campaigns/18159).

## Getting Started

### Downloading the prebuilt files

Prebuilt files can be downloaded from http://jqueryvalidation.org/

### Downloading the latest changes

The unreleased development files can be obtained by:

 1. [Downloading](https://github.com/jzaefferer/jquery-validation/archive/master.zip) or Forking this repository
 2. [Setup the build](CONTRIBUTING.md#build-setup)
 3. Run `grunt` to create the built files in the "dist" directory

### Including it on your page

Include jQuery and the plugin on a page. Then select a form to validate and call the `validate` method.

```text
<form>
	<input required>
</form>
<script src="jquery.js"></script>
<script src="jquery.validate.js"></script>
<script>
$("form").validate();
</script>
```

Alternatively include jQuery and the plugin via requirejs in your module.

```text
define(["jquery", "jquery.validate"], function( $ ) {
	$("form").validate();
});
```

For more information on how to setup a rules and customizations, [check the documentation](http://jqueryvalidation.org/documentation/).

## Reporting an Issue

**IMPORTANT NOTE ABOUT EMAIL VALIDATION**. As of version 1.12.0 this plugin is using the same regular expression that the [HTML5 specification suggests for browsers to use](http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29). We will follow their lead and use the same check. If you think the specification is wrong, please report the issue to them.

1. Make sure the problem you're addressing is reproducible.
2. Use http://jsbin.com or http://jsfiddle.net to provide a test page.
3. Indicate what browsers the issue can be reproduced in. **Note: IE Compatibilty modes issues will not be addressed.**
4. What version of the plug-in is the issue reproducible in. Is it reproducible after updating to the latest version.

## Contributing

See the [Contributing Guide](CONTRIBUTING.md)

## License
Copyright (c) 2013 JГ¶rn Zaefferer
Licensed under the MIT license.

## Splitbutton
### jquery Splitbutton menu
##Splitbutton

Jquery плагин создает кнопку с меню.


* [Пример](data/jq_plugin/splitdropbutton-master/demo.htm)

__readme__

# SplitDropButton

SplitDropButton is a simple, easily stylable, split button dropdown jQuery plugin similar to those you can find on:

+ [twitter boostrap](http://twitter.github.io/bootstrap/components.html#buttonDropdowns)
+ [zurb foundation](http://foundation.zurb.com/docs/components/split-buttons.html)

Why another one then? Both the boostrap and foundation versions weren't easily stylable, there wasn't a good standalone verison, and I didn't want to include big chuncks of either framework just for that one simple widget.

## Demo

See it in action [here](http://smashingboxes.github.io/splitdropbutton).

## Usage

#### HTML

    <div class="split-btn">
      <a href="#">Primary Link</a>
      <a href="#">Secondary Link</a>
      <a href="#">Secondary Link</a>
      <a href="#">Secondary Link</a>
    </div>

#### Javascript

    $(document).ready(function(){
      $('.split-btn').splitdropbutton({
        toggleDivContent: '<i class="icon-reorder"></i>' // optional html content for the clickable toggle div
      })
    });

Caveat: Since this plugin calculates element widths on page load, if you are using font-face (for example, [font-awesome](http://fortawesome.github.io/Font-Awesome/)) or images within your links, you should use `$(window).load()` instead of `$(document).ready()` See this [stackoverflow answer](http://stackoverflow.com/a/3698214/781704) for why.

#### Generated HTML

    <div class="split-btn">
      <div class="spb-toggle">
        <i class="icon-reorder"></i>
      </div>
      <div class="spb-primary">
        <a href="#">Primary Link</a>
      </div>
      <div class="spb-secondary">
        <a href="#">Secondary Link</a>
        <a href="#">Secondary Link</a>
        <a href="#">Secondary Link</a>
      </div>
    </div>

(inline styles were not inlcuded for the sake of this illustration)

#### Stylesheet

    .split-btn .spb-toggle {
      font-size: 24px;
      padding: 7px 9px;
      background: #ccc;
      color: black;
    }

    // it's important to style the links with .split-btn a instead of '.spb-primary a' or
    // '.spb-secondary a' because those divs have widths based on the length of '.split-btn a'

    .split-btn a {
      padding:  10px;
      background: black;
      color: white;
    }
    
    .split-btn a:hover {
      background: white;
      color: black;
    }

## License

This software is released under the MIT license
http://opensource.org/licenses/MIT
## Метод getjson()
### jquery json file load
## Метод getjson()

Этот метод позволяет в jquery загружать файл json.

```text
$.getJSON("data.js",function(data)
 {
 $.each(data.posts, function(i,data)
  {
   var div_data =
"<div ><a href='"+data.url+"'>"+data.title+"</a></div>";
  $(div_data).appendTo("#9lessonsLinks");
  });
});

```
## Преобразование json в таблицу
### jquery json table
## JSON to Table

__Кратко__

Этот плагин может конвертировать тип данных json в таблицу для HTML. 





* [Пример](data/jq_plugin/jquery-jsontotable-master/demo/index.html)

__readme__

# jQuery-JSONtoTable
[![Build Status](https://travis-ci.org/jongha/jquery-jsontotable.png?branch=master)](https://travis-ci.org/jongha/jquery-jsontotable)
[![Coverage Status](https://coveralls.io/repos/jongha/jquery-jsontotable/badge.png)](https://coveralls.io/r/jongha/jquery-jsontotable)
[![Dependency Status](https://gemnasium.com/jongha/jquery-jsontotable.png)](https://gemnasium.com/jongha/jquery-jsontotable)

This plugin can convert JSON data type to table for html. JSON, or JavaScript Object Notation, is an open standard format that uses human-readable text to transmit data objects consisting of attributeвЂ“value pairs. It is used primarily to transmit data between a server and web application, as an alternative to XML. In these reasons todays many applications use JSON data format for data transferring. And you need JSON to table converter for html display. Let's fork and use this. Thanks.

## Screenshot

![Screenshot](https://raw.github.com/jongha/jquery-jsontotable/master/demo/screenshot.png)

## Usage

This sample is how to use this plugin using an Array type. 'header' key is an option. Default value is 'true'. This option indicates whether a header of the table is showing or hiding.

```
<div id="jsontotable" class="jsontotable"></div>

var data = [[1, 2, 3], [1, 2, 3]];
$.jsontotable(data, { id: '#jsontotable', header: false });
```

And the following is how to use this plugin using an Object type.

```
<div id="jsontotable" class="jsontotable"></div>

var data = [{'Title1': 'Hello', 'Title2': 'Fine', 'Title3': 'Thank you'}, {'Title1': 'Hello', 'Title2': 'Fine', 'Title3': 'Thank you'}];
$.jsontotable(data, { id: '#jsontotable', header: false });
```

And you can also use the string. The following is how to use this plugin using an String type.

```
<div id="jsontotable" class="jsontotable"></div>

var data = '[[1, 2, 3], [1, 2, 3]]';
$.jsontotable(data, { id: '#jsontotable', header: false });
```

And you can also use the Object with custom attributes.

```
<div id="jsontotable" class="jsontotable"></div>

var data = [ { id: 'header', class: 'header-class', _data:['1', '2', '3'] }, {'Title1': '1', 'Title2': '2', 'Title3': '3'} ];
$.jsontotable(data, { id: '#jsontotable', header: false });
```

If you want to use the bootstrap style you can add 'className' key as follows.

```
<link href="bootstrap.min.css" rel="stylesheet">

$.jsontotable(data, { id: '#jsontotable', className: 'table table-hover' });
```

## License

jQuery-JSONtoTable is available under the terms of the [MIT License](https://github.com/jongha/jquery-jsontotable/blob/master/LICENSE).





## Развертка блока на полный экран
### DOM div fullscreen css
## Изменение размеров блока(jquery)

Развертывает div на полный экран. Для завершения процедуры необходимо описать возврат к исходным размерам. 
```javascript
<script src="http://code.jquery.com/jquery-latest.js"></script>
<div id="placeholder" style="width:300px;height:300px;background:yellow;">
  Привет мир<br />
    Hello world
  </div>

wid

<script>
$("#placeholder").click(function(){
  $(this).css({
            position: 'absolute',
            top: 0, left: 0,
            width: $(window).width(),
            height: $(window).height()
        });
});
</script>
```

## Клавиатура.keypress()
### jquery keyboard hotkey keypress charcode keycode
## keypress()

С помощью функции keypress() определяются сочетания клавиш(ctrl+;alt+)
```javascript
 <script type="text/javascript">
        $(document).ready(function(){
            $("#test").keypress("m",function(e) {
  if(e.ctrlKey)
    alert("Ctrl+m was pressed!!");

            });
        });
    </script>

    <input type="text" id="test" />

```

Получение кода введенного символа. Для получения кода обычных символов используется своойство .charCode. Для получения кода спецклавиши - свойство .keyCode
```javascript
<script src="http://code.jquery.com/jquery-latest.js"></script> 
<script type="text/javascript">
        $(document).ready(function(){
            $("#test").keypress(function(e){
              var t="Символ :"+String.fromCharCode(e.which)+"\n";
              t+="Код :"+e.charCode+"\n";
              t+="Скан-код :"+e.keyCode+"\n";
              alert(t)
              
            });
        });
    </script>

    <input type="text" id="test" />

```


## Запись звука
### jquery audio record sound
## Запись аудио

Представлены 2 библиотеки, но к сожалению. у каждой из них <u><b>есть проблемы</b></u><br>.

__Recordmp3js-master__

Записывает информацю в течении нескольких секунд, затем запись отключается (предположительно из-за высокой чувствительности микрофона)
Запись переводится в mp3 и ее можно загрузить на компьютер

 * <a href="data/Recordmp3js-master/index.html" target="_blank">Пример 1</a>
 * <a href="data/Recordmp3js-master/README.md" target="_blank">Описание</a>

__voice__

     не работает в FF, проверить в П=GC

Вторая библиотека Пишет голос нормально,.но в wav и не дает возможности записать файл на компьютер

 * <a href="data/voice/index.html" target="_blank">Пример 2</a>

## Создание объекта
### jquery object new appeng keydown
## Создание объекта (jquery)

Создается объект типа блок с радом свойств (text, bar), методов (change) и событий (keydown) 

```javascript
<html>
<head>
<title>div over div
</title>
<style>

.first {
background: yellow;
}
.second {
background: blue;
color:white;
}

#m {
  width: 50%;
  height: 100px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript"> 
$(document).ready( function(){ 	  
/* create object with properties 
* and functions
*/
function box(txt,txt2,id,ti,cls){

var div =$('<div></div>').text(txt)
	.attr( 'id', id)
	.addClass(cls)
	.attr("tabindex",ti)
	.keydown(function(e) {
    	  alert(e.which)
    })

div.bar = "hello";
div.change=function(v) {
   div.text(v) 
}

return div
}

var box1=new box("hello world","box1","m",1,"first");
var box2=new box("and bye","box2","m1",2,"second");
$('body').append(box1);
$('body').append(box2);
alert(box1.bar)
box2.change("my new text");
})
</script>
</head>
<body>

</body>
</html>
```
## Элемент Окно
### jquery window
## Элемент Окно

__Кратко_

Простой jQuery плагин для создания диалоговых модальных окон. Можно создать несколько модальных окон, которые будут появляться друг за другом при закрытии предыдущего окна.

* [Пример](data/jq_plugin/dialog-master/demo.html)

__readme__

dialog
=======

An awesome lightweight jQuery plugin for creating overlay dialogs.


Use the dialog plugin for creating beautiful overlay dialog boxes. You can open multiple dialogs at once, and see all of them awesomely stacked one behind the other giving it a unique look and feel.


Check out the plugin overview here: http://kolgepratik.github.io/dialog/


To read the documentation go here: https://github.com/kolgepratik/dialog/wiki


See the demo at: http://kolgepratik.github.io/dialog/demo.html 


Your feedback is always welcome. :)


## Сообщения(jqueryAlerts)
### jquery plugin alert confirm prompt message
## Message

Еще один плагин для формирования системных сообщений в jquery

 * <a href="data/jq_plugin/jQueryAlerts/" target="_blank">Примеы 1 2 3</a>


## Динамическая загрузка рисунка
### jquery  load image
## Загрузка рисунка

Использование функции load библиотеки jquery
```javascript
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head> 
<script>
$("#aa").click(function(){ 
var img = $("<img />").attr('src', 'images/default-avatar.jpg')
    .load(function() {
        if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
            alert('broken image!');
        } else {
            $("#page-wrap").append(img);
        }
    });
  });
 </script>
 <div id="page-wrap">
     	<h1>Reading XML with jQuery</h1>
     </div>
 
 <button id='aa'>Click </button>
 
```

## Поиск в JSON (grep)
### jquerty grep find json
## Метод grep()

Поиск в json с использованием функции grep.
В примере ведется сравнение по двум свойствам и выдается результат.
```javascript
<script src="https://code.jquery.com/jquery-1.10.2.js"></script> 
<script>
$(document).ready(function(){
 var obj = {"data":
 [
  {"name":"Alan","height":"171","weight":"66"},
  {"name":"Ben","height":"182","weight":"90"},
  {"name":"Chris","height":"163","weight":"71"}
 ]
 ,"school":"Dover Secondary"
};
$('button').click(function(){
obj.data = jQuery.grep(obj.data, function(element, index){
  return element.weight > 70 && element.height > 160; // retain appropriate elements
});
console.log(obj.data);
alert(obj.data[0].name);
alert(JSON.stringify(obj, "",4))
});
});
</script>


<button>Click</button>
<p>This is  JSON filter examle with grep</p>
<p>Results view in Firebug</p>


```

## Events click
### jquery events click Alt Ctrl
###Click
При нажатии на кнопку __Toggle__,она реагирует на нажатые Ctrl и Alt. 

При клике по __Message__ выдается значеие атрибут ___id___
При использавании click c элементами одного класса или типа (в данном случае ___button___) используется элемент ___$(this)___ , указывающий на конкретный элемент множенства.
```javascript
<h2 id='first' class='fff'>Toggle Text</h2>
<button id='aa'  сlass="btn">Toggle</button>
<button id='bb'  сlass="bab">Message</button>
<script type="text/javascript" src="script/jquery.js"></script>
<script>
 $('#aa').click(function(evt){
    if (evt.ctrlKey)
    alert('Ctrl down');
  if (evt.altKey)
    alert('Alt down');
    $('#first').toggle();

  });
$('button').click(function(){
alert($(this).attr("id"));
});
</script>
```
## iframe. Обмен данными между файлами
### HTML iframe parent
## Передача параметра в другой файл, открываемый во фрейме.

В примере происходим следующее:

 * Скриптом в файле, загружаемом во фрейм ifr2, считывается параметр __src__ из фрейма  (ifr1) основного файла и записывается в файл во фрейме ifr2.
    

    document.write(parent.document.getElementById('ifr2').src);


    Файл из которого читается информация должен находится в том же домене
```javascript
<html>
<body>
<iframe id="ifr1" src="data/ifreme_ex/page1.html"></iframe>
<iframe width='500' id="ifr2" src='http://www.gazeta.ru/'></iframe>
<br />
<button onclick="show()">Click</button>
<script>
function show() {
//onle for pages in this domain!!
var iframe = document.getElementById("ifr1");
var iframe_contents = iframe.contentDocument.body.innerHTML;
alert(iframe_contents);
console.log(iframe.contentDocument.body)
}
</script>
</body>
</html>
```

## Чтение и запись данных из элемента DOM
### jquery HTML DOM html() text() val() attr()
### html() и text()
Методы предназначены для чтения/записи данных в эдементы DOM
html() - читает/записывает  текст с элементами разметки
text() - читает/записывает  текст без разметки

```javascript
<div id="test">
<h2 id='first' class='fff'>Test  Text</h2>
<p>Example<b>one</b> </p>
<input type='text' id ='ad' value='hello' /><br />
</div>
<button id='aa' >text</button>
<button id='ab' >html</button>
<button id='ac' >write html</button>
<script type="text/javascript" src="script/jquery.js"></script>
<script>
 $('#aa').click(function(evt){
alert($('#test p').text());
  });
 $('#ab').click(function(evt){
alert($('#test p').html());
  });
 $('#ac').click(function(evt){
   $('#test p').html("Привет <b>мир</b>");
  });
</script>
```
### val()
Метод val() - читает/записывает  данные из элементов формы.

```javascript
<div id="test">
<h2 id='first' class='fff'>Test  Text</h2>
<p>Example<b>one</b> </p>
<input type='text' id ='ad' value='hello' /><br />
</div>
<button id='aa' >write</button>
<button id='ac' >read</button>
<script type="text/javascript" src="script/jquery.js"></script>
<script>
 $('#aa').click(function(evt){
$('#ad').val("Привет");
  });
 $('#ab').click(function(evt){
alert($('#test p').html());
  });
 $('#ac').click(function(evt){
   alert($('#ad').val());
  });
</script>
```

### attr()

Метод позволяет считать/изменить атрибуты элемента DOM.

```javascript
<div id="test">
<h2 id='first' class='fff'>Test  Text</h2>
<p class="one">Example<b>one</b> </p>
</div>
<button id='aa' >attr</button>
<style>
.one {
color : blue;
}
.two {
color : red;
}
</style>
<script type="text/javascript" src="script/jquery.js"></script>
<script>
$('#aa').click(function(evt){
alert($('#test p').eq(0).attr("class"));
$('#test p').attr("class","two");
  });
</script>
```
## Autocomplete
### jquery autocomplete combo select
## Autocomplete

Один из вариантов Combo,  выдает подходящие варианты для выбора и автоматически дополняет выбор.

* [Пример](data/jq_plugin/html5-autocomplete-suggestions/index.html)
## Combobox jquery
### jquery combobox multiselect
##Combobox

Простой Combo из библиотеки  jquery. Поддерживает multiple выборку (для выборки можно Использовать Ctrl и Shift)

```javascript
<!DOCTYPE html>
<html>
<head>
  <style>

  div { color:red; }
  </style>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
</head>
<body>
  <select name="sweets" multiple="multiple">
    <option>Chocolate</option>
    <option selected="selected">Candy</option>

    <option>Taffy</option>
    <option selected="selected">Caramel</option>
    <option>Fudge</option>
    <option>Cookie</option>

  </select>
  <div></div>
<script>
    $("select").change(function () {
          var str = "";
          $("select option:selected").each(function () {
                str += $(this).text() + " ";
              });
          $("div").text(str);
        })
        .change();
</script>

</body>
</html>
```

## hide/show jquery
### jquery dom toggle hide show
### Методы hide() и show()
Метод show() - показывает скрытый элемент.
Метод hide() - скрывает видимый элемент.
В качестве параметра может использоваться время задержки в миллисекундах.

```javascript
 
<div id="test"><b id="show">Показать</b> <b id="hide">Скрыть</b>
<p>Hello world</p>
</div>
<script type="text/javascript" src="script/jquery.js"></script>


<script>
 $("#show ").click(function(){  
 $("#test p").show(1000);
});
 $("#hide ").click(function(){  
 $("#test p").hide(1000);
});
</script>
```

### Метод toggle()
При клике мыши по слову __Пример__ открывает или закрывает(переключает) видимость параграфа.
```javascript
 
<div id="test">Пример
<p>Hello world</p>
</div>

<script type="text/javascript" src="script/jquery.js"></script>

<script>
 $("#test" ).click(function(){  
 $("#test p").toggle(1000);
});
</script>
```
## fadeIn() fadeOut()
### jquery fadeIn() fadeOut() hide()
### Методы fadeIn() и fadeOut()
Позволяют манипулировать видимостью элементов.
В отличии от методов __hide()__ и __show()__ имеют более мощные возможности.

___для просмотра примера необходимо после загрузки еще раз перезагрузить страницу(Ctrl+F5)___
```javascript
<html>
<head>

<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script>
$(document).ready(function () {
  $("#aa").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
  $("#ab").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
  });
 });
</script>
</head>
<body>
<p>Demonstrate fadeIn() with different parameters.</p>
<button id='aa'>Click to fade in boxes</button>
<button id='ab'>Click to fade out boxes</button>
<br><br>
<div id="div1" style="width:80px;height:80px;display:block;background-color:red;"></div><br>
<div id="div2" style="width:80px;height:80px;display:none;background-color:green;"></div><br>
<div id="div3" style="width:80px;height:80px;display:none;background-color:blue;"></div>
</body>
</html>
```
## Метод fadeToggle()
### jquery fadeToggle() hide() show()
### Метод fadeToggle()

Показ/скрытие элемент DOM . В отличии от функции toggle() изменение видимости элемента дtлается плавным.
Более мощный метод, чем обычный toggle().

___Для просмотра примера Ctrl+F5 после загрузки___
```javascript
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script>
$(document).ready(function () {

  $("#aa").click(function(){
      $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });
  });
</script>

<p>Demonstrate fadeIn() with different parameters.</p>
<button id='aa'>Click to  in/out boxes</button>

<br><br>
<div id="div1" style="width:80px;height:80px;display:none;background-color:red;"></div><br>
<div id="div2" style="width:80px;height:80px;display:none;background-color:green;"></div><br>
<div id="div3" style="width:80px;height:80px;display:none;background-color:blue;"></div>
```
## fadeTo()
### jquery fadeTo() visibility
### Метод fadeTo()

Плавно изменяет степень видимости  элемента.

Первый аргумент указывает на скорость преобразования, второй конечную степень видимости.
```javascript
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script>
$(document).ready(function () {
  $("#aa").click(function(){
     $("#div1").fadeTo("slow",0.15);
    $("#div2").fadeTo("slow",0.4);
    $("#div3").fadeTo("slow",0.7);
  });
});
  
</script>

<p>Demonstrate fadeTo() with different parameters.</p>
<button id='aa'>Click to  fadeTo  boxes</button>

<br><br>
<div id="div1" style="width:80px;height:80px;display:none;background-color:red;"></div><br>
<div id="div2" style="width:80px;height:80px;display:none;background-color:green;"></div><br>
<div id="div3" style="width:80px;height:80px;display:none;background-color:blue;"></div>
```
## slideToggle()
### jquery slideToggle()
### Метод slideToggle()

Показывает/скрывает элемент
```javascript
<html>
<head>
<style type="text/css"> 
#panel,#flip
{
padding:5px;
text-align:center;
background-color:#e5eecc;
border:solid 1px #c3c3c3;
}
#panel
{
padding:50px;
display:none;
}
</style>
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script>
$(document).ready(function () {
   $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});
</script>
</head>
<body>
<div id="flip">Click to slide the panel down or up</div>
<div id="panel">Hello world!</div>
<div>
<h1>Content of page </h1>
</div>
</body>
</html>

```
## slideDown()
### jquery slideDown() slideUp()
### Метод slideDown()

Плавно выводит на экран скрытый элемент
```javascript

<style type="text/css"> 
#panel,#flip
{
padding:5px;
text-align:center;
background-color:#e5eecc;
border:solid 1px #c3c3c3;
}
#panel
{
padding:50px;
display:none;
}
</style>
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>

<script>
$(document).ready(function () {
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});
</script>
<div id="flip">Click to slide the panel down or up</div>
<div id="panel">Hello world!</div>

```
## addClass()
### jquery CSS  addClass()
Добавляет CSS класс к элементу
```javascript
<style type="text/css">
.important
{
font-weight:bold;
font-size:xx-large;
}
.blue
{
color:blue;
}
</style>
<script>
  $("#aa").click(function(){
    $("#test h1,h2,p").addClass("blue");
    $("#test div").addClass("important");
  });

</script>

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<div>This is some important text!</div>
<button id='aa'>Click </button>


```

## Загрузка файла
### jquery load  file ajax
один из способов загрузки текстовых данных из файла непосредственно в элемент DOM
```javascript

<script>
  $("#aa").click(function(){
 $("#div1").load("data/demo_test.txt",function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success")
        alert("External content loaded successfully!");
      if(statusTxt=="error")
        alert("Error: "+xhr.status+": "+xhr.statusText);
    });
  });

</script>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>
<button id='aa'>Click </button>


```
## Выделение текста при просмотре
### jquery text find hover css
## Выделение текста

В примере выделяется слово при наведении на него мыши.

```javascript
<style>
  .mmm { font-size:20px; width:200px; cursor:default; 
      color:blue; font-weight:bold; margin:0 10px; }
  .hilite { background:yellow; }
  </style>
 <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
  <script>
  var newText = $(".mmm").text().split(" ").join("</span> <span>");
  newText = "<span>" + newText + "</span>";

  $("p.mmm").html( newText )
    .find('span')
    .hover(function() { 
      $(this).addClass("hilite"); 
    },
      function() { $(this).removeClass("hilite"); 
    })
  .end()
    .find(":contains('t')")
    .css({"font-style":"italic", "font-weight":"bolder"});

</script>
<p>Highligth tag</p>
  <p class="mmm">
  When the day is short
  find that which matters to you
  or stop believing
  </p>
```
## replaceWith()
### jquery replaceWith() DOM
### replaceWith
  Позволяет заменить элемент DOM
```javascript
  <style>
 #test  button { display:block; margin:3px; color:red; width:200px; }
  #test div { color:red; border:2px solid blue; width:200px;
      margin:3px; text-align:center; }
  </style>
<script>
 $("#test button").click(function () {
  $(this).replaceWith( "<div>" + $(this).html() + "</div>" );
});
 $("#test p").click(function () {
  $(this).replaceWith( "<div>" + $(this).text() + "</div>" );
});
</script>
<div id="test">
<button>First</button>
<button>Second</button>
<button>Third</button>
<p>Hello <b>world</b></p>
</div>

```
## keypress()
### jqurty keypress() keyCode() event
### keypress()
Считает количество выеденных символов с помоцью события keypress()
```javascript
<script>
i=0;

  $("#test input").keypress(function(){
    $("#test  span").text(i+=1);
  });
</script>
<div id="test">
Enter your name: <input type="text">
<p>
Keypresses: <span>0</span>
</p>
</div>
```
Считает только нажатия клавиши Enter
```javascript
<script>
i=0;

  $("#test input").keypress(function(e){
   if (e.keyCode == '13') {
     e.preventDefault();
    $("#test  span").text(i+=1);
 }
  });
</script>
<div id="test">
Enter your name: <input type="text">
<p>Keypresses: <span>0</span></p>
</div>
```

Выводит коды управляющих клавиш
```javascript
<script>


  $("#test input").keypress(function(e){

    $("#test  span").text(e.keyCode+" ");

  });
</script>
<div id="test">
Enter your name: <input type="text">
<p>Keypresses: <span>0</span></p>
</div>
```
## splitdropbutton-master
### jquery splitbutton 
Небольшая библиотека на основе jquery для формирования сложных кнопок splitbutton
```javascript
data/splitdropbutton-master/demo.htm
```

## Элемент dropdown 
### jquery splitbutton menu
## DropDown
Элемент меню или splitbutton


<a href="data/jq_plugin/dropdownlist/index.html" target="_blank">Пример</a>
```javascript

```

## Элемент floating message
### jquery plugin message window
## Элемент floating message

Плагин для вывода на экран сообщений поверх основной страницы с возможностью их закрытия.<a 

 * <a href="data/jq_plugin/jquery.floatingmessage-master/demo.html" target="_blank">Пример</a>
 * <a href="data/jq_plugin/jquery.floatingmessage-master/README.md" target="_blank">readme</a><br>
```javascript

```

## Поиск в JSON (search)
### jquery each regexp search jspn find regexp
### Поиск в json. Метод each()
Поиск в json с использованием регулярных выражений и функции ssarch.


```javascript
<script>
$(document).ready(function(){
 var json = {
    "people": {
        "person": [{
            "name": "Pete",
            "age": 53,
            "sex": "male"},
            {
            "name": "Peter",
            "age": 43,
            "sex": "male"},
            {
            "name": "Paul",
            "age": 43,
            "sex": "male"},{
            "name": "Peter",
            "age": 43,
            "sex": "male"},
        {
            "name": "Zater",
            "age": 65,
            "sex": "female"}]
    }
};
$("button").click(function(){
var rows=[];
$.each(json.people.person, function(i, v) {
    if (v.name.search(new RegExp(/te/i)) != -1) {
        //alert(v.age);
        rows.push(v);
        
        return;
    }
});
console.log(rows);
alert(rows[0].name);
alert(JSON.stringify(rows, "",4));
});
});

</script>


<button>Click</button>
<p>This is JSON filter examle fwith search</p>
<p>Results view in Firebug</p>


```

## array Поиск по значению
### jquery array find each
Поиск в массиве с массмве с использованием функции each
```javascript
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>jQuery.each demo</title>
<style>
div {
color: blue;
}
div#five {
color: red;
}
</style>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.js"></script>
</head>
<body>
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
<div id="four"></div>
<div id="five"></div>
<script>
var arr = [ "one", "two", "three", "four", "five" ];
var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };


jQuery.each( arr, function( i, val ) {
$( "#" + val ).text( "Mine is " + val + "." );
// Will stop running after "three"
return ( val !== "two" );
});

jQuery.each( obj, function( i, val ) {
$( "#" + i ).append( document.createTextNode( " - " + val ) );
});
</script>
</body>
</html>
```

## array Поиск функция inArray()
### jquery array inArray 
###  inArray
Поиск элемента массива с помощью функции jquery.inArray(a,b,c)
a - искомый элемент
b - массив для поиска
с - индекс элемента массива, с которого начинается поиск.
```javascript
<html lang="en">
<head>
<meta charset="utf-8">
<title>jQuery.inArray demo</title>
<style>
div {
color: blue;
}
span {
color: red;
}
</style>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.js"></script>
</head>
<body>
<div>"John" found at <span></span></div>
<div>4 found at <span></span></div>
<div>"Karl" not found, so <span></span></div>
<div>"Pete" is in the array, but not at or after index 2, so <span></span></div>
<script>
var arr1=[{"name":"John"},{"name":"George"}];
var arr = [ 4, "Pete", 8, "John" ];
var $spans = $( "span" );
alert($.inArray( "John", arr, 4))
$spans.eq( 0 ).text( $.inArray( "John", arr, 4) );
$spans.eq( 1 ).text( jQuery.inArray( 4, arr ) );
$spans.eq( 2 ).text( jQuery.inArray( "Karl", arr ) );
$spans.eq( 3 ).text( jQuery.inArray( "Pete", arr,2) );
</script>
</body>
</html>
```
## Библиотека Transit
### jquery анимация css

<a href="data/jquery.transit-master/test/index.html" target="_blank">Пример</a>


# [jQuery Transit](http://ricostacruz.com/jquery.transit)
#### Super-smooth CSS3 transformations and transitions for jQuery

jQuery Transit is a plugin for to help you do CSS transformations and 
transitions in jQuery.

Refer to the [jQuery Transit website](http://ricostacruz.com/jquery.transit) for 
examples.

Usage
-----

Just include this script after jQuery. Requires jQuery 1.4+.
html

```text
<script src='jquery.js'></script>
<script src='jquery.transit.js'></script>
```

Transformations
---------------

You can set transformations as you would any CSS property in jQuery.
(Note that you cannot `$.fn.animate()` them, only set them.)

javascript

```text
$("#box").css({ x: '30px' });               // Move right
$("#box").css({ y: '60px' });               // Move down
$("#box").css({ translate: [60,30] });      // Move right and down
$("#box").css({ rotate: '30deg' });         // Rotate clockwise
$("#box").css({ scale: 2 });                // Scale up 2x (200%)
$("#box").css({ scale: [2, 1.5] });         // Scale horiz and vertical
$("#box").css({ skewX: '30deg' });          // Skew horizontally
$("#box").css({ skewY: '30deg' });          // Skew vertical
$("#box").css({ perspective: 100, rotateX: 30 }); // Webkit 3d rotation
$("#box").css({ rotateY: 30 });
$("#box").css({ rotate3d: [1, 1, 0, 45] });
```

Relative values are supported.

```text
$("#box").css({ rotate: '+=30' });          // 30 degrees more
$("#box").css({ rotate: '-=30' });          // 30 degrees less
```

All units are optional.

```text
$("#box").css({ x: '30px' });
$("#box").css({ x: 30 });
```

Multiple arguments can be commas or an array.

```text
$("#box").css({ translate: [60,30] });
$("#box").css({ translate: ['60px','30px'] });
$("#box").css({ translate: '60px,30px' });
```

Getters are supported. (Getting properties with multiple arguments returns
arrays.)

```text
$("#box").css('rotate');     //=> "30deg"
$("#box").css('translate');  //=> ['60px', '30px']
```

Animating - `$.fn.transition`
-----------------------------

    $('...').transition(options, [duration], [easing], [complete])

You can animate with CSS3 transitions using `$.fn.transition()`. It works 
exactly like `$.fn.animate()`, except it uses CSS3 transitions.

```text
$("#box").transition({ opacity: 0.1, scale: 0.3 });
$("#box").transition({ opacity: 0.1, scale: 0.3 }, 500);                         // duration
$("#box").transition({ opacity: 0.1, scale: 0.3 }, 'fast');                      // easing
$("#box").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in');                   // duration+easing
$("#box").transition({ opacity: 0.1, scale: 0.3 }, function() {..});             // callback
$("#box").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in', function() {..});  // everything
```

You can also pass *duration* and *easing* and *complete* as values in `options`, just like in `$.fn.animate()`.

```text
$("#box").transition({
  opacity: 0.1, scale: 0.3,
  duration: 500,
  easing: 'in',
  complete: function() { /* ... */ }
});
```

Tests
-----

Transit has a unique test suite. Open `test/index.html` to see it. When 
contibuting fixes, be sure to test this out with different jQuery versions and 
different browsers.

Alternatives
------------

__[Velocity.js](https://velocityjs.org)__ (recommended!)

 * Pros: optimized for situations with hundreds of simultaneous transitions. Lots of extra features.

__[Move.js](https://github.com/visionmedia/move.js)__

 * Pros: no jQuery dependency, great syntax.
 * Cons (at time of writing): no iOS support (doesn't use `translate3d`), some
   IE bugs, no 3D transforms, no animation queue.

__[jQuery animate 
enhanced](https://github.com/benbarnett/jQuery-Animate-Enhanced)__

* Pros: transparently overrides `$.fn.animate()` to provide CSS transitions 
  support.
* Cons: transparently overrides `$.fn.animate()`. No transformations support.

__[jQuery 2D transformations](https://github.com/heygrady/transform/)__

* Pros: Tons of transformations.
* Cons: No CSS transition support; animates via `fx.step`.

__[jQuery CSS3 rotate](http://plugins.jquery.com/project/Rotate)__

* Pros: simply provides rotation.
* Cons: simply provides rotation. No transitions support.

Acknowledgements
----------------

В© 2011, Rico Sta. Cruz. Released under the [MIT 
License](http://www.opensource.org/licenses/mit-license.php).

jQuery Transit is authored and maintained by [Rico Sta. Cruz][rsc] with help 
from it's [contributors][c]. It is sponsored by my startup, [Sinefunc, Inc][sf].

 * [My website](http://ricostacruz.com) (ricostacruz.com)
 * [Sinefunc, Inc.](http://sinefunc.com) (sinefunc.com)
 * [Github](http://github.com/rstacruz) (@rstacruz)
 * [Twitter](http://twitter.com/rstacruz) (@rstacruz)

[rsc]: http://ricostacruz.com
[c]:   http://github.com/rstacruz/jquery.transit/contributors
[sf]:  http://sinefunc.com

## HTML area (редактор)
### jquery editor html
##HTMLarea

Один из html редакторов, реализованных на основе jquery.

* [Пример](data/jq_plugin/htmlarea/Default.htm)
* [Сайт](http://jhtmlarea.codeplex.com)


## Элемент TE (HTML редактор)
### jquery html editor div
##HTML редактор

Предназначен для создания окна подготовки и редактирования html кода. Обладает возможностью просмотра подготовленного файла.


<a href="data/jq_plugin/jQuery-TE_v.1.4.0/deno/demo.html" target="_blank">Пример</a>
## Элемент  toolbar
### jquery toolbar menu
__Кратко__


Данная библиотека предназначена для создания меню в виде toolbar. Испоьзуется jquery. Можно использовать как иконки, так и текст в качестве пунктов меню. Изменение цвета подложки элемента можно сделать через стиль в ___jquery.toolbars.css___ (.tool-container)

  * <a href="data/jq_plugin/toolbar-master/documentation/index.html" target="_blank">Документация и примеры</a>

# Toolbar.js

A jQuery plugin that creates tooltip style toolbars.

## Documentation

You can find the documentation for the toolbar at the [toolbar project page][projectpage].

[projectpage]: http://paulkinzett.github.com/toolbar/






## Codemirror плагин
### jquery codemirror editor textarea
##Codemirror plugin

Позволяет использовать библиотеку codemirror.js непосредственно в jquery.

* [Пример](data/jq_plugin/jquery-codemirror-master/demo1.html)


## HTML редактор Jquery TE
### jquery html editor
Наиболее интересный из редакторов HTML страниц.<br>Редактирует отдельные элементы страницы (теги div/p/span)<br>Имеет возможности для расширения функций редактора.<br>Возможна замена иконок в toolbar.<br><i>С помощью этого редактора введен данный текст</i><br><a href="data/jQuery-TE_v.1.4.0/demo/demo.html" target="_blank">Пример</a><br><a href="http://jqueryte.com/" target="_blank">Информация о редакторе</a><br>
```javascript

```

## Чтение тегов из файла формата mp3
### jquery  ID3Heaser file mp3 read
__Кратко

Позволяет прочитать теги ID3 и изображение из mp3 файла.

 * <a href="data/JavaScript-ID3-Reader-master/example/index.html" target="_blank">Пример</a>


JavaScript ID3 Reader
=====================

This library was originally made by Jacob Seidelin using ID3v1 for demo'ing his BinaryAjax library [http://www.nihilogic.dk/labs/id3/].
It was then extended by me (AntГіnio Afonso) to include the ID3v2 tag specification [http://www.id3.org/id3v2.4.0-structure], while I was working at Opera Software, in the context of the Unite Media Player application which was developed using server side JavaScript.
Joshua Kifer implemented the tag reader for the QuickTime metadata information found in aac files.
A new BufferedBinaryFile was created that extends BinaryFile in a way that only required data will be downloaded from the server. This makes it possible to read tag structures such as the Quicktime metadata without having to download the entire file as it was happening in previous versions of this library.

Demo: http://www.aadsm.net/libraries/id3/#demo

Technical Information
---------------------

This library will only download the relevant data from the mp3 file whenever the webserver supports the HTTP Range feature, otherwise the entire file will be downloaded at the cost of degrading the performance of the library.
Another caveat is on the Opera browser, since it lacks support for setting the Range header, the entire file will be downloaded.
This library is not complete and there is still some features missing and/or going on:

* Unsynchronisation support
* CommonJS support
* Support for other types of charsets, at the moment only latin1, UTF-8 and UTF-16 are supported, these are the ones defined in the specification. However, the usage of local charsets has been common for a long time specially in Russia, Japan and China. This support can be achieved using [chardet](http://github.com/aadsm/jschardet) and a proper string reader function.

How To Use It
-------------

In its simplest form:
```javascript
ID3.loadTags("filename.mp3", function() {
    var tags = ID3.getAllTags("filename.mp3");
    alert(tags.artist + " - " + tags.title + ", " + tags.album);
});
```

by specifying specific tags:
```javascript
ID3.loadTags("filename.mp3", function() {
    var tags = ID3.getAllTags("filename.mp3");
    alert(tags.COMM.data + " - " + tags.TCON.data + ", " + tags.WXXX.data);
},
{tags: ["COMM", "TCON", "WXXX"]});
```

or even by specifying shortcuts instead of cryptic tags:
```javascript
ID3.loadTags("filename.mp3", function() {
    var tags = ID3.getAllTags("filename.mp3");
    alert(tags.comment + " - " + tags.track + ", " + tags.lyrics);
},
{tags: ["comment", "track", "lyrics"]});
```

File API
--------
Reading a music file through the File API can be done by specifying the `FileAPIReader` data reader:

```javascript
ID3.loadTags("filename.mp3", function() {
    var tags = ID3.getAllTags("filename.mp3");
    alert(tags.comment + " - " + tags.track + ", " + tags.lyrics);
}, {
    dataReader: FileAPIReader(file)
});
```
`file` is a `File` object as defined by the [File API](http://www.w3.org/TR/FileAPI/).

Example
-------
See `/example` for additional information.
Besides open http://www.aadsm.net/libraries/id3/ for a live example.

Documentation
-------------

`ID3.loadTags(url, cb, [options])`
    `url` - The URL of the mp3 file to read, this must reside on the same domain (document.domain).
    `cb` - The callback function to invoke when the tags are loaded.
    `options` - Optional parameters.
    `options.tags` - The array of tags and/or shortcuts to read from the ID3 block. Default value is: `["title", "artist", "album", "track"]`
    `options.dataReader` - The function used to create the data reader out of a url. It receives (`url`, `success`: callback function that returns the data reader, `fail`: callback function to inform an error setting up the reader). By default it will be BufferedBinaryAjax.

`ID3.getAllTags(url)`
    `url` - The URL of the mp3 file to read, this must be the same value given to `ID3.loadTags()`.
    `return value` - This function will return the following object structure, for IDv1:

    {
        version: "1.1",
        title: string,
        artist: string,
        album: string,
        year: string,
        comment: string,
        track: string,
        genre: string
    }
for ID3v2:

    {
        version: "2.<major>.<revision>",
        major: integer,
        revision: integer,
        flags: {
            unsynchronisation: boolean,
            extended_header: boolean,
            experimental_indicator: boolean
        },
        size: integer,
        <frame id>*: {
            id: integer,
            size: integer,
            description: string,
            data: <frame structure>
        },
        <shortcut>*: pointer to <frame id>.data
    }

for AAC:

    {
        album: string,
        artist: string,
        year: integer,
        title: string,
        genre: string,
        track: integer,
        composer': string,
        encoder: string,
        copyright: string,
        picture: {
            format: string,
            data: bytes[]
        },
        grouping: string,
        keyword: string,
        lyrics: string,
        genre: string
    }

### How to show the cover art from the byte array:

You can do this by using a `data:` url.

```javascript
var base64String = "";
for (var i = 0; i < image.data.length; i++) {
    base64String += String.fromCharCode(image.data[i]);
}
var dataUrl = "data:" + image.format + ";base64," + window.btoa(base64String);
```

### Currently supported frames on ID3:

* APIC/PIC: Attached picture
* COMM/COM: Comments
* PCNT/CNT: Play counter
* T*: Text frames
* USLT/ULT: Unsychronized lyric/text transcription

### Shortcuts:

* title: TIT2/TT2
* artist: TPE1/TP1
* album: TALB/TAL
* year: TYER/TYE
* comment: COMM/COM
* track: TRCK/TRK
* genre: TCON/TCO
* picture: APIC/PIC
* lyrics: USLT/ULT

A comprehensive list of all tags defined in the specification can be found [here](http://www.id3.org/id3v2.3.0#head-e4b3c63f836c3eb26a39be082065c21fba4e0acc)

Authors
-------
* Jacob Seidelin
* AntГіnio Afonso
* Joshua Kifer

## Элемент Диаграмма Ганна
### jquery gannt scheduller
__Кратко_

Диаграмма Ганна используется при создании сетевых и ресурсных диаграмм.

Создана на основе библиотеки JQuery

 * <a href="data/jq_plugin/jQuery.Gantt-master/index.html" target="_blank">Пример</a>


[Demo and Documentation](http://taitems.github.com/jQuery.Gantt/)
==============

jQuery Gantt Chart is a simple chart that implements gantt functionality as 
a jQuery component.

It's able to:

 - Read json data
 - Paging results
 - Display different colours for each task
 - Display short description as hints
 - Mark holidays

Plugin was tested and should work on:

 - Firefox 4+
 - Chrome 13+
 - Safari 5+
 - Opera 9+
 - IE 8+

Distributed under an MIT license.

## Элемент Диаграмма Ганна(просмотр)
### jquery gannt viewer scheduller
__Кратко__


Диаграмма Ганна используется при создании сетевых и ресурсных диаграмм.

Создана на основе библиотеки JQuery

 * <a href="data/jq_plugin/jquery.ganttView-master/example/index.html" target="_blank">Пример</a>

jQuery.ganttView
================

The jQuery.ganttView plugin is a very lightweight plugin for creating a Gantt chart in plain HTML...no vector graphics or images required.  The plugin supports dragging and resizing the Gantt blocks and callbacks to trap the updated data.

![Sample Gantt](http://github.com/thegrubbsian/jquery.ganttView/raw/master/example/jquery-ganttview.png)


Browser Compatibility
---------------------
Currently the plugin has been tested, and is working in: FF 3.5+, Chrome 5+, Safari 4+, IE8+.  There are minor issues in IE7 and I haven't even attempted to use it in IE6.  If you encounter any issues with any version of Internet Explorer and would like to contribute CSS fixes please do so, several people have asked for IE6 support.


Dependencies
------------
The plugin depends on the following libraries:

- jQuery 1.4 or higher (obviously)
- jQuery-UI 1.8 or higher
- date.js


Documentation
-------------
(April 2014) We're starting a process to update the plugin, and will be adding documentation in parallel. So, stay tuned...


Contribution
------------
Many people have been asking for more advanced features such as variable time-span for the blocks (hours, weeks, etc.) as well as support for hierarchical items and multiple items per line.  While I would love to be able to add all of these features I just don't have the time and it's often not within the scope of why I created the plugin.  However, I would be extremely happy to accept any pull requests from anyone interested in adding these features.  If you like the plugin, feel free to fork it and submit your patches back.


License
-------
The jQuery.ganttView plugin may be used free of charge under the conditions 
of the following license:

The MIT License

Copyright (c) 2010 JC Grubbs - jc.grubbs@devmynd.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


## Экспорт в Excel
### jquery excel write json xml table
## Экспорт данных в Excel


Позволяет экспортировать данные из браузера (таблица, json или xml файла) непосредственно в Excel.

 * <a href="data/battatech_excelexport-master/index.html" target="_blank">Примеры</a>
 * <a href="http://battatech.com/blog/how-to-export-to-excel-sheet-on-client-side.aspx" target="_blank">Сайт</a>


## Калькулятор
### jquery calculator
## Калькулятор

 * Калькулятор с простыми арифметическим функциями и локализацией<a href="data/jq_plugin/Calculator/calculatorBasic.html" target="_blank">Пример</a>
 * Более сложный калькулятор <a href="data/jq_plugin/Calculator/calculatorBaSIC3.html" target="_blank">Пример2</a>
 * <a href="data/jq_plugin/Calculator/myexample/" target="_blank">Мои эксперименты</a> с калькулятором


## Библиотека JQuery UI
### jquery ui
##Jquery-Ui

Развитие библиотеки jquery в сторону создания новых элементов для web-страниц и добавления к ним методов и свойств.

 * <a href="http://jqueryui.com/" target="_blank">Сайт </a>
 * <a href="data/jquery-ui-1.11.1.custom/examples/" target="_blank">Примеры</a>
 * <a href="data/jquery-ui-1.11.1.custom/index.htm" target="_blank">Описание</a><br>


## Таблицы(grid)
### jquery grid Table
## Элемент DataTable (Gtid)

Библиотека для построения таблиц на основе jquery.
 * <a href="data/jq_plugin/DataTables-1.9.4/examples/index.html" target="_blank">Примеры</a>

__Readme__

This DataTables plugin (v1.9.x) for jQuery was developed out of the desire to allow highly configurable access to HTML tables with advanced access features.

For detailed installation, usage and API instructions, please refer to the DataTables web-pages: http://www.datatables.net

Questions, feature requests and bug reports (etc) can all be asked on the DataTables forums: http://www.datatables.net/forums/

The DataTables source can be found in the media/js/ directory of this archive.

DataTables is released with dual licensing, using the GPL v2 (license-gpl2.txt) and an BSD style license (license-bsd.txt). You may select which of the two licenses you wish to use DataTables under. Please see the corresponding license file for details of these licenses. You are free to use, modify and distribute this software, but all copyright information must remain.

If you discover any bugs in DataTables, have any suggestions for improvements or even if you just like using it, please free to get in touch with me: www.datatables.net/contact


## Библиотека Easy-UI
### jquery framework UI
## Easy-UI

Одна из мощных библиотек (framework) на базе jquery; Содержит большое количетво элементов для построения веб-приложений.

 * <a href="data\easyui_03092014\demo\" target="_blank">Примеры</a>
 * <a href="http://www.jeasyui.com/" target="_blank"> Сайт </a>


## Easy-UI. Календарь
### jquery easyui calendar
## Элемент Календарь
Элемент библиотеки EasyUI Календарь.

 * <a href="data\easyui_03092014\demo\calendar\" target="_blank">Примеры</a>


## Easy-Ui. Combo и Combobox
### jquery easyui combo
## Combobox

 * <a href="data\easyui_03092014\demo\combo\" target="_blank">Combo</a>
 * <a href="data\easyui_03092014\demo\combobox\" target="_blank">Combobox</a>


## Элемент Таблица(datagrid)
### jquery easyui grid
<span id="content"></span><p></p><p><a href="data\jq\easyui_03092014\demo\datagrid\" target="_blank">Примеры</a><br></p><br>
```javascript
   alert("test");

```

## Easy-Ui. Combogrid и  combotree
### jquery easyui combo grid tree
## Combogrid и Combotree

Составные элементы состоят из combo + таблица и combo+Дерево

 * <a href="data\easyui_03092014\demo\combogrid\" target="_blank">combogrid</a>
 * <a href="data\easyui_03092014\demo\combotree\" target="_blank">combotree</a>

## Сводная таблица (pivot)
### jquery ui pivot csv json
## PivotTable

Плагин для библиотеки jquery, позволяющий формировать сводную таблицу из различных данных(форматы csv, json) с возможностью подсчета количества элементов, суммы

 * <a href="data\jq_plugin\Pivot\index.html" target="_blank">Примеры</a><br>


## Поиск тега и добавление класса CSS
### jquery find hover css addclass
### addClass() removeClass()
В примере использовано одновременное использование методов ___find___ и ___hover___.

В данном примере реализован поиск тега span и добавление и удаление нового класса.  
Это позволило подсветить слово при наведении на него мыши.<br>
```javascript
<style>
  .mmm { font-size:20px; width:200px; cursor:default; 
      color:blue; font-weight:bold; margin:0 10px; }
  .hilite { background:yellow; }
  </style>
  <script>
  var newText = $(".mmm").text().split(" ").join("</span> <span>");
  newText = "<span>" + newText + "</span>";

  $("p.mmm").html( newText )
    .find('span')
    .hover(function() { 
      $(this).addClass("hilite"); 
    },
      function() { $(this).removeClass("hilite"); 
    })
  .end()
    .find(":contains('t')")
    .css({"font-style":"italic", "font-weight":"bolder"});

</script>
<p>Highligth tag</p>
  <p class="mmm">
  When the day is short
  find that which matters to you
  or stop believing
  </p>
```
## Поиск в тексте
### jquery find tag content css
### find()

Для поиска определенного тега в html-текате используется функция find.С ее помощью проводится раскраска текста.<br>
```javascript
   <p class="ppp"><span>Hello</span>, how are you?</p>
<p class="ppp">Me? I'm <span>good</span>.</p>
<script>
  $(".ppp").find("span").css('color','red');
</script> 

```
### Атрибут content
Поиск содержимого в блоке div и его раскраска с помощью css<br>
```javascript
<div class="ggg">John Resig</div>

<div class="ggg">George Martin</div>
<div class="ggg">Malcom John Sinclair</div>
<div class="ggg">J. Ohn</div>
      
    
<script>
$(".ggg:contains('John')").css("text-decoration", "underline");
    </script>
```
## Фильтрация JSON (плагин)
### jquery plugin filter find search json
## Плагин filterjson

Плагин позволяет фильтровать json по многим параметрам:<

 * значению поля
 * начальному символу
 * содержимому и т.п.

<a href="data/jq_plugin/Filterplugin/demos/index.html" target="_blank">Пример</a>


__readme__

# jQuery Filter JSON

This jQuery plugin is a utility that allows you to filter a JSON based on properties. You can also have a property/value match and only those
property values that match the passed in value will be returned.

However, you can filter the JSON based on various parameters such as startWith or checkContains, matchCase and can either choose to return the 
matched values or the parent object of the matched values. You even have the option of avoiding duplicates if any.

Below is a basic usage:
````javascript
$.fn.filterJSON({ json object }, {
                        property: ["prop1", "prop2", ... n],
                        wrapper: true,
                        value: "user one",
	                    checkContains: false,
	                    startsWith: true,
	                    matchCase: false,
	                    avoidDuplicates: true
                    });
````
### Plugin Properties Explained
Before digging into each property of the plugin lets describe our sample JSON.
````javascript
{
    {
        "id": 12345,
        "name": "User One",
        "email": "user.one@email.com"
    },{
        "id": 23456,
        "name": "User Two",
        "email": "user.two@email.com"
    },{
        "id": 34567,
        "name": "User Three",
        "email": "user.three@email.com"
    }
    .
    .
    .
}
````

* property (mandatory, default is null): This options takes an array of the property or properties that you need to filter the JSON with. For the above sample JSON we can have three properties
id, name and email. So you can have this value set as ["name"] or ["name", "email"]

* wrapper (optional, default is false): If set to true, it will return an array of the parent object of the matched property else will return an array of value itself.
For instance if we are filtering the above sample JSON with 'name' property and wrapper is set to true, then an array of all the Objects which 
have the 'name'property will be returned.
If the wrapper is set to false, then an array of only the values of the property will be returned. For the above sample JSON
["User One", "User Two", "User Three"] would be returned.

* value (optional): An optional value passed in as a string (for a single value match) or as an array to check the matched property value against multiple values.

* checkContains (optional, default is false): Setting this option to true will check if the matched property's value contains the passed in value. However, passing a value becomes mandatory for this to work.
This option will be considered only if it is true and startsWith is not set to true.

* startsWith (optional, default is false): Setting this option to true will check if the matched property's value starts with the passed in value. However, passing a value becomes mandatory for this to work.
This options takes precedence over checkContains if it is set to true.

* matchCase (optional, default is false): If set to true will perform case-sensitive search of values.

* avoidDuplicates (optional, default is false): If set to true will avoid duplicate objects.

### Known Issues

For this plugin to work in IE7 and below, you will have to include JSON2.

You can use: http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js

### Licence

Copyright (c) 2012 Kapil Kashyap.
Dual licensed under MIT License and GPL License.

## Сложный combobox(плагин FlexBox)
### jquery plugin flexbox combo find
## Flexbox

Достаточно мощный combobox, позволяющий проводить поиск в json по ключевым словам, работает с большими массивами.

 * <a href="data/jq_plugin/FlexBox/Documentation/combo1.html" target="_blank">Пример</a>
 * <a href="data/jq_plugin/FlexBox/Documentation/index.html" target="_blank">Документация</a>

## Редактируемая таблица Grid(плагин ParamQuery Grid)
### jquery plugin grid
## Редактируемая таблица

Редактируемая таблица grid.

 * <a href="data/jq_plugin/ParamQueryGrid/index.htm" target="_blank">Пример</a>

__readme__

jQuery grid plugin based on jQueryui widget design
==================================================
[ParamQuery Grid](http://paramquery.com) a.k.a. pqGrid v1.1

Copyright (c) 2012-2013 Paramvir Dhindsa 

[Released under GPL license](http://paramquery.com/license)
 
      
ParamQuery grid is a lightweight jQuery grid plugin inspired by MS Excel and Google spreadsheet. 



1. [Tutorial](http://paramquery.com/tutorial)

2. [API](http://paramquery.com/api)

3. [Demos or Examples](http://paramquery.com/demos)

4. [Download](http://paramquery.com/download)


### Features:

```
It's designed on jQueryui widget pattern so it has all the advantages of it e.g. changing any 
option during runtime, methods like enable, disable, destroy, etc.

Sorting for common data formats like Integer, real numbers, Strings, etc.

Support for custom sorting through callback function.

Paging with local (Browser) or remote (Ajax) data in any format.

Freeze any number of Columns like Excel.

Connect to any data source format like HTML, Array, XML, JSON, etc locally or remotely through Ajax.

Can be used with any server side framework e.g. ASP.NET, MVC3, JSP, JSF, PHP, etc.

Minimal impact on performance with increase in number of records thanks to Virtual Scrolling and Rendering.

Inline Editing of cells with support to plugin custom editors.

Resizable columns.

Resizable height and width.

Customizable theme.

Hiding / Showing columns.

Consistent look and functionality across all major browsers IE(6+), Firefox, Chrome, Opera, etc

Many more...
```




## Загрузка текстового файла load
### jquery file load()
### load()
Загружает  текстовый файл.
Параметры данные из файла и состояние загрузки(statusTxt)
```javascript
 <script>
$(document).ready(function () {
  $('#btn1').click(function () {
         
$('#list').load("data/json.json",function(responseTxt,statusTxt,xhr){
      if(statusTxt=="success")
         alert(responseTxt);
      if(statusTxt=="error")
        alert("Error: "+xhr.status+": "+xhr.statusText);
    });
});
 
 });
</script>

    <div id="page-wrap">
        <h1>Reading XML with jQuery</h1>
       

        
        <input type="button" value="Просмотр" id="btn1" />
    
    <textarea id="list" ROWS="30" COLS="50"></textarea>



```
## Шаблоны HTML(jquery template plugin)
### jquery plugin template
## jQuery Templating Plugin

 Интересный и мощный plugin, ммеющий много шаблонов, для формирования web страницы. Имеет функции вставки шаблонов друг в друга , а также ветвление (if/else).

 * <a href="data/jq_plugin/WebSite1/" target="_blank">Примеры</a>

## Таблица с формулами (plugin calx)
### jquery plugin grid form
__Кратко__

Плагин calx на основе jquery позволяет создавать таблицы(grid) и формы с вычислениями.

 * <a href="data/jq_plugin/jquery-calx-master/sample/" target="_blank">Примеры</a>

__readme__

## Overview 
jQuery Calx is jQuery plugin for building a calculation form or calculation table, itвЂ™s parse provided formula and do calculation based on it, scan the form change and update the result automatically, format plain number into currency format, ordinal number, etc.

jQuery Calx was designed to allow user to easily configure their calculation form or calculation table, you may define as simple as ($A+$B) formula to the complex one such as PMT formula ($I*$P*((1 + $I)^$N)) / (1 - ((1 + $I)^$N)).

## Documentation 

For detailed documentation, please visit [http://www.xsanisty.com/calx](http://www.xsanisty.com/calx)


## Контекстное меню(contextMenu plugin)
### jquery  plugin context menu
__Кратко__

Плагин для создания контекстного меню в приложениях на основе jqury.

 * <a href="data/jq_plugin/jQuery-contextMenu-gh-pages/index.html" target="_blank">Документация и примеры</a>

# jQuery contextMenu plugin & polyfill #

$.contextMenu is a management facility for - you guessed it - context menus. It was designed for an application where there are hundreds of elements that may show a context menu - so intialization speed and memory usage are kept fairly small. It also allows to register context menus without providing actual markup, as $.contextMenu generates DOMElements as needed.

[features](http://medialize.github.com/jQuery-contextMenu/index.html) - 
[demo](http://medialize.github.com/jQuery-contextMenu/demo.html) - 
[documentation](http://medialize.github.com/jQuery-contextMenu/docs.html)


## Dependencies ##

* jQuery 1.7 (using new .on().off() event API)
* jQuery UI position (optional but recommended)

## Usage ##

register contextMenu from javascript:

```javascript
$.contextMenu({
    // define which elements trigger this menu
    selector: ".with-cool-menu",
    // define the elements of the menu
    items: {
        foo: {name: "Foo", callback: function(key, opt){ alert("Foo!"); }},
        bar: {name: "Bar", callback: function(key, opt){ alert("Bar!") }}
    }
    // there's more, have a look at the demos and docs...
});
```

have a look at the [demos](http://medialize.github.com/jQuery-contextMenu/demo.html).


## HTML5 Compatibility ##

Firefox 8 implemented contextmenu using the &lt;menuitem&gt; tags for menu-structure. The specs however state that &lt;command&gt; tags should be used for this purpose. $.contextMenu accepts both.

Firefox 8 does not yet fully implement the contextmenu specification ([Ticket #617528](https://bugzilla.mozilla.org/show_bug.cgi?id=617528)). The elements
[a](http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-a-element-to-define-a-command),
[button](http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-button-element-to-define-a-command),
[input](http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-input-element-to-define-a-command) and
[option](http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-option-element-to-define-a-command) 
usable as commands are being ignored altogether. It also doesn't (optically) distinguish between checkbox/radio and regular commands ([Bug #705292](https://bugzilla.mozilla.org/show_bug.cgi?id=705292)).

* [contextmenu specs](http://www.w3.org/TR/html5/interactive-elements.html#context-menus)
* [command specs](http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html)
* [Browser support according to caniuse.com](http://caniuse.com/#search=context%20menu)

Note: While the specs note &lt;option&gt;s to be renderd as regular commands, $.contextMenu will render an actual &lt;select&gt;. import contextMenu from HTML5 &lt;menu&gt;:

```javascript
$.contextMenu("html5");
```

## Interaction Principles ##

You're (obviously) able to use the context menu with your mouse. Once it is opened, you can also use the keyboard to (fully) navigate it.

* в†‘ (up) previous item in list, will skip disabled elements and wrap around
* в†“ (down) next item in, will skip disabled elements and wrap around
* в†’ (right) dive into sub-menu
* в†ђ (left) rise from sub-menu
* в†µ (return) invoke command
* в‡Ґ (tab) next item or input element, will skip disabled elements and wrap around
* в‡Є в‡Ґ (shift tab) previous item or input element, will skip disabled elements and wrap around
* вЋ‹ (escape) close menu
* вЊґ (space) captured and ignore to avoid page scrolling (for consistency with native menus)
* в‡ћ (page up) captured and ignore to avoid page scrolling (for consistency with native menus)
* в‡џ (page down) captured and ignore to avoid page scrolling (for consistency with native menus)
* в†– (home) first item in list, will skip disabled elements
* в† (end) last item in, will skip disabled elements

Besides the obvious, browser also react to alphanumeric key strokes. Hitting <code>r</code> in a context menu will make Firefox (8) reload the page immediately. Chrome selects the option to see infos on the page, Safari selects the option to print the document. Awesome, right? Until trying the same on Windows I did not realize that the browsers were using the access-key for this. I would've preferred typing the first character of something, say "s" for "save" and then iterate through all the commands beginning with s. But that's me - what do I know about UX? Anyways, $.contextMenu now also supports accesskey handling.


## Minify ##

use [Google Closure Compiler](http://closure-compiler.appspot.com/home):

```
// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name contextMenu.js
// @code_url http://medialize.github.com/jQuery-contextMenu/jquery-1.8.2.min.js
// @code_url http://medialize.github.com/jQuery-contextMenu/jquery.ui.position.js
// @code_url http://medialize.github.com/jQuery-contextMenu/jquery.contextMenu.js
// ==/ClosureCompiler==    
```


## Authors ##

* [Rodney Rehm](https://github.com/rodneyrehm)
* [Christiaan Baartse](https://github.com/christiaan) (single callback per menu)
* [Addy Osmani](https://github.com/addyosmani) (compatibility with native context menu in Firefox 8)


## License ##

$.contextMenu is published under the [MIT license](http://www.opensource.org/licenses/mit-license) and [GPL v3](http://opensource.org/licenses/GPL-3.0).


## Changelog ##

### 1.5.25 ###

* upgrading to jQuery 1.8.2 ([Issue 78](https://github.com/medialize/jQuery-contextMenu/issues/78))
* upgrading to jQuery UI position 1.9.0 RC1 ([Issue 78](https://github.com/medialize/jQuery-contextMenu/issues/78))

### 1.5.24 ###

* adding context menu options to input command events ([Issue 72](https://github.com/medialize/jQuery-contextMenu/issues/72), dtex)
* code cosmetics for JSLint

### 1.5.23 ###

* fixing reposition/close issue on scrolled documents ([Issue 69](https://github.com/medialize/jQuery-contextMenu/issues/69))
* fixing jQuery reference ([Issue 68](https://github.com/medialize/jQuery-contextMenu/issues/68))

### 1.5.22 ###

* fixing issue with animation and remove on hide (Issue #64)

### 1.5.21 ###

* fixing backdrop would not remove on destroy (Issue #63)

### 1.5.20 ###

* fixing backdrop would not position properly in IE6 (Issue #59)
* fixing nested input elements not accessible in Chrome / Safari (Issue #58)

### 1.5.19 ###

* fixing sub-menu positioning when `$.ui.position` is not available (Issue #56)

### 1.5.18 ###

* fixing html5 `<menu>` import (Issue #53)

### 1.5.17 ###

* fixing `options` to default to `options.trigger = "right"`
* fixing variable name typo (Within Issue #51)
* fixing menu not closing while opening other menu (Within Issue #51)
* adding workaround for `contextmenu`-bug in Firefox 12 (Within Issue #51)

### 1.5.16 ###

* added vendor-prefixed user-select to CSS
* fixed issue with z-indexing when `<body>` is used as a trigger (Issue #49)

### 1.5.15 ###

* allowing to directly open another element's menu while a menu is shown (Issue #48)
* fixing autohide option that would not properly hide the menu

### 1.5.14 ###

* options.build() would break default options (Issue #47)
* $.contextMenu('destroy') would not remove backdrop

### 1.5.13 ###

* exposing $trigger to dynamically built custom menu-item types (Issue #42)
* fixing repositioning of open menu (formerly accidental re-open)
* adding asynchronous example
* dropping ignoreRightClick in favor of proper event-type detection

### 1.5.12 ###

* prevent invoking callback of first item of a sub-menu when clicking on the sub-menu-item (Issue #41)

### 1.5.11 ###

* providing `opt.$trigger` to show event (Issue #39)

### 1.5.10 ###

* ignoreRightClick would not prevent right click when menu is already open (Issue #38)

### 1.5.9 ###

* If build() did not return any items, an empty menu was shown (Issue #33)

### 1.5.8 ###

* Capturing Page Up and Page Down keys to ignore like space (Issue #30)
* Added Home / End keys to jump to first / last command of menu (Issue #29)
* Bug hitting enter in an &lt;input&gt; would yield an error (Issue #28)

### 1.5.7 ###

* Non-ASCII character in jquery.contextMenu.js caused compatibility issues in Rails (Issue #27)

### 1.5.6 ###

* Bug contextmenu event was not passed to build() callback (Issue #24)
* Bug sub-menu markers would not display properly in Safari and Chrome (Issue #25)

### 1.5.5 ###

* Bug Internet Explorer would not close menu when giving input elements focus (Issue #23)

### 1.5.4 ###

* Bug not set z-index of sub-menus might not overlap the main menu correctly (Issue #22)

### 1.5.3 ###

* Bug `console.log is undefined`

### 1.5.2 ###

* Bug sub-menus would not properly update their disabled states (Issue #16) [againвЂ¦]
* Bug sub-menus would not properly adjust width accoring to min-width and max-width (Issue #18)

### 1.5.1 ###

* Bug sub-menus would not properly update their disabled states (Issue #16)

### 1.5 ###

* Added [dynamic menu creation](http://medialize.github.com/jQuery-contextMenu/demo/dynamic-create.html) (Issue #15)

### 1.4.4 ###

* Bug positioning &lt;menu&gt; when trigger element is `position:fixed` (Issue #14)

### 1.4.3 ###

* Bug key handler would caputure all key strokes while menu was visible (essentially disabling F5 and co.)

### 1.4.2 ###

* Bug opt.$trigger was not available to disabled callbacks
* jQuery bumped to 1.7.1

### 1.4.1 ###

* Bug where &lt;menu&gt; imports would not pass action (click event) properly

### 1.4 ###

* Upgraded to jQuery 1.7 (changed dependecy!)
* Added internal events `contextmenu:focus`, `contextmenu:blur` and `contextmenu:hide`
* Added custom &lt;command&gt; types
* Bug where `className` wasn't properly set on &lt;menu&gt;

### 1.3 ###

* Added support for accesskeys
* Bug where two sub-menus could be open simultaneously

### 1.2.2 ###

* Bug in HTML5 import

### 1.2.1 ###

* Bug in HTML5 detection

### 1.2 ###

* Added compatibility to &lt;menuitem&gt; for Firefox 8
* Upgraded to jQuery 1.6.2

### 1.1 ###

* Bug #1 TypeError on HTML5 action passthru
* Bug #2 disbaled callback not invoked properly
* Feature #3 auto-hide option for hover trigger
* Feature #4 option to use a single callback for all commands, rather than registering the same function for each item
* Option to ignore right-click (original "contextmenu" event trigger) for non-right-click triggers

### 1.0 ###

* Initial $.contextMenu handler

## Простой Combobox(plugin)
### jquery combobox plugin
__Кратко__

Плагин jquery Simple Combobox позволяет выполнять операции автоматического окончания пункта(autocomplete) и разметки (markup)

 * <a href="data/jq_plugin/jquery-simple-combobox-master/index.html" target="_blank">Пример</a>



__readme__

jQuery Simple Combobox plugin
=============================

A jQuery combobox plugin. You can use it for autocomplete (search, etc).

Usage
-----

You can find reference in index.html and see [fiddles here](http://jsfiddle.net/user/ivkremer/fiddles/ "JSFiddle") to understand its features.

To change the name of a plugin in your code you need to modify ```var pname = 'scombobox';``` line (starting the script). Make sure your CSS class prefixes correspond this name.

### IE8 compatibility ###

This plugin uses the following JS native stuff:

```JavaScript
String.prototype.trim()
Object.keys()
Array.prototype.indexOf()
console.warn()
```

To provide IE8 support add this methods to your project (see [js/missed.js](https://github.com/ivkremer/jquery-simple-combobox/blob/master/js/missed.js) file).

Thanks to
---------

* [danieltim300](https://github.com/danieltim300)
* [taitranvn](https://github.com/taitranvn)
* [joweiser](https://github.com/joweiser)
* [dgubernatorov-softheme](https://github.com/dgubernatorov-softheme)
* [policecomplaints](https://github.com/policecomplaints)

For bug reporting and improving this project.

License
-------

The MIT License (MIT)

Copyright (c) 2014 Ilya Kremer


## Ьоковое меню(Sidebar plugin)
### jquery plugin menu
__Кратко__

Плагин Sidebar для jquery позволяет создать меню на сторонах страницы, а также сверху и снизу..

 * <a href="data/jq_plugin/jquery.sidebar-master/demo.html" target="_blank">Пример</a>

__readme__

# jquery.sidebar[![Build Status](https://travis-ci.org/sideroad/jquery.sidebar.png?branch=master)](https://travis-ci.org/sideroad/jquery.sidebar)

##Install

###Jam
```sh
jam install jquery.sidebar
```

###Bower
```sh
bower install jquery.sidebar
```

### Usage
Please check the [jquery.sidebar](http://sideroad.secret.jp/plugins/jQuerySideBar/)



## Простое контекстное меню
### jquery context menu
## ContextMenu 

Создание контекстного меню для jquery

 * 

<a href="data/jq_plugin/jQuery Contextmenu/index.html" target="_blank">Пример</a>

## Анимация текста (Textanimation plugin)
### jquery plugin animation text
## Text animation

В этом плагине представлено несколько вариантов анимации текста

 * <a href="index.html" target="_blank"></a><a href="data/jq_plugin/jquery.textanimation-master/index.html" target="_blank">Пример</a>

## Сообщения (jQuery Alert Dialogs)
### jquery plugin message alert pronpt confirm
##Alert dialog

Плагин позволяет создавать собственные системные сообщения.

 * <a href="jQuery Alert Dialogs.htm" target="_blank"></a><a href="data/jq_plugin/jQuery Alert Dialogs/jQuery Alert Dialogs.htm" target="_blank">Пример</a><br>


## SVG в jquery
### jquery svg graphic
## SVG

[Литература](data/doc/svg.pdf)

Библиотека jquery поддерживает формат svg, имеется несколько плагинов:

__readme svg style plugin__

# jQuery.SVGStyle plugin

SVG Style - plugin to manipulate runtime with styles of SVG and and it's magic.

This is a simple way to manipulate with SVG-styles of "inline" data like `url("data:image/svg+xml;base64,вЂ¦ ")`!

### Why you need use SVG at all?
SVG is an image format for vector graphics. It literally means Scalable Vector Graphics. Basically, what you work with in Adobe Illustrator. You can use SVG on the web pretty easily.

- Small file sizes that compress well
- Scales to any size without losing clarity (except very tiny)
- Looks great on *retina displays* (Macbook Pro Retina, iPhone, iPad, etc)
- Design control like CSS
- Using SVG as an `<img>`

Many CSS-frameworks like `Modernizr` can help us detect the `background-image` with a supported format. One HTTP request will be made instead of two. `Modernizr` adds a class name of "no-svg" to the html element if it doesn't support SVG.


## Demo

[How it works, you can find here](http://xvoland.github.io/jquery-plugin-svg-style/)

### Requirements

`jQuery` 1.7.x or later.


## Browser support

- Internet Explorer >= 9.0
- FireFox >= 4.0
- Google Chrome >= 4.0
- Safari >= 3.2
- Opera > 9.00

### Mobile browsers
- Android Browser >= 3.0
- Blackberry Browser >= 7.0
- FireFox for Android >= 22.0
- Google Chrome for Android >= 27.0
- iOS Safari >= 3.2
- Opera Mini >= 5.0
- Opera Mobile >= 10.0

SVG support 84.39% todays browsers

# How it works
Here is a simple SVGStyle usage:

HEAD:

```
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="jquery.svgstyle.js"></script>
    <script>
        $(document).ready(function(){
            $('[data-svg-style]').svgStyle();
        });
    </script>
```

CSS:

```
    .icon-github {
        display: inline-block;
        width: 32px;
        height: 32px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbjвЂ¦vc3ZnPg==");
        margin: 15px;
    }
```

HTML:

```
    <i class="icon-github" data-svg-style="fill:#bbb"></i>

```

Also you can use the dynamic change of style like `$('#id').svgStyle('fill:#333')` or `$('.class').svgStyle('stroke: #b3b3b3; stroke-width: 5')` or set it by default in tag `data-svg-style="fill:#bbb"`.

And now you can set the color like `data-svg-style="#xxx|#xxxxxx|rgb(x,x,x)"` or `.svgStyle('#xxx|#xxxxxx|rgb(x,x,x)')`

Also allowed to use in styles like

- `rgb(x, x, x)`
- `#bbb`
- `#b3c3d3`
- `1.25em`
- `12px`
- and etcвЂ¦

More information can be found [here](http://www.w3.org/TR/SVG/styling.html)

# Bower package Installation
You can install jquery-svgstyle by using [Bower](http://bower.io/).


# Contributing

If you'd like to contribute to this project, create a branch and send a pull request for that branch. Lint and test your code.

# License

Copyright В© 2013 Vitalii Tereshchuk. Licensed under the MIT and GPL licenses.

#### About me and welcome
I'm an independent developer and researcher in web development. Many of you I'll be happy to see on [my website](http://dotoca.net)

##circle

<a href="data/jq_plugin/svg_package/svgBasic.html" target="_blank">Пример</a>

## SVG JS 

# svg.js

A lightweight library for manipulating and animating SVG.

Svg.js has no dependencies and aims to be as small as possible.

Svg.js is licensed under the terms of the MIT License.

See [svgjs.com](http://svgjs.com) for an introduction, [documentation](http://documentup.com/wout/svg.js) and [some action](http://svgjs.com/test).

## Usage

### Create a SVG document

Use the `SVG()` function to create a SVG document within a given html element:

```javascript
var draw = SVG('drawing').size(300, 300)
var rect = draw.rect(100, 100).attr({ fill: '#f06' })
```
The first argument can either be an id of the element or the selected element itself.
This will generate the following output:

```html
<div id="drawing">
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300">
		<rect width="100" height="100" fill="#f06"></rect>
	</svg>
</div>
```

By default the svg drawing follows the dimensions of its parent, in this case `#drawing`:

```javascript
var draw = SVG('drawing').size('100%', '100%')
```

### Checking for SVG support

By default this library assumes the client's browser supports SVG. You can test support as follows:

```javascript
if (SVG.supported) {
  var draw = SVG('drawing')
  var rect = draw.rect(100, 100)
} else {
  alert('SVG not supported')
}
```


### SVG document
Svg.js also works outside of the HTML DOM, inside an SVG document for example:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<svg id="drawing" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" >
  <script type="text/javascript" xlink:href="svg.min.js"></script>
  <script type="text/javascript">
    <![CDATA[
      var draw = SVG('drawing')
      draw.rect(100,100).animate().fill('#f03').move(100,100)
    ]]>
  </script>
</svg>
```

### Sub pixel offset fix
By default sub pixel offset won't be corrected. To enable it, call the `fixSubPixelOffset()` method:

```javascript
var draw = SVG('drawing').fixSubPixelOffset()
```

## Parent elements

### Main svg document
The main svg.js initializer function creates a root svg node in the given element and returns an instance of `SVG.Doc`:

```javascript
var draw = SVG('drawing')
```

__`returns`: `SVG.Doc`__

_Javascript inheritance stack: `SVG.Doc` < `SVG.Container` < `SVG.Parent`_

### Nested svg
With this feature you can nest svg documents within each other. Nested svg documents have exactly the same features as the main, top-level svg document:

```javascript
var nested = draw.nested()

var rect = nested.rect(200, 200)
```

__`returns`: `SVG.Nested`__

_Javascript inheritance stack: `SVG.Nested` < `SVG.Container` < `SVG.Parent`_

### Groups
Grouping elements is useful if you want to transform a set of elements as if it were one. All element within a group maintain their position relative to the group they belong to. A group has all the same element methods as the root svg document: 

```javascript
var group = draw.group()
group.path('M10,20L30,40')
```

Existing elements from the svg document can also be added to a group:

```javascript
group.add(rect)
```

__`returns`: `SVG.G`__

_Javascript inheritance stack: `SVG.G` < `SVG.Container` < `SVG.Parent`_

### Hyperlink
A hyperlink or `<a>` tag creates a container that enables a link on all children:

```javascript
var link = draw.link('http://svgjs.com')
var rect = link.rect(100, 100)
```

The link url can be updated with the `to()` method:

```javascript
link.to('http://apple.com')
```

Furthermore, the link element has a `show()` method to create the `xlink:show` attribute:

```javascript
link.show('replace')
```

And the `target()` method to create the `target` attribute:

```javascript
link.target('_blank')
```

Elements can also be linked the other way around with the `linkTo()` method:

```javascript
rect.linkTo('http://svgjs.com')
```

Alternatively a block can be passed instead of a url for more options on the link element:

```javascript
rect.linkTo(function(link) {
  link.to('http://svgjs.com').target('_blank')
})
```

__`returns`: `SVG.A`__

_Javascript inheritance stack: `SVG.A` < `SVG.Container` < `SVG.Parent`_

### Defs
The `<defs>` element is a container element for referenced elements. Elements that are descendants of a вЂdefsвЂ™ are not rendered directly. The `<defs>` node lives in the main `<svg>` document and can be accessed with the `defs()` method:

```javascript
var defs = draw.defs()
```

The defs are also available on any other element through the `doc()` method:

```javascript
var defs = rect.doc().defs()
```

The defs node works exactly the same as groups.

__`returns`: `SVG.Defs`__

_Javascript inheritance stack: `SVG.Defs` < `SVG.Container` < `SVG.Parent`_

## Rect
Rects have two arguments, their `width` and `height`:

```javascript
var rect = draw.rect(100, 100)
```

__`returns`: `SVG.Rect`__

_Javascript inheritance stack: `SVG.Rect` < `SVG.Shape` < `SVG.Element`_

### radius()
Rects can also have rounded corners:

```javascript
rect.radius(10)
```

This will set the `rx` and `ry` attributes to `10`. To set `rx` and `ry` individually:

```javascript
rect.radius(10, 20)
```

__`returns`: `itself`__


## Ellipse
Ellipses, like rects, have two arguments, their `width` and `height`:

```javascript
var ellipse = draw.ellipse(200, 100)
```

__`returns`: `SVG.Ellipse`__

_Javascript inheritance stack: `SVG.Ellipse` < `SVG.Shape` < `SVG.Element`_

### radius()
Ellipses can also be redefined by their radii:

```javascript
rect.radius(75, 50)
```

__`returns`: `itself`__

## Circle
The only argument necessary for a circle is the diameter:

```javascript
var circle = draw.circle(100)
```

__`returns`: `SVG.Ellipse`__

_Javascript inheritance stack: `SVG.Ellipse` < `SVG.Shape` < `SVG.Element`_

_Note that this generates an `<ellipse>` element instead of a `<circle>`. This choice has been made to keep the size of the library down._

### radius()
Circles can also be redefined by their radius:

```javascript
rect.radius(75)
```

__`returns`: `itself`__

## Line
The line element always takes four arguments, `x1`, `y1`, `x2` and `y2`:

```javascript
var line = draw.line(0, 0, 100, 150).stroke({ width: 1 })
```

__`returns`: `SVG.Line`__

_Javascript inheritance stack: `SVG.Line` < `SVG.Shape` < `SVG.Element`_

### plot()
Updating a line is done with the `plot()` method:

```javascript
line.plot(50, 30, 100, 150)
```

__`returns`: `itself`__

## Polyline
The polyline element defines a set of connected straight line segments. Typically, polyline elements define open shapes:

```javascript
// polyline('x,y x,y x,y')
var polyline = draw.polyline('0,0 100,50 50,100').fill('none').stroke({ width: 1 })
```

Polyline strings consist of a list of points separated by spaces: `x,y x,y x,y`.

As an alternative an array of points will work as well:

```javascript
// polyline([[x,y], [x,y], [x,y]])
var polyline = draw.polyline([[0,0], [100,50], [50,100]]).fill('none').stroke({ width: 1 })
```

__`returns`: `SVG.Polyline`__

_Javascript inheritance stack: `SVG.Polyline` < `SVG.Shape` < `SVG.Element`_

### plot()
Polylines can be updated using the `plot()` method:

```javascript
polyline.plot([[0,0], [100,50], [50,100], [150,50], [200,50]])
```

The `plot()` method can also be animated:

```javascript
polyline.animate(3000).plot([[0,0], [100,50], [50,100], [150,50], [200,50], [250,100], [300,50], [350,50]])
```

__`returns`: `itself`__

## Polygon
The polygon element, unlike the polyline element, defines a closed shape consisting of a set of connected straight line segments:

```javascript
// polygon('x,y x,y x,y')
var polygon = draw.polygon('0,0 100,50 50,100').fill('none').stroke({ width: 1 })
```

Polygon strings are exactly the same as polyline strings. There is no need to close the shape as the first and last point will be connected automatically.

__`returns`: `SVG.Polygon`__

_Javascript inheritance stack: `SVG.Polygon` < `SVG.Shape` < `SVG.Element`_

### plot()
Like polylines, polygons can be updated using the `plot()` method:

```javascript
polygon.plot([[0,0], [100,50], [50,100], [150,50], [200,50]])
```

The `plot()` method can also be animated:

```javascript
polygon.animate(3000).plot([[0,0], [100,50], [50,100], [150,50], [200,50], [250,100], [300,50], [350,50]])
```

__`returns`: `itself`__

## Path
The path string is similar to the polygon string but much more complex in order to support curves:

```javascript
draw.path('M 100 200 C 200 100 300  0 400 100 C 500 200 600 300 700 200 C 800 100 900 100 900 100')
```

__`returns`: `SVG.Path`__

_Javascript inheritance stack: `SVG.Path` < `SVG.Shape` < `SVG.Element`_

For more details on path data strings, please refer to the SVG documentation:
http://www.w3.org/TR/SVG/paths.html#PathData

### plot()
Paths can be updated using the `plot()` method:

```javascript
path.plot('M100,200L300,400')
```

__`returns`: `itself`__

## Image
Creating images is as you might expect:

```javascript
var image = draw.image('/path/to/image.jpg')
```

If you know the size of the image, those parameters can be passed as the second and third arguments:

```javascript
var image = draw.image('/path/to/image.jpg', 200, 300)
```

__`returns`: `SVG.Image`__

_Javascript inheritance stack: `SVG.Image` < `SVG.Shape` < `SVG.Element`_

### load()
Loading another image can be done with the `load()` method:

```javascript
draw.image('/path/to/another/image.jpg')
```

__`returns`: `itself`__

### loaded()
If you don't know the size of the image, obviously you will have to wait for the image to be `loaded`:

```javascript
var image = draw.image('/path/to/image.jpg').loaded(function(loader) {
  this.size(loader.width, loader.height)
})
```

The returned `loader` object as first the argument of the loaded method contains four values:
- `width`
- `height`
- `ratio` (width / height)
- `url`

__`returns`: `itself`__


## Text
Unlike html, text in svg is much harder to tame. There is no way to create flowing text, so newlines should be entered manually. In svg.js there are two ways to create text elements.

The first and easiest method is to provide a string of text, split by newlines:

```javascript
var text = draw.text("Lorem ipsum dolor sit amet consectetur.\nCras sodales imperdiet auctor.")
```

This will automatically create a block of text and insert newlines where necessary.

The second method will give you much more control but requires a bit more code:

```javascript
var text = draw.text(function(add) {
  add.tspan('Lorem ipsum dolor sit amet ').newLine()
  add.tspan('consectetur').fill('#f06')
  add.tspan('.')
  add.tspan('Cras sodales imperdiet auctor.').newLine().dx(20)
  add.tspan('Nunc ultrices lectus at erat').newLine()
  add.tspan('dictum pharetra elementum ante').newLine()
})
```

If you want to go the other way and don't want to add tspans at all, just one line of text, you can use the `plain()` method instead:

```javascript
var text = draw.plain('Lorem ipsum dolor sit amet consectetur.')
```

This is a shortcut to the `plain` method on the `SVG.Text` instance which doesn't render newlines at all.

_Javascript inheritance stack: `SVG.Text` < `SVG.Shape` < `SVG.Element`_

__`returns`: `SVG.Text`__

### text()
Changing text afterwards is also possible with the `text()` method:

```javascript
text.text('Brilliant!')
```

__`returns`: `itself`__

To get the raw text content:

```javascript
text.text()
```

__`returns`: `string`__

### tspan()
Just adding one tspan is also possible:

```javascript
text.tspan(' on a train...').fill('#f06')
```

__`returns`: `SVG.TSpan`__

### plain()
If the content of the element doesn't need any stying or multiple lines, it might be sufficient to just add some plain text:

```javascript
text.plain('I do not have any expectations.')
```

__`returns`: `itself`__

### font()
The sugar.js module provides some syntax sugar specifically for this element type:

```javascript
text.font({
  family:   'Helvetica'
, size:     144
, anchor:   'middle'
, leading:  '1.5em'
})
```

__`returns`: `itself`__

### leading()
As opposed to html, where leading is defined by `line-height`, svg does not have a natural leading equivalent. In svg, lines are not defined naturally. They are defined by `<tspan>` nodes with a `dy` attribute defining the line height and a `x` value resetting the line to the `x` position of the parent text element. But you can also have many nodes in one line defining a different `y`, `dy`, `x` or even `dx` value. This gives us a lot of freedom, but also a lot more responsibility. We have to decide when a new line is defined, where it starts, what its offset is and what it's height is. The `leading()` method in svg.js tries to ease the pain by giving you behaviour that is much closer to html. In combination with newline separated text, it works just like html:

```javascript
var text = draw.text("Lorem ipsum dolor sit amet consectetur.\nCras sodales imperdiet auctor.")
text.leading(1.3)
```

This will render a text element with a tspan element for each line, with a `dy` value of `130%` of the font size.

Note that the `leading()` method assumes that every first level tspan in a text node represents a new line. Using `leading()` on text elements containing multiple tspans in one line (e.g. without a wrapping tspan defining a new line) will render scrambeled. So it is advisable to use this method with care, preferably only when throwing newline separated text at the text element or calling the `newLine()` method on every first level tspan added in the block passed as argument to the text element.

__`returns`: `itself`__

### build()
The `build()` can be used to enable / disable build mode. With build mode disabled, the `plain()` and `tspan()` methods will first call the `clear()` bethod before adding the new content. So when build mode is enabled, `plain()` and `tspan()` will append the new content to the existing content. When passing a block to the `text()` method, build mode is toggled automatically before and after the block is called. But in some cases it might be useful to be able to toggle it manually:


```javascript
var text = draw.text('This is just the start, ')

text.build(true)  // enables build mode

var tspan = text.tspan('something pink in the middle ').fill('#00ff97')
text.plain('and again boring at the end.')

text.build(false) // disables build mode

tspan.animate('2s').fill('#f06')
```

__`returns`: `itself`__

### rebuild()
This is an internal callback that probably never needs to be called manually. Basically it rebuilds the text element whenerver `font-size` and `x` attributes or the `leading()` of the text element are modified. This method also acts a setter to enable or disable rebuilding:

```javascript
text.rebuild(false) //-> disables rebuilding
text.rebuild(true)  //-> enables rebuilding and instantaneously rebuilds the text element
```

__`returns`: `itself`__

### clear()
Clear all the contents of the called text element:

```javascript
text.clear()
```

__`returns`: `itself`__

### length()
Gets the total computed text length of all tspans together:

```javascript
text.length()
```

__`returns`: `number`__


### lines
All added tspans are stored in the `lines` reference, which is an instance of `SVG.Set`.

### events
The text element has one event. It is fired every time the `rebuild()` method is called:

```javascript
text.on('rebuild', function() {
  // whatever you need to do after rebuilding
})
```

## TSpan
The tspan elements are only available inside text elements or inside other tspan elements. In svg.js they have a class of their own:

_Javascript inheritance stack: `SVG.TSpan` < `SVG.Shape` < `SVG.Element`_

### text()
Update the content of the tspan. This can be done by either passing a string:


```javascript
tspan.text('Just a string.')
```

Which will basicly call the `plain()` method.

Or by passing a block to add more specific content inside the called tspan:

```javascript
tspan.text(function(add) {
  add.plain('Just plain text.')
  add.tspan('Fancy text wrapped in a tspan.').fill('#f06')
  add.tspan(function(addMore) {
    addMore.tspan('And you can doo deeper and deeper...')
  })
})
```

__`returns`: `itself`__

### tspan()
Add a nested tspan:

```javascript
tspan.tspan('I am a child of my parent').fill('#f06')
```

__`returns`: `SVG.TSpan`__

### plain()
Just adds some plain text:

```javascript
tspan.plain('I do not have any expectations.')
```

__`returns`: `itself`__

### dx()
Define the dynamic `x` value of the element, much like a html element with `position:relative` and `left` defined:

```javascript
tspan.dx(30)
```

__`returns`: `itself`__

### dy()
Define the dynamic `y` value of the element, much like a html element with `position:relative` and `top` defined:

```javascript
tspan.dy(30)
```

__`returns`: `itself`__

### newLine()
The `newLine()` is a convenience method for adding a new line with a `dy` attribute using the current "leading":

```javascript
var text = draw.text(function(add) {
  add.tspan('Lorem ipsum dolor sit amet ').newLine()
  add.tspan('consectetur').fill('#f06')
  add.tspan('.')
  add.tspan('Cras sodales imperdiet auctor.').newLine().dx(20)
  add.tspan('Nunc ultrices lectus at erat').newLine()
  add.tspan('dictum pharetra elementum ante').newLine()
})
```

__`returns`: `itself`__

### clear()
Clear all the contents of the called tspan element:

```javascript
tspan.clear()
```

__`returns`: `itself`__

### length()
Gets the total computed text length:

```javascript
tspan.length()
```

__`returns`: `number`__

## TextPath
A nice feature in svg is the ability to run text along a path:

```javascript
var text = draw.text(function(add) {
  add.tspan('We go ')
  add.tspan('up').fill('#f09').dy(-40)
  add.tspan(', then we go down, then up again').dy(40)
})
text
  .path('M 100 200 C 200 100 300 0 400 100 C 500 200 600 300 700 200 C 800 100 900 100 900 100')
  .font({ size: 42.5, family: 'Verdana' })
```

When calling the `path()` method on a text element, the text element is mutated into an intermediate between a text and a path element. From that point on the text element will also feature a `plot()` method to update the path:

```javascript
text.plot('M 300 500 C 200 100 300 0 400 100 C 500 200 600 300 700 200 C 800 100 900 100 900 100')
```

Attributes specific to the `<textPath>` element can be applied to the textPath instance itself:

```javascript
text.textPath.attr('startOffset', 0.5)
```

And they can be animated as well of course:

```javascript
text.textPath.animate(3000).attr('startOffset', 0.8)
```

__`returns`: `SVG.TextPath`__

_Javascript inheritance stack: `SVG.TextPath` < `SVG.Element`_

### track
Referencing the linked path element directly:

```javascript
var path = text.track
```


## Use
The use element simply emulates another existing element. Any changes on the master element will be reflected on all the `use` instances. The usage of `use()` is very straightforward:

```javascript
var rect = draw.rect(100, 100).fill('#f09')
var use  = draw.use(rect).move(200, 200)
```

In the case of the example above two rects will appear on the svg drawing, the original and the `use` instance. In some cases you might want to hide the original element. the best way to do this is to create the original element in the defs node:

```javascript
var rect = draw.defs().rect(100, 100).fill('#f09')
var use  = draw.use(rect).move(200, 200)
```

In this way the rect element acts as a library element. You can edit it but it won't be rendered.

__`returns`: `SVG.Use`__

_Javascript inheritance stack: `SVG.Use` < `SVG.Shape` < `SVG.Element`_

## Symbol
Not unlike the `group` element, the `symbol` element is a container element. The only difference between symbols and groups is that symbols are not rendered. Therefore a `symbol` element is ideal in combination with the `use` element:


```javascript
var symbol = draw.symbol()
symbol.rect(100, 100).fill('#f09')

var use  = draw.use(symbol).move(200, 200)
```

__`returns`: `SVG.Symbol`__

_Javascript inheritance stack: `SVG.Use` < `SVG.Container` < `SVG.Symbol`_


## Referencing elements

### By id
If you want to get an element created by svg.js by its id, you can use the `SVG.get()` method:

```javascript
var element = SVG.get('my_element')

element.fill('#f06')
```

### By class name
There is no DOM querying system built into svg.js but [jQuery](http://jquery.com/) or [Zepto](http://zeptojs.com/) will help you achieve this. Here is an example:

```javascript
/* add elements */
var draw   = SVG('drawing')
var group  = draw.group().attr('class', 'my-group')
var rect   = group.rect(100,100).attr('class', 'my-element')
var circle = group.circle(100).attr('class', 'my-element').move(100, 100)

/* get elements in group */
var elements = $('#drawing g.my-group .my-element').each(function() {
  this.instance.animate().fill('#f09')
})
```

## Circular reference
Every element instance within svg.js has a reference to the actual `node`:

### node
```javascript
element.node
```
__`returns`: `node`__

### instance
Similarly, the node carries a reference to the svg.js `instance`:

```javascript
node.instance
```
__`returns`: `element`__

## Parent reference
Every element has a reference to its parent:

### parent

```javascript
element.parent
```

__`returns`: `element`__

Even the main svg document:

```javascript
var draw = SVG('drawing')

draw.parent //-> returns the wrappig html element with id 'drawing'
```

__`returns`: `node`__


### doc()
For more specific parent filtering the `doc()` method can be used:

```javascript
var draw = SVG('drawing')
var rect = draw.rect(100, 100)

rect.doc() //-> returns draw
```

Alternatively a class can be passed as the first argument:

```javascript
var draw   = SVG('drawing')
var nested = draw.nested()
var group  = nested.group()
var rect   = group.rect(100, 100)

rect.doc()           //-> returns draw
rect.doc(SVG.Doc)    //-> returns draw
rect.doc(SVG.Nested) //-> returns nested
rect.doc(SVG.G)      //-> returns group
```
__`returns`: `element`__

## Child references

### first()
To get the first child of a parent element:

```javascript
draw.first()
```
__`returns`: `element`__

### last()
To get the last child of a parent element:

```javascript
draw.last()
```
__`returns`: `element`__

### children()
An array of all children will can be retreives with the `children` method:

```javascript
draw.children()
```
__`returns`: `array`__

### each()
The `each()` allows you to iterate over the all children of a parent element:

```javascript
draw.each(function(i, children) {
  this.fill({ color: '#f06' })
})
```

Deep traversing is also possible by passing true as the second argument:

```javascript
// draw.each(block, deep)
draw.each(function(i, children) {
  this.fill({ color: '#f06' })
}, true)
```

Note that `this` refers to the current child element.

__`returns`: `itself`__

### has()
Checking the existence of an element within a parent:

```javascript
var rect  = draw.rect(100, 50)
var group = draw.group()

draw.has(rect)  //-> returns true
group.has(rect) //-> returns false
```
__`returns`: `boolean`__

### index()
Returns the index of given element and returns -1 when it is not a child:

```javascript
var rect  = draw.rect(100, 50)
var group = draw.group()

draw.index(rect)  //-> returns 0
group.index(rect) //-> returns -1
```
__`returns`: `number`__

### get()
Get an element on a given position in the children array:

```javascript
var rect   = draw.rect(20, 30)
var circle = draw.circle(50)

draw.get(0) //-> returns rect
draw.get(1) //-> returns circle
```
__`returns`: `element`__

### clear()
To remove all elements from a parent element:

```javascript
draw.clear()
```
__`returns`: `itself`__


## Attribute references

### reference()
In cases where an element is linked to another element through an attribute, the linked element instance can be fetched with the `reference()` method. The only thing required is the attribute name:

```javascript
use.reference('href') //-> returns used element instance
// or
rect.reference('fill') //-> returns gradient or pattern instance for example
// or
circle.reference('clip-path') //-> returns clip instance
```


## Manipulating elements

### attr()
You can get and set an element's attributes directly using `attr()`.

Get a single attribute:
```javascript
rect.attr('x')
```

Set a single attribute:
```javascript
rect.attr('x', 50)
```

Set multiple attributes at once:
```javascript
rect.attr({
  fill: '#f06'
, 'fill-opacity': 0.5
, stroke: '#000'
, 'stroke-width': 10
})
```

Set an attribute with a namespace:
```javascript
rect.attr('x', 50, 'http://www.w3.org/2000/svg')
```

Explicitly remove an attribute:
```javascript
rect.attr('fill', null)
```

`getter`__`returns`: `value`__

`setter`__`returns`: `itself`__


### transform()
With the `transform()` method elements can be scaled, rotated, translated and skewed:

```javascript
rect.transform({
  rotation: 45
, cx:       100
, cy:       100
})
```

You can also provide two arguments as property and value:

```javascript
rect.transform('matrix', '1,0.5,0.5,1,0,0')
```

All available transformations are:

```javascript
rect.transform({
  x:        [translation on x-axis]
, y:        [translation on y-axis]

, rotation: [degrees]
, cx:       [x rotation point]
, cy:       [y rotation point]

, scaleX:   [scaling on x-axis]
, scaleY:   [scaling on y-axis]

, skewX:    [skewing on x-axis]
, skewY:    [skewing on y-axis]

, matrix:   [a 6-digit matrix string; e.g. '1,0,0,1,0,0']
, a:        [the first matrix digit]
, b:        [the second matrix digit]
, c:        [the third matrix digit]
, d:        [the fourth matrix digit]
, e:        [the fifth matrix digit]
, f:        [the sixth matrix digit]
})
```

Note that you can also apply transformations directly using the `attr()` method:

```javascript
rect.attr('transform', 'matrix(1,0.5,0.5,1,0,0)')
```

Although that would mean you can't use the `transform()` method because it would overwrite any manually applied transformations. You should only go down this route if you know exactly what you are doing and you want to achieve an effect that is not achievable with the `transform()` method.

`getter`__`returns`: `number`__

`setter`__`returns`: `itself`__

### style()
With the `style()` method the `style` attribute can be managed like attributes with `attr`:

```javascript
rect.style('cursor', 'pointer')
```

Multiple styles can be set at once using an object:

```javascript
rect.style({ cursor: 'pointer', fill: '#f03' })
```

Or a css string:

```javascript
rect.style('cursor:pointer;fill:#f03;')
```

Similar to `attr()`, the `style()` method can also act as a getter:

```javascript
rect.style('cursor')
// => pointer
```

Or even a full getter:

```javascript
rect.style()
// => 'cursor:pointer;fill:#f03;'
```

Explicitly deleting individual style definitions works the same as with the `attr()` method:

```javascript
rect.style('cursor', null)
```

`getter`__`returns`: `value`__

`setter`__`returns`: `itself`__

### classes()
Fetches an array of css classes on the node:

```javascript
rect.classes()
```

`getter`__`returns`: `array`__

### hasClass()
Test the presence of a given css class:

```javascript
rect.hasClass('purple-rain')
```

`getter`__`returns`: `boolean`__

### addClass()
Adds a given css class:

```javascript
rect.addClass('pink-flower')
```

`setter`__`returns`: `itself`__

### removeClass()
Removes a given css class:

```javascript
rect.removeClass('pink-flower')
```

`setter`__`returns`: `itself`__

### toggleClass()
Toggles a given css class:

```javascript
rect.toggleClass('pink-flower')
```

`setter`__`returns`: `itself`__

### move()
Move the element to a given `x` and `y` position by its upper left corner:

```javascript
rect.move(200, 350)
```

Note that you can also use the following code to move some elements (like images and rects) around:

```javascript
rect.attr({ x: 20, y: 60 })
``` 

Although `move()` is much more convenient because it will always use the upper left corner as the position reference, whereas with using `attr()` the `x` and `y` reference differ between element types. For example, rect uses the upper left corner with the `x` and `y` attributes, circle and ellipse use their center with the `cx` and `cy` attributes and thereby simply ignoring the `x` and `y` values you might assign.

__`returns`: `itself`__

### x()
Move element only along x-axis by its upper left corner:

```javascript
rect.x(200)
```

Without an argument the `x()` method serves as a getter as well:

```javascript
rect.x() //-> returns 200
```

`getter`__`returns`: `value`__

`setter`__`returns`: `itself`__

### y()
Move element only along y-axis by its upper left corner:

```javascript
rect.y(350)
```

Without an argument the `y()` method serves as a getter as well:

```javascript
rect.y() //-> returns 350
```

`getter`__`returns`: `value`__

`setter`__`returns`: `itself`__

### dmove()
Move the element to a given `x` and `y` position relative to its current position:

```javascript
rect.dmove(10, 30)
```

__`returns`: `itself`__

### dx()
Move element only along x-axis relative to its current position:

```javascript
rect.dx(200)
```

__`returns`: `itself`__

### dy()
Move element only along y-axis relative to its current position:

```javascript
rect.dy(200)
```

__`returns`: `itself`__

### center()
This is an extra method to move an element by its center:

```javascript
rect.center(150, 150)
```

__`returns`: `itself`__

### cx()
Move element only along x-axis by its center:

```javascript
rect.cx(200)
```

Without an argument the `cx()` method serves as a getter as well:

```javascript
rect.cx() //-> returns 200
```

`getter`__`returns`: `value`__

`setter`__`returns`: `itself`__

### cy()
Move element only along y-axis by its center:

```javascript
rect.cy(350)
```

Without an argument the `cy()` method serves as a getter as well:

```javascript
rect.cy() //-> returns 350
```

`getter`__`returns`: `value`__

`setter`__`returns`: `itself`__

### size()
Set the size of an element by a given `width` and `height`:

```javascript
rect.size(200, 300)
```

Proporional resizing is also possible by leaving out `height`:

```javascript
rect.size(200)
```

Or by passing `null` as the value for `width`:

```javascript
rect.size(null, 200)
```

Same as with `move()` the size of an element could be set by using `attr()`. But because every type of element is handles its size differently the `size()` method is much more convenient.

There is one exceptions though, the `SVG.Text` only takes one argument and applies the given value to the `font-size` attribute.

__`returns`: `itself`__

### width()
Set only width of an element:

```javascript
rect.width(200)
```

This method also acts as a getter:

```javascript
rect.width() //-> returns 200
```

`getter`__`returns`: `value`__

`setter`__`returns`: `itself`__

### height()
Set only height of an element:

```javascript
rect.height(325)
```

This method also acts as a getter:

```javascript
rect.height() //-> returns 325
```

`getter`__`returns`: `value`__

`setter`__`returns`: `itself`__

### hide()
Hide element:

```javascript
rect.hide()
```

__`returns`: `itself`__

### show()
Show element:

```javascript
rect.show()
```

__`returns`: `itself`__

### visible()
To check if the element is visible:

```javascript
rect.visible()
```

__`returns`: `boolean`__

### clone()
To make an exact copy of an element the `clone()` method comes in handy:

```javascript
var clone = rect.clone()
```

__`returns`: `element`__

This will create an new, unlinked copy. If you want to make a linked clone have a look at the [use](#elements/use) element.

### remove()
Pretty straightforward:

```javascript
rect.remove()
```

__`returns`: `itself`__

### replace()
This method will replace the called element with the given element in the same position in the stack:

```javascript
rect.replace(draw.circle(100))
```

__`returns`: `element`__


## Inserting elements

### add()
Elements can be moved between parents via the `add()` method on any parent:

```javascript
var rect = draw.rect(100, 100)
var group = draw.group()

group.add(rect) //-> returns group
```

__`returns`: `itself`__

### put()
Where the `add()` method returns the parent itself, the `put()` method returns the given element:

```javascript
group.put(rect) //-> returns rect
```

__`returns`: `element`__

### addTo()
Similar to the `add()` method on a parent element, elements have the `addTo()` method:

```javascript
rect.addTo(group) //-> returns rect
```

__`returns`: `itself`__

### putIn()
Similar to the `put()` method on a parent element, elements have the `putIn()` method:

```javascript
rect.putIn(group) //-> returns group
```

__`returns`: `element`__

## Geometry

### viewbox()

The `viewBox` attribute of an `<svg>` element can be managed with the `viewbox()` method. When supplied with four arguments it will act as a setter:

```javascript
draw.viewbox(0, 0, 297, 210)
```

Alternatively you can also supply an object as the first argument:

```javascript
draw.viewbox({ x: 0, y: 0, width: 297, height: 210 })
```

Without any arguments an instance of `SVG.ViewBox` will be returned:

```javascript
var box = draw.viewbox()
```

But the best thing about the `viewbox()` method is that you can get the zoom of the viewbox:

```javascript
var box = draw.viewbox()
var zoom = box.zoom
```

If the size of the viewbox equals the size of the svg drawing, the zoom value will be 1.

`getter`__`returns`: `SVG.ViewBox`__

`setter`__`returns`: `itself`__

### bbox()

```javascript
path.bbox()
```
This will return an instance of `SVG.BBox` containing the following values:

```javascript
{ width: 20, height: 20, x: 10, y: 20, cx: 20, cy: 30, x2: 30, y2: 40 } 
```

As opposed to the native `getBBox()` method any translations used with the `transform()` method will be taken into account.

The `SVG.BBox` has one other nifty little feature, enter the `merge()` method. With `merge()` two `SVG.BBox` instances can be merged into one new instance, basically being the bounding box of the two original bounding boxes:

```javascript
var box1 = draw.rect(100,100).move(50,50)
var box2 = draw.rect(100,100).move(200,200)
var box3 = box1.merge(box2)
```

__`returns`: `SVG.BBox`__

### rbox()
Is similar to `bbox()` but will give you the box around the exact representation of the element, taking all transformations into account.

```javascript
path.rbox()
```

__`returns`: `SVG.RBox`__

### inside()
To check if a given point is inside the bounding box of an element you can use the `inside()` method:

```javascript
var rect = draw.rect(100, 100).move(50, 50)

rect.inside(25, 30) //-> returns false
rect.inside(60, 70) //-> returns true
```

Note: the `x` and `y` positions are tested against the relative position of the element. Any offset on the parent element is not taken into account.

__`returns`: `boolean`__

### length()
Get the total length of a path element:

```javascript
var length = path.length()
```

__`returns`: `number`__

### pointAt()
Get get point on a path at given length:

```javascript
var point = path.pointAt(105) //-> returns { x : 96.88497924804688, y : 58.062747955322266 }
```

__`returns`: `object`__


## Animating elements

### Animatable method chain
Note that the `animate()` method will not return the targeted element but an instance of SVG.FX which will take the following methods:

Of course `attr()`:
```javascript
rect.animate().attr({ fill: '#f03' })
```

The `x()`, `y()` and `move()` methods:
```javascript
rect.animate().move(100, 100)
```

And the `cx()`, `cy()` and `center()` methods:
```javascript
rect.animate().center(200, 200)
```

If you include the sugar.js module, `fill()`, `stroke()`, `rotate()`, `skew()`, `scale()`, `matrix()`, `opacity()`, `radius()` will be available as well:
```javascript
rect.animate().rotate(45).skew(25, 0)
```

You can also animate non-numeric unit values unsing the `attr()` method:
```javascript
rect.attr('x', '10%').animate().attr('x', '50%')
```

### easing
All available ease types are:

- `<>`: ease in and out
- `>`: ease out
- `<`: ease in
- `-`: linear
- `=`: external control
- a function

For the latter, here is an example of the default `<>` function:

```javascript
function(pos) { return (-Math.cos(pos * Math.PI) / 2) + 0.5 }
```

For more easing equations, have a look at the [svg.easing.js](https://github.com/wout/svg.easing.js) plugin.

### animate()
Animating elements is very much the same as manipulating elements, the only difference is you have to include the `animate()` method:

```javascript
rect.animate().move(150, 150)
```

The `animate()` method will take three arguments. The first is `duration`, the second `ease` and the third `delay`:

```javascript
rect.animate(2000, '>', 1000).attr({ fill: '#f03' })
```

Alternatively you can pass an object as the first argument:

```javascript
rect.animate({ ease: '<', delay: '1.5s' }).attr({ fill: '#f03' })
```

By default `duration` will be set to `1000`, `ease` will be set to `<>`.

__`returns`: `SVG.FX`__


### pause()
Pausing an animations is fairly straightforward:

```javascript
rect.animate().move(200, 200)

rect.mouseover(function() { this.pause() })
```

__`returns`: `itself`__

### play()
Will start playing a paused animation:

```javascript
rect.animate().move(200, 200)

rect.mouseover(function() { this.pause() })
rect.mouseout(function() { this.play() })
```
__`returns`: `itself`__

### stop()
Animations can be stopped in two ways.

By calling the `stop()` method:
```javascript
rect.animate().move(200, 200)

rect.stop()
```

Or by invoking another animation:
```javascript
rect.animate().move(200, 200)

rect.animate().center(200, 200)
```

By calling `stop()`, the transition is left at its current position. By passing `true` as the first argument to `stop()`, the animation will be fulfilled instantly:

```javascript
rect.animate().move(200, 200)

rect.stop(true)
```

Stopping an animation is irreversable.

__`returns`: `itself`__

### during()
If you want to perform your own actions during the animations you can use the `during()` method:

```javascript
var position
  , from = 100
  , to   = 300

rect.animate(3000).move(100, 100).during(function(pos) {
  position = from + (to - from) * pos 
})
```
Note that `pos` is `0` in the beginning of the animation and `1` at the end of the animation.

To make things easier a morphing function is passed as the second argument. This function accepts a `from` and `to` value as the first and second argument and they can be a number, unit or hex color:

```javascript
var ellipse = draw.ellipse(100, 100).attr('cx', '20%').fill('#333')

rect.animate(3000).move(100, 100).during(function(pos, morph) {
  /* numeric values */
  ellipse.size(morph(100, 200), morph(100, 50))
  
  /* unit strings */
  ellipse.attr('cx', morph('20%', '80%'))
  
  /* hex color strings */
  ellipse.fill(morph('#333', '#ff0066'))
})
```

__`returns`: `SVG.FX`__

### loop()
By default the `loop()` method creates and eternal loop:

```javascript
rect.animate(3000).move(100, 100).loop()
```

But the loop can also be a predefined number of times:

```javascript
rect.animate(3000).move(100, 100).loop(5)
```

__`returns`: `SVG.FX`__

### after()
Finally, you can add callback methods using `after()`:

```javascript
rect.animate(3000).move(100, 100).after(function() {
  this.animate().attr({ fill: '#f06' })
})
```

Note that the `after()` method will never be called if the animation is looping eternally. 

__`returns`: `SVG.FX`__

### to()
Say you want to control the position of an animation with an external event, then the `to()` method will prove to be very useful:

```javascript
var animate = draw.rect(100, 100).move(50, 50).animate('=').move(200, 200)

document.onmousemove = function(event) {
  animate.to(event.clientX / 1000)
}
```

In order to be able use the `to()` method the duration of the animation should be set to `'='`. The value passed as the first argument of `to()` should be a number between `0` and `1`, `0` being the beginning of the animation and `1` being the end. Note that any values below `0` and above `1` will be normalized.

_This functionality requires the fx.js module which is included in the default distribution._

__`returns`: `SVG.FX`__


## Syntax sugar

Fill and stroke are used quite often. Therefore two convenience methods are provided:

### fill()
The `fill()` method is a pretty alternative to the `attr()` method:

```javascript
rect.fill({ color: '#f06', opacity: 0.6 })
```

A single hex string will work as well:

```javascript
rect.fill('#f06')
```

Last but not least, you can also use an image as fill, simply by passing an image url:

```javascript
rect.fill('images/shade.jpg')
```

Or if you want more control over the size of the image, you can pass an image instance as well:

```javascript
rect.fill(draw.image('images/shade.jpg', 20, 20))
```

__`returns`: `itself`__

### stroke()
The `stroke()` method is similar to `fill()`:

```javascript
rect.stroke({ color: '#f06', opacity: 0.6, width: 5 })
```

Like fill, a single hex string will work as well:

```javascript
rect.stroke('#f06')
```

Not unlike the `fill()` method, you can also use an image as stroke, simply by passing an image url:

```javascript
rect.stroke('images/shade.jpg')
```

Or if you want more control over the size of the image, you can pass an image instance as well:

```javascript
rect.stroke(draw.image('images/shade.jpg', 20, 20))
```

__`returns`: `itself`__

### opacity()
To set the overall opacity of an element:

```javascript
rect.opacity(0.5)
```

__`returns`: `itself`__

### rotate()
The `rotate()` method will automatically rotate elements according to the center of the element:

```javascript
// rotate(degrees)
rect.rotate(45)
```

Although you can also define a specific rotation point:

```javascript
// rotate(degrees, cx, cy)
rect.rotate(45, 50, 50)
```

__`returns`: `itself`__

### skew()
The `skew()` method will take an `x` and `y` value:

```javascript
// skew(x, y)
rect.skew(0, 45)
```

__`returns`: `itself`__

### scale()
The `scale()` method will take an `x` and `y` value:

```javascript
// scale(x, y)
rect.scale(0.5, -1)
```

__`returns`: `itself`__

### translate()
The `translate()` method will take an `x` and `y` value:

```javascript
// translate(x, y)
rect.translate(0.5, -1)
```

### radius()
Rects and ellipses have a `radius()` method. On rects it defines rounded corners, on ellipses the radii:

```javascript
rect.radius(10)
```

This will set the `rx` and `ry` attributes to `10`. To set `rx` and `ry` individually:

```javascript
rect.radius(10, 20)
```

_This functionality requires the sugar.js module which is included in the default distribution._

__`returns`: `itself`__


## Masking elements

### maskWith()
The easiest way to mask is to use a single element:

```javascript
var ellipse = draw.ellipse(80, 40).move(10, 10).fill({ color: '#fff' })

rect.maskWith(ellipse)
```

__`returns`: `itself`__

### mask()
But you can also use multiple elements:

```javascript
var ellipse = draw.ellipse(80, 40).move(10, 10).fill({ color: '#fff' })
var text = draw.text('SVG.JS').move(10, 10).font({ size: 36 }).fill({ color: '#fff' })

var mask = draw.mask().add(text).add(ellipse)

rect.maskWith(mask)
```

If you want the masked object to be rendered at 100% you need to set the fill color of the masking object to white. But you might also want to use a gradient:

```javascript
var gradient = draw.gradient('linear', function(stop) {
  stop.at({ offset: 0, color: '#000' })
  stop.at({ offset: 1, color: '#fff' })
})

var ellipse = draw.ellipse(80, 40).move(10, 10).fill({ color: gradient })

rect.maskWith(ellipse)
```

__`returns`: `SVG.Mask`__

### unmask()
Unmasking the elements can be done with the `unmask()` method:

```javascript
rect.unmask()
```

The `unmask()` method returns the masking element.

__`returns`: `itself`__

### remove()
Removing the mask alltogether will also `unmask()` all masked elements as well:

```javascript
mask.remove()
```

__`returns`: `itself`__

### masker
For your convenience, the masking element is also referenced in the masked element. This can be useful in case you want to change the mask:

```javascript
rect.masker.fill('#fff')
```

_This functionality requires the mask.js module which is included in the default distribution._


## Clipping elements
Clipping elements works exactly the same as masking elements. The only difference is that clipped elements will adopt the geometry of the clipping element. Therefore events are only triggered when entering the clipping element whereas with masks the masked element triggers the event. Another difference is that masks can define opacity with their fill color and clipPaths don't.

### clipWith()
```javascript
var ellipse = draw.ellipse(80, 40).move(10, 10)

rect.clipWith(ellipse)
```

__`returns`: `itself`__

### clip()
Clip multiple elements:

```javascript
var ellipse = draw.ellipse(80, 40).move(10, 10)
var text = draw.text('SVG.JS').move(10, 10).font({ size: 36 })

var clip = draw.clip().add(text).add(ellipse)

rect.clipWith(clip)
```

__`returns`: `SVG.Clip`__

### unclip()
Unclipping the elements can be done with the `unclip()` method:

```javascript
rect.unclip()
```

__`returns`: `itself`__

### remove()
Removing the clip alltogether will also `unclip()` all clipped elements as well:

```javascript
clip.remove()
```

__`returns`: `itself`__

### clipper
For your convenience, the clipping element is also referenced in the clipped element. This can be useful in case you want to change the clipPath:

```javascript
rect.clipper.move(10, 10)
```

_This functionality requires the clip.js module which is included in the default distribution._


## Arranging elements
You can arrange elements within their parent SVG document using the following methods.

### front()
Move element to the front:

```javascript
rect.front()
```

__`returns`: `itself`__

### back()
Move element to the back:

```javascript
rect.back()
```

__`returns`: `itself`__

### forward()
Move element one step forward:

```javascript
rect.forward()
```

__`returns`: `itself`__

### backward()
Move element one step backward:

```javascript
rect.backward()
```

__`returns`: `itself`__

### siblings()
The arrange.js module brings some additional methods. To get all siblings of rect, including rect itself:

```javascript
rect.siblings()
```

__`returns`: `array`__

### position()
Get the position (a number) of rect between its siblings:

```javascript
rect.position()
```

__`returns`: `number`__

### next()
Get the next sibling:

```javascript
rect.next()
```

__`returns`: `element`__

### previous()
Get the previous sibling:

```javascript
rect.previous()
```

__`returns`: `element`__

### before()
Insert an element before another:

```javascript
// inserts circle before rect
rect.before(circle)
```

__`returns`: `itself`__

### after()
Insert an element after another:

```javascript
// inserts circle after rect
rect.after(circle)
```

__`returns`: `itself`__

_This functionality requires the arrange.js module which is included in the default distribution._


## Sets
Sets are very useful if you want to modify or animate multiple elements at once. A set will accept all the same methods accessible on individual elements, even the ones that you add with your own plugins! Creating a set is exactly as you would expect:

```javascript
// create some elements
var rect = draw.rect(100,100)
var circle = draw.circle(100).move(100,100).fill('#f09')

// create a set and add the elements
var set = draw.set()
set.add(rect).add(circle)

// change the fill of all elements in the set at once
set.fill('#ff0')
```

A single element can be a member of many sets. Sets also don't have a structural representation, in fact they are just fancy array's.

### add()
Add an element to a set:

```javascript
set.add(rect)
```

Quite a useful feature of sets is the ability to accept multiple elements at once:

```javascript
set.add(rect, circle)
```

__`returns`: `itself`__

### each()
Iterating over all members in a set is the same as with svg containers:

```javascript
set.each(function(i) {
  this.attr('id', 'shiny_new_id_' + i)
})
```

Note that `this` refers to the current child element.

__`returns`: `itself`__

### has()
Determine if an element is member of the set:

```javascript
set.has(rect)
```

__`returns`: `boolean`__

### index()
Returns the index of a given element in the set.

```javascript
set.index(rect) //-> -1 if element is not a member
```

__`returns`: `number`__

### get()
Gets the element at a given index:

```javascript
set.get(1)
```

__`returns`: `element`__

### first()
Gets the first element:

```javascript
set.first()
```

__`returns`: `element`__

### last()
Gets the last element:

```javascript
set.last()
```

__`returns`: `element`__

### bbox()
Get the bounding box of all elements in the set:

```javascript
set.bbox()
```

__`returns`: `SVG.BBox`__

### remove()
To remove an element from a set:

```javascript
set.remove(rect)
```

__`returns`: `itself`__

### clear()
Or to remove all elements from a set:

```javascript
set.clear()
```

__`returns`: `itself`__

### animate()
Sets work with animations as well:

```javascript
set.animate(3000).fill('#ff0')
```

__`returns`: `SVG.SetFX`__


## Gradient

### gradient()
There are linear and radial gradients. The linear gradient can be created like this:

```javascript
var gradient = draw.gradient('linear', function(stop) {
  stop.at(0, '#333')
  stop.at(1, '#fff')
})
```

__`returns`: `SVG.Gradient`__

### at()
The `offset` and `color` parameters are required for stops, `opacity` is optional. Offset is float between 0 and 1, or a percentage value (e.g. `33%`). 

```javascript
stop.at(0, '#333')
```

or

```javascript
stop.at({ offset: 0, color: '#333', opacity: 1 })
```

__`returns`: `itself`__

### from()
To define the direction you can set from `x`, `y` and to `x`, `y`:

```javascript
gradient.from(0, 0).to(0, 1)
```

The from and to values are also expressed in percent.

__`returns`: `itself`__

### to()
To define the direction you can set from `x`, `y` and to `x`, `y`:

```javascript
gradient.from(0, 0).to(0, 1)
```

The from and to values are also expressed in percent.

__`returns`: `itself`__

### radius()
Radial gradients have a `radius()` method to define the outermost radius to where the inner color should develop:

```javascript
var gradient = draw.gradient('radial', function(stop) {
  stop.at(0, '#333')
  stop.at(1, '#fff')
})

gradient.from(0.5, 0.5).to(0.5, 0.5).radius(0.5)
```

__`returns`: `itself`__

### update()
A gradient can also be updated afterwards:

```javascript
gradient.update(function(stop) {
  stop.at(0.1, '#333', 0.2)
  stop.at(0.9, '#f03', 1)
})
```

And even a single stop can be updated:

```javascript
var s1, s2, s3

draw.gradient('radial', function(stop) {
  s1 = stop.at(0, '#000')
  s2 = stop.at(0.5, '#f03')
  s3 = stop.at(1, '#066')
})

s1.update(0.1, '#0f0', 1)
```

__`returns`: `itself`__

### get()
The `get()` method makes it even easier to get a stop from an existing gradient:

```javascript
var gradient = draw.gradient('radial', function(stop) {
  stop.at({ offset: 0, color: '#000', opacity: 1 })   // -> first
  stop.at({ offset: 0.5, color: '#f03', opacity: 1 }) // -> second
  stop.at({ offset: 1, color: '#066', opacity: 1 })   // -> third
})

var s1 = gradient.get(0) // -> returns "first" stop
```

__`returns`: `SVG.Stop`__

### fill()
Finally, to use the gradient on an element:

```javascript
rect.attr({ fill: gradient })
```

Or:

```javascript
rect.fill(gradient)
```

By passing the gradient instance as the fill on any element, the `fill()` method will be called:

```javascript
gradient.fill() //-> returns 'url(#SvgjsGradient1234)'
```

[W3Schools](http://www.w3schools.com/svg/svg_grad_linear.asp) has a great example page on how
[linear gradients](http://www.w3schools.com/svg/svg_grad_linear.asp) and
[radial gradients](http://www.w3schools.com/svg/svg_grad_radial.asp) work.

_This functionality requires the gradient.js module which is included in the default distribution._

__`returns`: `value`__


## Pattern

### pattern()
Creating a pattern is very similar to creating gradients:

```javascript
var pattern = draw.pattern(20, 20, function(add) {
  add.rect(20,20).fill('#f06')
  add.rect(10,10)
  add.rect(10,10).move(10,10)
})
```

This creates a checkered pattern of 20 x 20 pixels. You can add any available element to your pattern.

__`returns`: `SVG.Pattern`__


### update()
A pattern can also be updated afterwards:

```javascript
pattern.update(function(add) {
  add.circle(15).center(10,10)
})
```

__`returns`: `itself`__


### fill()
Finally, to use the pattern on an element:

```javascript
rect.attr({ fill: pattern })
```

Or:

```javascript
rect.fill(pattern)
```

By passing the pattern instance as the fill on any element, the `fill()` method will be called on th pattern instance:

```javascript
pattern.fill() //-> returns 'url(#SvgjsPattern1234)'
```

__`returns`: `value`__


## Marker

### marker()
Markers can be added to every individual point of a `line`, `polyline`, `polygon` and `path`. There are three types of markers: `start`, `mid` and `end`. Where `start` represents the first point, `end` the last and `mid` every point in between.

```javascript
var path = draw.path('M 100 200 C 200 100 300  0 400 100 C 500 200 600 300 700 200 C 800 100 900 100 900 100z')

path.fill('none').stroke({ width: 1 })

path.marker('start', 10, 10, function(add) {
  add.circle(10).fill('#f06')
})
path.marker('mid', 10, 10, function(add) {
  add.rect(10, 10)
})
path.marker('end', 20, 20, function(add) {
  add.circle(6).center(4, 5)
  add.circle(6).center(4, 15)
  add.circle(6).center(16, 10)

  this.fill('#0f6')
})
```

The `marker()` method can be used in three ways. Firstly, a marker can be created on any container element (e.g. svg, nested, group, ...). This is useful if you plan to reuse the marker many times so it will create a marker in the defs but not show it yet:

```javascript
var marker = draw.marker(10, 10, function() {
  add.rect(10, 10)
})
```

Secondly a marker can be created and applied directly on its target element:

```javascript
path.marker('start', 10, 10, function() {
  add.circle(10).fill('#f06')
})
```

This will create a marker in the defs and apply it directly. Note that the first argument defines the position of the marker and that there are four arguments as opposed to three with the first example.

Lastly, if a marker is created for reuse on a container element, it can be applied directly on the target element:

```javascript
path.marker('mid', marker)
```

Finally, to get a marker instance from the target element reference:

```javascript
path.reference('marker-end')
```


### ref()
By default the `refX` and `refY` attributes of a marker are set to respectively half the `width` nd `height` values. To define the `refX` and `refY` of a marker differently:

```javascript
marker.ref(2, 7)
```

__`returns`: `itself`__

### update()
Updating the contents of a marker will `clear()` the existing content and add the content defined in the block passed as the first argument:

```javascript
marker.update(function(add) {
  add.circle(10)
})
```

__`returns`: `itself`__

### width()
Defines the `markerWidth` attribute:

```javascript
marker.width(10)
```

__`returns`: `itself`__

### height()
Defines the `markerHeight` attribute:

```javascript
marker.height(10)
```

__`returns`: `itself`__

### size()
Defines the `markerWidth` and `markerHeight` attributes:

```javascript
marker.size(10, 10)
```

__`returns`: `itself`__


## Data

### Setting
The `data()` method allows you to bind arbitrary objects, strings and numbers to SVG elements:

```javascript
rect.data('key', { value: { data: 0.3 }})
```

Or set multiple values at once:

```javascript
rect.data({
  forbidden: 'fruit'
, multiple: {
    values: 'in'
  , an: 'object'
  }
})
```

__`returns`: `itself`__

### Getting
Fetching the values is similar to the `attr()` method:

```javascript
rect.data('key')
```

__`returns`: `itself`__

### Removing
Removing the data altogether:

```javascript
rect.data('key', null)
```

__`returns`: `itself`__

### Sustaining data types
Your values will always be stored as JSON and in some cases this might not be desirable. If you want to store the value as-is, just pass true as the third argument:

```javascript
rect.data('key', 'value', true)
```

__`returns`: `itself`__


## Memory

### remember() 
Storing data in-memory is very much like setting attributes:

```javascript
rect.remember('oldBBox', rect.bbox())
```

Multiple values can also be remembered at once:

```javascript
rect.remember({
  oldFill:    rect.attr('fill')
, oldStroke:  rect.attr('stroke')
})
```

To retrieve a memory

```javascript
rect.remember('oldBBox')
```

__`returns`: `itself`__

### forget()
Erasing a single memory:

```javascript
rect.forget('oldBBox')
```

Or erasing multiple memories at once:


```javascript
rect.forget('oldFill', 'oldStroke')
```

And finally, just erasing the whole memory:

```javascript
rect.forget()
```

__`returns`: `itself`__

## Events

### Basic events
Events can be bound to elements as follows:

```javascript
rect.click(function() {
  this.fill({ color: '#f06' })
})
```

Removing it is quite as easy:

```javascript
rect.click(null)
```

All available evenets are: `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, `mousemove`, `touchstart`, `touchmove`, `touchleave`, `touchend` and `touchcancel`.

__`returns`: `itself`__

### Event listeners
You can also bind event listeners to elements:

```javascript
var click = function() {
  this.fill({ color: '#f06' })
}

rect.on('click', click)
```

__`returns`: `itself`__

Unbinding events is just as easy:

```javascript
rect.off('click', click)
```

__`returns`: `itself`__

But there is more to event listeners. You can bind events to html elements as well:

```javascript
SVG.on(window, 'click', click)
```

Obviously unbinding is practically the same:

```javascript
SVG.off(window, 'click', click)
```

### Custom events
You can even create your own events.

The only thing you need to do is register your own event:

```javascript
SVG.registerEvent('my:event')
```

Next you can add an event listener for your newly created event:
```javascript
rect.on('my:event', function() {
  alert('ta-da!')
})
```

Now you are ready to fire the event whenever you need:

```javascript
function whenSomethingHappens() {
  rect.fire('my:event') 
}
```

_Important: always make sure you namespace your event to avoid conflicts. Preferably use something very specific. So `wicked:event` for example would be better than something generic like `svg:event`._

## Numbers

Numbers in svg.js have a dedicated number class to be able to process string values. Creating a new number is simple:

```javascript
var number = new SVG.Number('78%')
number.plus('3%').toString() //-> returns '81%'
number.valueOf() //-> returns 0.81
```

Operators are defined as methods on the `SVG.Number` instance.

### plus()
Addition:

```javascript
number.plus('3%')
```

__`returns`: `itself`__

### minus()
Subtraction:

```javascript
number.minus('3%')
```

__`returns`: `itself`__

### times()
Multiplication:

```javascript
number.times(2)
```

__`returns`: `itself`__

### divide()
Division:

```javascript
number.divide('3%')
```

__`returns`: `itself`__

### to()
Change number to another unit:

```javascript
number.to('px')
```

__`returns`: `itself`__

### morph()
Make a number morphable:

```javascript
number.morph('11%')
```

__`returns`: `itself`__


### at()
Get morphable number at given position:

```javascript
var number = new SVG.Number('79%').morph('3%')
number.at(0.55).toString() //-> '37.2%'
```

__`returns`: `SVG.Number`__


## Colors

Svg.js has a dedicated color class handling different types of colors. Accepted values are:

- hex string; three based (e.g. #f06) or six based (e.g. #ff0066) `new SVG.Color('#f06')`
- rgb string; e.g. rgb(255, 0, 102) `new SVG.Color('rgb(255, 0, 102)')`
- rgb object; e.g. { r: 255, g: 0, b: 102 } `new SVG.Color({ r: 255, g: 0, b: 102 })`

Note that when working with objects is important to provide all three values every time.

The `SVG.Color` instance has a few methods of its own.

### toHex()
Get hex value:

```javascript
color.toHex() //-> returns '#ff0066'
```

__`returns`: hex color string__

### toRgb()
Get rgb string value:

```javascript
color.toRgb() //-> returns 'rgb(255,0,102)'
```

__`returns`: rgb color string__

### brightness()
Get the brightness of a color:

```javascript
color.brightness() //-> returns 0.344
```

This is the perceived brighness where `0` is black and `1` is white.

__`returns`: `number`__

### morph()
Make a color morphable:

```javascript
color.morph('#000')
```

__`returns`: `itself`__

### at()
Get morphable color at given position:

```javascript
var color = new SVG.Color('#ff0066').morph('#000')
color.at(0.5).toHex() //-> '#7f0033'
```

__`returns`: `SVG.Color`__


## Arrays
In svg.js every value list string can be cast and passed as an array. This makes writing them more convenient but also adds a lot of key functionality to them.

### SVG.Array
Is for simple, whitespace separated value strings:

```javascript
'0.343 0.669 0.119 0 0 0.249 -0.626 0.13 0 0 0.172 0.334 0.111 0 0 0 0 0 1 0'
```

Can also be passed like this in a more manageable format:

```javascript
new SVG.Array([ .343,  .669, .119, 0,   0 
              , .249, -.626, .130, 0,   0
              , .172,  .334, .111, 0,   0
              , .000,  .000, .000, 1,  -0 ])
```

### SVG.PointArray 
Is a bit more complex and is used for polyline and polygon elements. This is a poly-point string:

```javascript
'0,0 100,100'
```

The dynamic representation:

```javascript
[
  [0, 0]
, [100, 100]
]
```

Precompiling it as a `SVG.PointArray`:

```javascript
new SVG.PointArray([
  [0, 0]
, [100, 100]
])
```

Note that every instance of `SVG.Polyline` and `SVG.Polygon` carries a reference to the `SVG.PointArray` instance:

```javascript
polygon.array //-> returns the SVG.PointArray instance
```

_Javascript inheritance stack: `SVG.PointArray` < `SVG.Array`_

### SVG.PathArray
Path arrays carry arrays representing every segment in a path string:

```javascript
'M0 0L100 100z'
```

The dynamic representation:

```javascript
[
  ['M', 0, 0]
, ['L', 100, 100]
, ['z']
]
```

Precompiling it as a `SVG.PathArray`:

```javascript
new SVG.PathArray([
  ['M', 0, 0]
, ['L', 100, 100]
, ['z']
])
```

Note that every instance of `SVG.Path` carries a reference to the `SVG.PathArray` instance:

```javascript
path.array //-> returns the SVG.PathArray instance
```

#### Syntax
The syntax for patharrays is very predictable. They are basically literal representations in the form of two dimentional arrays.

##### Move To
Original syntax is `M0 0` or `m0 0`. The svg.js syntax `['M',0,0]` or `['m',0,0]`.

##### Line To
Original syntax is `L100 100` or `l100 100`. The svg.js syntax `['L',100,100]` or `['l',100,100]`.

##### Horizontal line
Original syntax is `H200` or `h200`. The svg.js syntax `['H',200]` or `['h',200]`.

##### Vertical line
Original syntax is `V300` or `v300`. The svg.js syntax `['V',300]` or `['v',300]`.

##### Bezier curve
Original syntax is `C20 20 40 20 50 10` or `c20 20 40 20 50 10`. The svg.js syntax `['C',20,20,40,20,50,10]` or `['c',20,20,40,20,50,10]`.

Or mirrored with `S`:

Original syntax is `S40 20 50 10` or `s40 20 50 10`. The svg.js syntax `['S',40,20,50,10]` or `['s',40,20,50,10]`.

Or quadratic with `Q`:

Original syntax is `Q20 20 50 10` or `q20 20 50 10`. The svg.js syntax `['Q',20,20,50,10]` or `['q',20,20,50,10]`.

Or a complete shortcut with `T`:

Original syntax is `T50 10` or `t50 10`. The svg.js syntax `['T',50,10]` or `['t',50,10]`.

##### Arc
Original syntax is `A 30 50 0 0 1 162 163` or `a 30 50 0 0 1 162 163`. The svg.js syntax `['A',30,50,0,0,1,162,163]` or `['a',30,50,0,0,1,162,163]`.

##### Close
Original syntax is `Z` or `z`. The svg.js syntax `['Z']` or `['z']`.

The best documentation on paths can be found at https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths.


_Javascript inheritance stack: `SVG.PathArray` < `SVG.Array`_

### morph()
In order to animate array values the `morph()` method lets you pass a destination value. This can be either the string value, a plain array or an instance of the same type of svg.js array:

```javascript
var array = new SVG.PointArray([[0, 0], [100, 100]])
array.morph('100,0 0,100 200,200')
```

This method will prepare the array ensuring both the source and destination arrays have the same length.

Note that this method is currently not available on `SVG.PathArray` but will be soon.

__`returns`: `itself`__

### at()
This method will morph the array to a given position between `0` and `1`. Continuing with the previous example:

```javascript
array.at(0.27).toString() //-> returns '27,0 73,100 127,127'
```

Note that this method is currently not available on `SVG.PathArray` but will be soon.

__`returns`: new instance__

### settle()
When morphing is done the `settle()` method will eliminate any transitional points like duplicates:

```javascript
array.settle()
```

Note that this method is currently not available on `SVG.PathArray` but will be soon.

__`returns`: `itself`__

### move()
Moves geometry to a given `x` and `y` position by its upper left corner:

```javascript
var array = new SVG.PointArray([[10, 10], [100, 100]])
array.move(33,75)
array.toString() //-> returns '33,75 133,175'
```

Note that this method is only available on `SVG.PointArray` and `SVG.PathArray`

__`returns`: `itself`__

### size()
Resizes geometry of the array by the given `width` and `height` values:

```javascript
var array = new SVG.PointArray([[0, 0], [100, 100]])
array.move(100,100).size(222,333)
array.toString() //-> returns '100,100 322,433'
```

Note that this method is only available on `SVG.PointArray` and `SVG.PathArray`

__`returns`: `itself`__

### reverse()
Reverses the order of the array:

```javascript
var array = new SVG.PointArray([[0, 0], [100, 100]])
array.reverse()
array.toString() //-> returns '100,100 0,0'
```

__`returns`: `itself`__

### bbox()
Gets the bounding box of the geometry of the array:

```javascript
array.bbox()
```

Note that this method is only available on `SVG.PointArray` and `SVG.PathArray`

__`returns`: `object`__


## Extending functionality

### SVG.invent()
Creating your own custom elements with svg.js is a piece of cake thanks to the `SVG.invent` function. For the sake of this example, let's "invent" a shape. We want a `rect` with rounded corners that are always proportional to the height of the element. The new shape lives in the `SVG` namespace and is called `Rounded`. Here is how we achieve that.

```javascript
SVG.Rounded = SVG.invent({
  // Define the type of element that should be created
  create: 'rect'

  // Specify from which existing class this shape inherits
, inherit: SVG.Shape

  // Add custom methods to invented shape
, extend: {
    // Create method to proportionally scale the rounded corners
    size: function(width, height) {
      return this.attr({
        width:  width
      , height: height
      , rx:     height / 5
      , ry:     height / 5
      })
    }
  }

  // Add method to parent elements
, construct: {
    // Create a rounded element
    rounded: function(width, height) {
      return this.put(new SVG.Rounded).size(width, height)
    }
    
  }
})
```

To create the element in your drawing:

```javascript
var rounded = draw.rounded(200, 100)
```

That's it, the invention is now ready to be used!

#### Accepted values
The `SVG.invent()` function always expectes an object. The object can have the following configuration values:

- `create`: can be either a string with the node name (e.g. `rect`, `ellipse`, ...) or a custom initializer function; `[required]`
- `inherit`: the desired svg.js class to inherit from (e.g. `SVG.Shape`, `SVG.Element`, `SVG.Container`, `SVG.Rect`, ...); `[optional but recommended]`
- `extend`: an object with the methods that should be applied to the element's prototype; `[optional]`
- `construct`: an objects with the methods to create the element on the parent element; `[optional]`
- `parent`: an svg.js parent class on which the methods in the passed `construct` object should be available; `[optional]`

Svg.js uses the `SVG.invent()` function to create all internal elements, so have a look at the source to see how this function is used in various ways.


### SVG.extend()
Svg.js has a modular structure. It is very easy to add you own methods at different levels. Let's say we want to add a method to all shape types then we would add our method to SVG.Shape:

```javascript
SVG.extend(SVG.Shape, {
  paintRed: function() {
    return this.fill('red')
  }
})
```

Now all shapes will have the paintRed method available. Say we want to have the paintRed method on an ellipse apply a slightly different color:

```javascript
SVG.extend(SVG.Ellipse, {
  paintRed: function() {
    return this.fill('orangered')
  }
})

```
The complete inheritance stack for `SVG.Ellipse` is:

_`SVG.Ellipse` < `SVG.Shape` < `SVG.Element`_

The SVG document can be extended by using:

```javascript
SVG.extend(SVG.Doc, {
  paintAllPink: function() {
    this.each(function() {
      this.fill('pink')
    })
  }
})
```

You can also extend multiple elements at once:
```javascript
SVG.extend(SVG.Ellipse, SVG.Path, SVG.Polygon, {
  paintRed: function() {
    return this.fill('orangered')
  }
})
```


## Plugins
Here are a few nice plugins that are available for svg.js:

### absorb
[svg.absorb.js](https://github.com/wout/svg.absorb.js) absorb raw SVG data into a svg.js instance.

### draggable
[svg.draggable.js](https://github.com/wout/svg.draggable.js) to make elements draggable.

### easing
[svg.easing.js](https://github.com/wout/svg.easing.js) for more easing methods on animations.

### export
[svg.export.js](https://github.com/wout/svg.export.js) export raw SVG.

### filter
[svg.filter.js](https://github.com/wout/svg.filter.js) adding svg filters to elements.

### foreignobject
[svg.foreignobject.js](https://github.com/john-memloom/svg.foreignobject.js) foreignObject implementation (by john-memloom).

### import
[svg.import.js](https://github.com/wout/svg.import.js) import raw SVG data.

### math
[svg.math.js](https://github.com/otm/svg.math.js) a math extension (by Nils Lagerkvist).

### path
[svg.path.js](https://github.com/otm/svg.path.js) for manually drawing paths (by Nils Lagerkvist).

### shapes
[svg.shapes.js](https://github.com/wout/svg.shapes.js) for more polygon based shapes.

### topath
[svg.topath.js](https://github.com/wout/svg.topath.js) to convert any other shape to a path.


## Contributing
All contributions are very welcome but please make sure you:

- maintain the coding style
  - __indentation__ of 2 spaces
  - no tailing __semicolons__
  - single __quotes__
  - use one line __comments__ to describe any additions
  - look around and you'll know what to do
- write at least one spec example per implementation or modification

Before running the specs you will need to build the library.
Be aware that pull requests without specs will be declined.


## Building
Starting out with the default distribution of svg.js is good. Although you might want to remove some modules to keep the size at minimum.

You will need ruby, RubyGems, and rake installed on your system.

``` sh
# dependencies:
$ ruby -v
$ gem -v
$ rake -V

# required to generate the minified version:
$ gem install uglifier
```

Build svg.js by running `rake`:

``` sh
$ rake
Original version: 32.165k
Minified: 14.757k
Minified and gzipped: 4.413k, compression factor 7.289
```

The resulting files are:

1. `dist/svg.js`
2. `dist/svg.min.js`

To include optional modules and remove default ones, use the `concat` task. In
this example, 'clip' is removed, but 'group' and 'arrange' are added:

``` sh
$ rake concat[-clip:group:arrange] dist
```

To build the base library only including shapes:

``` sh
rake concat[-fx:-event:-group:-arrange:-mask:-gradient:-nested:-sugar] dist
```


## Compatibility

### Desktop
- Firefox 3+
- Chrome 4+
- Safari 3.2+
- Opera 9+
- IE9 +

### Mobile
- iOS Safari 3.2+
- Android Browser 3+
- Opera Mobile 10+
- Chrome for Android 18+
- Firefox for Android 15+

Visit the [svg.js test page](http://svgjs.com/test) if you want to check compatibility with different browsers.

Important: this library is still in beta, therefore the API might be subject to change in the course of development.


## Редактор JSON (jsonEditor plugin)
### jquery plugin json edit
## json editor

Небольшой плагин для редактирования json, Разработан только для демонстрации, нуждается в доработке(сохранить и загрузить данные, убрать рекламу)

 * <a href="data/jq_plugin/JsonEditor/index.html" target="_blank">Дамо</a><br>


## Шаблоны JsRender
### jquery template xtemplate
__Кратко__
Мощное средство для создания шаблонов в jquery.

 * <a href="data/jq_plugin/jsrender-master/demos/step-by-step/01_inserting-data.html" target="_blank">Простой пример</a>
 * <a href="data/jq_plugin/jsrender-master/demos/index.html" target="_blank">Документация и примеры</a>

__readme__

## JsRender: best-of-breed templating
_Simple and intuitive, powerful and extensible, lightning fast_<br/>

**JsRender** is a light-weight but powerful templating engine, highly extensible, and optimized for high-performance pure string-based rendering, without DOM or jQuery dependency.

**JSRender** and **JsViews** together provide the next-generation implementation of both _JQuery Templates_, and _JQuery Data Link_ - and supersede those libraries.

<h3>Documentation and Downloads</h3>
**[Documentation](http://www.jsviews.com)**, **[downloads](http://www.jsviews.com/#download)**, **[samples](http://www.jsviews.com/#samples)** and **[API docs and tutorials](http://www.jsviews.com/#jsrapi)** are available on the **[www.jsviews.com website](http://www.jsviews.com/#jsrender)**.
<br/>(Stay tuned at [www.jsviews.com](http://www.jsviews.com) for additional content - coming incrementally as we move towards V1.0)

<h3>JsRender and JsViews</h3>
JsRender is used for rendering of templates to strings, ready for insertion in the DOM.<br/>
It is also used by the [JsViews](http://www.jsviews.com/#jsviews) platform, which adds data binding to JsRender templates,
and provides a fully-fledged MVVM platform for easily creating interactive data-driven single page apps and websites.

<h3>Demos</h3>
In addition to the demos at [www.jsviews.com/#samples](http://www.jsviews.com/#samples), and throughout the [API documentation](http://www.jsviews.com/#jsrapi),
see also:

- the [demos](https://github.com/BorisMoore/jsrender/tree/master/demos) folder of this GitHub repository - available [here](http://borismoore.github.io/jsrender/demos/index.html) as live samples.
- the [demos](https://github.com/BorisMoore/jsviews/tree/master/demos) folder of the JsViews GitHub repository - or [here](http://borismoore.github.io/jsviews/demos/index.html) as live samples.

<h3>Current Status</h3>
JsRender is now a beta release, currently moving towards V1.0.


```javascript
 <!DOCTYPE html>
<html>
<head>
	<script src="http://code.jquery.com/jquery.js" type="text/javascript"></script>
	<script src="data/jq_plugin/jsrender-master/jsrender.min.js" type="text/javascript"></script>
	<link href="data/jq_plugin/jsrender-master/resources/demos.css" rel="stylesheet" type="text/css" />
</head>
<body>
<a href="../demos.html">JsRender Demos</a><br />

<h3>Render template against local data</h3>

<script id="movieTemplate" type="text/x-jsrender">
	<div>
		{{:#index+1}}: <b>{{>name}}</b> ({{>releaseYear}})
	</div>
</script>

<div id="movieList"></div>

<script type="text/javascript">

	var movies = [
		{ name: "The Red Violin", releaseYear: "1998" },
		{ name: "Eyes Wide Shut", releaseYear: "1999" },
		{ name: "The Inheritance", releaseYear: "1976" }
	];

	// Render the template with the movies data and insert
	// the rendered HTML under the "movieList" element
	$( "#movieList" ).html(
		$( "#movieTemplate" ).render( movies )
	);

</script>
</body>
</html>

```

## Модельное окно(plugin)
### jquery window message
## Модальное окно

Вариант модельного окна для jquery. 

 * <a href="data/jq_plugin/window3/index.html" target="_blank">Пример</a> 
```javascript
<!doctype html>
<html lang="en-US">
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
  <title>Modal Login Window Demo</title>
  <link rel="shortcut icon" href="http://designshack.net/favicon.ico">
  <link rel="icon" href="http://designshack.net/favicon.ico">
  <link rel="stylesheet" type="text/css" media="all" href="data/jq_plugin/window3/style.css">
  <script type="text/javascript" src="data/jq_plugin/window3/js/jquery-1.9.1.min.js"></script>
  <script type="text/javascript" charset="utf-8" src="data/jq_plugin/window3/js/jquery.leanModal.min.js"></script>
  <!-- jQuery plugin leanModal under MIT License http://leanmodal.finelysliced.com.au/ -->
</head>

<body>
  <div id="topbar"><a href="http://designshack.net">Back to Design Shack</a></div>
  <div id="w">
    <div id="content">
      <h1>Welcome to the Site!</h1>
      <p>Just click the login link below to expand the modal window. This is only a demo so the input form will not load anything, but it is easy to connect into a backend system.</p>
      <center><a href="#loginmodal" class="flatbtn" id="modaltrigger">Modal Login</a></center>
    </div>
  </div>
  <div id="loginmodal" style="display:none;">
    <h1>User Login</h1>
    <form id="loginform" name="loginform" method="post" action="index.html">
      <label for="username">Username:</label>
      <input type="text" name="username" id="username" class="txtfield" tabindex="1">
      
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" class="txtfield" tabindex="2">
      
      <div class="center"><input type="submit" name="loginbtn" id="loginbtn" class="flatbtn-blu hidemodal" value="Log In" tabindex="3"></div>
    </form>
  </div>
<script type="text/javascript">
$(function(){
  $('#loginform').submit(function(e){
    return false;
  });
  
  $('#modaltrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });
});
</script>
</body>
</html>
```

## Окно (jquery )
### jquery window jquiry-ui plugin
## Окно

Простое окно с элементами управления

 * <a href="data/jq_plugin/window2/index.html" target="_blank">Пример</a><br>
```javascript
<!DOCTYPE html>
<html>
	<head>
		<title>Creating a Windows-like interface with jQuery UI</title>
		<!-- Load the jQuery UI CSS -->
		<link rel="stylesheet" href="data/jq_plugin/window2/css/flick/jquery-ui-1.8.16.custom.css" type="text/css" />
		
		<!-- Load jQuery first before jQuery UI! -->
		<script src="data/jq_plugin/window2/js/jquery-1.6.2.min.js"></script>
		<script src="data/jq_plugin/window2/js/jquery-ui-1.8.16.custom.min.js"></script>
		<script>
		var _init = $.ui.dialog.prototype._init;
		$.ui.dialog.prototype._init = function() {
			_init.apply(this, arguments);
			
			var dialog_element = this;
			var dialog_id = this.uiDialogTitlebar.next().attr('id');
			
			this.uiDialogTitlebar.append('<a href="#" id="' + dialog_id + 
			'-minbutton" class="ui-dialog-titlebar-minimize ui-corner-all">'+
			'<span class="ui-icon ui-icon-minusthick"></span></a>');
			
			$('#dialog_window_minimized_container').append(
				'<div class="dialog_window_minimized ui-widget ui-state-default ui-corner-all" id="' + 
				dialog_id + '_minimized">' + this.uiDialogTitlebar.find('.ui-dialog-title').text() + 
				'<span class="ui-icon ui-icon-newwin"></div>');
				
			$('#' + dialog_id + '-minbutton').hover(function() {
				$(this).addClass('ui-state-hover');
			}, function() {
				$(this).removeClass('ui-state-hover');
			}).click(function() {
				dialog_element.close();
				$('#' + dialog_id + '_minimized').show();
			});
			
			$('#' + dialog_id + '_minimized').click(function() {
				$(this).hide();
				dialog_element.open();
			});
		};
		</script>
		<script>
			$(document).ready(function() {
				$('#create_button').button().click(function() {
					var create_dialog = $('#dialog_window_1');
					var create_button = $(this);
					if( create_dialog.dialog('isOpen') ) {
						create_button.button('option', 'label', 'Create a new Window');
						create_dialog.dialog('close');
					} else {
						create_button.button('option', 'label', 'Close Window');
						create_dialog.dialog('open');
					}
				});
				
				$('#dialog_window_1').dialog({
					width: 'auto',
					height: 'auto',
					autoOpen : false,
					buttons: [
						{
							text: 'Create',
							click: function() {
								var div_count = $('.dialog_window').length + 1;
								var div_id = 'dialog_window_' + div_count;
								var div_title = $('#new_window_title').val();
								var div_content = $('#new_window_content').val();
								var buttons = new Array();
								if( $('#alertbutton').is(':checked') ) {
									buttons.push({
										text: 'ALERT',
										click: function() {
											alert('ALERTING from Dialog Widnow: ' + div_title);
										}
									});
								}
								
								if( $('#closebutton').is(':checked') ) {
									buttons.push({
										text: 'CLOSE',
										click: function() {
											$('#' + div_id).dialog('close');
										}
									});
								}
								
								$('body').append('<div class="dialog_window" id="' + div_id + '">' + div_content + '</div>');
				
								var dialog = $('#' + div_id).dialog({
									width: 'auto',
									height: 'auto',
									title : div_title,
									autoOpen : true,
									buttons: buttons
								});
							}
						}
					]
				});
				$('#buttonlist').buttonset();
			});
		</script>
		
		<style>
		.dialog_form th {
			text-align: left;
		}
		
		.dialog_form textarea, .dialog_form input[type=text] {
			width: 320px;
		}
		
		#dialog_window_minimized_container {
			position: fixed;
			bottom: 0px;
			left: 0px;
		}
		
		.dialog_window_minimized {
			float: left;
			padding: 5px 10px;
			font-size: 12px;
			cursor: pointer;
			margin-right: 2px;
			display: none;
		}
		
		.dialog_window_minimized .ui-icon {
			display: inline-block !important;
			position: relative;
			top: 3px;
			cursor: pointer;
		}
		
		.ui-dialog .ui-dialog-titlebar-minimize {
			height: 18px;
			width: 19px;
			padding: 1px;
			position: absolute;
			right: 23px;
			top: 9px;
		}
		
		.ui-dialog .ui-dialog-titlebar-minimize .ui-icon {
			display: block;
			margin: 1px;
		}
		
		.ui-dialog .ui-dialog-titlebar-minimize:hover, .ui-dialog .ui-dialog-titlebar-minimize:focus {
			padding: 0;
		}
		</style>
	</head>
	<body>
		<div id="dialog_window_minimized_container"></div>
		<div id="dialog_window_1" class="dialog_window" title="Create a new <code>Dialog</code> Window">
			<h3>Create a new <code>Dialog</code> Window</h3>
			<table class="dialog_form">
				<tr>
					<th>Window Title</th>
				</tr>
				<tr>
					<td><input type="text" id="new_window_title" /></td>
				</tr>
				<tr>
					<th>
						Window Content
					</th>
				</tr>
				<tr>
					<td>
						<textarea id="new_window_content"></textarea>
					</td>
				</tr>
				<tr>
					<th>
						Window Buttons
					</th>
				</tr>
				<tr>
					<td id="buttonlist">
						<input type="checkbox" id="alertbutton" /><label for="alertbutton">ALERT</label>
						<input type="checkbox" id="closebutton" /><label for="closebutton">CLOSE</label>
					</td>
				</tr>
			</table>
		</div>
		<button id="create_button">Create a new Window</button>
	</body>
</html>
```

## Сводная таблица(pivot plugin)
### jquery plugin pivot grid
__Кратко__

Сводная таблица (pivot grid) для jquery

 * <a href="data/jq_plugin/pivotPlugin/demo/demo2.htm" target="_blank">Пример</a>
 * <a href="data/jq_plugin/pivotPlugin/demo/demo.htm" target="_blank">Примеры и документация</a>

__readme__

#jquery.pivot plugin

##Description

The jquery.pivot plugin can be used for presenting table data in pivot form. It is made and maintained me, Janus Schmidt, currently employed by [Metalogic.dk](http://Metalogic.dk).

The project lives on [github](http://github.com/janusschmidt/jquery.pivot).

##Demo
For further info on how to use the plugin, have a look at the [demo](http://metalogic.dk/jquery.pivot/demo/demo.htm)


##Compatibility (Jasmine test results)
[![Selenium Test Status](https://saucelabs.com/browser-matrix/janusschmidt.svg)](https://saucelabs.com/u/janusschmidt)

##History

I made this some time ago, for a web application that enables people to keep track of time [styrpaatiden.dk](http://styrpaatiden.dk). As i am a big fan of jQuery, i decided, it was time for
me to give back to the community.

##Usage:

This is only a scarce description, so look in the examples to get more information.
The data can be parsed from a html table with special markup or from json data. As i live in denmark i've built in the possibility to pass in format and parse functions for numbers.
You can also supply a function that will be called when the user clicks a result cell. The function is passed info on which groupby value and pivot value is clicked. This can be used
to fetch and present more details from the server.

To use the plugin you need a script reference to `jquery`, the plugin `build/jquery.pivot.min.js` and maybe the `demo/stylesheet.css` if you don't want to style the pivot
yourself. The fold unfold images are defined in the css.

The plugins accepts these parameters:

```javascript
$.fn.pivot.defaults = {
    source: null, //Must be json or a jquery element containing a table
    bTotals: true, //Includes total row and column
    bCollapsible: true, // Set to false to expand all and remove open/close buttons
    aggregatefunc: calcsum, //defaults to sum. Set to null for no totals. Set to function that concatenates for strings.
    formatFunc: function (n) { return n; }, //A function to format numeric result/total cells. Ie. for non US numeric formats
    parseNumFunc: function (n) { return +n; },  //Can be used if parsing a html table and want a non standard method of parsing data. 
                                                //Ie. for non US numeric formats.
                                                //Set to null if result column should be considered string data.
    onResultCellClicked: null,  //Method thats called when a result cell is clicked. This can be used to call server and present details for that cell. 
                                //Signature = function(dataObjectWithInformationOnClikedCell, jqueryElementThatsClicked)
    noGroupByText: "No value", //Text used if no data is available for specific groupby and pivot value.
    noDataText: "No data" //Text used if source data is empty.
    sortPivotColumnHeaders: true //if false pivot columns will appear in the order they are discovered in the source.
};
```

##Development
The source is in Typescript.

If you for some reason don't want to use typescript, You're welcome to send bugs/change suggestions in plain javascript.

The project is setup to use grunt.

###To use *grunt* via *node* 
1. Install node.
2. In *node* console install grunt `npm install -g grunt-cli`.
3. In *node* console `cd` to project directory and run `npm install`
4. In *node* console run `grunt` command

###*grunt* is set up to:
1. Generate javascript files from typescripts.
2. Jshint all (non minified) javascript.
3. Minify selected files.
4. Run jasmine tests via phantomjs.

When developing edit the `typescript\src\*.ts` files run `grunt typescript:dev` in a nodejs console and check your
changes in `demo\demo.htm` and/or `tests\run.html`.
When you're done coding and think everything is in order run `grunt` without arguments to run everything. 
Always complete this step without errors before sending a pull request.

If you wan't to send a pull request, make sure you run *grunt* without errors first.

__Secret bonus *grunt* task.__ If you have a saucelab account you can fill in set your sauce credentials in the environment variables and run `grunt sauce` to
get the unittest run in different target browsers. You must have java installed and added to your nodejs environment path. Also you must have local webserver serving you web on localhost/jquery.pivot.
Don't sweat it if you skip this step. :-)

##License
The project uses the [MIT license](license.txt).

```javascript

```

## Раскраска текста (highlightTextarea plugin)
### jquery plugin textarea makeup

## Раскраска  текста в teztarea

Плагин позволяет раскрашивать текст в элементе textarea.

 * <a href="data/jq_plugin/mistic100-jQuery-highlightTextarea-599d468/demo.htm" target="_blank">Примеры</a>
 * <a href="data/jq_plugin/mistic100-jQuery-highlightTextarea-599d468/index.htm" target="_blank">Документация</a>


__readme__

jQuery highlightTextarea
========================

Overview
--------
highlightTextarea is a jQuery plugin which allows you to highlight words and sentences into textareas. Words are defined in a jQuery array and you can customize highlight color and case sensitivity. The highlighting updates itself when typing in the textarea and follows scroll and resizing (with jQuery-UI).

Documentation, Features and Demos
---------------------------------
Full details and documentation can be found on the project page here:

<http://www.strangeplanet.fr/work/jquery-highlighttextarea/>
## Разметка текста (markup plugin)
### jquery plugin  text markup
Плагин является мощным инструментом для разметки текста.<br>В<a href="data/jq_plugin/markup/index.html" target="_blank"> примере</a> приведеноа разметка html, на сайте есть разметки для других языков<br><br><a href="data/jq_plugin/markup/README.md" target="_blank">readme</a><br>
```javascript

```

## Перенаправления события (trigger)
### jquery event keydown trigger
### trigger
Метод trigger позволяет запомнить событие и перенаправить его другому элементу для обработки.  
В примере при нажатии кнопки формируется событие keydown и перенаправляется для обработки элементу in1, у которого имеется функция для его выполнения
```javascript
<script>
$("#in").keydown(function(e){
  alert("keydown : "+e.which );
});
$("#bb").click(function(){
    var e = jQuery.Event("keydown");
    e.which = 40; // arrow
    $("#in").trigger(e);
});
</script>
<button id="bb">Click</button>
<br /><br />
  <input type="text" id="in" value="example"/>
```
## Горячие клавиши (hotkey plugin)
### jquery plugin hotkeys
__Кратко__

Плагин jQuery Hotkeys позволяет получать информацию о нажатых на клавиатуре кнопках в любой части приложения. с любыми комбинациями клавиш.

 * <a href="data/jq_plugin/jquery.hotkeys-master/" target="_blank">Примеры</a>

__readme__

# jQuery.Hotkeys [![Build Status](https://secure.travis-ci.org/jeresig/jquery.hotkeys.png)](http://travis-ci.org/jeresig/jquery.hotkeys)

#About
**jQuery Hotkeys** is a plug-in that lets you easily add and remove handlers for keyboard events anywhere in your code supporting almost any key combination.

This plugin is based off of the plugin by Tzury Bar Yochay: [jQuery.hotkeys](https://github.com/tzuryby/jquery.hotkeys)

The syntax is as follows:

```javascript
$(expression).bind(types, keys, handler);
$(expression).unbind(types, handler);

$(document).bind('keydown', 'ctrl+a', fn);

// e.g. replace $ sign with EUR
$('input.foo').bind('keyup', "$", function(){
  this.value = this.value.replace("$", 'EUR');
});
```

Syntax when wanting to use jQuery's `on()`/`off` methods:

```javascript
$(expression).on(types, null, keys, handler);
$(expression).off(types, handler);

$(document).on('keydown', null, 'ctrl+a', fn);

// e.g. replace "$" sign with 'EUR'
$('input.foo').on('keyup', null, "$", function(){
  this.value = this.value.replace("$", 'EUR');
});     
```

## Example

[Example](https://rawgit.com/jeresig/jquery.hotkeys/master/test-static-01.html)

## Event Types

Supported types are `'keydown'`, `'keyup'` and `'keypress'`

## jQuery Compatibility

Works with jQuery 1.4.2 and newer.

It is known to be working with all the major browsers on all available platforms (Win/Mac/Linux)

 * IE 6/7/8+
 * FF 1.5/2/3+
 * Opera-9+
 * Safari-3+
 * Chrome-0.2+

## Browserify Compatibility
If you want to include this module in a Browserified project, just add it to node_modules and require it.
```javascript
require('jquery.javascript');
```

This will work if jQuery is global (ex. served from a CDN). If it's not, you need to (shim it)[https://github.com/thlorenz/browserify-shim#a-expose-global-variables-via-global]:
```javascript
{
  "browserify-shim": {
    "jquery": "global:jQuery"
  }
}
```

## Notes

Modifiers are not case sensitive (`Ctrl` == `ctrl` == `cTRL`)

If you want to use more than one modifier (e.g. `alt+ctrl+z`) you should define them by an alphabetical order e.g. alt+ctrl+shift

Hotkeys aren't tracked if you're inside of an input element (unless you explicitly bind the hotkey directly to the input). This helps to avoid conflict with normal user typing.

You can use namespacing by adding a suffix to the event type (e.g. `keyup.toggle`)


### Meta and Hyper Keys
Meta and hyper keys don't register on `keyup` in any browser tested.

#### Chrome 33.0.1750.117
Meta key registers on `keydown` event.
Hyper key registers on `keydown` event.

#### Firefox 27.0.1 and Safari 7.0.1
Meta key registers on `keydown` and `keypress` events.
Hyper key registers on `keydown` and `keypress` events.

#### Opera 19.0
Meta key doesn't register at all :(
Hyper key registers on `keydown` and `keypress` events.

#### TL;DR
Bind to `keydown` event for meta and hyper keys, but meta key does not work in Opera ;)

### Addendum

Firefox is the most liberal one in the manner of letting you capture all short-cuts even those that are built-in in the browser such as `Ctrl-t` for new tab, or `Ctrl-a` for selecting all text. You can always bubble them up to the browser by returning `true` in your handler.

Others, (IE) either let you handle built-in short-cuts, but will add their functionality after your code has executed. Or (Opera/Safari) will *not* pass those events to the DOM at all.

*So, if you bind `Ctrl-Q` or `Alt-F4` and your Safari/Opera window is closed don't be surprised.*


## Элемент Desktop
### js jquery desktop
## Элемент Desktop (Рабочий стол)

Показаны две библиотеки для создания рабочего стола в браузере, использующие библиотеку jquery.

_Вариант реализации этого элемента существует также в примерах для extjs._

__jQuery-Desktop-master__

Достаточно читаемый код, есть интересные функции(clock)

 * <a href="data/jq_plugin/jQuery-Desktop-master/index.html" target="_blank">Пример 1</a>

__njDesktop__

 * <a href="data/jq_plugin/njDesktop-0.7.0/index.html" target="_blank">Пример 2</a>

__readme__

njDesktop
=========

Robust Javascript virtual desktop

nJDesktop is a robust Javascript Desktop framework, built with the help of jQuery and jQuery UI. It is built using HTML5, CSS3 and Javascript.

nJDesktop features

* Cross-browser compatibility
* IE 7+
* Firefox 6+
* Chrome 8+
* Safari 4+
* Opera 11+
* Module pattern design
* Dynamic window management (windows can be created/removed, changed on the fly)
* Dynamic icon management (icons can be created/removed on the fly вЂ“ built-in plugin)
* Dynamic menu item addition (Top menu items can be created on the fly вЂ“ built-in plugin)
* Taskbar
* Widget area
* Widget helper (as a plugin)
* Modal windows
* Dialogs
* Callbacks
* Resize-sensitive desktop environment (adapts to new window sizes, icons are rearranged)
* Window Toolbar helper (built-in plugin)

Documentation is available here: 

http://nagyervin.eu/njdesktop


## Аудиоплейеры (audioplayer)
### js jquery audio play
## Аудиоплейер

Хотя тег __audio__ в HTML5 и позволяет прослушивать файл, но плейер  формируемый этим тегом дает возможность прослушивать только один файл, имеет слишком простой интерфейс.<br>Поэтому&nbsp; на js есть ряд библиотек, позволяющих&nbsp; улучшить параметры плейера. На javascript  создан ряд более мощных утилит для прослушивания аудио.

__jPlayer__

 * <a href="data/jPlayer-2.9.1/examples/blue.monday/demo-01.htm" target="_blank">Пример 1</a>
 * <a href="data/jPlayer-2.9.1/examples/" target="_blank">Все примеры</a>


__readme__

# [jPlayer](http://jplayer.org/) : HTML5 Audio & Video for [jQuery](http://jquery.com/)

Support for [Zepto](http://zeptojs.com/) 1.0+ compiled with the data module.

## What is jPlayer?

### jPlayer is a jQuery/Zepto plugin that allows you to:
* **play and control media** files in your webpage.
* create a **consistent interface** and experience across all browsers.
* create and style a media player using **just HTML and CSS**.
* add **audio** and **video** to your jQuery/Zepto projects.
* support more devices using **HTML5**.
* support older browsers using a Flash _fall-back/forward_.
* control media on your website using a [JavaScript API](http://www.jplayer.org/latest/developer-guide/).

### jPlayer supports:
* HTML5: **mp3, m4a (AAC), m4v (H.264),** ogv*, oga*, wav*, webm*
* Flash: **mp3, m4a (AAC), m4v (H.264),** rtmp, flv.

_(*) Optional counterpart formats to increase HTML5 cross-browser support._

## Bower Install
* simple install using `bower install jplayer`
* see <http://bower.io/> for more information.

## Composer install

Install jPlayer via composer by adding the following lines to your `composer.json` in your project:

    // ...
    "require": {
        // ...
        "happyworm/jPlayer": "2.*"
        // ...
    }
    // ...
    "config": {
        "component-dir": "your/desired/asset/path"
    },
    // ...

Then execute the following:

    php composer.phar update

Composer will now download all components and install the needed files into `your/desired/asset/path`, ready to use.

## License
[jPlayer](http://jplayer.org/) is licensed under the [MIT license](http://opensource.org/licenses/MIT).

## More information:
* [jPlayer.org](http://jplayer.org/)
* [Quick Start Guide](http://www.jplayer.org/latest/quick-start-guide/)
* [Developer Guide and API Reference](http://www.jplayer.org/latest/developer-guide/)

## Author:
Mark J Panaghiston [@thepag](http://twitter.com/thepag)
[happyworm.com](http://happyworm.com/)


__soundmanager__

* <a href="data/soundmanagerv297a-20140901/index.html" target="_blank">Примеры</a><br><a href="data/soundmanagerv297a-20140901/doc/index.html" target="_blank">Документация</a>

__readme__


# SoundManager 2: JavaScript Sound for the Web

By wrapping and extending HTML5 and Flash Audio APIs, SoundManager 2 brings reliable cross-platform audio to JavaScript. 

##HTML5 Audio() Support

    * 100% Flash-free MP3 + MP4/AAC where supported
    * Compatible with Apple iPad 3.2, iPhone/iOS 4 and newer
    * Fallback to Flash for MP3/MP4 support, as needed
    * SM2 API is transparent; HTML5/flash switching handled internally
    * HTML5 API support approximates Flash 8 API features
    * Some other formats (WAV/OGG) supported via HTML5, depending on browser
    * See "useHTML5Audio" property for implementation details

__ Basic API Features (Flash 8)__

    * Load, stop, play, pause, mute, seek, pan and volume control of sounds from Javascript
    * Events: onload, whileloading, whileplaying, onfinish and more
    * ID3V1 and ID3V2 tag support for MP3s (title, artist, genre etc.)

== Shiny Flash 9 Features

    * RTMP / Flash Media Server streaming support (new, experimental)
    * MPEG-4 (AAC, HE-AAC, H.264) audio support
    * "MultiShot" play (layered/chorusing effects)
    * Waveform/frequency spectrum data
    * Peak (L/R channel volume) data
    * Audio buffering state/event handling

== General Tech Stuff

    * Full API Documentation with examples and notes
    * console.log()-style debug output and troubleshooting tools
    * Community-based discussion/support

== As Heard On The Internets

A few nifty sites that have implemented SM2 for driving audio:

    * Songza
    * Earbits
    * freesound.org
    * last.fm
    * 8tracks
    * Discogs
    * The Hype Machine
    * nyan.cat
    * AudioGalaxy

== Project home, documentation, live demos etc.:

http://www.schillmania.com/projects/soundmanager2/

== Compiling JS builds (-nodebug, -jsmin) and Flash components, AS2/AS3 to SWF

An Ant build file defines the tasks for compiling JS and SWF components, useful if you make changes to the SM2 source and want to recompile.
Google's Closure Compiler is used for the JS. AS2 compilation is done by MTASC, and AS3 is handled by Adobe's Open Source Flex SDK (mxmlc) compiler.
Refer to the build.xml file for compiler downloads and path definitions.

== Versioning / Development Notes

Releases are versioned by date, e.g., V2.97a.20110424 and are tagged as such.*
The latest official release is always on trunk/master.
Post-release development builds may be available on the appropriate +DEV branch, eg., V2.97a.20110801+DEV

== Forks and Pull Requests

Firstly, thank you for wanting to contribute! Bug fixes and tweaks are welcomed, particularly if they follow the general coding style of the project.
If making a pull request, use the project's current +DEV development branch as the merge target instead of "master", if possible (please and thank-you.)

* SoundManager 2 has been at "version" 2.97 for a long time, because 2.97 was arguably the best llama-ass-whipping version of WinAmp. (WinAmp 3 was not as good, and WinAmp 5 was "the best of 2 and 3 combined.") This MP3 player was my favourite Windows app during the 90's, and is missed as there's nothing quite like it on OS X where I spend most of my time these days.


## Разборка jSON
### jquery array json each()
### Метод each()

Упрощает описание цикла при работе с массивом или json/
```javascript
<html>
<head>

</head>
<body>
<script type="text/javascript" src="script/jquery.js"></script>
<script type="text/javascript">

$(document).ready(function()
{
data=[{name:"Bob", years:35, childs:[{name:"John"}]},{name:"Peter", years:25,childs:[{name:"Paul"}]}];
$.each(data, function(i,data)
{
var div_data =
"<div >Name :"+data.name+" years :"+data.years+" Child : "+data.childs[0].name+"</div>";
$(div_data).appendTo("#9lessonsLinks");
});
});


</script>
<h1>Test</h1>
<div id="9lessonsLinks"></div>
</body>
</html>
```
## Выбор значения(combo)
### jquery select combo
<a href="data/jq/examples/change.htm" target="_blank">Пример</a> работы с элементом select .Выбор одного или нескольких значений (кнопка Ctrl)<br>
```javascript

```

## Добвылкние, удаление класса
### jquery css class addClass removeClass
### addClass() и removeClass()
В примере рассмотрены функции jquery для удаления добавления класса CSS
```javascript
<script src="script/jquery.js"></script>
<script>
$(document).ready(function(){
  $("#b1").click(function(){
    $(".one").addClass("blue");
    $(".two").addClass("important");
  });
  $("#b2").click(function(){
    $(".one").removeClass("blue");
    
  });
});
</script>
<style type="text/css">
.important
{
font-weight:bold;
font-size:xx-large;
}
.blue
{
color:blue;
}
</style>
<h1 class="one">Heading 1</h1>
<h2 class="one">Heading 2</h2>
<p class="one">This is a paragraph.</p>
<p>This is another paragraph.</p>
<div class="two">This is some important text!</div>
<br>
<button id="b1">Add classes to elements</button>
<button id="b2">Remove class</button>


```
## Шаблоны страниц
### jquery page template css
## Шаблоны страниц

## DIv over DIV

Вариант размещения одного объекта над другим

```javascript
<html>
<head>
<title>div over div
</title>
<style>
#container {
  width: 100px;
  height: 100px;
  position: relative;
  background:red;
}
#navi,
#infoi {
  width: 50%;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  background:grey;
}
#navi {
background: blue;
}
#infoi {
  z-index: 10;
  
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript"> 
        $(document).ready( function(){ 	  
            $("#infoi").hide()
            $(".txt").click(function(){
              alert("test")
              $("#infoi").toggle()
            } );
           
        })


</script>
</head>
<body>
<button class="txt" >Click</button>
<div id="container">
  <div id="infoi">
    <img src="https://appharbor.com/assets/images/stackoverflow-logo.png" height="20" width="32" />b
  </div>
</div>

</body>
</html>
```
## Работа со стилями
### jquery css()
### Метод css()
В примере рассмотрены функции css(), которая работает с атрибутом __style__ и позволяет изменять и считывать значения параметров
```javascript
<script src="script/jquery.js"></script>
<script>
$(document).ready(function(){
  $("#b1").click(function(){
    $(".one").css("color","blue");
    
  });
  $("#b2").click(function(){
    alert($("#tt").css("color"));
    
  });
});
</script>
<style type="text/css">
.important
{
background: #ff0000;
font-weight:bold;
font-size:xx-large;
}
.blue
{
color:blue;
}
</style>
<h1 class="one">Heading 1</h1>
<h2 class="one">Heading 2</h2>
<p class="one">This is a paragraph.</p>
<p>This is another paragraph.</p>
<div id="tt" style="color:red;">This is some important text!</div>
<br>
<button id="b1">Set color</button>
<button id="b2">Read CSS</button>


```
