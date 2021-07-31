# Элементы jS
# Строки.
## Метод Split
### _string  split array regexp_  regexp


 Метод split() используется для разделения одной строки на отдельные части на основе особого значения разделения. Эти части затем помещаются в массив для
дальнейшей обработки. 

__Пример__

```javascript
           // определяем строку
           var friends = "Joey, Rachel, Monica, Chandler, Ross, Phoebe";
           // разделяем на части с помощью запятых
           var arr = friends.split(", ");
           // проходим по массиву и выводим
           // каждое значение
           alert("Hiya, " + arr[0]);
            
         
```

__использование регулярного выражения__

Разделение строки на массив не по одному разделителю. 
```javascript
var str = 'one,two three!four^five';
	var mass = str.split(/,| |!|\^/);
	alert( mass[0]+' '+ mass[1]+' '+ mass[2]+' '+mass[3]);
```

## Форматирование строки
### string format prototype
Пример вывода форматированного текста в JS, для форматирования создана отдельная функция.
```javascript
String format
<script>
// This is the function.
String.prototype.format = function (args) {
var str = this;
return str.replace(String.prototype.format.regex, function(item) {
var intVal = parseInt(item.substring(1, item.length - 1));
var replace;
if (intVal >= 0) {
replace = args[intVal];
} else if (intVal === -1) {
replace = "{";
} else if (intVal === -2) {
replace = "}";
} else {
replace = "";
}
return replace;
});
};
String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");

// Sample usage.
var str = "She {1} {0}{2} by the {0}{3}. {-1}^_^{-2}";
var form1=["sea", "sells", "shells", "shore"];
str = str.format(form1);
alert(str);
</script>

```
__String format ExtJS__     

Пример вывода форматированного текста в JS, для форматирования создана отдельная функция.
```javascript

// This is the function.
String.prototype.format = function (args) {
var str = this;
return str.replace(String.prototype.format.regex, function(item) {
var intVal = parseInt(item.substring(1, item.length - 1));
var replace;
if (intVal >= 0) {
replace = args[intVal];
} else if (intVal === -1) {
replace = "{";
} else if (intVal === -2) {
replace = "}";
} else {
replace = "";
}
return replace;
});
};
String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");

// Sample usage.
var str = "She {1} {0}{2} by the {0}{3}. {-1}__{-2}";
var form1=["sea", "sells", "shells", "shore"];
str = str.format(form1);
console.log(str);

```
## Кодировать/декодировать escape()
### string escape unescape
Используется функция кодирования / декодирования данных escape(). Необходима при передаче кирилицы в системе.
```javascript
<html><head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Кодировать/Декодировать utf8</title>
    </head><body>
    <form action="">
<p>Enter a string</p>
<input name="decoded" onkeyup="this.form.hash.value = Url.encode(this.value)" style="width: 336px;" type="text">
<p></p>
<p>URL encoded data</p>
<input name="hash" style="width: 336px;" type="text">
<p></p></form>
<p>
<script>
/**
*
*  URL encode / decode
*  http://www.webtoolkit.info/
*
**/

var Url = {

	// public method for url encoding
	encode : function (string) {
		return escape(this._utf8_encode(string));
	},

	// public method for url decoding
	decode : function (string) {
		return this._utf8_decode(unescape(string));
	},

	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}

}

</script></p>
    </body></head></html>
```

## Метод slice
### string slice
При рабте со строками метод slice возврацает указенную последовательность символов.
Второй  аргумент может быть опущен, в этом случае выдаются символы до конца строки.
```javascript
var str = "Hello world!";
alert(str.slice(1,5))
```
## Работа с символами в строке
### string char charAt charcode
### Получение кода символа
```javascript
alert('ABC'.charCodeAt(0));
```
с использованием различных кодировок
```javascript
alert('ABC'.codePointAt(1));          // 66
alert('𐀀'.codePointAt(0));
```

### Получение  символа из строки
```javascript
var anyString = 'Дивный новый мир';

alert("Символ по индексу 0   равен '" + anyString.charAt(0)   + "'");

```

Как элемент массива
```javascript
var anyString = 'Дивный новый мир';

alert("Символ по индексу 1   равен '" + anyString[1]   + "'");

```

### Преобразование кода в символ

```javascript
var str
str=String.fromCharCode(65, 66, 67); 
alert(str)
```

в разные кодировки

```javascript
alert(String.fromCodePoint(42));      
alert(String.fromCodePoint(65, 90));  
alert(String.fromCodePoint(0x404));    
alert(String.fromCodePoint(0x2F804));
```
## Метод substring()
### string substring
### Метод substring()

Метод substring возвращает подстроку, начиная с позиции indexA до, но не включая indexB.

В частности:

    Если indexA = indexB, возвращается пустая строка
    Если indexB не указан, substring возвращает символы до конца строки
    Если какой-то из аргументов меньше 0 или является NaN - он считается равным 0
    Если какой-то из аргументов больше, чем длина строки - он считается равным длине строки
   

```javascript
var str = "Моя строка"
alert(str.substring(0,3));
alert(str.substring(3,0));
alert(str.substring(1,2));
alert(str.substring(4));
```
### Метод substr()
Метод substr начинает собирать строку с позиции start и заканчивает, когда соберет length или дойдет до конца строки.

Если start больше или равен длине строки, то substr возвращает пустую строку.

Если start < 0, позиция определяется с конца строки. При этом если полученная позиция - до начала строки, то в качестве start берется 0. Это поведение не поддерживается Internet Explorer.

Если параметр length не указан - подстрока берется до конца строки.

Если length <= 0 - возвращается пустая строка.

```javascript
var str = "abcdefghij";
alert("(1,2): "    + str.substr(1,2));
alert("(-3,2): "   + str.substr(-3,2));
alert("(-3): "     + str.substr(-3));
alert("(1): "      + str.substr(1));
alert("(-20, 2): " + str.substr(-20,2));
alert("(20, 2): "  + str.substr(20,2));

```
## Преобразование строки
### string lowercase uppercase trim
### Метод concat()
Выполняет действие, аналогичное оператору + для строк.

```javascript
var hello = 'Привет, ';
alert(hello.concat('Кевин', ', удачного дня.'));

// Привет, Кевин, удачного дня

```


###Метод trim()

Метод trim() удаляет пробельные символы с начала и конца строки. Пробельными символами в этом контексте считаются все собственно пробельные символы (пробел, табуляция, неразрывный пробел и прочие) и все символы конца строки (LF, CR и прочие).

```javascript
var orig = '   foo  ';
alert(orig.trim());

```

###Метод toLocaleLowerCase()
Преобразует все буквы в строке к нижнему регистру.

```javascript
alert('АлфАвиТ'.toLocaleLowerCase());
alert('ABCD'.toLocaleLowerCase());

```

###Метод toLocaleUpperCase()
Преобразует все буквы в строке к верхнему регистру.

```javascript
alert('алфавит'.toLocaleUpperCase());
alert('abcde'.toLocaleUpperCase());
```
## Поиск в строке
### string indexof search
### Метод indexOj()

Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект.

```javascript
alert('Голубой кит'.indexOf('Голубой'));   // вернёт  0
alert('Голубой кит'.indexOf('Голуббой'));  // вернёт -1
alert('Голубой кит'.indexOf('кит', 0));    // вернёт  8
alert('Голубой кит'.indexOf('кит', 5));    // вернёт  8
alert('Голубой кит'.indexOf('', 9));       // вернёт  9

```

### Метод lastindexOf()

Метод lastIndexOf() возвращает индекс последнего вхождения указанного значения в строковый объект
   

```javascript
alert('канал'.lastIndexOf('а'));     // вернёт 3
alert('канал'.lastIndexOf('а', 2));  // вернёт 1
alert('канал'.lastIndexOf('а', 0));
```
