## Библиотеки TTS
### tts
## Text to speech

Представлены 2 библиотеки, реализующие tts, поддержку русского не нашел.

##mespeak.js

* [Примеры](data/mespeak/)


##speak.js


* [Пример](data/speak-js-master/demo.html)

__readme__

speak.js
========

A port of the eSpeak speech synthesizer from C++ to JavaScript using Emscripten.

Enables text-to-speech on the web using only JavaScript and HTML5.

View a working demo at [http://projects.mattytemple.com/speak-js/](http://projects.mattytemple.com/speak-js/ "Demo").

Usage
-----

Very simple! Do this:

 * Include the script in your html header,

      `<script src="speakClient.js"></script>`

   (and make sure you have speakClient.js available, as well as
   speakWorker.js and speakGenerator.js)

 * Add a div with an audio element called 'audio' in your html body,

      `<div id="audio"></div>`

 * Call speak() to say stuff in JavaScript

      `speak('hello world!')`

Options
-------

You can also specify some options with calling speak(), by doing

      `speak('hello world', { option1: value1, option2: value2 .. })`

available options are:

 * amplitude: How loud the voice will be (default: 100)
 * pitch: The voice pitch (default: 50)
 * speed: The speed at which to talk (words per minute) (default: 175)
 * voice: Which voice to use (for a non-default voice, requires you to
          build speak.js to include the proper data. See Language Support
          below) (default: en/en-us)
 * wordgap: Additional gap between words in 10 ms units (default: 0)
 * noWorker: Do not use a web worker (see below in 'Architecture')

For example

      `speak('hello world', { pitch: 100 })`

will talk in a very high-pitched voice.

Architecture
------------

speakClient.js is the file that you interact with. It defines speak(), and
will load speakWorker.js in a web worker. speakWorker wraps around
speakGenerator.js, which does the actual work of converting a string into
a WAV file. The WAV data is returned to speak(), which then plays it in
an HTML Audio element.

You can also use speak.js without a web worker. In that case, you don't
need speakWorker.js, but you do need to load speakGenerator.js along
with speakClient.js in your HTML page. speak(), if called with noWorker
set to true in the options object, will directly call the WAV generation
code in speakGenerator.js instead of forwarding the call to a worker
which would have done the same.

Language Support
----------------

eSpeak supports multiple languages so speak.js can too. To do this, you
need to build a custom version of speak.js:

You then need to call speak() with the `voice` option that tells it to use the
right voice for your language. For example, for French this should work:

      `speak('boulanger', { voice: 'fr' })`







## Snap.js
### framework menu
##Snap.js

__Кратко__

Библиотека для создания веб страниц, использует шаблон.


* [Прискр](data/Snap.js-develop/demo/index.html)

# Snap.js
A Library for creating beautiful mobile shelfs in Javascript

<a href="http://www.screenr.com/embed/0EJ7" target="_blank">View Video Preview</a>

<a href="http://jakiestfu.github.io/Snap.js/" target="_blank">View Demos</a>

<a href="http://www.screenr.com/embed/0EJ7" target="_blank"><img src="http://i.imgur.com/t3mGcEx.gif"></a>

* [Features](#features)
* [Support](#support)
* [Installation](#installation)
* [Usage](#usage)
* [Settings &amp; Defaults](#settings-and-defaults)
* [Public Methods](#public-methods)
* [Gotchas](#gotchas)
* [FAQ's](#faq)
* [Compliments](#compliments)
* [Licensing](#licensing)
* [Extras](#extras)

## Features
* Library Independent
* High Customization
* Flick Support
* User Intent Detection
* Disable Hyperextension
* Event Hooks
* CSS3 Powered Animations with IE fallbacks
* Drag Support
* Drag Handle Support
* Programatic API
* "No-Drag" Elements
* Definable Easing Mode
* Enable/Disable Events
* Disabled Sides (left or right)
* Supports [Ratchet](http://maker.github.com/ratchet/) (with templates!)

## Support
* Firefox 10+
* Wide Webkit Support (including Android WebKit 2.3.X)
* IE 10
* IE 9 Supports Toggling, Dragging but no Transitions
* IE 7/8 Supports Toggling but no dragging or Transitions

## Installation

As standalone just include the file in a script tag:

```html
<script src="snap.js"></script>
```

As a <a href="http://component.io" target="_blank">web component</a> do:

```shell
$ component install jakiestfu/Snap.js
```

## Usage

```javascript
var snapper = new Snap({
  element: document.getElementById('content')
});
```

## Settings and Defaults
```javascript
settings = {
    element: null,
    dragger: null,
    disable: 'none',
    addBodyClasses: true,
    hyperextensible: true,
    resistance: 0.5,
    flickThreshold: 50,
    transitionSpeed: 0.3,
    easing: 'ease',
    maxPosition: 266,
    minPosition: -266,
    tapToClose: true,
    touchToDrag: true,
    slideIntent: 40,
    minDragDistance: 5
}
```

* `element`: The element which the user will be sliding side to side
* `dragger`: The element which the user will be using to slide the target element side to side
* `disable`: String, set to 'left' or 'right' to disable the respective side
* `addBodyClasses`: Add classes to the body to signify which side is being opened
* `hyperextensible`: If false, pane may not be slide past the minPosition and maxPosition
* `resistance`: The cooeficcient used to slow sliding when user has passed max or min threshold
* `flickThreshold`: Number of pixels the user needs to swiftly travel to activate a "flick" open
* `transitionSpeed`: The speed at which the pane slides open or closed
* `easing`: The CSS3 Easing method you want to use for transitions
* `maxPosition`: Maximum number of pixels the pane may be slid to the right
* `minPosition`: Maximum number of pixels the pane may be slid to the left
* `tapToClose`: If true, tapping an open pane will close it
* `touchToDrag`: If true, dragging the target `settings.element` will open/close the pane
* `minDragDistance`: The minimum amount of pixels the user needs to drag within the `slideIntent` degrees to move the pane 
* `slideIntent`: The number of degrees the user must initiate sliding in towards the left or right (see diagram below)

Notes on Slide Intent: The slide intent is an int between 0 and 90, and represents the degrees in the first quadrant of a circle that you would like to have mirrored on the X *and* Y axis. For example, if you have 40 set as your `slideIntent` value, the user would only be able to slide the pane by dragging in the blue area in the diagram below. Once intent has been defined, it will not change until the user releases.

<img src="http://i.imgur.com/uG2CNR8.png">


## Public Methods

### `open`: Opens the pane to the specified side

```javascript
snapper.open('left');
// OR
snapper.open('right');
```

### `close`: Closes the pane

```javascript
snapper.close();
```

### `expand`: Opens the pane entirely

```javascript
snapper.expand('left');
// OR
snapper.expand('right');
```

### `disable`: Disables sliding events

```javascript
snapper.disable();
```

### `enable`: Enables sliding events after disabling

```javascript
snapper.enable();
```

### `on`: Adds an event hook

```javascript
snapper.on('start', function(){
  // Do Something
});
```
The available methods to hook into are as follows:

* `start`: Fired when touching down on the draggable pane and it begins to move
* `drag`: Fired when the pane has been moved or slid
* `end`: Fired when the pane has been let go of
* `animating`: Fired when the pane is animating
* `animated`: Fired when the pane is finished it's animations
* `ignore`: Fired when trying to drag the pane but ended up dragging on an ignored element
* `close`: Fired when close is called directly or if tapToClose is set to true
* `open`: Fired when the menu is opened
* `expandLeft`: Fired on expand('left')
* `expandRight`: Fired on expand('right')
* `enable`: Fired on enable
* `disable`: Fired on disable

### `off`: Removes an event hook

```javascript
snapper.off('drag');
```
The event names listed above apply for the `off` method.


### `settings`: Updates the settings for an already instantiated object
```javascript
snapper.settings({yourSettings});
```
Currently, `settings.element`, `settings.touchToDrag` cannot be updated. To update the element, instantiate a new object. To allow listening to a drag, use `snapper.enable()`

### `state`: Returns detailed information about the state of the pane

```javascript
var data = snapper.state();
```
The data returned from the `state` method will look like the following:

```javascript
{
    state: "closed", // State of the Pane
    info:{
        opening: "left", // Side which user intends to open
        towards: "right", // Direction user is dragging towards
        hyperExtending: false, // True if user is pulling past predefined bounds
        halfway: false, // True if pane is at least halfway open
        flick: false, // True if user has moved pane X amount of pixels in the open/close direction without changing directions
        translation:{
            absolute: 20, // Pixels pane has translated
            relative: 21, // Pixels pane has translated relative to starting translation
            sinceDirectionChange: 10, // Pixels pane has translated since the direction of the pane has changed
            percentage: 40.571649 // The percentage that the Pane is open. Good or animating other things
        }
    }
} 
```

## Gotchas

### Layout
The layout itself is what most people will have a hard time emulating, so the simplest approach I have found is as follows:

Two absolute elements, one to represent *all* the content, and another to represent *all* the drawers. The content has a higher z-index than the drawers. Within the drawers element, it's direct children should represent the containers for the drawers, these should be `fixed` or `absolute`. Assigning classes to your drawers to specify which side it is on is recommended. All absolutely positioned elements should have 0 for `top, left, right, bottom` properties, excluding your panes which will have `auto` set to their respective sides and a width assigned. The width of your drawers is usually the same number you want to use for `minPosition` and `maxPosition`

```html
div.drawers {position: absolute;}
    div.left-drawer  {position: absolute;}
        [content]
    div.right-drawer  {position: absolute;}
        [content]
div#content {position: absolute;}
    [top-bars]
    [content] {overflow: auto}
    [bottom-bars]
```

A sample layout is found in demo/apps/default.html.

### Independent Scrolling
Some CSS is required to get some smooth ass scrolling. Utilize the CSS below to apply this to any of your elements:
```css
.scrollable{
    overflow: auto;
    -webkit-transition-property: top, bottom;
    transition-property: top, bottom;
    -webkit-transition-duration: .2s, .2s;
    transition-duration: .2s, .2s;
    -webkit-transition-timing-function: linear, linear;
    transition-timing-function: linear, linear;
    -webkit-overflow-scrolling: touch;
}
```

### Z-Indeces and Display
Because of the nature of this code, drawers are just kind of stacked behind the content. To bring the proper drawer to the front, you can hook into Snaps.js' CSS classes:

With `addBodyClasses` set to `true` in your initialize options, one of the two classess will be added to the body tag: `.snapjs-left` or `.snapjs-right`, depending on which pane is being open, respectively. This being said, you can apply your CSS like the following to show the proper drawers:

```css
.snapjs-right .left-drawer,
.snapjs-left .right-drawer {
    display: none;
}
```

## FAQ

### - How do I make a toggle button?
Toggles have been a popular request, but rather than bog the library down with additional methods, you can utilize the powerful API of Snap.js to create your own toggle. Toggles can be done like the following:

```javascript
myToggleButton.addEventListener('click', function(){

    if( snapper.state().state=="left" ){
        snapper.close();
    } else {
        snapper.open('left');
    }

});
```

### - How do I disable Snap.js dragging for my touch slider?
Snap.js supports cascading cancellation of events via a data attribute `data-snap-ignore`. If you were to use a slider, your markup might look like the following:

```html
<div class="slider" data-snap-ignore="true">
    <ul>
        <li><img src="slide.jpg"></li>
        <li><img src="slide.jpg"></li>
        <li><img src="slide.jpg"></li>
        <li><img src="slide.jpg"></li>
        <li><img src="slide.jpg"></li>
    </ul>
</div>
```

All interactions on children elements of the element with the `data-snap-ignore` attribute will have their Snap.js events ignored.


### - I am using Push.js from Ratchet, I keep losing my events on my elements, how can I fix this?
Simple. As wack as Push.js is (yes, it is in desperate need of attention as of v1.0.0), we can still solve this problem with it's only callback, `'push'`.

```javascript
// The function that will initialize your Snap.js instance
var doSnap = function(){
    if(window.snapper){
         // Snap.js already exists, we just need to re-bind events
        window.snapper.enable();
    } else {
        // Initialize Snap.js
        window.snapper = new Snap({
            element: document.getElementById('content')
        });
    } 
};

window.addEventListener('push', doSnap);
doSnap();
```

### - Snap.js works on my Android device but i cannot scroll the content in my drawers, what gives?
Older Android devices (and iPhone as well) do not have native support for overflow scrolling. To solve this, you may use the wonderful library called [iScroll](https://github.com/cubiq/iscroll)

### - `transform: translate3d()` breaks my fixed child elements, how can I solve this?
[This is a problem with Chromium](https://code.google.com/p/chromium/issues/detail?id=20574) and should be fixed soon. I would advise not having your direct children element set to fixed, that may possibly solve your problem.

### - I am experiencing a weird flicker when the CSS transform is applied
To solve the flicker, apply the following CSS to the element in question
```css
#content{
    backface-visibility:hidden;
    -webkit-backface-visibility:hidden; /* Chrome and Safari */
    -moz-backface-visibility:hidden; /* Firefox */
    -ms-backface-visibility:hidden; /* Internet Explorer 10+ */
}
```

## Compliments

This code attempts to make your webapp's feel more "native". These other repos go well with it, too!

* [Snap.js](https://github.com/jakiestfu/Snap.js)
* [AppScroll.js](https://github.com/jakiestfu/AppScroll)
* [fastclick](https://github.com/ftlabs/fastclick)

## Licensing

MIT, dawg
ap.js

Небольщая библиотека для создания веб-приложений.
Фактически предлагает определенный шаблон.


* [Пример](data/Snap.js-develop/demo/index.html)


__readme_


## reveal.js
### presentation
##reveal.js

__Кратко__

Библиотека для подготовки презентаций

* [Пример](data/reveal.js-master/index.html)


__readme__


# reveal.js [![Build Status](https://travis-ci.org/hakimel/reveal.js.png?branch=master)](https://travis-ci.org/hakimel/reveal.js)

A framework for easily creating beautiful presentations using HTML. [Check out the live demo](http://lab.hakim.se/reveal-js/).

reveal.js comes with a broad range of features including [nested slides](https://github.com/hakimel/reveal.js#markup), [markdown contents](https://github.com/hakimel/reveal.js#markdown), [PDF export](https://github.com/hakimel/reveal.js#pdf-export), [speaker notes](https://github.com/hakimel/reveal.js#speaker-notes) and a [JavaScript API](https://github.com/hakimel/reveal.js#api). It's best viewed in a browser with support for CSS 3D transforms but [fallbacks](https://github.com/hakimel/reveal.js/wiki/Browser-Support) are available to make sure your presentation can still be viewed elsewhere.


#### More reading:
- [Installation](#installation): Step-by-step instructions for getting reveal.js running on your computer.
- [Changelog](https://github.com/hakimel/reveal.js/releases): Up-to-date version history.
- [Examples](https://github.com/hakimel/reveal.js/wiki/Example-Presentations): Presentations created with reveal.js, add your own!
- [Browser Support](https://github.com/hakimel/reveal.js/wiki/Browser-Support): Explanation of browser support and fallbacks.

## Online Editor

Presentations are written using HTML or markdown but there's also an online editor for those of you who prefer a graphical interface. Give it a try at [http://slid.es](http://slid.es).


## Instructions

### Markup

Markup hierarchy needs to be ``<div class="reveal"> <div class="slides"> <section>`` where the ``<section>`` represents one slide and can be repeated indefinitely. If you place multiple ``<section>``'s inside of another ``<section>`` they will be shown as vertical slides. The first of the vertical slides is the "root" of the others (at the top), and it will be included in the horizontal sequence. For example:

```html
<div class="reveal">
	<div class="slides">
		<section>Single Horizontal Slide</section>
		<section>
			<section>Vertical Slide 1</section>
			<section>Vertical Slide 2</section>
		</section>
	</div>
</div>
```

### Markdown

It's possible to write your slides using Markdown. To enable Markdown, add the ```data-markdown``` attribute to your ```<section>``` elements and wrap the contents in a ```<script type="text/template">``` like the example below.

This is based on [data-markdown](https://gist.github.com/1343518) from [Paul Irish](https://github.com/paulirish) modified to use [marked](https://github.com/chjj/marked) to support [Github Flavoured Markdown](https://help.github.com/articles/github-flavored-markdown). Sensitive to indentation (avoid mixing tabs and spaces) and line breaks (avoid consecutive breaks).

```html
<section data-markdown>
	<script type="text/template">
		## Page title

		A paragraph with some text and a [link](http://hakim.se).
	</script>
</section>
```

#### External Markdown

You can write your content as a separate file and have reveal.js load it at runtime. Note the separator arguments which determine how slides are delimited in the external file. The ```data-charset``` attribute is optional and specifies which charset to use when loading the external file.

When used locally, this feature requires that reveal.js [runs from a local web server](#full-setup).

```html
<section data-markdown="example.md"  
         data-separator="^\n\n\n"  
         data-vertical="^\n\n"  
         data-notes="^Note:"  
         data-charset="iso-8859-15">
</section>
```

#### Element Attributes

Special syntax (in html comment) is available for adding attributes to Markdown elements. This is useful for fragments, amongst other things.

```html
<section data-markdown>
	<script type="text/template">
		- Item 1 <!-- .element: class="fragment" data-fragment-index="2" -->
		- Item 2 <!-- .element: class="fragment" data-fragment-index="1" -->
	</script>
</section>
```

#### Slide Attributes

Special syntax (in html comment) is available for adding attributes to the slide `<section>` elements generated by your Markdown.

```html
<section data-markdown>
	<script type="text/template">
	<!-- .slide: data-background="#ff0000" -->
		Markdown content
	</script>
</section>
```


### Configuration

At the end of your page you need to initialize reveal by running the following code. Note that all config values are optional and will default as specified below.

```javascript
Reveal.initialize({

	// Display controls in the bottom right corner
	controls: true,

	// Display a presentation progress bar
	progress: true,

	// Display the page number of the current slide
	slideNumber: false,

	// Push each slide change to the browser history
	history: false,

	// Enable keyboard shortcuts for navigation
	keyboard: true,

	// Enable the slide overview mode
	overview: true,

	// Vertical centering of slides
	center: true,

	// Enables touch navigation on devices with touch input
	touch: true,

	// Loop the presentation
	loop: false,

	// Change the presentation direction to be RTL
	rtl: false,

	// Turns fragments on and off globally
	fragments: true,

	// Flags if the presentation is running in an embedded mode,
	// i.e. contained within a limited portion of the screen
	embedded: false,

	// Number of milliseconds between automatically proceeding to the
	// next slide, disabled when set to 0, this value can be overwritten
	// by using a data-autoslide attribute on your slides
	autoSlide: 0,

	// Stop auto-sliding after user input
	autoSlideStoppable: true,

	// Enable slide navigation via mouse wheel
	mouseWheel: false,

	// Hides the address bar on mobile devices
	hideAddressBar: true,

	// Opens links in an iframe preview overlay
	previewLinks: false,

	// Transition style
	transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

	// Transition speed
	transitionSpeed: 'default', // default/fast/slow

	// Transition style for full page slide backgrounds
	backgroundTransition: 'default', // default/none/slide/concave/convex/zoom

	// Number of slides away from the current that are visible
	viewDistance: 3,

	// Parallax background image
	parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

	// Parallax background size
	parallaxBackgroundSize: '' // CSS syntax, e.g. "2100px 900px"


});
```

Note that the new default vertical centering option will break compatibility with slides that were using transitions with backgrounds (`cube` and `page`). To restore the previous behavior, set `center` to `false`.


The configuration can be updated after initialization using the ```configure``` method:

```javascript
// Turn autoSlide off
Reveal.configure({ autoSlide: 0 });

// Start auto-sliding every 5s
Reveal.configure({ autoSlide: 5000 });
```


### Dependencies

Reveal.js doesn't _rely_ on any third party scripts to work but a few optional libraries are included by default. These libraries are loaded as dependencies in the order they appear, for example:

```javascript
Reveal.initialize({
	dependencies: [
		// Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
		{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },

		// Interpret Markdown in <section> elements
		{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

		// Syntax highlight for <code> elements
		{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

		// Zoom in and out with Alt+click
		{ src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },

		// Speaker notes
		{ src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },

		// Remote control your reveal.js presentation using a touch device
		{ src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } },

		// MathJax
		{ src: 'plugin/math/math.js', async: true }
	]
});
```

You can add your own extensions using the same syntax. The following properties are available for each dependency object:
- **src**: Path to the script to load
- **async**: [optional] Flags if the script should load after reveal.js has started, defaults to false
- **callback**: [optional] Function to execute when the script has loaded
- **condition**: [optional] Function which must return true for the script to be loaded


### Presentation Size

All presentations have a normal size, that is the resolution at which they are authored. The framework will automatically scale presentations uniformly based on this size to ensure that everything fits on any given display or viewport.

See below for a list of configuration options related to sizing, including default values:

```javascript
Reveal.initialize({

	...

	// The "normal" size of the presentation, aspect ratio will be preserved
	// when the presentation is scaled to fit different resolutions. Can be
	// specified using percentage units.
	width: 960,
	height: 700,

	// Factor of the display size that should remain empty around the content
	margin: 0.1,

	// Bounds for smallest/largest possible scale to apply to content
	minScale: 0.2,
	maxScale: 1.0

});
```


### Auto-sliding

Presentations can be configure to progress through slides automatically, without any user input. To enable this you will need to tell the framework how many milliseconds it should wait between slides:

```javascript
// Slide every five seconds
Reveal.configure({
  autoSlide: 5000
});
```

When this is turned on a control element will appear that enables users to pause and resume auto-sliding. Sliding is also paused automatically as soon as the user starts navigating. You can disable these controls by specifying ```autoSlideStoppable: false``` in your reveal.js config.

You can also override the slide duration for individual slides by using the ```data-autoslide``` attribute on individual sections:

```html
<section data-autoslide="10000">This will remain on screen for 10 seconds</section>
```


### Keyboard Bindings

If you're unhappy with any of the default keyboard bindings you can override them using the ```keyboard``` config option:

```javascript
Reveal.configure({
  keyboard: {
    13: 'next', // go to the next slide when the ENTER key is pressed
    27: function() {}, // do something custom when ESC is pressed
    32: null // don't do anything when SPACE is pressed (i.e. disable a reveal.js default binding)
  }
});
```


### API

The ``Reveal`` class provides a JavaScript API for controlling navigation and reading state:

```javascript
// Navigation
Reveal.slide( indexh, indexv, indexf );
Reveal.left();
Reveal.right();
Reveal.up();
Reveal.down();
Reveal.prev();
Reveal.next();
Reveal.prevFragment();
Reveal.nextFragment();
Reveal.toggleOverview();
Reveal.togglePause();

// Retrieves the previous and current slide elements
Reveal.getPreviousSlide();
Reveal.getCurrentSlide();

Reveal.getIndices(); // { h: 0, v: 0 } }

// State checks
Reveal.isFirstSlide();
Reveal.isLastSlide();
Reveal.isOverview();
Reveal.isPaused();
```

### Ready Event

The 'ready' event is fired when reveal.js has loaded all (synchronous) dependencies and is ready to start navigating.

```javascript
Reveal.addEventListener( 'ready', function( event ) {
	// event.currentSlide, event.indexh, event.indexv
} );
```

### Slide Changed Event

An 'slidechanged' event is fired each time the slide is changed (regardless of state). The event object holds the index values of the current slide as well as a reference to the previous and current slide HTML nodes.

Some libraries, like MathJax (see [#226](https://github.com/hakimel/reveal.js/issues/226#issuecomment-10261609)), get confused by the transforms and display states of slides. Often times, this can be fixed by calling their update or render function from this callback.

```javascript
Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.previousSlide, event.currentSlide, event.indexh, event.indexv
} );
```


### States

If you set ``data-state="somestate"`` on a slide ``<section>``, "somestate" will be applied as a class on the document element when that slide is opened. This allows you to apply broad style changes to the page based on the active slide.

Furthermore you can also listen to these changes in state via JavaScript:

```javascript
Reveal.addEventListener( 'somestate', function() {
	// TODO: Sprinkle magic
}, false );
```

### Slide Backgrounds

Slides are contained within a limited portion of the screen by default to allow them to fit any display and scale uniformly. You can apply full page background colors or images by applying a ```data-background``` attribute to your ```<section>``` elements. Below are a few examples.

```html
<section data-background="#ff0000">
	<h2>All CSS color formats are supported, like rgba() or hsl().</h2>
</section>
<section data-background="http://example.com/image.png">
	<h2>This slide will have a full-size background image.</h2>
</section>
<section data-background="http://example.com/image.png" data-background-size="100px" data-background-repeat="repeat">
	<h2>This background image will be sized to 100px and repeated.</h2>
</section>
```

Backgrounds transition using a fade animation by default. This can be changed to a linear sliding transition by passing ```backgroundTransition: 'slide'``` to the ```Reveal.initialize()``` call. Alternatively you can set ```data-background-transition``` on any section with a background to override that specific transition.


### Parallax Background

If you want to use a parallax scrolling background, set the two following config properties when initializing reveal.js (the third one is optional).

```javascript
Reveal.initialize({

	// Parallax background image
	parallaxBackgroundImage: '', // e.g. "https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg"

	// Parallax background size
	parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px" - currently only pixels are supported (don't use % or auto)

	// This slide transition gives best results:
	transition: linear

});
```

Make sure that the background size is much bigger than screen size to allow for some scrolling. [View example](http://lab.hakim.se/reveal-js/?parallaxBackgroundImage=https%3A%2F%2Fs3.amazonaws.com%2Fhakim-static%2Freveal-js%2Freveal-parallax-1.jpg&parallaxBackgroundSize=2100px%20900px).



### Slide Transitions
The global presentation transition is set using the ```transition``` config value. You can override the global transition for a specific slide by using the ```data-transition``` attribute:

```html
<section data-transition="zoom">
	<h2>This slide will override the presentation transition and zoom!</h2>
</section>

<section data-transition-speed="fast">
	<h2>Choose from three transition speeds: default, fast or slow!</h2>
</section>
```

Note that this does not work with the page and cube transitions.


### Internal links

It's easy to link between slides. The first example below targets the index of another slide whereas the second targets a slide with an ID attribute (```<section id="some-slide">```):

```html
<a href="#/2/2">Link</a>
<a href="#/some-slide">Link</a>
```

You can also add relative navigation links, similar to the built in reveal.js controls, by appending one of the following classes on any element. Note that each element is automatically given an ```enabled``` class when it's a valid navigation route based on the current slide.

```html
<a href="#" class="navigate-left">
<a href="#" class="navigate-right">
<a href="#" class="navigate-up">
<a href="#" class="navigate-down">
<a href="#" class="navigate-prev"> <!-- Previous vertical or horizontal slide -->
<a href="#" class="navigate-next"> <!-- Next vertical or horizontal slide -->
```


### Fragments
Fragments are used to highlight individual elements on a slide. Every element with the class ```fragment``` will be stepped through before moving on to the next slide. Here's an example: http://lab.hakim.se/reveal-js/#/fragments

The default fragment style is to start out invisible and fade in. This style can be changed by appending a different class to the fragment:

```html
<section>
	<p class="fragment grow">grow</p>
	<p class="fragment shrink">shrink</p>
	<p class="fragment roll-in">roll-in</p>
	<p class="fragment fade-out">fade-out</p>
	<p class="fragment current-visible">visible only once</p>
	<p class="fragment highlight-current-blue">blue only once</p>
	<p class="fragment highlight-red">highlight-red</p>
	<p class="fragment highlight-green">highlight-green</p>
	<p class="fragment highlight-blue">highlight-blue</p>
</section>
```

Multiple fragments can be applied to the same element sequentially by wrapping it, this will fade in the text on the first step and fade it back out on the second.

```html
<section>
	<span class="fragment fade-in">
		<span class="fragment fade-out">I'll fade in, then out</span>
	</span>
</section>
```

The display order of fragments can be controlled using the ```data-fragment-index``` attribute.

```html
<section>
	<p class="fragment" data-fragment-index="3">Appears last</p>
	<p class="fragment" data-fragment-index="1">Appears first</p>
	<p class="fragment" data-fragment-index="2">Appears second</p>
</section>
```

### Fragment events

When a slide fragment is either shown or hidden reveal.js will dispatch an event.

Some libraries, like MathJax (see #505), get confused by the initially hidden fragment elements. Often times this can be fixed by calling their update or render function from this callback.

```javascript
Reveal.addEventListener( 'fragmentshown', function( event ) {
	// event.fragment = the fragment DOM element
} );
Reveal.addEventListener( 'fragmenthidden', function( event ) {
	// event.fragment = the fragment DOM element
} );
```

### Code syntax highlighting

By default, Reveal is configured with [highlight.js](http://softwaremaniacs.org/soft/highlight/en/) for code syntax highlighting. Below is an example with clojure code that will be syntax highlighted. When the `data-trim` attribute is present surrounding whitespace is automatically removed.

```html
<section>
	<pre><code data-trim>
(def lazy-fib
  (concat
   [0 1]
   ((fn rfib [a b]
        (lazy-cons (+ a b) (rfib b (+ a b)))) 0 1)))
	</code></pre>
</section>
```

### Slide number
If you would like to display the page number of the current slide you can do so using the ```slideNumber``` configuration value.

```javascript
Reveal.configure({ slideNumber: true });
```


### Overview mode

Press "Esc" or "o" keys to toggle the overview mode on and off. While you're in this mode, you can still navigate between slides,
as if you were at 1,000 feet above your presentation. The overview mode comes with a few API hooks:

```javascript
Reveal.addEventListener( 'overviewshown', function( event ) { /* ... */ } );
Reveal.addEventListener( 'overviewhidden', function( event ) { /* ... */ } );

// Toggle the overview mode programmatically
Reveal.toggleOverview();
```

### Fullscreen mode
Just press В»FВ« on your keyboard to show your presentation in fullscreen mode. Press the В»ESCВ« key to exit fullscreen mode.


### Embedded media
Embedded HTML5 `<video>`/`<audio>` and YouTube iframes are automatically paused when you navigate away from a slide. This can be disabled by decorating your element with a `data-ignore` attribute.

Add `data-autoplay` to your media element if you want it to automatically start playing when the slide is shown:

```html
<video data-autoplay src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
```

Additionally the framework automatically pushes two [post messages](https://developer.mozilla.org/en-US/docs/Web/API/Window.postMessage) to all iframes, ```slide:start``` when the slide containing the iframe is made visible and ```slide:stop``` when it is hidden.


### Stretching elements
Sometimes it's desirable to have an element, like an image or video, stretch to consume as much space as possible within a given slide. This can be done by adding the ```.stretch``` class to an element as seen below:

```html
<section>
	<h2>This video will use up the remaining space on the slide</h2>
    <video class="stretch" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
</section>
```

Limitations:
- Only direct descendants of a slide section can be stretched
- Only one descendant per slide section can be stretched


## PDF Export

Presentations can be exported to PDF via a special print stylesheet. This feature requires that you use [Google Chrome](http://google.com/chrome).
Here's an example of an exported presentation that's been uploaded to SlideShare: http://www.slideshare.net/hakimel/revealjs-13872948.

1. Open your presentation with [css/print/pdf.css](https://github.com/hakimel/reveal.js/blob/master/css/print/pdf.css) included on the page. The default index HTML lets you add *print-pdf* anywhere in the query to include the stylesheet, for example: [lab.hakim.se/reveal-js?print-pdf](http://lab.hakim.se/reveal-js?print-pdf).
2. Open the in-browser print dialog (CMD+P).
3. Change the **Destination** setting to **Save as PDF**.
4. Change the **Layout** to **Landscape**.
5. Change the **Margins** to **None**.
6. Click **Save**.

![Chrome Print Settings](https://s3.amazonaws.com/hakim-static/reveal-js/pdf-print-settings.png)

## Theming

The framework comes with a few different themes included:

- default: Gray background, white text, blue links
- beige: Beige background, dark text, brown links
- sky: Blue background, thin white text, blue links
- night: Black background, thick white text, orange links
- serif: Cappuccino background, gray text, brown links
- simple: White background, black text, blue links
- solarized: Cream-colored background, dark green text, blue links

Each theme is available as a separate stylesheet. To change theme you will need to replace **default** below with your desired theme name in index.html:

```html
<link rel="stylesheet" href="css/theme/default.css" id="theme">
```

If you want to add a theme of your own see the instructions here: [/css/theme/README.md](https://github.com/hakimel/reveal.js/blob/master/css/theme/README.md).


## Speaker Notes

reveal.js comes with a speaker notes plugin which can be used to present per-slide notes in a separate browser window. The notes window also gives you a preview of the next upcoming slide so it may be helpful even if you haven't written any notes. Press the 's' key on your keyboard to open the notes window.

Notes are defined by appending an ```<aside>``` element to a slide as seen below. You can add the ```data-markdown``` attribute to the aside element if you prefer writing notes using Markdown.

When used locally, this feature requires that reveal.js [runs from a local web server](#full-setup).

```html
<section>
	<h2>Some Slide</h2>

	<aside class="notes">
		Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them if you open the speaker notes window (hit 's' on your keyboard).
	</aside>
</section>
```

If you're using the external Markdown plugin, you can add notes with the help of a special delimiter:

```html
<section data-markdown="example.md" data-separator="^\n\n\n" data-vertical="^\n\n" data-notes="^Note:"></section>

# Title
## Sub-title

Here is some content...

Note:
This will only display in the notes window.
```

## Server Side Speaker Notes

In some cases it can be desirable to run notes on a separate device from the one you're presenting on. The Node.js-based notes plugin lets you do this using the same note definitions as its client side counterpart. Include the required scripts by adding the following dependencies:

```javascript
Reveal.initialize({
	...

	dependencies: [
		{ src: 'socket.io/socket.io.js', async: true },
		{ src: 'plugin/notes-server/client.js', async: true }
	]
});
```

Then:

1. Install [Node.js](http://nodejs.org/)
2. Run ```npm install```
3. Run ```node plugin/notes-server```


## Multiplexing

The multiplex plugin allows your audience to view the slides of the presentation you are controlling on their own phone, tablet or laptop. As the master presentation navigates the slides, all client presentations will update in real time. See a demo at [http://revealjs.jit.su/](http://revealjs.jit.su).

The multiplex plugin needs the following 3 things to operate:

1. Master presentation that has control
2. Client presentations that follow the master
3. Socket.io server to broadcast events from the master to the clients

More details:

#### Master presentation
Served from a static file server accessible (preferably) only to the presenter. This need only be on your (the presenter's) computer. (It's safer to run the master presentation from your own computer, so if the venue's Internet goes down it doesn't stop the show.) An example would be to execute the following commands in the directory of your master presentation: 

1. ```npm install node-static```
2. ```static```

If you want to use the speaker notes plugin with your master presentation then make sure you have the speaker notes plugin configured correctly along with the configuration shown below, then execute ```node plugin/notes-server``` in the directory of your master presentation. The configuration below will cause it to connect to the socket.io server as a master, as well as launch your speaker-notes/static-file server.

You can then access your master presentation at ```http://localhost:1947```

Example configuration:
```javascript
Reveal.initialize({
	// other options...

	multiplex: {
		// Example values. To generate your own, see the socket.io server instructions.
		secret: '13652805320794272084', // Obtained from the socket.io server. Gives this (the master) control of the presentation
		id: '1ea875674b17ca76', // Obtained from socket.io server
		url: 'revealjs.jit.su:80' // Location of socket.io server
	},

	// Don't forget to add the dependencies
	dependencies: [
		{ src: '//cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.10/socket.io.min.js', async: true },
		{ src: 'plugin/multiplex/master.js', async: true },

		// and if you want speaker notes
		{ src: 'plugin/notes-server/client.js', async: true }

		// other dependencies...
	]
});
```

#### Client presentation
Served from a publicly accessible static file server. Examples include: GitHub Pages, Amazon S3, Dreamhost, Akamai, etc. The more reliable, the better. Your audience can then access the client presentation via ```http://example.com/path/to/presentation/client/index.html```, with the configuration below causing them to connect to the socket.io server as clients.

Example configuration:
```javascript
Reveal.initialize({
	// other options...

	multiplex: {
		// Example values. To generate your own, see the socket.io server instructions.
		secret: null, // null so the clients do not have control of the master presentation
		id: '1ea875674b17ca76', // id, obtained from socket.io server
		url: 'revealjs.jit.su:80' // Location of socket.io server
	},

	// Don't forget to add the dependencies
	dependencies: [
		{ src: '//cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.10/socket.io.min.js', async: true },
		{ src: 'plugin/multiplex/client.js', async: true }

		// other dependencies...
	]
});
```

#### Socket.io server
Server that receives the slideChanged events from the master presentation and broadcasts them out to the connected client presentations. This needs to be publicly accessible. You can run your own socket.io server with the commands:

1. ```npm install```
2. ```node plugin/multiplex```

Or you use the socket.io server at [http://revealjs.jit.su](http://revealjs.jit.su).

You'll need to generate a unique secret and token pair for your master and client presentations. To do so, visit ```http://example.com/token```, where ```http://example.com``` is the location of your socket.io server. Or if you're going to use the socket.io server at [http://revealjs.jit.su](http://revealjs.jit.su), visit [http://revealjs.jit.su/token](http://revealjs.jit.su/token).

You are very welcome to point your presentations at the Socket.io server running at [http://revealjs.jit.su](http://revealjs.jit.su), but availability and stability are not guaranteed. For anything mission critical I recommend you run your own server. It is simple to deploy to nodejitsu, heroku, your own environment, etc.

##### socket.io server as file static server

The socket.io server can play the role of static file server for your client presentation, as in the example at [http://revealjs.jit.su](http://revealjs.jit.su). (Open [http://revealjs.jit.su](http://revealjs.jit.su) in two browsers. Navigate through the slides on one, and the other will update to match.) 

Example configuration:
```javascript
Reveal.initialize({
	// other options...

	multiplex: {
		// Example values. To generate your own, see the socket.io server instructions.
		secret: null, // null so the clients do not have control of the master presentation
		id: '1ea875674b17ca76', // id, obtained from socket.io server
		url: 'example.com:80' // Location of your socket.io server
	},

	// Don't forget to add the dependencies
	dependencies: [
		{ src: '//cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.10/socket.io.min.js', async: true },
		{ src: 'plugin/multiplex/client.js', async: true }

		// other dependencies...
	]
```

It can also play the role of static file server for your master presentation and client presentations at the same time (as long as you don't want to use speaker notes). (Open [http://revealjs.jit.su](http://revealjs.jit.su) in two browsers. Navigate through the slides on one, and the other will update to match. Navigate through the slides on the second, and the first will update to match.) This is probably not desirable, because you don't want your audience to mess with your slides while you're presenting. ;)

Example configuration:
```javascript
Reveal.initialize({
	// other options...

	multiplex: {
		// Example values. To generate your own, see the socket.io server instructions.
		secret: '13652805320794272084', // Obtained from the socket.io server. Gives this (the master) control of the presentation
		id: '1ea875674b17ca76', // Obtained from socket.io server
		url: 'example.com:80' // Location of your socket.io server
	},

	// Don't forget to add the dependencies
	dependencies: [
		{ src: '//cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.10/socket.io.min.js', async: true },
		{ src: 'plugin/multiplex/master.js', async: true },
		{ src: 'plugin/multiplex/client.js', async: true }

		// other dependencies...
	]
});
```

## Leap Motion
The Leap Motion plugin lets you utilize your [Leap Motion](https://www.leapmotion.com/) device to control basic navigation of your presentation. The gestures currently supported are:

##### 1 to 2 fingers
Pointer &mdash; Point to anything on screen. Move your finger past the device to expand the pointer.

##### 1 hand + 3 or more fingers (left/right/up/down)
Navigate through your slides. See config options to invert movements.

##### 2 hands upwards
Toggle the overview mode. Do it a second time to exit the overview.

#### Config Options
You can edit the following options:

| Property          | Default           | Description
| ----------------- |:-----------------:| :-------------
| autoCenter        | true              | Center the pointer based on where you put your finger into the leap motions detection field.
| gestureDelay      | 500               | How long to delay between gestures in milliseconds.
| naturalSwipe      | true              | Swipe as though you were touching a touch screen. Set to false to invert.
| pointerColor      | #00aaff           | The color of the pointer.
| pointerOpacity    | 0.7               | The opacity of the pointer.
| pointerSize       | 15                | The minimum height and width of the pointer.
| pointerTolerance  | 120               | Bigger = slower pointer.


Example configuration:
```js
Reveal.initialize({

	// other options...

	leap: {
		naturalSwipe   : false,    // Invert swipe gestures
		pointerOpacity : 0.5,      // Set pointer opacity to 0.5
		pointerColor   : '#d80000' // Red pointer
	},

	dependencies: [
		{ src: 'plugin/leap/leap.js', async: true }
	]

});
```

## MathJax

If you want to display math equations in your presentation you can easily do so by including this plugin. The plugin is a very thin wrapper around the [MathJax](http://www.mathjax.org/) library. To use it you'll need to include it as a reveal.js dependency, [find our more about dependencies here](#dependencies).

The plugin defaults to using [LaTeX](http://en.wikipedia.org/wiki/LaTeX) but that can be adjusted through the ```math``` configuration object. Note that MathJax is loaded from a remote server. If you want to use it offline you'll need to download a copy of the library and adjust the ```mathjax``` configuration value. 

Below is an example of how the plugin can be configured. If you don't intend to change these values you do not need to include the ```math``` config object at all.

```js
Reveal.initialize({

	// other options ...

	math: {
		mathjax: 'http://cdn.mathjax.org/mathjax/latest/MathJax.js',
		config: 'TeX-AMS_HTML-full'  // See http://docs.mathjax.org/en/latest/config-files.html
	},
	
	dependencies: [
		{ src: 'plugin/math/math.js', async: true }
	]

});
```

Read MathJax's documentation if you need [HTTPS delivery](http://docs.mathjax.org/en/latest/start.html#secure-access-to-the-cdn) or serving of [specific versions](http://docs.mathjax.org/en/latest/configuration.html#loading-mathjax-from-the-cdn) for stability.


## Installation

The **basic setup** is for authoring presentations only. The **full setup** gives you access to all reveal.js features and plugins such as speaker notes as well as the development tasks needed to make changes to the source.

### Basic setup

The core of reveal.js is very easy to install. You'll simply need to download a copy of this repository and open the index.html file directly in your browser.

1. Download the latest version of reveal.js from <https://github.com/hakimel/reveal.js/releases>

2. Unzip and replace the example contents in index.html with your own

3. Open index.html in a browser to view it


### Full setup

Some reveal.js features, like external markdown and speaker notes, require that presentations run from a local web server. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the reveal.js source code.

1. Install [Node.js](http://nodejs.org/)

2. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli)

4. Clone the reveal.js repository
   ```sh
   $ git clone https://github.com/hakimel/reveal.js.git
   ```

5. Navigate to the reveal.js folder
   ```sh
   $ cd reveal.js
   ```

6. Install dependencies
   ```sh
   $ npm install
   ```

7. Serve the presentation and monitor source files for changes
   ```sh
   $ grunt serve
   ```

8. Open <http://localhost:8000> to view your presentation

   You can change the port by using `grunt serve --port 8001`.


### Folder Structure
- **css/** Core styles without which the project does not function
- **js/** Like above but for JavaScript
- **plugin/** Components that have been developed as extensions to reveal.js
- **lib/** All other third party assets (JavaScript, CSS, fonts)


### Contributing

Please keep the [issue tracker](http://github.com/hakimel/reveal.js/issues) limited to **bug reports**, **feature requests** and **pull requests**. If you are reporting a bug make sure to include information about which browser and operating system you are using as well as the necessary steps to reproduce the issue.

If you have personal support questions use [StackOverflow](http://stackoverflow.com/questions/tagged/reveal.js).


#### Pull requests

- Should follow the coding style of the file you work in, most importantly:
  - Tabs to indent
  - Single-quoted strings
- Should be made towards the **dev branch**
- Should be submitted from a feature/topic branch (not your master)
- Should not include the minified **reveal.min.js** file


## License

MIT licensed

Copyright (C) 2014 Hakim El Hattab, http://hakim.se



## Rekapi
### animation canvas
##Rekapi

__Кратко__

Rekapi библиотека анимации  для JavaScrip

* [Примеры](data/rekapi-master/demo/)


__readme__

# Rekapi - Keyframes for JavaScript

Rekapi is a keyframe animation library for JavaScript.  It gives you an API
for:

* Defining keyframe-based animations
* Controlling animation playback

Rekapi is renderer-agnostic.  At its core, Rekapi does not perform any
rendering.  However, it does expose an API for defining renderers, and the
standard distribution comes bundled with renderers for the HTML DOM and HTML5
2D `<canvas>`.

Rekapi has two dependencies:
[Underscore](https://github.com/documentcloud/underscore) and
[Shifty](https://github.com/jeremyckahn/shifty).

Rekapi has been tested in and supports:

* Modern HTML5 browsers
* IE 6/7/8 (9 probably works; has not been tested.  Only Rekapi core APIs and
  DOM inline styling are supported in these browsers, not `<canvas>` or CSS3
  functionality)
* Node.js

If you have any questions about Rekapi, please post them to the [Google
Group](https://groups.google.com/forum/?fromgroups#!forum/rekapi).  Also, check
out the [Getting Started Guide ](docs/getting_started.md).

Please note:  Rekapi is a rewrite of
[Kapi](https://github.com/jeremyckahn/kapi). Rekapi is very similar to Kapi,
but they are not identical.  Rekapi is not a drop-in replacement for Kapi.
Kapi is no longer maintained, so Rekapi is a better choice for your projects.
Kapi and Rekapi were written by the same author.

If you used Rekapi before it reached 1.0.0, please be aware that the API has
changed significantly.  Please see [this guide](docs/upgrading.md) for all API
changes and how to upgrade your code.

## What is keyframing?

Keyframing is an animation technique for defining states at specific points in
time. Keyframing allows you to declaratively define the points at which an
animation changes.  All of the frames that exist between keyframes are
interpolated for you.  It is a powerful way to construct a complex animation.

## How do I use Rekapi?

Using Rekapi boils down to four steps:

* Define one or more `Rekapi.Actor` instances (generally referred to as
  "actors")
* Instantiate and add the actors to a `Rekapi` instance
* Define keyframe states for the actors
* Play the animation

## `Rekapi`

The `Rekapi` Object  manages the state and playback of an animation.  An
instance of `Rekapi` acts as a conductor for the various actors associated with
it.

## `Rekapi.Actor`

The actors are the individual visual components of an animation.  A circle
moving from left to right is an actor.  A square that moves up and down is
another, separate actor.  Actors are represented by the `Rekapi.Actor` Object.

## Playback control APIs

There are playback control methods built into the `Rekapi` Object.  These
methods include `play()`, `pause()` and `stop()`.  See [the API
documentation](http://rekapi.com/dist/doc/src/rekapi.core.js.html) for a full
list of the available methods.

## Rendering contexts

Rekapi works by providing state data to the actors for every frame.  The actors
then render the data according to their rendering context.  Rekapi treats rendering
contexts generically, and you can create new ones as needed.  The standard
Rekapi distribution includes rendering contexts for the DOM and 2D `<canvas>`.

A `Rekapi` instance has one renderer associated with, and it is attached to the
instance as a property called `renderer`.  The appropriate renderer is
determined automatically based on what context the `Rekapi` constructor is
provided.  The renderer visually displays the data that Rekapi computes for
each frame.  Renderers also provide unique APIs.  Please see the API
documentation for each renderer for more detailed information.

## AMD

You can optionally load Rekapi as an
[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) module by using a loader
such as [RequireJS](http://requirejs.org). This prevents the creation a global
`Rekapi` variable.

Caution: You can only require `rekapi.js` or `rekapi.min.js` as AMD modules.
`rekapi-underscore-shifty.min.js` will expose the `Rekapi`, `Tweenable` and `_`
Objects globally.

Here is an example of how you can use Rekapi with RequireJS:

````javascript
// This example assumes that there is a `lib` directory in your project
require.config({
  paths: {
    shifty: "lib/shifty",
    underscore: "lib/underscore.min",
    rekapi: "lib/rekapi"
  }
});

// Dependencies (Underscore and Shifty) are automatically loaded.
require(['rekapi'], function(Rekapi) {
  var rekapi = new Rekapi();
});
````

## Node

Rekapi can be used in Node.js.  This can be useful for generating keyframe
data.  Usage is the same as in the browser.  Loading the code requires the
[r.js](https://github.com/jrburke/r.js/blob/master/dist/r.js) script and looks
a lot ike the AMD approach above:

````javascript
var requirejs = require('requirejs');
requirejs.config({
  paths: {
    shifty: "dist/shifty.min",
    underscore: "dist/underscore-min",
    rekapi: "dist/rekapi"
  }
});

requirejs(['rekapi'], function(Rekapi) {
  var rekapi = new Rekapi();
});
````

## Core contributors

* [Franck Lecollinet](https://github.com/sork)

## Библиотека anima-master
### animation анимация
## Anima


 it's easy to animate over a hundred objects at a time. Each item can have it's mass and viscosity to emulate reallife objects!

And it's only 5k when gzipped.

[Docs and Examples](http://lvivski.github.com/anima/)



[Пример](data/anima-master/example/1.html)


## Библиотека стилей Animate.css
### jquery css анимация animation
##Animate.css

Анимация текста, используетсся Jquery

[Пример](data/Animate.css/Animate.css.htm)


## berniecode-animator
### анимация animate
## Animator.js

Библиотека для анимации веб страниц


[Пример](data/berniecode-animator/demos.html)


## Math.js
### math number bignumber complex
## Math.js

Кроме встроенных математических функций

```javascript
alert(Math.pow(3,2)) //9
```
 * [математические функции js](http://javascript.ru/math)

__Библиотека Math.js__

 * [Сайт](http://mathjs.org/)

Math.js обширная математическая библиотека для JavaScript и Node.js. Она имеет гибкий анализатор выражений и предлагает интегрированное решение для работы с числами , большими , комплексными числами , массивов и матриц . Мощный и простой в использовании интерфейс.

__Пример использования__

```text
/ functions and constants
math.round(math.e, 3);            // 2.718
math.atan2(3, -3) / math.pi;      // 0.75
math.log(10000, 10);              // 4
math.sqrt(-4);                    // 2i
math.pow([[-1, 2], [3, 1]], 2);
     // [[7, 0], [0, 7]]

// expressions
math.eval('1.2 * (2 + 4.5)');     // 7.8
math.eval('5.08 cm to inch');     // 2 inch
math.eval('sin(45 deg) ^ 2');     // 0.5
math.eval('9 / 3 + 2i');          // 3 + 2i
math.eval('det([-1, 2; 3, 1])');  // -7

// chaining
math.chain(3)
    .add(4)
    .multiply(2)
    .done(); // 14
```


## ExIf. Чтение метаданных из рисунка
### file image tags read metadata
##Exif

Библиотека  EXIf для просмотра тегов рисунка

* <a href="data/exif-js-master/example/index.html" target="_blank">Пример</a>
* <a href="data/exif-js-master/spec/Exif2-2.pdf" target="_blank">Документация</a><br>


## deck.js
### presentation slideshow презентация анимация
##Desk.js

Подготовка презентации

#deck.js

A JavaScript library for building modern HTML presentations. deck.js is flexible enough to let advanced CSS and JavaScript authors craft highly customized decks, but also provides templates and themes for the HTML novice to build a standard slideshow.

## Quick Start

This repository includes a `boilerplate.html` as a starting point, with all the extensions included. Just [download it](https://github.com/imakewebthings/deck.js/archive/latest.zip), open `boilerplate.html`, and start editing your slides.

## Documentation

Check out the [documentation page](http://imakewebthings.github.com/deck.js/docs) for more information on the methods, events, and options available in core and all the included extensions.  A sample standard slide deck is included in the package under the `introduction` folder.  You can also [view that sample deck](http://imakewebthings.github.com/deck.js/introduction) online to play with the available style and transition themes.

## Extensions, Themes, and Related Projects

Take a look at [the wiki](https://github.com/imakewebthings/deck.js/wiki) for lists of extensions, themes, and other related goodies.  If you have a publicly available project of your own, feel free to add to the list.

## Dependencies (included in this repository)

- [jQuery](http://jquery.com)
- [Modernizr](http://modernizr.com)

## Tests & Support

Unit tests are written with [Jasmine](http://pivotal.github.com/jasmine/) and [jasmine-jquery](https://github.com/velesin/jasmine-jquery). You can [run them here](http://imakewebthings.github.com/deck.js/test).

deck.js has been tested with jQuery 1.6+ and works in IE7+, Chrome, FF, Safari, and Opera. The more capable browsers receive greater enhancements, but a basic cutaway slideshow will work for all browsers listed above. Please don't give your presentations in IE6.

For any questions or general discussion about deck.js please direct your attention to the [mailing list](http://groups.google.com/group/deckjs) (uses Google groups.)  If you would like to report a bug, please see the [issues page](https://github.com/imakewebthings/deck.js/issues).

## Printing

Core includes stripped down black and white print styles for the standard slide template that is suitable for handouts.

## Awesome Contributors

- [jbuck](https://github.com/jbuck)
- [cykod](https://github.com/cykod)
- [dougireton](https://github.com/dougireton)
- [awirick](https://github.com/awirick)
- Daniel Knittl-Frank
- [alexch](https://github.com/alexch)
- [twitwi](https://github.com/twitwi)

If you would like to contribute a patch to deck.js please do as much as you can of the following:

- Add or amend Jasmine tests.
- Add inline documentation.
- If the standard snippet of an extension changes, please change it in both the introduction deck and the snippet html in the extension folder.
- If the API changes, it would be awesome to receive a parallel pull request to the gh-pages branch which updates the public-facing documentation.

## License

Copyright (c) 2011-2014 Caleb Troughton

Licensed under the [MIT license](https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt)

## Donations

[![Gittip donate
button](http://img.shields.io/gittip/imakewebthings.png)](https://www.gittip.com/imakewebthings/ "Donate weekly to this project using Gittip")


[Пример](data/deck.js/boilerplate.html)


## dzslides-master
### presentation css презентация анимация
## DZSlides

Подготовка презентации


__readme__

## Basic usage

**DZSlides** is a **one-file** HTML template to build slides in HTML5 and CSS3.

[template.html](/paulrouget/dzslides/blob/master/template.html) is the only file you need. Edit the file, add your content, change the style, and you're done. To see the slides in action, just load
the file in your browser.

## Features

* Slides can include any HTML5 content (text, image, video, iframes, вЂ¦);
* Slides transitions are animated with CSS3 (sliding by default);
* Resolution independent (slides are scaled according to the size of the browser. The virtual dimension is 800x600);
* Fullscreen presentation (HTML5 FullScreen API supported) - press `f` to go fullscreen;
* Incremental content;
* Mobile Friendly (supports touch events).

## Shells

The features of DZSlides are intentionally limited to keep the template light
and simple to understand. *Shells* are extensions that bring new features
to your slides. Here, you'll find 2 shells:

* `shells/embedder.html` to embed a presentation in a web page
* `shells/onstage.html` to show your slides with a control panel

To use them, just load the file in your browser, and follow the instructions.

## Specifications

When you press the `left` and `right` keys, you go forward and go back in your slides.
But the slides can also respond to external messages. Messages can be sent through [postMessage](https://developer.mozilla.org/en/DOM/window.postMessage).
So another web page can control the slides.

### Protocol

A `cursor` is a string of this form: `3.5`. The first number represent the current slide index. The second number represent the current sub-item index.

Parameters must be escaped.

***

Messages a DZSlides page can receive:

* `REGISTER` register the source of the message as a target to notify for any events;
* `FORWARD` move forward in the slides;
* `BACK` move back in the slides;
* `START` move to the first slide;
* `END` move to the last slide;
* `SET_CURSOR cursor` jump to the cursor;
* `GET_CURSOR` notify the source of the message of the current cursor;
* `TOGGLE_CONTENT` toggle the current slide content;
* `GET_NOTES cursor` notify the source of the message of the current notes content.

Messages a DZSlides page can send:

* `CURSOR cursor` sent to one target as a response to `GET_CURSOR`, and sent to all the registered target when updated;
* `REGISTERED slides_title slides_count` sent to one target as a response to `REGISTER`;
* `NOTES html_content` sent to one target as a response to `GET_NOTES`.

***

### Hash parameters

* `url&para1=va1`

Parameters a DZSlides page can have:

* `autoplay` (integer, values : `0`/`1`, default : `1`) sets whether multimedia contents (audio, video) should be played automatically.

## License

                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                        Version 2, December 2004

    Everyone is permitted to copy and distribute verbatim or modified
    copies of this license document, and changing it is allowed as long
    as the name is changed.

                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
      TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

    0. You just DO WHAT THE FUCK YOU WANT TO.



[Пример](data/dzslides-master/template.html)


## impress.js-master
### presentation презентация анимация
## Impress.js

Подготовка презентации

__readme__

impress.js
============

It's a presentation framework based on the power of CSS3 transforms and 
transitions in modern browsers and inspired by the idea behind prezi.com.

**WARNING**

impress.js may not help you if you have nothing interesting to say ;)


HOW TO USE IT
---------------

[Use the source](http://github.com/bartaz/impress.js/blob/master/index.html), Luke ;)

If you have no idea what I mean by that, or you just clicked that link above and got 
very confused by all these strange characters that got displayed on your screen,
it's a sign, that impress.js is not for you.

Sorry.

Fortunately there are some guys on GitHub that got quite excited with the idea of building
editing tool for impress.js. Let's hope they will manage to do it.



EXAMPLES AND OTHER LEARNING RESOURCES
---------------------------------------

### Official demo

[impress.js demo](http://bartaz.github.com/impress.js) by [@bartaz](http://twitter.com/bartaz)

### Examples and demos

More examples and demos can be found on [Examples and demos wiki page](http://github.com/bartaz/impress.js/wiki/Examples-and-demos).

Feel free to add your own example presentations (or websites) there.

### Other tutorials and learning resources

If you want to learn even more there is a [list of tutorials and other learning resources](https://github.com/bartaz/impress.js/wiki/impress.js-tutorials-and-other-learning-resources)
on the wiki, too.

There is also a book available about [Building impressive presentations with impress.js](http://www.packtpub.com/building-impressive-presentations-with-impressjs/book) by Rakhitha Nimesh Ratnayake.


WANT TO CONTRIBUTE?
---------------------

If you've found a bug or have a great idea for new feature let me know by [adding your suggestion]
(http://github.com/bartaz/impress.js/issues/new) to [issues list](https://github.com/bartaz/impress.js/issues).

If you have fixed a bug or implemented a feature that you'd like to share, send your pull request against [dev branch]
(http://github.com/bartaz/impress.js/tree/dev). But remember that I only accept code that fits my vision of impress.js
and my coding standards - so make sure you are open for discussion :)



ABOUT THE NAME
----------------

impress.js name in [courtesy of @skuzniak](http://twitter.com/skuzniak/status/143627215165333504).

It's an (un)fortunate coincidence that a Open/LibreOffice presentation tool is called Impress ;)



VERSION HISTORY
-----------------

### 0.5.3 ([browse](http://github.com/bartaz/impress.js/tree/0.5.3), [zip](http://github.com/bartaz/impress.js/zipball/0.5.3), [tar](http://github.com/bartaz/impress.js/tarball/0.5.3))

#### BUGFIX RELEASE

Version 0.5 introduced events including `impress:stepenter`, but this event was not triggered properly in some
specific transition types (for example when only scale was changing between steps). It was caused by the fact that
in such cases expected `transitionend` event was not triggered.

This version fixes this issue. Unfortunately modern `transitionend` event is no longer used to detect when the
transition has finished, but old school (and more reliable) `setTimeout` is used.


### 0.5.2 ([browse](http://github.com/bartaz/impress.js/tree/0.5.2), [zip](http://github.com/bartaz/impress.js/zipball/0.5.2), [tar](http://github.com/bartaz/impress.js/tarball/0.5.2))

#### DOCUMENTATION RELEASE

More descriptive comments added to demo CSS and impress.js source file, so now not only `index.html` is worth reading ;)


### 0.5.1 ([browse](http://github.com/bartaz/impress.js/tree/0.5.1), [zip](http://github.com/bartaz/impress.js/zipball/0.5.1), [tar](http://github.com/bartaz/impress.js/tarball/0.5.1))

#### BUGFIX RELEASE

Changes in version 0.5 introduced a bug (#126) that was preventing clicks on links (or any clickable elements) on
currently active step. This release fixes this issue.



### 0.5 ([browse](http://github.com/bartaz/impress.js/tree/0.5), [zip](http://github.com/bartaz/impress.js/zipball/0.5), [tar](http://github.com/bartaz/impress.js/tarball/0.5))

#### CHANGELOG

* API changed, so that `impress()` function no longer automatically initialize presentation; new method called `init`
  was added to API and it should be used to start the presentation
* event `impress:init` is triggered on root presentation element (`#impress` by default) when presentation is initialized
* new CSS classes were added: `impress-disabled` is added to body element by the impress.js script and it's changed to 
  `impress-enabled` when `init()` function is called
* events added when step is entered and left - custom `impress:stepenter` and `impress:stepleave` events are triggered
  on step elements and can be handled like any other DOM events (with `addEventListener`)
* additional `past`, `present` and `future` classes are added to step elements
    - `future` class appears on steps that were not yet visited
    - `present` class appears on currently visible step - it's different from `active` class as `present` class
       is added when transition finishes (step is entered)
    - `past` class is added to already visited steps (when the step is left)
* and good news, `goto()` API method is back! it seems that `goto` **was** a future reserved word but isn't anymore,
  so we can use this short and pretty name instead of camelCassy `stepTo` - and yes, that means API changed again...
* additionally `goto()` method now supports new types of parameters:
    - you can give it a number of step you want to go to: `impress().goto(7)`
    - or its id: `impress().goto("the-best-slide-ever")`
    - of course DOM element is still acceptable: `impress().goto( document.getElementById("overview") )`
* and if it's not enough, `goto()` also accepts second parameter to define the transition duration in ms, for example
  `impress().goto("make-it-quick", 300)` or `impress().goto("now", 0)`

#### UPGRADING FROM PREVIOUS VERSIONS

In current version calling `impress()` doesn't automatically initialize the presentation. You need to call `init()`
function from the API. So in a place were you called `impress()` to initialize impress.js simply change this call
to `impress().init()`.

Version 0.4 changed `goto` API method into `stepTo`. It turned out that `goto` is not a reserved word anymore, so it
can be used in JavaScript. That's why version 0.5 brings it back and removes `stepTo`.

So if you have been using version 0.4 and have any reference to `stepTo` API method make sure to change it to `goto`.



### 0.4.1 ([browse](http://github.com/bartaz/impress.js/tree/0.4.1), [zip](http://github.com/bartaz/impress.js/zipball/0.4.1), [tar](http://github.com/bartaz/impress.js/tarball/0.4.1))

#### BUGFIX RELEASE

Changes is version 0.4 introduced a bug causing JavaScript errors being thrown all over the place in fallback mode.
This release fixes this issue.

It also adds a flag `impress.supported` that can be used in JavaScript to check if impress.js is supported in the browser.



### 0.4 ([browse](http://github.com/bartaz/impress.js/tree/0.4), [zip](http://github.com/bartaz/impress.js/zipball/0.4), [tar](http://github.com/bartaz/impress.js/tarball/0.4))

#### CHANGELOG

* configuration options on `#impress` element: `data-perspective` (in px, defaults so 1000),
  `data-transition-duration` (in ms, defaults to 1000)
* automatic scaling to fit window size, with configuration options:  `data-width` (in px, defaults to 1024),
  `data-height` (in px, defaults to 768), `max-scale` (defaults to 1), `min-scale` (defaults to 0)
* `goto` API function was renamed to `stepTo` because `goto` is a future reserved work in JavaScript,
  so **please make sure to update your code**
* fallback `impress-not-supported` class is now set on `body` element instead of `#impress` element and it's
  replaced with `impress-supported` when browser supports all required features
* classes `step-ID` used to indicate progress of the presentation are now renamed to `impress-on-ID` and are
  set on `body` element, so **please make sure to update your code**
* basic validation of configuration options
* couple of typos and bugs fixed
* favicon added ;)


#### UPGRADING FROM PREVIOUS VERSIONS

If in your custom JavaScript code you were using `goto()` function from impress.js API make sure to change it
to `stepTo()`.

If in your CSS you were using classes based on currently active step with `step-` prefix, such as `step-bored`
(where `bored` is the id of the step element) make sure to change it to `impress-on-` prefix
(for example `impress-on-bored`). Also in previous versions these classes were assigned to `#impress` element
and now they are added to `body` element, so if your CSS code depends on this, it also should be updated.

Same happened to `impress-not-supported` class name - it was moved from `#impress` element to `body`, so update
your CSS if it's needed.

#### NOTE ON BLACKBERRY PLAYBOOK

Changes and fixes added in this version have broken the experience on Blackberry Playbook with OS in version 1.0.
It happened due to a bug in the Playbook browser in this version. Fortunately in version 2.0 of Playbook OS this
bug was fixed and impress.js works fine.

So currently impress.js work only on Blackberry Playbook with latest OS. Fortunately, [it seems that most of the
users](http://twitter.com/n_adam_stanley/status/178188611827679233) [are quite quick with updating their devices]
(http://twitter.com/brcewane/status/178230406196379648)



### 0.3 ([browse](http://github.com/bartaz/impress.js/tree/0.3), [zip](http://github.com/bartaz/impress.js/zipball/0.3), [tar](http://github.com/bartaz/impress.js/tarball/0.3))

#### CHANGELOG

* minor CSS 3D fixes
* basic API to control the presentation flow from JavaScript
* touch event support
* basic support for iPad (iOS 5 and iOS 4 with polyfills) and Blackberry Playbook

#### UPGRADING FROM PREVIOUS VERSIONS

Because API was introduced the way impress.js script is initialized was changed a bit. You not only has to include
`impress.js` script file, but also call `impress()` function.

See the source of `index.html` for example and more details.


### 0.2 ([browse](http://github.com/bartaz/impress.js/tree/0.2), [zip](http://github.com/bartaz/impress.js/zipball/0.2), [tar](http://github.com/bartaz/impress.js/tarball/0.2))

* tutorial/documentation added to `index.html` source file
* being even more strict with strict mode
* code clean-up
* couple of small bug-fixes


### 0.1 ([browse](http://github.com/bartaz/impress.js/tree/0.1), [zip](http://github.com/bartaz/impress.js/zipball/0.1), [tar](http://github.com/bartaz/impress.js/tarball/0.1))

First release.

Contains basic functionality for step placement and transitions between them
with simple fallback for non-supporting browsers.



BROWSER SUPPORT
-----------------

### TL;DR;

Currently impress.js works fine in latest Chrome/Chromium browser, Safari 5.1 and Firefox 10.
With addition of some HTML5 polyfills (see below for details) it should work in Internet Explorer 10
(currently available as Developers Preview).
It doesn't work in Opera, as it doesn't support CSS 3D transforms.

As a presentation tool it was not developed with mobile browsers in mind, but some tablets are good
enough to run it, so it should work quite well on iPad (iOS 5, or iOS 4 with HTML5 polyfills) and 
Blackberry Playbook.

### Still interested? Read more...

Additionally for the animations to run smoothly it's required to have hardware
acceleration support in your browser. This depends on the browser, your operating
system and even kind of graphic hardware you have in your machine.

For browsers not supporting CSS3 3D transforms impress.js adds `impress-not-supported`
class on `#impress` element, so fallback styles can be applied to make all the content accessible.


### Even more explanation and technical stuff

Let's put this straight -- wide browser support was (and is) not on top of my priority list for
impress.js. It's built on top of fresh technologies that just start to appear in the browsers
and I'd like to rather look forward and develop for the future than being slowed down by the past.

But it's not "hard-coded" for any particular browser or engine. If any browser in future will
support features required to run impress.js, it will just begin to work there without changes in
the code.

From technical point of view all the positioning of presentation elements in 3D requires CSS 3D
transforms support. Transitions between presentation steps are based on CSS transitions.
So these two features are required by impress.js to display presentation correctly.

Unfortunately the support for CSS 3D transforms and transitions is not enough for animations to
run smoothly. If the browser doesn't support hardware acceleration or the graphic card is not 
good enough the transitions will be laggy.

Additionally the code of impress.js relies on APIs proposed in HTML5 specification, including
`classList` and `dataset` APIs. If they are not available in the browser, impress.js will not work.

Fortunately, as these are JavaScript APIs there are polyfill libraries that patch older browsers
with these APIs.

For example IE10 is said to support CSS 3D transforms and transitions, but it doesn't have `classList`
nor `dataset` APIs implemented at the moment. So including polyfill libraries *should* help IE10
with running impress.js.


### And few more details about mobile support

Mobile browsers are currently not supported. Even Android browsers that support CSS 3D transforms are
forced into fallback view at this point.

Fortunately some tablets seem to have good enough hardware support and browsers to handle it.
Currently impress.js presentations should work on iPad and Blackberry Playbook.

In theory iPhone should also be able to run it (as it runs the same software as iPad), but I haven't
found a good way to handle its small screen.

Also note that iOS supports `classList` and `dataset` APIs starting with version 5, so iOS 4.X and older
requires polyfills to work.


LICENSE
---------

Copyright 2011-2012 Bartek Szopka

Released under the MIT and GPL (version 2 or later) Licenses.






[Пример](data/impress.js-master/index.html)

## JavaScript-ID3-Reader-master
### audio mp3 ID3  img
## ID3 Reader

Читает рисунок и информация об авторе и произведении из ID3 тегов mp3 файла

__readme__

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


[Примеры](data/JavaScript-ID3-Reader-master/example/)

## Библиотека CodeMirror
### js CodeMirror edit publication
## CodeMirror

CodeMirror-библиотека для вывода и редактирования кода js,css, html, xml файлов.Раелизована подсветка тегов, расширение на полный экран, работа с несколькими массивами кодов.

__readme__

# CodeMirror
[![Build Status](https://secure.travis-ci.org/marijnh/CodeMirror.png?branch=master)](http://travis-ci.org/marijnh/CodeMirror)
[![NPM version](https://badge.fury.io/js/codemirror.png)](http://badge.fury.io/js/codemirror)

CodeMirror is a JavaScript component that provides a code editor in
the browser. When a mode is available for the language you are coding
in, it will color your code, and optionally help with indentation.

The project page is http://codemirror.net  
The manual is at http://codemirror.net/doc/manual.html  
The contributing guidelines are in [CONTRIBUTING.md](https://github.com/marijnh/CodeMirror/blob/master/CONTRIBUTING.md)


<a href="data/CodeMirror-master/demo/" target="_blank">Посмотреть демо</a>


## HTML редактор 
### jquery bootstrap  html editor
## HTML editor

Представлено 2 плагина для jquery

__HTMLarea__

Элемент на основе jquery. Редактор для подготовки HTML страниц.

__readme__

/* jHtmlArea - WYSIWYG Html Editor jQuery Plugin
 * Copyright (c) 2013 Chris Pietschmann
 * http://jhtmlarea.codeplex.com
 * Licensed under the Microsoft Reciprocal License (Ms-RL)
 * http://jhtmlarea.codeplex.com/license
*/

EXAMPLE USAGE:
-----------------------
See "Default.htm" for example usages.
Or, check out http://jhtmlarea.codeplex.com


CHANGE LOG
-----------------------
v0.8
- Fixed modern browser support (IE9 and 10, Firefox 22)

v0.7.5
- Fixed "html" method

- Fixed jQuery UI Dialog Example


v0.7.0
- Fixed ColorPickerMenu positioning when placed within a "position: relative"
div element.

- Fixed ColorPickerMenu to auto-hide after a short delay (1 second) once the
user moves the mouse off the menu.

- Fixed Form Submit issue that caused the text to not be posted. Also fixed a
related issue with ASP.NET Postbacks.

- Added jHtmlArea.p method and "paragraph" functionality + toolbar button
This allows the user to change the formatting from <H1>, <H2>, etc. to <P>

- Added an "Automatic" color option to the ColorPickerMenu.


v0.6.0
- Hide All Toolbar buttons except the "html" button when entering
HTML Source view (via clicking "html" button or executing
jHtmlArea.showHTMLView). When toggling view back to the WYSIWYG editor
all other buttons will then be shown again.

- Added jHtmlArea.dispose method - Allows you to remove the WYSIWYG
editor, and go back to having a plain TextArea. Beware, there is a
memory leak when using this method; it's not too bad, but you want
to call this as few a number of times if you can. The memory leak
is due to the way the browsers handle removing DOM Elements.

- Added Indent and Outdent functionality - This includes toolbar buttons
and jHtmlArea.indent and jHtmlArea.outdent buttons.

- Added justifyLeft, justifyCenter, justifyRight functionality and toolbar
buttons.

- Added insertHorizontalRule functionality and toolbar button. This adds a
<hr> tag to the currently selected area.

- Added an "alias" method for jHtmlArea.execCommand named "ec" to help reduce the
file size of the script.

- Added increaseFontSize and decreaseFontSize functionality and toolbar buttons.
The increaseFontSize and decreaseFontSize doesn't currently work in Safari.

- Added forecolor functionality - Changes a font color for the selection or at the
insertion point. Requires a color value string to be passed in as a value argument.

- Fixed bug in jHtmlArea.toString method

- Added jHtmlArea.queryCommandValue method and it's alias "jHtmlArea.qc"

- Added the jHtmlAreaColorPickerMenu plugin/extension that resides within the
"jHtmlAreaColorPickerMenu.js" file. This file includes a somewhat generic color
picker menu that can be used for any purpose, plus it includes the code to wire
up and override the "stock" jHtmlColor.forecolor functionality and inject the new
Color Picker Menu functionality in it's place when you click on the "forecolor"
toolbar button.

- Changed the "execCommand" and "ec" second parameter to default to "false" if not
specified, and third parameter to default to "null" if not specified. This helps to
reduce the overall file size of the script.

- Added support for Toolbar Button Grouping, now with the additional buttons included
in this release, or even when any custom buttons are used, they will be able to display
nicely by "auto-wrapping" to the next line.

- Added a gradient background to the Toolbar Button Groups, with a slight reverse
gradient on the Buttons when the mouse is hovered over.


v0.5.0 - Initial Release




ICONS / IMAGES:
-----------------------

Some of the Icons within the jHtmlArea.png file are from the
Silk icon set at www.famfamfam.com.
They are licensed under the following license:

Silk icon set 1.3
_________________________________________
Mark James
http://www.famfamfam.com/lab/icons/silk/
_________________________________________

This work is licensed under a
Creative Commons Attribution 2.5 License.
[ http://creativecommons.org/licenses/by/2.5/ ]

This means you may use it for any purpose,
and make any changes you like.
All I ask is that you include a link back
to this page in your credits.

Are you using this icon set? Send me an email
(including a link or picture if available) to
mjames@gmail.com

Any other questions about this icon set please
contact mjames@gmail.com

<a href="data/jq_plugin/htmlarea/Default.htm" target="_blank">Пример</a><br>




__Tiny__

Маленький НТML edit элемент, использующий библиотеки jquery и bootstrap.
Редактор  содержит элементы форматирования и возможности вставки ссылок и рисунков.

__readme__

bootstrap-wysiwyg
=================

Tiny bootstrap-compatible WISWYG rich text editor, based on browser execCommand, built originally for [MindMup](http://www.mindmup.com). Here are the key features:

* Automatically binds standard hotkeys for common operations on Mac and Windows
* Drag and drop files to insert images, support image upload (also taking photos on mobile devices)
* Allows a custom built toolbar, no magic markup generators, enabling the web site to use all the goodness of Bootstrap, Font Awesome and so on...
* Does not force any styling - it's all up to you
* Uses standard browser features, no magic non-standard code, toolbar and keyboard configurable to execute any supported [browser command](https://developer.mozilla.org/en/docs/Rich-Text_Editing_in_Mozilla
)
* Does not create a separate frame, backup text areas etc - instead keeps it simple and runs everything inline in a DIV
* (Optionally) cleans up trailing whitespace and empty divs and spans
* Requires a modern browser (tested in Chrome 26, Firefox 19, Safari 6)
* Supports mobile devices (tested on IOS 6 Ipad/Iphone and Android 4.1.1 Chrome)

Basic Usage
-----------

See http://mindmup.github.com/bootstrap-wysiwyg/

Customising
-----------
You can assign commands to hotkeys and toolbar links. For a toolbar link, just put the execCommand command name into a data-edit attribute.
For more info on execCommand, see http://www.quirksmode.org/dom/execCommand.html and https://developer.mozilla.org/en/docs/Rich-Text_Editing_in_Mozilla

```html
<div class="btn-toolbar" data-role="editor-toolbar" data-target="#editor">
  <a class="btn btn-large" data-edit="bold"><i class="icon-bold"></i></a>
</div>
```

To pass arguments to a command, separate a command with a space.

```html
  <a data-edit="fontName Arial">...</a>
```

You can also use input type='text' with a data-edit attribute. When the value
is changed, the command from the data-edit attribute will be applied using the
input value as the command argument

```html
<input type="text" data-edit="createLink">
```
If the input type is file, when a file is selected the contents will be read in using the FileReader API and the data URL will be used as the argument

```html
<input type="file" data-edit="insertImage">
```

To change hotkeys, specify the map of hotkeys to commands in the hotKeys option. For example:

```javascript
$('#editor').wysiwyg({
  hotKeys: {
    'ctrl+b meta+b': 'bold',
    'ctrl+i meta+i': 'italic',
    'ctrl+u meta+u': 'underline',
    'ctrl+z meta+z': 'undo',
    'ctrl+y meta+y meta+shift+z': 'redo'
  }
});
```

Styling for mobile devices
--------------------------

This editor should work pretty well with mobile devices, but you'll need to consider the following things when styling it:
- keyboards on mobile devices take a huge part of the screen
- having to scroll the screen to touch the toolbar can cause the editing component to lose focus, and the mobile device keyboard might go away
- mobile devices tend to move the screen viewport around to ensure that the focused element is shown, so it's best that the edit box is glued to the top

For the content attachment editor on MindMup, we apply the following rules to mobile device styling:
- edit box is glued to the top, so the focus doesn't jump around
- toolbar is below the edit box
- on portrait screens, edit box size is 50% of the screen
- on landscape screens, edit box size is 30% of the screen
- as the screen gets smaller, non-critical toolbar buttons get hidden into a "other" menu

Dependencies
------------
* jQuery http://jquery.com/
* jQuery HotKeys https://github.com/jeresig/jquery.hotkeys
* Bootstrap http://twitter.github.com/bootstrap/


<a href="data/jq_plugin/bootstrap-wysiwyg-master/index.html" target="_blank">Пример</a>




## Библиотека SlickGrid
### grid Таблица table
## SlickGrid

Библиотека для работы с таблицами (grid)

__readme__

# Welcome to SlickGrid

Find documentation and examples in [the wiki](https://github.com/mleibman/SlickGrid/wiki).


**UPDATE:  March 5th, 2014 - I have too many things going on in my life right now to really give SlickGrid support and development the time and attention it deserves.  I am not stopping it, but I will most likely be unresponsive for some time.  Sorry.**

## SlickGrid is an advanced JavaScript grid/spreadsheet component

Some highlights:

* Adaptive virtual scrolling (handle hundreds of thousands of rows with extreme responsiveness)
* Extremely fast rendering speed
* Supports jQuery UI Themes
* Background post-rendering for richer cells
* Configurable & customizable
* Full keyboard navigation
* Column resize/reorder/show/hide
* Column autosizing & force-fit
* Pluggable cell formatters & editors
* Support for editing and creating new rows.
* Grouping, filtering, custom aggregators, and more!
* Advanced detached & multi-field editors with undo/redo support.
* вЂњGlobalEditorLockвЂќ to manage concurrent edits in cases where multiple Views on a page can edit the same data.
* Support for [millions of rows](http://stackoverflow.com/a/2569488/1269037)

__Ссылки__

* <a href="data\SlickGrid-master\examples\" target="_blank">Примеры</a>
* <a href="https://github.com/mleibman/SlickGrid/wiki" target="_blank">Сайт</a>


## Элементы Zino UI
### jquery zino ui framework
## Zino UI

Элементы, созданные на основе библиотеки jquery
__Ссылки__

 * <a href="data\zino_ui\examples\" target="_blank">Примеры</a>
 * <a href="http://zinoui.com/" target="_blank">Сайт</a><br>


## Библиотека jqwidgets
### jquery framework
## JQWidgets

__Кратко__

Framework на основе jquery, позоволяющий также разрабатывать новые элементы. 
Библиотека объединяет несколько js библиотек :

 * angularJS 
 * bootstrap
 *  различные версии  jqiery 
 * knockout

__Advanced JavaScript & HTML5
UI Framework__

jQWidgets provides a comprehensive solution for building professional web sites and mobile apps. It is built entirely on open standards and technologies like HTML5, CSS, Javascript and jQuery. jQWidgets enables responsive web development and helps you create apps and websites that look beautiful on desktops, tablets and smart phones. Use jQWidgets with popular frameworks like AngularJS, KnockoutJS and server-side technologies like ASP.NET MVC, PHP, JSP and Node.js

jQWidgets is a feature complete framework with professional touch-enabled jQuery widgets, themes, input validation, drag & drop plug-ins, data adapters, 

__Ссылки__

 * <a href="data\jqwidgets-ver3.5.0\index.htm" target="_blank">Примеры</a>
 * <a href="data\jqwidgets-ver3.5.0\ReadMe.txt" target="_blank">readme</a>
 * <a href="data\jqwidgets-ver3.5.0\documentation\" target="_blank">Документация по UI</a>
* <a href="http://www.jqwidgets.com/" target="_blank">Сайт</a><br>


## Библиотека webix
### js webix framework
## Webix

__Кратко__

Webix — это JavaScript фреймворк, с помощью которого можно создавать десктопные и мобильные веб-приложения с отзывчивым дизайном. Фреймворк доступен под двумя лицензиями: GNU GPLv3 и коммерческой.

___Особенности:___

 *  Легкость освоения. Документация довольно подробна, и понять, как все устроено, несложно. Для того, чтобы начать работу
 * Интеграция с популярными фреймворками. Реализована интеграция с Backbone.js, AngularJS и jQuery. Последняя особенность, например, позволяет создавать Webix-виджеты с использованием jQuery-синтаксиса.
 * Интеграция со сторонними виджетами. В этом пункте ограничимся списком: Mercury, Nicedit, Tinymce, CodeMirror, CKEditor, Raphael, D3, Sigma, JustGage, Google Maps, Nokia Maps, Yandex Maps, dhtmlxScheduler and dhtmlxGantt.
 *Размер — маленький, скорость — большая. В сжатом виде .js-файл весит всего 128 КБ, и при этом все работает довольно-таки быстро (по словам разработчиков так и вовсе «летает»).
 * Поддержка тачскрина. Созданные виджеты одинаково хорошо себя чувствуют как на десктопах, так и на смартфонах/планшетах.


__Ссылки__

 * <a href="data\webix\samples\" target="_blank">Примеры</a>
 * <a href="http://webix.com/" target="_blank">Сайт</a><br><br>


## Библиотека Kendo UI
### Keywords
## Kendo

Достаточно мощная библиотека  (UI framework),имеет коммерческий статус


__Что же это такое?__


Kendo UI — это клиентский фрейморк и набор из более чем 10 виджетов (грид, графики/диаграммы, выпадающий списк и т.д.), в основе которого лежит jQuery. В данном фреймворке максимально используются такие технологии, как HTML5 и CSS3 (при этом обеспечивается поддержка достаточно старых браузеров за счет graceful degradation). Поддерживается привязка данных, шаблоны, анимация, drag-and-drop и многое другое.

Разработчики обещают высокую скорость работы, поддержку мобильных устройств с тач-интерфейсами, а также агрессивную политику развития продукта (например, пользователи могут предлагать те или иные фишки для будущих релизов и голосовать за них).

Ну и, конечно, поддержка такой мощной компании, как Telerik, говорит о многом.

__Поддержка в браузерах__


Хочется отдать должное разработчикам по поддержке IE 7 за титанический труд (т.к., по сути, IE7 — это IE6 с табами и несколько допиленной поддержкой CSS 2.1).

__Как использовать?__

Очень просто: скачиваем, включаем стили и скрипты на странице и инициализируем виджеты привычным синтаксисом jQuery.
```text
<link href="kendo.common.min.css" rel="stylesheet" type="text/css" />
<link href="kendo.kendo.min.css" rel="stylesheet" type="text/css" />

<script src="jquery-1.6.2.min.js" type="text/javascript"></script>
<script src="kendo.all.min.js" type="text/javascript"></script>

<input id="datepicker" value="10/10/2011"/>

<script type="text/javascript">
    $("#datepicker").kendoDatePicker();
</script>
```






<a href="data\kendoui\telerik.kendoui.professional.2014.2.903.trial\examples\" target="_blank">Примеры</a><br><a href="http://www.telerik.com/kendo-ui" target="_blank">Сайт</a><br>


## Библиотека YUI
### yui framework
## YUI

Framework от Yahoo.
Библиотка Yahoo UI содержит достаточкно большое количество элементов, Однако по своему составу несколько уступает ExtJS.

__readme__

YUI 3: The Yahoo User Interface Library
=======================================

[![Build Status](https://travis-ci.org/yui/yui3.svg?branch=master)](https://travis-ci.org/yui/yui3)

YUI is a free, open source JavaScript and CSS framework for building richly
interactive web applications. YUI is provided under a BSD license and is
available on GitHub for forking and contribution.

Links
-----

  * [Home Page](http://yuilibrary.com/)
  * [Documentation](http://yuilibrary.com/yui/docs/)
  * [Blog](http://yuiblog.com)
  * [Latest Production Release](http://yuilibrary.com/download/yui3/)
  * [Forums](https://groups.google.com/forum/#!forum/yui-support)
  * [License](http://yuilibrary.com/license/)
  * [Contributor Info](https://github.com/yui/yui3/blob/master/CONTRIBUTING.md)
  * [Contributor Mailing List](https://groups.google.com/forum/?fromgroups#!forum/yui-contrib)
  * [Report a Bug](http://yuilibrary.com/yui/docs/tutorials/report-bugs/)
  * [Shifter, for building YUI](http://yui.github.com/shifter/)


Source Info
-----------

This is the active working source tree for YUI 3. It contains work in progress
toward the next YUI 3 releases and may be unstable.

We encourage you to use the latest source for evaluation purposes, testing new
features and bug fixes, and to provide feedback on new functionality. Please
refer to the "Latest Production Release" link above if you're looking for the
latest stable release of YUI recommended for production use.

If you plan on contributing to YUI, please join and monitor the "Contributor
Mailing List" listed above. Information about milestones and tree closures
will be made available there.


## Branch Information

YUI's development happens on five main branches. The following describes what
each of these code branches represents:

  * `live-docs`: Represents the latest GA release of YUI, plus any
    documentation-only updates. Any tweaks or additions to the docs for the
    latest release happen on this branch, and they are reflected on the website.

  * `master`: (Read-only) Contains everything in `live-docs`, plus code changes that will go
    into the next YUI release. The code changes in `master` are either bug fixes
    or small changes which should not break API compatibility. Patch releases
    will be cut from this branch; e.g. 3.6.x. *All code in this branch has fully
    passed all unit tests and should be stable.*

  * `3.x`: (Read-only) Represents the next major YUI release; e.g. 3.7.0. This is an
    integration branch which contains everything in `master`, plus larger code
    changes which will go into a future YUI release. The changes in `3.x`
    require a minor version increment before they are part of release, e.g.,
    3.7.0. Preview Releases will be cut from this branch for developers to test
    and evaluate. *All code in this branch has fully passed all unit tests and should be stable.*

  * `dev-master` and `dev-3.x`: Current working branches containing code that
    **has not** been through the CI process. **Developers check their changes in to
    these integration branches for the automated testing system to validate.** Once they
    are validated, the code is merged into `master` and `3.x` respectively. **Never** check in to
    `master` or `3.x` directly.

  * `release-3.x.x`: Short-lived release branches where code checkins are carefully
    managed for extensive testing and release deployment.

## Source Tree

The YUI source tree includes the following directories:

  * `build`: Built YUI source files. The built files are generated at
    development time from the contents of the `src` directory. The build step
    generates debug files (unminified and with full comments and logging),
    raw files (unminified, but without debug logging), and minified files
    (suitable for production deployment and use).

  * `src` Raw unbuilt source code (JavaScript, CSS, image assets, ActionScript
     files, etc.) for the library. Beginning with YUI 3.4.0, the `src` directory
     also contains all module-specific documentation, tests and examples. All
     modifications to the library and its documentation should take place in
     this directory.

## Initial Setup

   1. Fork the project on GitHub (https://github.com/yui/yui3).
   1. Clone the fork to your local environment for development.

## Do Good Stuff

   1. Create a feature branch to house atomic code changes.
   `git checkout -b myfeature upstream/master --no-track`
   1. Satisfy the contribution requirements
   (see [YUI Contribution Standards](https://github.com/yui/yui3/wiki/Contribution-Standards)).
   1. Push changes to your fork.
   1. Submit a pull request from your fork to the `live-docs`,
   `dev-master`, or `dev-3.x` branch  for review.
   1. Incorporate community feedback.
   1. Push changes to your fork -- the pull request will automatically update.
   1. Rinse and repeat.

All changes should continue to be made on the feature branch; that way the pull
request you submit will automatically update to include them. Make sure to keep
the feature branch updated with the latest changes from master, so that they
don't diverge during your development process.

## Important Tips

  * Always work from a feature branch. Since all code submissions will be
  through a Pull Request, feature branches isolate changes from one submission to another.
  * Always start your new branch from the branch you want to submit to:
  `git checkout -b myfeature dev-master`
  * Remember to submit your Pull Request to the proper `dev-` branch and not
  `master` or `3.x`.

## Building

To build YUI components install [Shifter](http://yui.github.com/shifter/) (`npm -g install shifter`)
and then simply run `shifter` in that components directory.

Shifter also allows you to rebuild the entire YUI src tree:

    cd yui3/src && shifter --walk




 * <a href="data\yui\docs\index.html" target="_blank">Примеры</a>
 * <a href="http://yuilibrary.com/" target="_blank">Сайт</a><br>


## Gumby
### framework UI
##Gumby

__Кратко__

Gumby Framework является гибким инструментом на основе CSS. Имеет много пользовательских элементов(uI)

* [Пример](data/Gumby-master/ui.html)

__readme__

Gumby Framework [![Build Status](https://travis-ci.org/GumbyFramework/Gumby.png?branch=master)](https://travis-ci.org/GumbyFramework/Gumby)
=====================

Gumby Framework is a flexible, responsive CSS Framework, Powered by SASS. Create rapid and logical page layout and app
prototypes with a flexible and responsive grid system and UI kit.

Full documentation can be found at [http://gumbyframework.com](http://gumbyframework.com/docs).

More information, including our changelog, can be found in the [Wiki](https://github.com/GumbyFramework/Gumby/wiki).

Our [Google Plus Community](https://plus.google.com/u/0/communities/108760896951473344451) is rapidly growing, we recommend heading over there with any questions you may have or to geek out and discuss the framework and rwd in general.

Gumby is developed with love by your friends at [Digital Surgeons](http://www.digitalsurgeons.com).

Gumby has a few dependencies. Big thank you to the innovative geniuses behind these awesome technologies.

- [Sass](https://github.com/nex3/sass) - Nathan Weizenbaum
- [Compass](https://github.com/chriseppstein/compass) - Chris Eppstein
- [Modular Scale](https://github.com/Team-Sass/modular-scale) - Scott Kellum  *Note: Please use modular scale 1.0.6, 2.x has not been integrated yet*
- [FitText](http://fittextjs.com/) - Paravel
- [jQuery](http://jquery.com/)
- [Modernizr](http://modernizr.com/)

**MIT Open Source License**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## bootstrap.js
### framework html Ui
##bootstrap.js

Библиотека для разработки веб-страниц, первоначально разработана для twitter.
В своем составе имеет множество шаблонов для построения страниц,кнопки, модельные окна, выпадающие меню и многое другое.
Настройка элементов на странице происходит в основном с использованием классов и атрибутов.

__Использование CSS__

```javascript
<html>
<head>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
</head>
<body>
<div>
<button type="button" class="btn btn-default">Кнопка</button>
<button type="button" class="btn btn-primary">Основная</button>
<button type="button" class="btn btn-success">Успех</button>
<button type="button" class="btn btn-info">Информация</button>
<button type="button" class="btn btn-warning">Внимание</button>
<button type="button" class="btn btn-danger">Ошибка</button>
<button type="button" class="btn btn-link">Ссылка</button>

</div>
<div>
<ul class="pagination">
 <li><a href="#">&laquo;</a></li>
 <li><a href="#">1</a></li>
 <li><a href="#">2</a></li>
 <li><a href="#">3</a></li>
 <li><a href="#">4</a></li>
 <li><a href="#">5</a></li>
 <li><a href="#">&raquo;</a></li>
</ul>
</div>
<div>
<div class="alert alert-success" role="alert">Вы успешно дочитали до этого места</div>
<div class="alert alert-info" role="alert">Это ещё не конец статьи</div>
<div class="alert alert-warning" role="alert">Читать мало, нужно всё применять на практике</div>
<div class="alert alert-danger" role="alert">Да, это не смешно</div>

</div>


</body>
</html>


```

__Шаблон страницы__

```javascript
<html>
<head>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="https://code.jquery.com/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
</head>
<body>

<div class="row">
<div class="col-sm-4" style="background:blue;">Первая колонка</div>
<div class="col-sm-4" style="background:green;">Вторая колонка</div>
<div class="col-sm-4">Третья колонка</div>


</div>

</body>
</html>
```

__list или split-button

```javascript
<html>
<head>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="https://code.jquery.com/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
</head>
<body>
<div class="dropdown">
 <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Выпадающий список
<i class="caret"></i><br></button>
<ul class="dropdown-menu">
 <li><a href="#">HTML</a></li>
 <li><a href="#">CSS</a></li>
 <li class="divider"></li>
 <li><a href="#">JavaScript</a></li>
</ul>
</div>
<br /><br /><br /><hr />
<div class="dropup"><button class="btn btn-danger dropdown-toggle" type="button" data-toggle="dropdown">Список появится выше <i class="caret"></i></button><p></p>
<ul class="dropdown-menu">
<li><a href="#">HTML</a></li>
<li><a href="#">CSS</a></li>
<li><a href="#">JavaScript</a></li>
<li class="divider"></li>
<li><a href="#">Об уроках</a></li>
</ul>
</div>
<div class="dropdown"><button class="btn btn-warning dropdown-toggle" type="button" data-toggle="dropdown">Меню справа <i class="caret"></i></button><p></p>
<ul class="dropdown-menu dropdown-menu-right">
<li><a href="#">HTML</a></li>
<li><a href="#">CSS</a></li>
<li><a href="#">JavaScript</a></li>
<li class="divider"></li>
<li><a href="#">Об уроках</a></li>
</ul>
</div>
</body>
</html>
```

__angular, bootstrap, jquery__

```javascript
<html>
<head>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
<script src="https://code.jquery.com/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script>
// http://stackoverflow.com/questions/29410924/use-variable-from-jquery-method-in-a-angularjs-controller

  // A simple module with no dependencies
  var s="test";
  var b="Peter"
angular.module("mainModule", [])
  .controller("simpleController", function ($scope)
  {
    // Initialize the model
    var p=$("#inp1").val();
    $scope.person = {
      firstName:p,
      lastName: "Doe",
      
     

      // Define utility functions on the model object
      getFullName: function ()
      {
      
        return $("#first").text()+jQuery("#inp1").val() + " " + this.lastName;
      },
      test:function() {
       
       this.lastName=b;
       
      },
      read:function() {
       
       s=this.lastName;
       alert(s)
       
      }
    };
   
    
  });
jQuery(document).ready(function () {
  jQuery(".btn").eq(0).click(function(){
   b="Kate"
   alert(b)
  })
});

  </script>
</head>
<body ng-app="mainModule">
<div>
<button type="button" class="btn btn-primary" >Change lastname</button>
</div>

<div id="first">Hello! </div>
  <div ng-controller="simpleController">
    <strong>First name:</strong> {{person.firstName}}<br />
    <strong>Last name:</strong> {{person.lastName}}<br />
    <strong>Full name:</strong> {{person.getFullName()}}<br />
    <br />
    <labelnew name: <input type="text" value="John" id="inp1"/></label><br />
    <label>Set the last name: <input type="text" ng-model="person.lastName"/></label>
  <br /><button class="btn btn-primary"
  ng-click="person.test()">
write to angular
</button>
<button class="btn btn-primary"
  ng-click="person.read()">
read rrom angular
</button> 
  </div>
  

</body>
</html>
```


__Ссылки__

[Уроки по bootstraap](http://dedushka.org/uroki/6901.html)
## angular.js
### html framework template
angular.js
==========

__Кратко__

angular.js - библиотека от Google, позиционируется как framework.
Основное отличие от обычных frameworks (extjs,kendo и др.) - библиотека нацелена на добавление новых функций к обычному html, а не создание новых элементов.

_Интересна с точки зрения создания шаблонов страниц_

Ссылка на библиотеку-__"https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"__

__Примеры__

Простейший пример 

```javascript
<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>

<div ng-app="">
 
<p>Input something in the input box:</p>
<p>Name: <input type="text" ng-model="name"></p>
<p ng-bind="name"></p>

</div>

</body>
</html>
```
Более сложный пример со скриптом

```javascript
<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
  <script>
  // A simple module with no dependencies
angular.module("mainModule", [])
  .controller("simpleController", function ($scope)
  {
    // Initialize the model
    $scope.person = {
      firstName: "John",
      lastName: "Doe",

      // Define utility functions on the model object
      getFullName: function ()
      {
        return this.firstName + " " + this.lastName;
      }
    };
  });
  </script>
</head>

<body ng-app="mainModule">
  <div ng-controller="simpleController">
    <strong>First name:</strong> {{person.firstName}}<br />
    <strong>Last name:</strong> {{person.lastName}}<br />
    <strong>Full name:</strong> {{person.getFullName()}}<br />
    <br />
    <label>Set the first name: <input type="text" ng-model="person.firstName"/></label><br />
    <label>Set the last name: <input type="text" ng-model="person.lastName"/></label>
  </div>
</body>
</html>
```
angular и jquery

Эти библиотеки имеют разную идеологию работы с элементами веб-страницы. для совместной работы желательно разделять их функции. Обычно jquery выполняет подготовку данных, а angular их вывод на страницу.
```javascript
<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
  <script>
  // A simple module with no dependencies
angular.module("mainModule", [])
  .controller("simpleController", function ($scope)
  {
    // Initialize the model
    $scope.person = {
      firstName: "John",
      lastName: "Doe",

      // Define utility functions on the model object
      getFullName: function ()
      {
        return $("#first").text()+this.firstName + " " + this.lastName;
      }
    };
  });
  </script>
</head>

<body ng-app="mainModule">
  <div id="first">Hello! </div>
  <div ng-controller="simpleController">
    <strong>First name:</strong> {{person.firstName}}<br />
    <strong>Last name:</strong> {{person.lastName}}<br />
    <strong>Full name:</strong> {{person.getFullName()}}<br />
    <br />
    <label>Set the first name: <input type="text" ng-model="person.firstName"/></label><br />
    <label>Set the last name: <input type="text" ng-model="person.lastName"/></label>
  </div>
</body>
</html>
```
В jquery имеется плагин по функция схожий с angular - <b class="ilink">Шаблоны JsRender</b>

[AngularJS In 60Minutes](data/angular/AngularJSIn60MinutesIsh_DanWahlin_May2013.pdf)

__Информация в Интернете__

 * [описание](http://metanit.com/web/angular/1.1.php)
 * [Примеры](http://www.w3schools.com/angular/angular_examples.asp)
 * [Краткое описание на русском](https://habrahabr.ru/post/246881/)
 * [Более подробно](http://thewebland.net/angularjs-tutorial/)
 * [Быстрое знакомство](http://iantonov.me/page/angularjs-osnovy)
 * [50примеров](https://curran.github.io/screencasts/introToAngular/exampleViewer/#/)
 * [Еще примеры](http://www.angularjshub.com/examples/basics/)
## Библиотека svg.js
### js svg graplic animation
## SVG.js

 * Позволяет с помощью js сформировать svg текст и загрузить его в HTML.
 * Позволяет формировть различные графические (прямоугольник, круг, эллипс, многоугольник ) элементы, работает с элементом path и текстом.
 * Выполняет трансформацию и анимацию элементов.
 * Позволяет использовать библиотеку в автономном svg файле.
 * Библиотека разделена на отдельные функциональные модули, что позволяет уменьшить ее объем при использовании в проекте.

__Ссылки в Интернете

 * <a href="http://svgjs.com" target="_blank">Сайт</a>
 * <a href="http://documentup.com/wout/svg.js" target="_blank">Документация</a>


__readme__

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


```javascript
 <!DOCTYPE html>
<html>
<head>
<script src="data/svg/svg.js-master/dist/svg.min.js"></script>
<script>
function first_svg() {
var draw = SVG('svg1').size(300, 300)
var rect = draw.rect(100, 100).attr({ fill: '#f06' }).radius(10, 20);
var ellipse = draw.ellipse(100, 50)
var line = draw.line(0, 0, 100, 150).stroke({ width: 1 })
line.plot(50, 30, 100, 150)
var polyline = draw.polyline('0,0 100,50 50,100').fill('none').stroke({ width: 1 })
var text = draw.text("Lorem ipsum dolor sit amet consectetur.\nCras sodales imperdiet auctor.").fill('#f06')
text.font({
  family:   'Helvetica'
, size:     20
, anchor:   'middle'
, leading:  '1.5em'
})
}
function first_svg2() {
var draw = SVG('svg1').size(300, 300)
var text = draw.text(function(add) {
  add.tspan('We go ')
  add.tspan('up').fill('#f09').dy(-40)
  add.tspan(', then we go down, then up again').dy(40)
})
text.path('M 100 200 C 200 100 300 0 400 100 C 500 200 600 300 700 200 C 800 100 900 100 900 100').font({ size: 30.5, family:'Verdana' })

}
function anim_svg() {
var draw = SVG('svg1').size(300, 300)
var rect = draw.rect(100, 100).attr({ fill: '#f06' }).radius(10, 20);
rect.animate().rotate(45).skew(25, 0)
}
</script>
</head>
<body>

<h1> SVG image</h1>
<div id="svg1">
</div>
<input type="button" value="output" onClick="first_svg();"/>
<input type="button" value="output2" onClick="first_svg2();"/>
<input type="button" value="animation" onClick="anim_svg();"/>
</body>
</html> 

```

