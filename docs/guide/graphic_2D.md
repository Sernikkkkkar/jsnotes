## Тег canvas
Основные справочные данные по тегу __canvas__,предназначенному для отображения графических данных представлена:     
 * [htmlbook](https://puzzleweb.ru/html/tag_canvas.php)    
 * [Базовое использование тега Canvas](https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
### Пример 
 <a href="../examples/canvas_1.html">В примере</a> показан процесс формирования изображения в теге.
 Полученное изображение преобразуется в текстовую информацию в формате base64 и может быть далее сохранено в формате .png

```html
<html>
   <head>
	<meta charset="utf-8">
	<title>Тег canvas</title>
	<meta name="description" content="НTML, canvas,image,base64,png">

</head>

<body>

<canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.
</canvas>
<button onclick='canvas_jpg()'>Click me</button>
<h2>Рисунок</h2>
<img  id='image' src=""/>
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createLinearGradient(0,0,250,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,170,80);
ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,50);
function canvas_jpg(){
  var canvas = document.getElementById("myCanvas");
  var image = canvas.toDataURL("image/png");
  alert(image)
  //document.write('<img src="'+image+'"/>');
  document.getElementById("image").src=image;
  popup = window.open();
  popup.document.write('<img src="'+image+'"/>');
}
</script>

</body>
</html>
```

## Создание диаграмм 
Для создания диаграмм алгоритмов можно использовать несколько js Библиотек    
[draw2d](https://github.com/freegroup/draw2d_js.shapes)     
[processing.js](http://processingjs.org/)      
[MindFusion](https://www.mindfusion.eu/javascript-diagram.html)   
   

Для дальнейшего рассмотрения выбрана последняя по следующим причинам    
 * Большое разнообразие представления диаграммы и ее настроек [Примеры](https://www.mindfusion.eu/javascript-demo.html?sample=anchors)     
 * [Построение иерархических диаграмм](https://mindfusion.eu/samples/javascript/diagram/containers.html)    
 * [Исползование анимации](https://www.mindfusion.eu/demos/jsdiagram/Animations.html)    
 * [Использование svg для построения новых элементов](https://mindfusion.eu/samples/javascript/diagram/svg-nodes.html)         
 * [Документация](https://www.mindfusion.eu/onlinehelp/jsdiagram/index.htm)

### Общие сведения
 Процедура создания диаграммы состоит из объявления глобальных переменных, описания диаграммы, узлов и связей, обработки событий связанных с диаграммой и ее элементами.
#### Описание диаграммы
 Описание диаграммы дается в глобальных переменных
```js
var Diagram = MindFusion.Diagramming.Diagram;
var diagram;

``` 
Далее уже при создании самой диаграммы определяется ее местоположение и основные свойства    
```js
// привязка к элементу страницы
diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, document.getElementById("diagram"));
//определяет поведение в зависимости от необходимых действий
//может изменяться при работе скрипта 
diagram.setBehavior(MindFusion.Diagramming.Behavior.SelectOnly);
//подсоединение к диаграмме обработчика событий 
diagram.addEventListener(DiagramEvents.nodeClicked, onNodeClicked);
diagram.addEventListener(DiagramEvents.linkClicked, onLinkClicked);
//улучшение внешнего вида(закругление углов в связях)
diagram.setRoundedLinks(true); 
diagram.setRoundedLinksRadius(2);
```

 Кроме перечисленных свойств, имеется достаточно большое количество свойств диаграммы,перечисленных в [документации](https://www.mindfusion.eu/onlinehelp/jsdiagram/index.htm).     
 Для рисования связей,после их создания применяется метод
```js
diagram.routeAllLinks();
``` 
Он позволяет соединять элементы ломанными линиями, создавая контрольные точки в местах перегиба.



#### Узлы диаграммы
для создание узла(node) диаграммы Необходимо при определении глобальных переменных указать

```js
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var Rect = MindFusion.Drawing.Rect;

```

Далее создаем узел.

```js
var node = new ShapeNode(diagram);
// Основные элементы Rectangle, Circle, Decision
node.setShape('Circle');
```

 Кроме основных узлов в библиотеке представлены узлы,связанные с программированием("process","database") и другими узлами необходимыми при нарисовании диаграммы.
 Библиотека также дает возможность создать новый тип узла на основе svg
```js
addNode(new Rect(35, 5, 45, 25), "electro/blank.svg",true);
``` 
 После создания узла можно определить его положение в диаграмме и размеры (bounds),цвет для заполнения узла (color) и текст,размещенный в узле(text), а также его видимость.
```js
	node.setBounds(bounds);
node.setBrush(color);
node.setText(text);
//показать или скрыть
node.setVisible(true);

diagram.addItem(node);

``` 
Узел может быть повернут вокруг своей оси
```js
// поворот против часовой стрелки на 30 градусов
node.setRotationAngle(30)
// для того чтобы не поворачивать текст вместе с блоком
node.setRotateText(false);    
```
Далее можно изменить шрифт,размер и цвет текста, a также его место в блоке(левый или правый край,центр, верху или внизу блока ).

```js
var style = node.getStyle();
style.setFontSize(3);
style.setFontName("Verdana");
style.setTextColor("#585A5C");
//место текста в блоке
//текст влево,центр,вправо [0,1,2]
node.setTextAlignment(2);
//верх,центр,вниз
node.setLineAlignment(0);[0,1,2]
```
В качестве тексата может использоваться HTML код

```js
node.setEnableStyledText(true);
node.setText("<b>Test</>");
```


#### Связи диаграммы

Для создания связи (link)  элементов диаграммы, ее наобходимо опредеделить в начеле скрипта.
```js
var DiagramLink = MindFusion.Diagramming.DiagramLink;
```
Затем непосредственно определяем саму связь для элементов, которые она соединяет, ее свойства и методы.  
```js
var link = new DiagramLink(diagram, node1, node2);
link.setVisible(true);
//фрпма стрелки на конце связи
link.setHeadShape('Triangle');
// цвет стрелки
link.setHeadBrush('#003466');
//толщина линии связи
link.setStrokeThickness(5.0); 
//цвет линии
link.setPen("#ff0000");
// добавление текста
link.addLabel(text);
//второй вариант добавления текста
link.setText(text)
diagram.addItem(link); 
```

__Якорь(Anchor)__     
Для более наглядного нарисования диаграммы, для подведения связи к определенному месту в узле используют якоря.   
Вначале следует определение     
```js
var AnchorPattern = MindFusion.Diagramming.AnchorPattern;
var AnchorPoint = MindFusion.Diagramming.AnchorPoint;
var MarkStyle = MindFusion.Diagramming.MarkStyle;

var anchorPattern = new AnchorPattern([
      new AnchorPoint(50, 0, true, false, MarkStyle.Rectangle, "#ff0000", 1.5),
      new AnchorPoint(0, 50, true, true, MarkStyle.Rectangle, "#008000", 1.5),
      new AnchorPoint(100, 50, true, true, MarkStyle.Rectangle, "#008000", 1.5),
      new AnchorPoint(50, 100, false, true, MarkStyle.Rectangle, "#008000", 1.5)
 ]);
```

В определении описываются:      
 * местоположение якоря на элементе     
 * вход /выход или вход-выход     
 * форма якоря и его цвет      
 
 После этого якорь может быть привязан к узлу.
 
 ```js
  node1.setAnchorPattern(anchorPattern);
  node2.setAnchorPattern(anchorPattern);
  link.setOriginAnchor(3);
  link.setDestinationAnchor(1);
 ```
#### Обработка событий
При работе с диаграммой обрабатываются события(events):клик по узлу(DiagramEvents.nodeClicked),клик по связи(DiagramEvents.linkClicked) и ряд других.    
Обрабатываемые ссобытия должны быть определены после загрузки страницы.    
```js
// определение глобальной переменной
var DiagramEvents = MindFusion.Diagramming.Events;
// привязка событий
diagram.addEventListener(DiagramEvents.nodeClicked, onNodeClicked);
diagram.addEventListener(DiagramEvents.linkClicked, onLinkClicked);
```
Первый параметр меирла __addEventListener__ является событием, второй - обрабатывающей функцией.     
 Обработчик события определяет узел или линк, и далее выполняет необходимые действия.     
```js
function onNodeClicked(sender, args)
{
  var node = args.getNode();
  console.log(node)	
}
``` 

### Пример подготовки диаграммы
 Исходные данные для построения диаграммы берутся из объекта в формате json. В этом объекте определены узлы и связи.     
 для узлов заданы тип,размеры и местоположение. Своиство __click__, определяет функцию, которая выполняется при клике мышью по этому элементу.    
 В элементах свзи(link) определены узел-источник и узел назначения, а также место привязки связи к элементу. При клике по связи она меняет цвет.     
 <a href="../examples/diagr1.html">Посмотреть</a>     
 
 ```js
 /*исходные данные*/
  var s0={
  "block":[
   {"id":"start",
    "xy":[22.5, 10, 35, 15],
    "type":"Circle", 
    "text":"START\nClick to begin",
    "click":function(){alert("my first diagram func")}},
   {"id":"node1",
    "xy":[85, 10, 60,15],
    "type":"Rect", 
    "text":"node 1 <a href=\"https://fb2lib.now.sh\">click</a>"},
   {"id":"node2",
    "xy":[85, 40, 60,15],
    "type":"Rect",
    "text":"node 2"},
   {"id":"node3",
    "id":"node3",
    "xy":[10, 40, 60,15],
    "type":"Rect",
    "text":"node 3"},
   {"id":"node4",
    "xy":[10, 100, 60,15],
    "type":"Rect",
    "text":"node 4"},
   {"id":"node5",
     "xy":[85, 70, 60, 15],
    "type":"Deci",
    "text":"node 5"},
    {"id":"end",
     "xy":[22.5, 160, 35, 15],
    "type":"Circle",
    "click":function(){window.location="https://fb2lib.now.sh"},
    "text":"END\nClick to reset"}
  ],
  "connect":[
  {"a":"start,node1"},
  {"a":"node1,node2"},
  {"a":"node2,node3"},
  {"a":"node5,end","t":"no"},
  {"a":"node3,node5","port1":3},
  {"a":"node4,end"},
  {"a":"node5,node4","t":"yes","port1":1,"port2":0},
  ]
  }
 ``` 
В самом скрипте дано определение глобальных переменных и представлены основные функции используемые при формировании диаграммы.    
```js
/*global vars*/
var Diagram = MindFusion.Diagramming.Diagram;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var HandlesStyle = MindFusion.Diagramming.HandlesStyle;
var DiagramEvents = MindFusion.Diagramming.Events;
var Rect = MindFusion.Drawing.Rect;
var AnchorPattern = MindFusion.Diagramming.AnchorPattern;
var AnchorPoint = MindFusion.Diagramming.AnchorPoint;
var MarkStyle = MindFusion.Diagramming.MarkStyle;
var select = MindFusion.Selection;
var diagram;
var startNode, endNode, nodes,anchorPattern;



/*after loaded file*/
document.addEventListener("DOMContentLoaded", function ()
{

	// create a Diagram component that wraps the "diagram" canvas
	diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, document.getElementById("diagram"));
	diagram.setBehavior(MindFusion.Diagramming.Behavior.SelectOnly);
	// attach event handlers
	diagram.addEventListener(DiagramEvents.nodeClicked, onNodeClicked);
		diagram.addEventListener(DiagramEvents.linkClicked, onLinkClicked);
       //enhanced diagram view
	diagram.setRoundedLinks(true); //закругления в месте перегиба
        diagram.setRoundedLinksRadius(2);
	// initialize the diagram
	init(s0);
});
//node anchors
 anchorPattern = new AnchorPattern([
      new AnchorPoint(50, 0, true, false, MarkStyle.Rectangle, "#ff0000", 1.5),
      new AnchorPoint(0, 50, true, true, MarkStyle.Rectangle, "#008000", 1.5),
      new AnchorPoint(100, 50, true, true, MarkStyle.Rectangle, "#008000", 1.5),
      new AnchorPoint(50, 100, false, true, MarkStyle.Rectangle, "#008000", 1.5)
 ]);
function init(d)
{
  var sour=d.block;
  var conn=d.connect;

  //массив для задания узлов диаграммы
  nodes=[]
  nodes = diagram.nodes;
 // create nodes
 for (i=0;i<sour.length ;i++ )
 {
	 if (sour[i].type=="Rect") createRectangleNode(new Rect(sour[i].xy[0], sour[i].xy[1], sour[i].xy[2],sour[i].xy[3]), sour[i].text, sour[i].id);
	 if (sour[i].type=="Deci"){createDecisionNode(new Rect(sour[i].xy[0], sour[i].xy[1], sour[i].xy[2],sour[i].xy[3]), sour[i].text, sour[i].id)}
	 if (sour[i].type=="Circle"){ createCircleNode(new Rect(sour[i].xy[0], sour[i].xy[1], sour[i].xy[2],sour[i].xy[3]), sour[i].text, sour[i].id);}
 }
 //Create node anchors	
 for (k=0;k<nodes.length;k++){
	 nodes[k].setAnchorPattern(anchorPattern);
 }
 //define some nodes
	startNode =nodes[0];
	endNode =nodes[sour.length-1]
   //create links
  for (j=0;j<conn.length;j++) {
     createLink(sour,conn[j])
 }
 diagram.routeAllLinks();//для построения связей с помощью ломанных.
}
function createCircleNode(bounds, text,id)
{
	var node = new ShapeNode(diagram);
	node.setShape('Circle');
	node.setBrush('#ce0000');
	node.setText(text);
	node.id=id
	node.setBounds(bounds);
	diagram.addItem(node);
	return node;
}

function createRectangleNode(bounds, text,id)
{
	var node = new ShapeNode(diagram);
	node.setVisible(true);
	node.setShape('Rectangle');
	node.setBrush('#5a79a5');
	node.setText(text);
	node.setBounds(bounds);
	node.setEnableStyledText(true)
	node.id=id
	diagram.addItem(node);
}

function createDecisionNode(bounds, text,id)
{ 
        
	var node = new ShapeNode(diagram);
	node.setVisible(true);
	node.setBounds(bounds);
	node.setShape('Decision');
	node.setBrush('#a0c0c0');
	node.setText(text);
	node.id=id
	diagram.addItem(node);
}

function createLink(arr,c)
{
	var l=c.a.split(",")
	var l1=getnum(arr,"id",l[0])*1;
	var l2=getnum(arr,"id",l[1])*1;
	var link = new DiagramLink(diagram, nodes[l1], nodes[l2]);
	link.setVisible(true);
	link.setHeadShape('Triangle');
	link.setHeadBrush('#003466');
	link.setStrokeThickness(3.0); //толщина линии
	link.setBrush("#ffffff");
	if (c.t)
	{
		link.addLabel(c.t);
	}
	diagram.addItem(link);
	if (c.port1!=undefined) {
	  link.setOriginAnchor(c.port1*1);
	}
	if (c.port2!=undefined) {
	  link.setDestinationAnchor(c.port2*1);
	  
	}
}

function onLinkClicked(sender, args)
{

var link = args.getLink();
link.setPen("#ff0000");
}

function onNodeClicked(sender, args)
{
	var node = args.getNode();
	if (node.id)
	{
	  var num=getnum(s0.block, "id",node.id)
	  if(s0.block[num].click)
	    s0.block[num].click()
	}
	
}


function getnum(arr, key,val){
 for (i=0;i<arr.length ;i++ )
  {
   if(arr[i][key]==val) break;
  }
return i; 
}
```
### Получение диаграммы с использованием svg 
 В примере показано использования трех элементов c svg файлами : текстовый элемент, конденсатор и транзистор с поворотом на 180 градусов.    
<a href='../examples/svg.html'>Посмотреть</a> 

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8">
	<title>MindFusion JsDiagram - SVG</title>
	<meta name="description" content="НTML, canvas,svg,diagram">

	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script type="text/javascript" src="common/samples.js"></script>
</head>
<body>
<div>
		<canvas id="diagram" width="2100" height="2100">
			This page requires a browser that supports HTML 5 Canvas element.
		</canvas>
</div>
	
	<script src="https://vuepress-2mvjfjyyu.now.sh/examples/MindFusion.Common.js" type="text/javascript"></script>
	<script src="https://vuepress-2mvjfjyyu.now.sh/examples/MindFusion.Diagramming.js" type="text/javascript"></script>
	<script type="text/javascript">
var Events = MindFusion.Diagramming.Events;
var Diagram = MindFusion.Diagramming.Diagram;
var DiagramLink = MindFusion.Diagramming.DiagramLink;
var ShapeNode = MindFusion.Diagramming.ShapeNode;
var AnchorPattern = MindFusion.Diagramming.AnchorPattern;
var AnchorPoint = MindFusion.Diagramming.AnchorPoint;
var MarkStyle = MindFusion.Diagramming.MarkStyle;
var Style = MindFusion.Diagramming.Style;
var Theme = MindFusion.Diagramming.Theme;
var SvgContent = MindFusion.Diagramming.SvgContent;

var Rect = MindFusion.Drawing.Rect;

var diagram = null;
var bounds = new Rect(0, 0, 30, 6);

anchorPattern = new AnchorPattern([
      new AnchorPoint(50, 0, true, false, MarkStyle.Rectangle, "#ff0000", 1.5),
      new AnchorPoint(0, 50, true, true, MarkStyle.Rectangle, "#008000", 1.5),
      new AnchorPoint(100, 50, true, true, MarkStyle.Rectangle, "#008000", 1.5),
      new AnchorPoint(50, 100, false, true, MarkStyle.Rectangle, "#008000", 1.5)
 ]);

$(document).ready(function (sender, args) {
    // create a Diagram component that wraps the "diagram" canvas
    diagram = MindFusion.AbstractionLayer.createControl(Diagram, null, null, null, $("#diagram")[0]);

    diagram.setLinkHeadShapeSize(2);
    diagram.setDefaultShape("Rectangle");
    diagram.setRouteLinks(true);
    diagram.setRoundedLinks(true);
    diagram.setShowGrid(false);
    diagram.setBackBrush("#e0e9e9");

    //create mew theme
    var theme = new Theme();
    var shapeNodeStyle = new Style();
    shapeNodeStyle.setBrush({ type: 'LinearGradientBrush', color1: '#e0e9e9', color2: '#616a7f', angle: 90 });
    shapeNodeStyle.setStroke("#7F7F7F");
    shapeNodeStyle.setTextColor("#585A5C");
    shapeNodeStyle.setFontName("Verdana");
    shapeNodeStyle.setFontSize(3);
    shapeNodeStyle.setBackBrush("#e0e9e9");
    theme.styles["std:ShapeNode"] = shapeNodeStyle;
    diagram.setStyle(shapeNodeStyle);

    diagram.setDefaultShape("Rectangle");
    
    //создание svg node
    addNode(new Rect(35, 5, 45, 25), "electro/blank.svg",true);
    addNode(new Rect(45, 45, 25, 25), "electro/capacitor.svg",true);
    addNode(new Rect(10, 45, 25, 25), "electro/npn.svg",true);
	
    
    
    var nodes=diagram.nodes;
    nodes[2].setAnchorPattern(anchorPattern);
    nodes[1].setAnchorPattern(anchorPattern);
    // поворот блока
    nodes[2].setRotateText(false);
    nodes[2].setRotationAngle(180)
    nodes[1].setText('<b><i>C1</i></b>')
    nodes[2].setText("<b><i>T1</i></b>")
    nodes[0].setText("<h1>Заготовка для эл.схем</h1>")
    
    // Размещеие текста в верхнем правом углу
	nodes[0].setEnableStyledText(true)
	nodes[1].setEnableStyledText(true)
	nodes[1].setTextAlignment(2);
        nodes[1].setLineAlignment(0);
        nodes[2].setEnableStyledText(true)
	nodes[2].setTextAlignment(2);
        nodes[2].setLineAlignment(0);
        
        var link = new DiagramLink(diagram, diagram.nodes[1], diagram.nodes[2]);
	link.setVisible(true);
	link.setHeadShape('none');
	link.setStrokeThickness(3.0); //толщина линии
	link.setPen("#000000"); //цвет линии
	diagram.addItem(link);
	
});

function addNode(bounds, filename, locked)
{
	var node = diagram.getFactory().createSvgNode(bounds);
	node.setTransparent(true);
	node.setLocked(locked);
	var content = new SvgContent();
	content.parse(filename);
	node.setContent(content);
}

function addNode(bounds, filename, locked)
{
	var node = diagram.getFactory().createSvgNode(bounds);
	node.setTransparent(true);
	node.setLocked(locked);
	var content = new SvgContent();
	content.parse(filename);
	node.setContent(content);
}

function addNodeClick()
{
	//var index = Math.floor((Math.random() * 7) + 1);
	addNode(new Rect(55, 30, 25, 25), "electro/npn.svg" );
}

function resetClick()
{
	diagram.clearAll();
}	
	</script>
</body>
</html>

```
### Анимация диаграммы 
