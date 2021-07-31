## Запуск кода из скрипта
### js eval function append
## Запуск кода из скрипта

__Функция eval()

Позволяет запустить строку кода непосредственно из скрипта. Имеет доступ к локальным переменным скрипта, но это считается недостатком функции, т.к. при сжатии скрипта локальные переменные обычно переименовывают. 
```javascript
var a='alert("Hello")';
eval(a)
```
__Создание новой функции__

```javascript
var a='alert("Hello")';
var f1 = new Function(a);

f1();
```

__В браузере__

Создание нового тега скрипт и размещение в нем кода

```javascript
$('body').append($("<script>alert('Hi!');</script>")[0]);


```

Возможна также привязка к кнопке или другому объекту с атрибутами __onclick__ или __ondblclick__

Кроме того код можно выполнить, передав его новой странице или окну.
## протокол FTP
### protocol ftp
## Протокол FTP

Форма для доступа к серверу по протоколу FTP
```javascript
<html><head>
<link rel='stylesheet' href='ftp.css'>
<script >
function Login(form) {
    var username = form.username.value;
    var password = form.password.value;
    var server = form.server.value;
    var local = form.local.value;
 //   if (username && password && server && local)
    if (server && local)
 {
            window.open(local, '_blank', 
              'toolbar=yes,location=yes,status=yes,' + 
              'scrollbars=auto,copyhistory=no,menubar=no,width=' 
              + ((screen.AvailWidth/2)-12) + ',height=' + 
              (screen.AvailHeight-124) +',left=0,top=0,resizable=yes');
            window.open("ftp://" + username + ":" + 
              password + "@" + server, '_blank', 
              'toolbar=yes,location=yes,status=yes,' + 
              'scrollbars=auto,copyhistory=no,menubar=no,width=' 
              + ((screen.AvailWidth/2)-12) + ',height=' 
              + (screen.AvailHeight-124) +',left=' + ((screen.AvailWidth/2)) 
              + '),top=0,resizable=yes');
            }
        else {
            alert("NO BLANK FIELDS!");
            }
    }
</script>
<title>Easy FTP 1.0</title></head>

<body bgcolor='#ffffff'>
    <br><font class='title'><b>Easy FTP 1.0</b></font><hr>
    After connecting, you can drag'n drop files among the windows. 
    Left window is your local folder, right window is the remote folder.
    <p><table border='0' cellpadding='0' cellspacing='1' 
              align='center' width='98%'><form name=login>
        <tr><td class='brgtcell' align='right'> Username </td>
        <td class='darkcell'> <input type='text' 
          name='username' value='anonymous' size='20' 
          maxlength='20'>  </td></tr>
        <tr><td class='brgtcell' align='right'> Password </td>
        <td class='darkcell'> <input type='text' 
          name='password' value='microsoft' size='20' 
          maxlength='20'>  </td></tr>
        <tr><td class='brgtcell' align='right'> Server </td>
        <td class='darkcell'> <input type='text' 
          name='server' value='ftp.microsoft.com' size='60' 
          maxlength='120'>  </td></tr>
        <tr><td class='brgtcell' align='right'> Local </td>
        <td class='darkcell'> <input 
          type='text' name='local' value='c:\' size='60' 
          maxlength='200'>  </td></tr>
    </table>
    <hr><table border='0' cellpadding='0' cellspacing='0' width='100%'><tr>
    <td align='right'><input style='color:#000000' 
      type='button' value='Connect' onClick='Login(this.form)'></td>
    </tr></form></table> 
</body></html>

```

## Кнопки мыши
### Js mouse browser event click button
## Кнопки мыши
В примере реализовано две функции:

 * определение типа браузера
 * определение нажатие кнопки мыши (левая, правая, центральная)
```javascript
<html>
<head>
<script type="text/javascript">
function whichButton(event){
var browserType;

if (document.layers) {browserType = "nn4"}
if (document.all) {browserType = "ie"}
if (window.navigator.userAgent.toLowerCase().match("gecko")) {
   browserType= "gecko"
}

    alert(browserType + " Click "+ event.button );
    if (event.button==1){
        alert("You clicked the left mouse button!")
    }else{
        alert("You clicked the right mouse button!")
    }
}
</script>
</head>

<body onmousedown="whichButton(event)">
<p>Click in the document. </p>
</body>

</html>
```

## Колесо мыши
### mouse wheel
##Колесо мыши

```javascript
<!DOCTYPE html>
<html><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta charset="utf-8">
  <style>
    #container {
      width: 200px;
      height: 200px;
      border: 1px solid black;
      background: #0FF;
      overflow: auto;
    }
  </style>
</head>

<body>

  Прокрутка: <span id="delta">12</span>
  <div id="container">
    Прокрути надо мной.
  </div>

  <script>
    var elem = document.getElementById('container');

    if (elem.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+
        elem.addEventListener("wheel", onWheel);
      } else if ('onmousewheel' in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", onWheel);
      } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", onWheel);
      }
    } else { // IE8-
      elem.attachEvent("onmousewheel", onWheel);
    }


    // Это решение предусматривает поддержку IE8-
    function onWheel(e) {
      e = e || window.event;

      // deltaY, detail содержат пиксели
      // wheelDelta не дает возможность узнать количество пикселей
      // onwheel || MozMousePixelScroll || onmousewheel
      var delta = e.deltaY || e.detail || e.wheelDelta;
      if (e.altKey) alert("altkey");
      var info = document.getElementById('delta');

      info.innerHTML = +info.innerHTML + delta;

      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }
  </script>


</body></html>
```
## Вставка текста в рисунок
### base64 text img security steganography
## Вставка данных в рисунок
Простейший пример стеганографии.Ввстроенный рисунок в формате base64 можно  использовать для хранения данных скрипта или самого скрипта.

Для этого необходимо:

 * Подобрать рисунок в котором было бы не видно изменений после внесения пользовательских данных.
 * Перевести данные в формат base64
* Вставить данные в рисунок
 * После загрузки извлечь данные из рисунка и декодировать
В примере можно ввести текст и сохранить его в файле формата ico.

 * <a href="data/binary data/dr1.html" target="_blank">Пример с данными в рисунке</a>


## Библиотека base64
### js base64 i
## Base64.js

Библиотека base64.js предназначена для кодирования/декодирования данных в формате base64. В этом формете обычно помещаются встроенные рисунки в html и fb2,аудио. 

Пример показывает кодирование и декодирования текста в формат base64
```javascript
<HTML>
<HEAD>

<script src="http://code.jquery.com/jquery.min.js" charset="utf-8"></script>
<script src="data/binary data/base64.js"></script>
<script>
$(document).ready(function(){
  $('#but1').click(function(){
    
    var t=Base64.encode($("#file2").val())
    alert(t);
    $("#fileout").val(t);
  });
  $('#but2').click(function(){
    
    var t=Base64.decode($("#fileout").val())
    alert(t);
    $("#fileout").val(t);
  });
  
  
});
</script>
</HEAD>
<BODY>
  <textarea id="file2" ></textarea><br />
    <br />
<button id="but1">encode</button>                
<button id="but2">decode</button>
<br />
   <textarea id="fileout" ></textarea>
  </BODY>
</HTML>
```
Документация
===========

__Кратко__

Base64 – способ кодирования произвольных двоичных данных в ASCII текст. По своей сути кодирование очень простое. Каждые шесть бит на входе кодируется в один из символов 64-буквенного алфавита. “Стандартный” алфавит, который для этого используется – это A-Z, a-z, 0-9,+,/ и = в качестве заполняющего символа в конце. Таким образом, на каждые 3 байта данных приходится 4 символа. Существуют и другие вариации Base64 (в основном это касается использования других символов вместо + и /, но в веб разработке вы вряд ли когда-либо с ними встретитесь) 

In Browser
```text
<script src="base64.js"></script>

node.js

var Base64 = require('./base64.js').Base64;

SYNOPSIS

Base64.encode('dankogai');  // ZGFua29nYWk=
Base64.encode('Привет');    // 0J/RgNC40LLQtdGC
Base64.encodeURI('???'); // 5bCP6aO85by-

Base64.decode('ZGFua29nYWk=');  // dankogai
Base64.decode(' 0J/RgNC40LLQtdGC');  // Привет
// note .decodeURI() is unnecessary since it accepts both flavors
Base64.decode('5bCP6aO85by-');  // ???

String Extension for ES5

if (Base64.extendString) {
    // you have to explicitly extend String.prototype
    Base64.extendString();
    // once extended, you can do the following
    'dankogai'.toBase64();       // ZGFua29nYWk=
    '???'.toBase64();         // 5bCP6aO85by+
    '???'.toBase64(true);     // 5bCP6aO85by-
    '???'.toBase64URI();      // 5bCP6aO85by-
    'ZGFua29nYWk='.fromBase64(); // dankogai
    '5bCP6aO85by+'.fromBase64(); // ???
    '5bCP6aO85by-'.fromBase64(); // ???
}

```

  
  
  
  

```

## Работа с esc-последовательность
### escape unescape encode decode
## ESC-sequence

__escape__

The escape() function encodes a string.

This function makes a string portable, so it can be transmitted across any network to any computer that supports ASCII characters.

This function encodes special characters, with the exception of: * @ - _ + . /

```javascript
alert(escape("Need tips? Visit W3Schools!"));
```

__Encode a URI__

The encodeURI() function is used to encode a URI.

This function encodes special characters, except: , / ? : @ & = + $ # (Use encodeURIComponent() to encode these characters).

```javascript
var uri = "my test.asp?name=ståle&car=saab";
alert( encodeURI(uri));

```

__encodeURIComponent__


```javascript
var uri = "http://w3schools.com/my test.asp?name=ståle&car=saab";
alert( encodeURIComponent(uri));
```
Декодирование esc-последовательности

__unescape__

    The unescape() function was deprecated in JavaScript version 1.5. 
    Use decodeURI() or decodeURIComponent() instead.

The unescape() function decodes an encoded string.

```javascript
var str = "Need tips? Visit W3Schools!";
var str_esc = escape(str);
alert(str_esc + "<br>")
alert(unescape(str_esc))
alert(decodeURI(str_esc) );
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
## Чтение ID3 тегов из файла mp3
### html5 js file mp3 tags ID3 read
## Чтение тегов ID3 из mp3 файла.

Еще одна утилита читающая теги ID3 файла mp3..

     Не читает рисунок

 * <a href="data/html5-mp3-id3-reader-master/index.html" target="_blank">Пример</a>

## Обработка ошибок(try/catch)
### js error try catch
##try/catch/finally

Позволяет с помощью операторов (try/catch/finally) перехватывать ошибки, возникающие при выполнении программы.

 * <a href="http://javascript.ru/try-catch" target="_blank">описание с примером</a>
 * <a href="http://learn.javascript.ru/exception" target="_blank">Обширное описание Перехват ошибок</a>
```javascript
<script>
function example() {
try{
	    eval("var i=0")
	  } catch(e) {
	    alert(e.name)
	  } finally {
	    alert("finished")
	  }
  
  
}
</script>
<button onclick="example()">Click</button>
  
  

```

##  Object. Методы создания
### js object prototype new call this create
## Object

__Использование proto__

В данном примере объект rabbit создается из объекта animals с добавлением нового свойчтва.

```javascript
var animal = {
  eats: true
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

// в rabbit можно найти оба свойства
alert( rabbit.jumps ); // true
alert( rabbit.eats ); // true
```

__Использование new и this__

```javascript

var animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
  this.__proto__ = animal;
}

var rabbit = new Rabbit("Кроль");

alert( rabbit.eats ); // true, из прототипа

```

__Использование prototype__

```javascript
// конструктор
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

// методы в прототипе
Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert( this.name + ' бежит, скорость ' + this.speed );
};

Animal.prototype.stop = function() {
  this.speed = 0;
  alert( this.name + ' стоит' );
};

var animal = new Animal('Зверь');

alert( animal.speed ); // 0, свойство взято из прототипа
animal.run(5); // Зверь бежит, скорость 5
animal.run(5); // Зверь бежит, скорость 10
animal.stop(); // Зверь стоит

```

__Использование call__

Позволяет подключать внешние функции к объекту

```javascript

var user = {
  firstName: "Василий",
  surname: "Петров",
  patronym: "Иванович"
};

function showFullName(firstPart, lastPart) {
  alert( this[firstPart] + " " + this[lastPart] );
}

// f.call(контекст, аргумент1, аргумент2, ...)
showFullName.call(user, 'firstName', 'surname') // "Василий Петров"
showFullName.call(user, 'firstName', 'patronym') // "Василий Иванович"
```

__Еще один пример__


```javascript
var A = function() { };
A.prototype.x = 10;
A.prototype.say = function() { alert(this.x) };

var a = new A();
a.say(); //alerts 10

var b = Object.create(a);
b.say(); //alerts 10
b.x = 'hello';
b.say(); //alerts 'hello'

And just to make sure b is not just a clone of a,

a.x = 'goodbye';
delete b.x;
b.say(); //alerts 'goodbye'
```

__Ссылки__

 * [Прототип объекта](https://learn.javascript.ru/prototype)
 * [Примеры](http://stackoverflow.com/questions/3079887/javascript-inheritance-with-object-create)

## Передача функции в функцию
### js function object
## function(function(){})

В js имеется очень полезное свойство - это передача функции вместе с параметрами или объекта в другую функцию.<br>С помощью этого свойства можно создавать новые сложные функции, вызывая в них различные функции для обработки.<br>
```javascript
function func(func1,par1) {
func1(par1)
};
func(alert,"Hello");

```

