# Массивы
## Задание массива
### array push
 В примере показано несколько вариантов задания массива. В последнем варианте показано заполнение массива с помощью метода _push()_. Этот метод добавляет в конец существующего массива новый элемент.          

``` js
var a=["one","two","three"];
alert(a[2]);
// второй способ
var b=[];
b[0]="one";
b[1]="two";
alert(b[1]);
//третий способ
var c=new Array(3);
c[1]="two";
alert(c[1]);
//четвертый вариант
var d=[];
d.push("one");
d.push("two")
```
 Задание многомерного массива происходит посредством создания массивов нескольких уровней - одномерных массивов и массива, в который входят эти одномерные массивы.
  В примере показано несколько вариантов построения массивов

``` js
var a=[
["a","b","c"],
["d","e","f"]
];
alert(a[0][1]);
//второй способ
var c=[];
var c0=["a","b","c"];
var c1=["d","e","f"];
c.push(c0);
c.push(c1);
alert(c[0][1]);

```
## Преобразование массива в строку
### array join string


ͥjoin(divider) - позволяет преобразовать массив в строку.     
Параметр divider - задает символ или набор символов, помещаемых между элементами массива.    
 Обратное преобразование полученной строки в массив может быть реализовано при помощи метода _split()_.     
 В примере массив преобразуется в строку, а затем из этой строки создается новый массив.      

``` js
var a = ['a', 'b', 'c'];
alert(a.join());
var str=a.join(', ')
alert(str);
var b=str.split(", ");
alert(b[0]);

```
## Добавление и удаление  Элемента массива

### _push unshift pop shift
 Данные методы позволяют добавить или удалить элемент массива.     
 * _push()_ - добавляет элемент в конец массива.    
 * _unshift()_ - добавляет элемент в начало массива.    
 * _pop()_ - удаляет последний элемент в массива и возвращает его значение в переменную.    
 * _shift()_ - удаляет начальный элемент в массива и возвращает его значение в переменную.  
 
``` js
var arr = [1, 2];
arr.push(3);
alert("после push(3) "+arr.join(" "))
arr.unshift(4);
alert("после unshift(4) "+arr.join(" "));
alert("pop() - удален элемент : "+arr.pop())
alert("arr "+arr.join(" "));
alert("shift() удален элемент : "+arr.shift())
alert("arr "+arr.join(" "));
```

## Meтод slice при работе с массивом
### array slice


Метод позволяет отбирать определенную последовательность элементов массива
``` js
var arr = [ 1, 2, 3, 4, 5 ]
var arr1=arr.slice(2) // => [3, 4, 5]
alert("arr1"+arr1.join(" ")); 
var arr2=arr.slice(1, 4) // => [2, 3, 4]
alert("arr2 "+arr2.join(" "));
```

## Манипуляции с Элементами массива
### array splice() delete add change
 Наиболее мощный метод для манипулирования элементами массива.В зависимости от значений параметров позволяет удалять, изменять и добавлять элементы массива.
 При удалении и замене возврацает изменяемые элементы массива.
 В методе используется несколько параметров :     
 * первый параметр указывает на элемент с которого начинаются манипуляции с массивом.
 - второй элемент указывет на количество удаляемых элементов, если отсутствует з параметр.Если 2 параметр равен 0, а третий параметр присутствует, то происходит добавление 3 элемента. Если второй параметр больше 0, то происходит замена элементов начиная с указанного в первом параметре элементами, расположенными в выражении за вторым параметром .   

``` js
//Исходный массив
var fruits = ["Banana", "Orange", "Apple", "Mango"];
//Удаление двух элементов
alert("Removed: " + fruits.splice(2,2).join(" "));
alert(fruits.join(","));
// Добавление одного элемента
fruits.splice(1,0,"Lemon");
alert("add element :"+fruits.join(","));
// Замена двух элементов
alert("Changed: " + fruits.splice(2,2,"Pear","Current").join(","))
alert(fruits.join(","))

```

## Редактирование Элементов массива
### _array fill foreach map_
__ͥМетод fill()__     

Метод позволяет заполнить указанным значением элемент или интервал элементов массива
``` js
var a=[1, 2, 3];
a.fill(4);              // [4, 4, 4]
alert(a.join(","));
var b= new Array(3);
b.fill("abc");
alert(b.join(","));

```
__Метод map()__    
Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.    


``` js

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
alert(roots.join(","))
```
__Метод forEach()__     
Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.     


``` js
function logArrayElements(element, index, array) {
  alert('a[' + index + '] = ' + element);
}

[2, 5, , 9].forEach(logArrayElements);
```
## Проверка Элементов массива
### _array every some_
__Метод every()__  

Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

``` js
// функция для проверки
function isBigEnough(element, index, array) {
  return element >= 10;
}
var a=[12, 5, 8, 130, 44];
alert(a.every(isBigEnough));  
alert([12, 54, 18, 130, 44].every(isBigEnough)); // true

```
__Метод some()__     

Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.


``` js
alert([2, 5, 8, 1, 4].some(elem => elem > 10));  // false
alert([12, 5, 8, 1, 4].some(elem => elem > 10)); // true

```
## Поиск в массиве
### array indexOf LastIndexOf findIndex find
__ͥМетод indexOf()__

Возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.      
_Подробно рассмотрен в разделе Строки_      

``` js
var array = [2, 5, 9];
alert(array.indexOf(2));     // 0
alert(array.indexOf(7));     // -1
alert(array.indexOf(9, 2));  // 2
alert(array.indexOf(2, -1)); // -1
alert(array.indexOf(2, -3)); // 0
```


__Метод lastIndexOf()__      
 Возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет. Массив просматривается от конца к началу, начиная с индекса fromIndex.

``` js
var array = [2, 5, 9, 2];
alert(array.lastIndexOf(2));     // 3
alert(array.lastIndexOf(7));     // -1
alert(array.lastIndexOf(2, 3));  // 3

```
__Метод findIndex()__
 Возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.     
 В приведенном примере элементы массива сравниваются с числом 15. Выводится индекс первого элемента, превышающего это число.

``` js
var ages = [4, 12, 16, 20];
function checkAdult(age) {
  return age >15
}
alert(ages.findIndex(checkAdult))  // возвращает 2

```

__Метод find()__      
 возвращает значение в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается undefined.

``` js
var ages = [4, 12, 16, 20];
function checkAdult(age) {
  return age >15
}
alert(ages.find(checkAdult))  // возвращает 16
```
## Фильтр в массиве
### array filter
__ͥМетод filter()__     

 Создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

``` js
 function isBigEnough(value) {
  return value >= 10;
}
var f = [12, 5, 8, 130, 44].filter(isBigEnough);
alert(f.join(","))
```
## Сортировка элементов массива
### array sort
__ͥМетод sort()__

 Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно выдает верный результат (только английский). Порядок cортировки по умолчанию соответствует порядку кодовых точек Unicode.

```javascript

var fruit = ['арбузы', 'бананы', 'Вишня'];
fruit.sort(); // ['Вишня', 'арбузы', 'бананы']
alert(fruit.join(","));  // не правильно
var scores = [1, 2, 10, 21];
scores.sort();
alert(scores.join(","));
alert(['dog',"mouse","cat"].sort().join(",")); //правильно
```

С применением функции

```javascript
var numbers = [4, 2,21, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
alert(numbers.join(","));

```

# Объект json
 Формат json представляет объекты языка js в виде ассоциативного массива.    
## Создание json и работа с его элементами

### array json parse
__Задание с помощью переменной__     

Создаем простой объект и выводим в сообщении его свойство.
``` js
var json={a:1,b:"two" };
alert(json.a)
```

сложный объект (массив json)
``` js

 var json =[
{"name": "Pete", "age": 53, "sex": "male"},
{"name": "Peter",  "age": 43,  "sex": "male"},
{"name": "Ann", "age": 43,"sex": "female"}
]
alert(json[1].name)
```
сложный json(json tree)

``` js

 var json =[
{"name": "Pete", "age": 53, "sex": "male","children":[
{"name":"John"},
{"name":"Rolf"}
]},
{"name": "Peter",  "age": 43,  "sex": "male"},
{"name": "Ann", "age": 43,"sex": "female"}
]
alert(json[0].children[0].name)
```
__Метод parse()__     

Этот метод Позволяет преобразовать строку в объект json

``` js
var numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert( numbers[1] );

var str='{"name": "Peter",  "age": 43,  "sex": "male"}';
var o=JSON.parse(str);
alert(o.age);

```
## Преобразование json в строку
### _array json stringify_
__Метод JSON.stringify()__     
 Преобразует значение JavaScript в строку JSON, возможно с заменой значений, если указана функция замены, или с включением только определённых свойств, если указан массив замены

обычный вывод
``` js
alert(JSON.stringify({ x: 5, y: 6 }));
alert(JSON.stringify({ a: 2 }, null, ' '));
```
читаемый json
``` js
var oAuto = new Object();
oAuto.firm = "Audi";
oAuto.model = "A6";
oAuto.year = 2008;
oAuto.price = 78000;
oAuto.sellers = new Array(
  "Фирма А",
  "Фирма Б",
  "Фирма В"
);

var sAuto = JSON.stringify(oAuto,"", 4);
alert(sAuto);
```
Работа с функциями
``` js
var foo = { foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7 };

var str=JSON.stringify(foo, function(key, value) {
  if (typeof value === 'string') {
    return undefined; // удаляем все строковые свойства
  }
  return value;
});
alert(str);
//фильтруем отдельные свойства
alert(JSON.stringify(foo, ['week', 'model']));
```

__json Сортировка свойств__
### array json keys sort property
Проводит сбор и сортировку свойств объекта json
``` js
var myObj =
    {
        'b': 'asdsadfd',
        'c': 'masdasaf',
        'a': 'dsfdsfsdf'
    },
    keys = [],
    k, i, len;

for (k in myObj)
{
    if (myObj.hasOwnProperty(k))
    {
        keys.push(k);
    }
}

keys.sort();
alert(JSON.stringify(keys,"", 4));

```
## json Поиск в сложном объекте
### array json jsontree find object
### Поиск в JSON (jsontree)
Поиск в объекте json, имеющем сложную иерархическую структуру (children)
``` js
// find items
function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}
var jsonData=[
  {"id":"0","name":"Georde","years":"35","Items":[
   {"name":"Peter","years":"5", "id":11},
   {"name":"Rick","years":"8", "id":12}]
  },
  {"id":"1","name":"Paul","years":"37","Items":[
    {"name":"Liza","years":"6","id":21},
    {"name":"John","years":"9", "id":22}]}
];

var s=getObjects(jsonData,"id",11);
alert(JSON.stringify(s));

```

_
Несколько примеров поиска в json с иерерхической структурой
```javascript
//return an array of objects according to key, value, or key and value matching
function getObjects(obj, key, val) {
var objects = [];
for (var i in obj) {
if (!obj.hasOwnProperty(i)) continue;
if (typeof obj[i] == 'object') {
objects = objects.concat(getObjects(obj[i], key, val));
} else
//if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
if (i == key && obj[i] == val || i == key && val == '') { //
objects.push(obj);
} else if (obj[i] == val && key == ''){
//only add if the object is not already in the array
if (objects.lastIndexOf(obj) == -1){
objects.push(obj);
}
}
}
return objects;
}
 
//return an array of values that match on a certain key
function getValues(obj, key) {
var objects = [];
for (var i in obj) {
if (!obj.hasOwnProperty(i)) continue;
if (typeof obj[i] == 'object') {
objects = objects.concat(getValues(obj[i], key));
} else if (i == key) {
objects.push(obj[i]);
}
}
return objects;
}
 
//return an array of keys that match on a certain value
function getKeys(obj, val) {
var objects = [];
for (var i in obj) {
if (!obj.hasOwnProperty(i)) continue;
if (typeof obj[i] == 'object') {
objects = objects.concat(getKeys(obj[i], val));
} else if (obj[i] == val) {
objects.push(i);
}
}
return objects;
}
 
 
var json = '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","ID":"44","str":"SGML","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}';
 
var js = JSON.parse(json);
 
//example of grabbing objects that match some key and value in JSON
console.log(getObjects(js,'ID','SGML'));
//returns 1 object where a key names ID has the value SGML
 
//example of grabbing objects that match some key in JSON
console.log(getObjects(js,'ID',''));
//returns 2 objects since keys with name ID are found in 2 objects
 
//example of grabbing obejcts that match some value in JSON
console.log(getObjects(js,'','SGML'));
//returns 2 object since 2 obects have keys with the value SGML
 
//example of grabbing objects that match some key in JSON
console.log(getObjects(js,'ID',''));
//returns 2 objects since keys with name ID are found in 2 objects
 
//example of grabbing values fr//Пока без примеров, только для просмотра

```

## Удаление объекта в JSON
### jquery json jsontree splice() delete
__Удаление элемента в JSON (jsontree)__     
 
``` js
// delItem for jsonTree
function delItem(array,prop, val) {
    val=val*1;
    for (var i = 0; i < array.length; ++i) {
        
        var obj = array[i];
        if (obj[prop] === val) {
            // splice out 1 element starting at position i
            jobj=array.splice(i, 1);
            return true;
        }
        if (obj.Items) {
          
            if (delItem(obj.Items, prop ,val)) {
            
                if (obj.Items.length === 0) {
                    // delete children property when empty
                    delete obj.Items;

                    // or, to delete this parent altogether
                    // as a result of it having no more children
                    // do this instead
                    array.splice(i, 1);
                }
                //return array;
            }
        }
    }
}
var jobj;
var jsonData=[
  {"id":"0","name":"Georde","years":"35","Items":[
   {"name":"Peter","years":"5", "id":11},
   {"name":"Rick","years":"8", "id":12}]
  },
  {"id":"1","name":"Paul","years":"37","Items":[
    {"name":"Liza","years":"6","id":21},
    {"name":"John","years":"9", "id":22}]}
];

delItem(jsonData,"id",11);
alert("Удален : \n"+JSON.stringify(jobj));
var s=JSON.stringify(jsonData,"",4);
alert("Осталось :\n"+s);

```

## Добавление объекта в JSON
### array json jsontree splice()  add
__Добавление элемента в JSON (jsontree)__       
 
``` js
// add item to json Tree
function addItem(array,prop, val,it) {
    val=val*1;
    for (var i = 0; i < array.length; ++i) {
        
        var obj = array[i];
        if (obj[prop] === val) {
            // splice out 1 element starting at position i
            array.splice(i, 0,it);
            return true;
        }
        if (obj.Items) {
          
            if (addItem(obj.Items, prop ,val,it)) {
            
                if (obj.Items.length === 0) {
                    // delete children property when empty
                    delete obj.Items;

                    // or, to delete this parent altogether
                    // as a result of it having no more children
                    // do this instead
                    array.splice(i, 1);
                }
                //return array;
            }
        }
    }
}

var jobj;
var jsonData=[
  {"id":"0","name":"Georde","years":"35","Items":[
   {"name":"Peter","years":"5", "id":11},
   {"name":"Rick","years":"8", "id":12}]
  },
  {"id":"1","name":"Paul","years":"37","Items":[
    {"name":"Liza","years":"6","id":21},
    {"name":"John","years":"9", "id":22}]}
];


var it= {"name":"Kate","years":"9","id":41};
addItem(jsonData,"id",11,it);
var s=JSON.stringify(jsonData,"",4);
alert(s);

```

## Перемещение объекта в JSON
### array json jsontree splice() move
__Перемещение элемента в JSON (jsontree)__     

Перемещаем объект с id=11 вниз на одну позицию 

``` js
//move item
/*
* pr=0 down
* pr=-1 up
*/
function moveItem(array,prop, val,pr) {
    val=val*1;
    for (var i = 0; i < array.length; ++i) {
        var obj = array[i];
        if (obj[prop] === val) {
             array.splice(i+pr, 2,array[i+1+pr],array[i+pr]);
            
            return true;
        }
        if (obj.Items) {
          
            if (moveItem(obj.Items, prop ,val,pr)) {
              if (obj.Items.length === 0) {
                    // delete children property when empty
                    //delete obj.Items;

                    // or, to delete this parent altogether
                    // as a result of it having no more children
                    // do this instead
                    array.splice(i+pr, 2,array[i+1+pr],array[i+pr]);
                }
                //return array;
            }
        }
    }
}


var jsonData=[
  {"id":"0","name":"Georde","years":"35","Items":[
   {"name":"Peter","years":"5", "id":11},
   {"name":"Rick","years":"8", "id":12}]
  },
  {"id":"1","name":"Paul","years":"37","Items":[
    {"name":"Liza","years":"6","id":21},
    {"name":"John","years":"9", "id":22}]}
];


moveItem(jsonData,"id",11,0);
var s=JSON.stringify(jsonData,"",4);
alert(s);

```

## json Сортировка по значениям
__json sort__
Проводит сортировку по значениям определенного поля в массиве json
``` js

var people = [
{
    name: 'x75',
    item1: false,
    item2: false
},
{
    name: 'a32',
    item1: true,
    item2: false
},
{
    name: 'e77',
    item1: false,
    item2: false
}];

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

people = sortByKey(people, 'name');
alert(people[0].name);
```
## Поиск списка уникальных значений свойства в объекте json 
### sort find select json array unique 
Пример для поиска уникальных значений свойств в объекте json или многомерном массиве<br>
``` js
var employees=[]
employees[0]={name:"George", age:32, retiredate:"March 12, 2014"}
employees[1]={name:"Sarah", age:17, retiredate:"June 2, 2023"}
//Выбор из маассива свойства с уникальными значениями
//Сортировка и выборка
employees[2]={name:"Christine", age:58, retiredate:"December 20, 2036"}
employees[3]={name:"Sarah", age:62, retiredate:"April 30, 2020"}


//без сортировки
alert(employees[0].name);
//сортировка по имени
employees.sort(function(a, b){
 var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
 if (nameA < nameB) //sort string ascending
  return -1
 if (nameA > nameB)
  return 1
 return 0 //default return value (no sorting)
})
alert(employees[0].name);
//Выбор уникальных имен
var buf=""
var arr=[];
for (i=0;i<employees.length;i++)
{
  if (buf!=employees[i].name)
    arr.push(employees[i].name)
  buf=employees[i].name  
}
alert(arr.length)
```
