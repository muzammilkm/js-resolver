js-Resolver($resolver)
===================
A light weight plugin for Inversion of Control(IOC) container which can resolve an object or a class dynamically without polluting global scope. Adopating SOLID principle for seperation of concerns & single responsibility.

## Features
1. Light weight
2. Dynamically resolve 
3. Used Strict IIFE
4. Muliple files
5. SOLID principle


## Demo
1. [Demo](https://muzammilkm.github.io/js-resolver/docs/index.html)

## Installation

### Manual Installation

Download the **js-resolver.js** file or **jq-resolver.min.js** (*recommended*) file from dist folder and include it in your page either in the `<head>` section or just before the closing tag of the `<body>` section.

### NPM
```
> npm install js-resolver
```

### Bower
```
$ bower install js-resolver
```

### Nuget
```
PM> Install-Package js-resolver
```

## Introduction
A light weight plugin for Inversion of Control(IOC) container which can resolve an object or a class dynamically without polluting global scope. Adopating SOLID principle for seperation of concerns & single responsibility.

Basic Example
```javascript
(function (resolve) {
   var personModel = {},
       _data;

   model.getFirstName = function() {
		return _data.firstName;
   };

   model.getLastName = function() {
		return _data.firstName;
   };

   model.setData = function(data) {
   		_data = data;
   };

   resolve('person', personModel);

}(window.$resolver));
```
##### Resolving model
```javascript
(function (resolve) {
   var person = resolve('person');

   person.setData({
   		firstName: 'Muzammil',
   		middleName: 'Khaja',
   		lastName: 'Mohammed'
   	});

   	alert("your first name: " + person.getFirstName());
   	alert("your last name: " +person.getLastName());

}(window.$resolver));
```

## Documentation
Add module either object or function or value
```javascript
resolve('alias name', object or function or value);
```
To resolve the object or function or value via alias name
```javascript
resolve('alias name');
```