# CopyRight UPdate Util (crupu)
A simple, zero dependency component that will keep a simple copyright notice up to date (current year).

# Features
## Keeps a simple copyright notice up to date.

For example, it can make sure that the year part of "Copyright &copy; Awesome Company 2016"
will always be the current year.

## Zero runtime dependencies
Because this is such a simple component, it has no other dependencies.

# How
## Install
### Bower
Install the component with [Bower](https://bower.io): - `bower install crupu --save`

### Webjar
Add the dependency to your `pom.xml` file:
```xml
<dependency>
	<groupId>org.webjars.bower</groupId>
	<artifactId>crupu</artifactId>
	<version>0.0.3</version>
</dependency>
```

### Nuget
TODO

## Include
### Bower
```html
<script src="bower_components/crupu/src/crupu.js"></script>
```

### Webjar
Include in your view with an appropriately sourced `script` tag.

For example, using [ThymeLeaf](http://www.thymeleaf.org/documentation.html):
```html
<script th:src="@{/webjars/crupu/0.0.3/src/crupu.js}"></script>
```

### Nuget
TODO

### Direct Link
TODO

## Use crupu-* classes
Mark the elements you want to keep up to date with the right css classes:

- crupu-pre : the preamble, in other words "Copyright &copy;"
- crupu-year: the full year, for example 2016

Please take a look at `sample.html` for examples.

But, in short:
```html
Copyright &amp; Awesome Factory x100 <span class="crupu-year">this will be replaced</span>
```

# FAQ
## The name is terrible! Don't you want to change it?
Yes, it is horrible. No, I'm not changing it.

[Naming thing are hard enough](http://martinfowler.com/bliki/TwoHardThings.html)
without 2nd guessing and constantly angsting about it.

## Ok, forget about the name - why JavaScript?
Because everybody knows javascript. It is probably the only REAL, PRACTICAL
cross platform language around today.

It allows me to provide the same functionality to Java, .Net and whatever
else you want to use in your backend.

BTW: I still hate JavaScript. Just saying.

# License
[Apache License Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
