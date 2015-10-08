# TRAILim-angularjs-styles-module

## tr-resize angularjs directive 

Add it to any element to set the height as percentage of a relative DOM object

---
---
---

<br/><br/>




### Add the module to your dependancy injection in your app

\angular.module("ThuntApp",['ngTrailimStyles']);

<br/><br/>

### Add the directive attribute to a DOM element

\<div id="page-main" class="page-box" th-resize percentage-height="45" relative-to-element-selector="body"></div>

<br/><br/>

#### relative-to-element-selector="#jquery-selector"
A selector for a unique DOM element which will be the 'relative element'

Optional attribute
deafault DOM object is 'body'

The element with the directive will resize accoeding to this 'relative element'

<br/><br/>

##### percentage-height="xx"
The height of the element is set as percent of the relative element

<br/><br/>
