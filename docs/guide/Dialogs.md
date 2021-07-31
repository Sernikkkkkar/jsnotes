## Системные сообщения
### message alert confirm prompt
__Сообщение alert()__     
<div>
 <button onclick='alert("Hello world\n and bye")'>alert</button>
</div>   


```javascript
alert("Hello world\n and bye");

```

__Сообщение confirm()__    

<div>
 <button onclick='var a=confirm("Are you having fun?") ? alert("yes") : alert("no")'>confirm</button>
</div>     

```javascript
var answer = confirm ("Are you having fun?")
if (answer)
alert ("Woo Hoo! So am I.")
else
alert("Darn. Well, keep trying then.")
```

__Сообщение prompt()__    
 Первый парамет заголовок сооьщеия, второй параметр - пример ввода     

<div>
 <button onclick='var reply=prompt("Input some words","abc");alert(reply)'>prompt</button>
</div>


```javascript
var reply=prompt("Input some words","abc");
alert(reply);
```
## Метод open для window 
### window open document write
__Загрузка страницы в новое окно__

<div>
 <button onclick='window.open("http://javascript.ru","JSSite","width=420,height=230,resizable=yes,scrollbars=yes,status=yes");'>load page in new window</button>
</div>     
     
```javascript
var newWin = window.open("http://javascript.ru",
"JSSite",
"width=420,height=230,resizable=yes,scrollbars=yes,status=yes"
);
newWin.focus();
```

__Загрузка информации в новое окно__

<div>
 <button onclick='var win, doc;win = window.open("", "dialog", "width=420,height=230,resizable=yes,scrollbars=yes,status=yes");win.document.write("Привет мир")'>
  Новое окно 
 </button>
</div>

```javascript
var win, doc;
win = window.open('', 'dialog', "width=420,height=230,resizable=yes,scrollbars=yes,status=yes");
doc = win.document;
doc.write("Привет мир");
win.focus()
```

__Открытие новой страницы__    

<div>
 <button onclick='window.open("https://www.google.ru/","__blank");'>
 Новая вкладка
 </button>
</div>

```javascript
window.open('https://www.google.ru/','_blank');
```
## Открытие и закрытие окна
### window onload beforeunload close


При открытии и закрытии окна можно выполнить определенные действия.

___ Не работает здесь, но работает в отдельном файле___


```javascript
<html>
<head>
<script>
  function testSp()
  {
    alert("hit");
  }
  window.onload= testSp;
function closeIt()
{
  return "Any string value here forces a dialog box to 
" + 
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
## Обмен данными между родительским и дочерним окнами
### window open opener

Родительское окно создает дочернее. Затем из родительского окна можно прочитать значение введенное в теге input  дочернего окна, а из дочернего окна значение переменной из родительского окна.



```javascript
<html>
<script type="text/javascript">
    var nw;
    var b2='<body><input type="button" value="click" id="btn1" onclick="alert(window.opener.par0)"><input type="text" id="txt" valie="child"></body>';
   var but1=b2;
    var par0="parent";
    spawnTab = function(url) {
        window.open(url, '_blank');
    };
</script>
<body>
<a href="#" onclick="nw=window.open('', '_blank', 'menubar=no,location=no,resizable=no,status=no,width=200,height=200');nw.document.write(but1)">open popup</a><br />
<a href="#" onclick="alert(nw.document.getElementById('txt').value);">child value </a><br />
</body>
</html>
```
## Window location
###  window location assign


 Открывает новую страницу.
```javascript
<html>
<head>
<script>
function newDoc() {
    window.location.assign("http://www.w3schools.com")
}
</script>
</head>
<body>

<input type="button" value="Load new document" onclick="newDoc()">

</body>
</html>



```
__Информация по объекту window__:
 
[MDN window](https://developer.mozilla.org/ru/docs/Web/API/Window)      
[Javascript.ru](https://javascript.ru/window)

[w3school](http://www.w3schools.com/js/js_window.asp)
