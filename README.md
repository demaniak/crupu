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
TODO

### Nuget
TODO

## Include
```html
<script src="bower_components/crupu/src/crupu.js"></script>
```

## Use crupu-* classes
Mark the elements you want to keep up to date with the right css classes:

- crupu-pre : the preamble, in other words "Copyright &copy;"
- crupu-year: the full year, for example 2016

Please take a look at `sample.html` for examples.

But, in short:
```html
Copyright &amp; Awesome Factory x100 <span class="crupu-year">this will be replaced</span>
```

# License
[Apache License Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
