## Задание регулярного выражения
### regexp string
## Задание регулярных выражений

RegExp
Задание и использование регулярных выражений

```javascript
var exp = new RegExp("ex","g");
var str = "examle ot text";
alert(str.replace(exp, "xe"));
```
второй вариант задания

```javascript
var exp = /ex/g;
var str = "examle ot text";
alert(str.replace(exp, "xe"));
```

При  задании регулярного выражения могут использоваться:

 * модификаторы (i , g)
 * метасимволы ("\s", ".", "^" и др.)

Более подробно о метасимвлах:

 * [javascript.ru](http://javascript.ru/regexp)
 * [Современные технологии](https://learn.javascript.ru/regexp-methods)
 * [RegExp Studio](http://regexpstudio.com/ru/TRegExpr/Help/regexp_syntax.html)
 * Регулярные выражения - JavaScript | MDN


## Replace
### string regexp replace
## Метод replace()

___newstr=str.replace(regexp, substr|function)___

Метод позволяет найти часть текста и заменить его с помощью регулярного выражения

__Простейший пример__

Замена слова

```javascript
 var str = "Welcome to the Matrix, Mr. Anderson";
           // заменяем одну строку на другую
           str   = str.replace(/Anderson/,"Smith");
           // показываем новую строку
           alert(str);
```

__Глобальная замена(модификатор g)__

Замена во всем тексте . Здесь мета-символ "\s" обозначает пробелы после "yo" и "ho" и заменяет на "oo".


```javascript
 // определяем строку
           var str = "yo ho ho and a bottle of gum";
           // возвращает "yoo hoo hoo and a bottle of gum"
           alert(str.replace(/o\s/g, "oo "));

```

__Нечувствительность к регистру (модификатор i)__

Поиск и замена с модификатором i, который нечувствителен к регистру


```javascript
        // определяем строку
           var str = "he He hE HE";
           // возвращает ho ho ho ho
           alert(str.replace(/he/gi, "ho"));
```

Load text
►

►

## replace
### string regexp replace
## Метод replace(). Примеры

__Перекрестная замена слов__

В примере два слова меняются местами.

 * "(\w+)" - выделяет слово целиком
 * "\s" - пробел между словами
 * "$1" - указывает на первое найденное слово.
 * "$2" - указывает на второе найденное слово.

```javascript
        var re = /(\w+)\s(\w+)/;
	var str = "John Smith";
        var s1="$"+"2, "+"$"+"1";
	var newstr = str.replace(re,  s1);
	alert(str+"\n"+newstr); // "Smith, John"

```

__Разделение длинной строки на части.__
 * "\S{15}" - Указывается количество знаков в строке(15) без пробелов.


```javascript
var str = "Аа  ааааааааааааааааааааааааааааааааа";
var s1="$"+"1\n"	
var message = str.replace(/(\S{15}[^$])/g, s1); 
	alert (message);
```

__Убирает пробелы в начале и конце строки.__

 * "/^\s*" - выделяет все пробелы в начале строки
 * "\s*$*" - выделяет все пробелы в конце строки
 * "(.*?)" - выделяет содержимое между пробелами и помещает его в переменную "$1"

```javascript
    var str = "    <- лишние пробелы ->    ";

var s1="$"+"1";
var s2 = str.replace(/^\s*(.*?)\s*$/i, s1);
alert(str+"\n"+s2)
```

 
__Замена скобок [] на <>__

Шаблон ___"<$1>$2</'$1>"___ позволяет вставить первое найденное слово в скобках [] в "<>", а второе найденное слово между тегом "<b>"
```javascript
var str = " строка с [b]жирным[/b] выделением";
var s1="<"+"$"+'1>'+"$"+'2</'+"$"+'1>';
var m = str.replace(/\[(.+?)\](.+?)\[\/\1\]/g,s1);
	// в итоге получим "с <b>жирным</b> выделением"
        alert( str+"\n"+m);
```

Использование спецсимволов

 * "$&" -вставляет все найденнве совпадения
 
```javascript
str = "one two";
var s1="null "+"$"+"& !"
alert(str.replace(/one two/, s1));

```

__Использоване функции__

```javascript
var i = 0;

// заменить каждое вхождение "ой" на результат вызова функции
alert("ОЙ-Ой-ой".replace(/ой/gi, function() {
  return ++i;
})); // 1-2-3


```

__Использование функции и массива замен__

В примере происходит замена английского дня недели на русский.

```javascript
var str="16.02.2015, Mon"
    
var wday_en=["Mon","Tue","Thu","Wed","Fri","Sat","Sun"];
  var wday_ru=["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];
  str = str.replace(/Mon|Tue|Thu|Wed|Fri|Sat|Sun/gi, function(matched){
  return wday_ru[wday_en.indexOf(matched)];
});
alert(str)

```





## match
### string regexp match
##Метод match()

___str.match(regexp)___


__Локальный поиск__

Модификатор g отсутствует.

В этом случае str.match(reg) находит только одно, первое совпадение.
Результат будет представлять объект с двумя свойствами:
 * index – позиция, на которой оно обнаружен текат
 * input – строка, в которой был поиск.
 * [0] элемент массива результата - первое найденное значение


```javascript

var str = "ОЙ-Ой-ой";

var result = str.match( /ой/i );

alert( result[0] ); // ОЙ  (совпадение)
alert( result.index ); // 0 (позиция)
alert( result.input ); // ОЙ-Ой-ой

```
Если часть шаблона обозначена скобками, то она станет отдельным элементом массива.

```javascript                                     
var str = "javascript - это такой язык";

var result = str.match( /JAVA(SCRIPT)/i );

alert( result[0] ); // javascript (всё совпадение полностью)
alert( result[1] ); // script (часть совпадения, соответствующая скобкам)
alert( result.index ); // 0
alert( result.input ); 
```


__Глобальный поиск__

Модификатор g установлен

При наличии флага g, вызов match возвращает обычный массив из всех совпадений.

Никаких дополнительных свойств у массива в этом случае нет, скобки дополнительных элементов не порождают.

```javascript
var str = "ОЙ-Ой-ой";

var result = str.match( /ой/ig );

alert( result );
```

## Match  Примеры
### string regexp match
##Метод match(). Примеры

__match.массив результата __

В этом примере  регулярное выражение "is.". Скрипт найдет строку "is", за которой следует любой символ (оператор "." в конце шаблона
находит все что угодно в строке)/
	Метод match() работает следующим образом :
он применяет шаблон к строке и возвращает массив найденных значений.соответствующую
регулярному выражению или -1 в случае отсутствия такого соответствия.
```javascript
var str = "Mississippi";
 var p=new RegExp("s.","g");
 var r =str.match(p);
 alert(r);
 
```
__match вместо replace__

Убирает перенсы строк.


```javascript
    var str = "    <- лишние пробелы ->    ";
    var clearstr = str.match(/^\s*(.*?)\s*$/i)[1];
   alert(str+"\n"+clearstr);

```

## exec
### string regexp exec
## Метод exec()

___regexp.exec(str)___

Метод regexp.exec дополняет их. Он позволяет искать и все совпадения и скобочные группы в них.

Он ведёт себя по-разному, в зависимости от того, есть ли у регэкспа флаг g.

Если флага g нет, то regexp.exec(str) ищет и возвращает первое совпадение, является полным аналогом вызова str.match(reg).

Если флаг g есть, то вызов regexp.exec возвращает первое совпадение и запоминает его позицию в свойстве regexp.lastIndex. Последующий поиск он начнёт уже с этой позиции. Если совпадений не найдено, то сбрасывает regexp.lastIndex в ноль.

Это используют для поиска всех совпадений в цикле.
```javascript
// Найти одну d, за которой следует 1 или более b, за которыми одна d
	// Запомнить найденные b и следующую за ними d
	// Регистронезависимый поиск
	var myRe = /d(b+)(d)/ig;
	var myArray = myRe.exec("cdbBdbsdbdz");
alert(myArray[2]);
alert(myArray.index);
alert(myRe.lastIndex);
// второй поиск начинается с последним значением lastIndex
myArray = myRe.exec("cdbBdbsdbdz");
alert(myArray[2]);
alert(myArray.index);
alert(myRe.lastIndex);

```

## exec () Примеры
### string regexp exec
 
## Метод exec(). Примеры

__exec() в цикле__
В этом примере  регулярное выражение ищет "ab" в заданной строке. Поиск идет до тех пока не будет возвращено нулевое значение методом exec(), т.е. он дойдет до конца строки.
```javascript
var myRe = /ab*/g;
	var str = "abbcdefabh";
	while ((myArray = myRe.exec(str)) != null) {
	    var msg = "Found " + myArray[0] + ".  ";
	    msg += "Next match starts at " + myRe.lastIndex;
	    alert(msg);
	}
```

## search
### string regexp search
## Метод search()
___str.search(regexp)___

Метод search() возвращает позицию подстроки, соответствующую регулярному выражению или -1 в случае отсутствия такого соответствия.

```javascript
// определяем строку для поиска
           var str = "The Matrix";
           // определяем шаблон поиска
           var pattern = /tri/;
           // ищем и возвращаем результат
           if(str.search(pattern) == -1)
           {
               alert("pattern not in"+ str);
           } else
           {
               alert("pattern in "+ str+ "on symbol " +
               str.search(pattern));
           }
```

## test()
### string regexp test
##Метод test()

___regexp.test(str)___

 Метод объекта RegExp проверяет строку на вхождение по шаблону.В случае нахождения
   соответствия, он возвращает true, в противном же случае false.
```javascript
// определяем строку
           var str = "The Matrix";
           // создаем объект RegExp
           var character = new RegExp("tri");
           // ищем по шаблону в строке
           if(character.test(str)) {
               alert("User located in The Matrix.");
           } else {
               alert("Sorry, user is not in The Matrix.");
           }
```

## compile RegExp 
### string regexp compile
Метод compile() объекта RegExp позволяет изменять шаблон в процессе работы скрипта.
```javascript
 // определяем строку
           var str = "The Matrix";
           // определяем шаблон
           var pattern = "trinity";
           // define object
           var character = new RegExp(pattern);
           // смотрим вхождения
           if(character.test(str)) {
               alert("Looking for " +  pattern + "...User located in The Matrix");
           } else {
               alert("Looking for "  + pattern + "...Sorry, user is not in The Matrix");
           }
           // меняем шаблон
           var pattern = "tri";
           character.compile(pattern);
           // смотрим на вхождение и показываем результат
           if(character.test(str))
           {
               alert("Looking for "  + pattern + "...User located in The Matrix");
           }
           else {
              alert("Looking for " + pattern + "...Sorry, user is not in The Matrix");
           } 
```

