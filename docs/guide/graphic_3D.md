# Графика


## 3D
### WebGL
 Есть возможность создания кода непосредственно в браузере, но это достаточно сложный процесс. 
 Поэтому рассмотрю js библиотеки,предназначенные для работы с 3D графикой.     
 [Описание и статьи](https://developer.mozilla.org/ru/docs/Web/API/WebGL_API)
### Tree.js
Одна из наиболее популярных и мощных библиотек,позволяющая достаточно просто формировать сложные 3D объекты.    
[Загрузка tree.js](https://github.com/mrdoob/three.js/).    
 Библиотека достаточно большая по объему, около 250 МБ, большая папка с примерами, но в файлах, в основном, ссылки на сетевые примеры.    
 Код вытацить достаточно сложно.     
[Примеры разработчика](https://threejs.org/)      
В библиотеке достаточно сложно реализована работа с событиеми (mouse click) и размещение текста на объекте.
Здесь приведены примеры для запуска на компьютере без загрузки tree.js с сайта.   
<a href="../examples/1_treejs.html">Вращение кубика с разноцветными гранями</a>       

```html
<html>
<head>
    <meta charset=utf-8>
    <title>My first Three.js app</title>
    <style>
        body { margin: 0; }
        canvas { width: 100%; height: 100% }
    </style>
</head>
<body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.js"></script>
    <script>
        /* https://riptutorial.com/Download/three-js.pdf
           https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
           https://redstapler.co/three-js-tutorial-hello-world/
        */
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
/*Right of spawn face*/
geometry.faces[0].color = new THREE.Color(0xd9d9d9);
geometry.faces[1].color = new THREE.Color(0xd9d9d9);
/*Left of spawn face*/
geometry.faces[2].color = new THREE.Color(0x2196f3);
geometry.faces[3].color = new THREE.Color(0x2196f3);

/*Above spawn face*/
geometry.faces[4].color = new THREE.Color(0xffff00);
geometry.faces[5].color = new THREE.Color(0xffffff);
/*Below spawn face*/
geometry.faces[6].color = new THREE.Color(1, 0, 0);
geometry.faces[7].color = new THREE.Color(1, 0, 0);
/*Spawn face*/
geometry.faces[8].color = new THREE.Color(0, 1, 0);
geometry.faces[9].color = new THREE.Color(0, 1, 0);
/*Opposite spawn face*/
geometry.faces[10].color = new THREE.Color(0, 0, 1);
geometry.faces[11].color = new THREE.Color(0, 0, 1);
var material = new THREE.MeshBasicMaterial( {color: 0xffffff, vertexColors: THREE.FaceColors});
//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 4;

function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}
render();
    var animate = function(){
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.05;
        renderer.render(scene,camera);
        requestAnimationFrame(animate);
    } 
        animate();
</script>
</body>
```

<a href="../examples/2_treejs.html">Вращение и движение кубика</a>.        
<a href="../examples/3_treejs.html">Подсветка объекта при помощи мыши(events)</a>.

### Babylon.js
 
 По функциям примерно соответствует __Tree.js__.    
 [Сайт разработчика](https://doc.babylonjs.com/babylon101/how_to_get).    
  На сайте (__sandbox__) реализована возможность просмотра примеров и их кода, а также можно создавать и загружать свои.
 
### DivSugar.js
 
 Достаточно простая по сравнению с двумя предыдущими библиотека. Позволяет помещать объекты HTML в 3D-пространство, выполнять их перемещение и вращение, объкты при этом продолжают реагировать на события.    
 Основной __недостаток__ - объекты при этом остаются плоскими.    
 [Загрузка библиотеки и примеры](https://github.com/kitao/divsugar) 