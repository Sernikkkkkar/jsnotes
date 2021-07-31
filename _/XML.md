## Чтение атрибута
### xml string jquery parse attribute
## Чтение атрибута

__"Чистый" js__

Читает атрибут из XML объкта
```javascript
<script>
//sample  xml:
 
	var text="<note name='Serg'>";
	text=text+"<content>whatever</content>";
	text=text+"</note>";
 
	//function : 
            function StringtoXML(text){
                if (window.ActiveXObject){
                  var doc=new ActiveXObject('Microsoft.XMLDOM');
                  doc.async='false';
                  doc.loadXML(text);
                } else {
                  var parser=new DOMParser();
                  var doc=parser.parseFromString(text,'text/xml');
                }
                return doc;
            }
 
	//example of application:
	var doc = StringtoXML(text);
var txt= doc.getElementsByTagName("note")[0].getAttribute("name");
	alert(txt);
</script>
```

__Пример(jquery)__


```javascript
<script>
//parsing string
var t = $('<foo><bar fname="Serg">something</bar></foo>');

//loop over 'foo' nodes
t.filter('foo').each(function () {
  alert($(this).find('bar').text());
 alert($(this).find('bar').attr("fname"));
});;
</script>
```




## Установка атрибута
### xml jquery attribute
## Установka атрибутa
Устанавлиыаем атрибут в xml объекте
```javascript
<script>
//sample  xml:
 
	var text="<note name='Serg'>";
	text=text+"<content>whatever</content>";
	text=text+"</note>";
 
	//function : 
            function StringtoXML(text){
                if (window.ActiveXObject){
                  var doc=new ActiveXObject('Microsoft.XMLDOM');
                  doc.async='false';
                  doc.loadXML(text);
                } else {
                  var parser=new DOMParser();
                  var doc=parser.parseFromString(text,'text/xml');
                }
                return doc;
            }
 
	//example of application:
	var doc = StringtoXML(text);
	doc.getElementsByTagName("note")[0].setAttribute("name", "Nick");
	var txt=doc.getElementsByTagName("note")[0].getAttribute("name");
	alert(txt);
</script>
```



__Пример(jquery)__


```javascript
<script>
//parsing string
var t = $('<foo><bar fname="Serg">something</bar></foo>');

//loop over 'foo' nodes
t.filter('foo').each(function () {
  alert($(this).find('bar').attr("fname"));
});

t.filter('foo').each(function () {
  $(this).find('bar').attr("fname","Pete");
   
});
t.filter('foo').each(function () {
  alert($(this).find('bar').attr("fname"));
});
</script>
```

## XML в строку
### XML string parse serialize
Формирует строку из XML объекта
```javascript
<script>
//sample  xml:
 
	var text="<note name='Serg'>";
	text=text+"<content>whatever</content>";
	text=text+"</note>";
 
	//function : 
            function StringtoXML(text){
                if (window.ActiveXObject){
                  var doc=new ActiveXObject('Microsoft.XMLDOM');
                  doc.async='false';
                  doc.loadXML(text);
                } else {
                  var parser=new DOMParser();
                  var doc=parser.parseFromString(text,'text/xml');
                }
                return doc;
            }
 
	//example of application:
	var doc = StringtoXML(text);
	doc.getElementsByTagName("note")[0].setAttribute("name", "Nick");
	var txt=doc.getElementsByTagName("note")[0].getAttribute("name");
	
	//XML to string
	if (document.implementation && document.implementation.createDocument)
//для FF
	var xmlString = (new XMLSerializer()).serializeToString(doc);
else
//для IE
	var xmlString = doc.xml;


	alert(xmlString);
</script>
```

## Поиск атрибута
### xml attribute search
## Поиск атерибута

Осущестляет поис по образу в определенном атрибуте объекта XML
```javascript
<script>
var text="<item><note fname='Serg'>";
	text+="<content>whatever</content>";
	text+="</note>";
	text+="<note fname='Nick'>";
	text+="<content>whatever</content>";
	text+="</note></item>";
		//function : 
            function StringtoXML(text){
                if (window.ActiveXObject){
                  var doc=new ActiveXObject('Microsoft.XMLDOM');
                  doc.async='false';
                  doc.loadXML(text);
                } else {
                  var parser=new DOMParser();
                  var doc=parser.parseFromString(text,'text/xml');
                }
                return doc;
            }
            var doc = StringtoXML(text);
            var allitems = doc.getElementsByTagName("note");
	    results = new Array;
	    for (var i=0;i<allitems.length;i++) {
	      var name = allitems[i].getAttribute("fname");
	      var exp = new RegExp("S","g");
	      
			if ( name.match(exp) != null) {
			    results.push(allitems[i]);
			    alert(name);
			}
		}
</script>
```

## Удаление узла
### XML  remove
Удаление дочернего узла (не работает)
```javascript
<script>
var text="<item><note fname='Serg'>";
	text+="<content>whatever</content>";
	text+="<![CDATA[ <b>Привет</b> ]]>"
	text+="</note>";
	text+="<note fname='Nick'>";
	text+="<content>whatever</content>";
	text+="</note></item>";
		//function : 
            function StringtoXML(text){
                if (window.ActiveXObject){
                  var doc=new ActiveXObject('Microsoft.XMLDOM');
                  doc.async='false';
                  doc.loadXML(text);
                } else {
                  var parser=new DOMParser();
                  var doc=parser.parseFromString(text,'text/xml');
                }
                return doc;
            }
            var doc = StringtoXML(text);
            var x=doc.getElementsByTagName("note")[0];
            var ln= x.childNodes.length;
           
            alert("before :"+ln);
           x.parentNode.removeChild(x);
           if (document.implementation && document.implementation.createDocument)
//для FF

            var xmlString = (new XMLSerializer()).serializeToString(doc);
else
//для IE
	var xmlString = doc.xml;

alert(xmlString)
</script>
```

__Пример (jquery)__

```javascript
<script>

var xml = $('<r name=""alex" id="a1"></r>')
alert(xml.xml)
xml.each(function(){
    var name = $(this).attr("name");
    if (name == "alex")
        $(this).remove();
  alert("test")
});
var str =xml.xml;
alert(str)
</script>
```

## Создание нового узла
### xml create attribute appendChild
Создание дочернего узла в объекте, добавление атрибута и тексат
```javascript
<script>
var text="<item><note fname='Serg'>";
	text+="<content>whatever</content>";
	text+="<![CDATA[ <b>Привет</b> ]]>"
	text+="</note>";
	text+="<note fname='Nick'>";
	text+="<content>whatever</content>";
	text+="</note></item>";
		//function : 
            function StringtoXML(text){
                if (window.ActiveXObject){
                  var doc=new ActiveXObject('Microsoft.XMLDOM');
                  doc.async='false';
                  doc.loadXML(text);
                } else {
                  var parser=new DOMParser();
                  var doc=parser.parseFromString(text,'text/xml');
                }
                return doc;
            }
            var doc = StringtoXML(text);
            var x=doc.getElementsByTagName("note");
            var newel=doc.createElement("item");
            var newtext=doc.createTextNode("First");
            newel.appendChild(newtext);
            newel.setAttribute("title", "First example");

            x[0].appendChild(newel);
            if (document.implementation && document.implementation.createDocument)
//для FF

            var xmlString = (new XMLSerializer()).serializeToString(doc);
else
//для IE
	var xmlString = doc.xml;


	alert(xmlString);
            
            
            
</script>
            
```

## Удаление атрибута
### xml attribute remove
## Удаление атрибута

Удаляет атрибут  __fname__ указанного первого [0] узла
```javascript
<script>
var text="<item><note fname='Serg'>";
	text+="<content>whatever</content>";
	text+="<![CDATA[ <b>Привет</b> ]]>"
	text+="</note>";
	text+="<note fname='Nick'>";
	text+="<content>whatever</content>";
	text+="</note></item>";
		//function : 
            function StringtoXML(text){
                if (window.ActiveXObject){
                  var doc=new ActiveXObject('Microsoft.XMLDOM');
                  doc.async='false';
                  doc.loadXML(text);
                } else {
                  var parser=new DOMParser();
                  var doc=parser.parseFromString(text,'text/xml');
                }
                return doc;
            }
            var doc = StringtoXML(text);
            var x=doc.getElementsByTagName("note");
            x[0].removeAttribute('fname');
            if (document.implementation && document.implementation.createDocument)
//для FF

            var xmlString = (new XMLSerializer()).serializeToString(doc);
else
//для IE
	var xmlString = doc.xml;


	alert(xmlString);
            
            
            

 </script>           
```

