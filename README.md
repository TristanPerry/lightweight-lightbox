# A lightweight (1 KB) image lightbox script

This lightweight JQuery lightbox script lazy-loads images (saving bandwidth) and clocks in at just ~1 KB (unlike some other scripts which are 40-60KB not including JQuery).

## Demo

To see this working please check http://www.tristanperry.com/lightweight-lightbox/ (where the JS and CSS are embedded in the same page for ease of understanding).

## Install Instructions

- Ensure that JQuery (v3.x) is referenced

- Include the CSS (from Styles.css) and the Javascript (from Scripts.js) in the page(s) you want the lightbox to appear in.
  - The JS can go anywhere on the page - in the `<head>` or within the `<body>`. The `$(function() {` notation is shorthand for `$( document ).ready()`

- Include the two lightbox `<div>` elements at the end of the `<body>`:

```html
<div id="lbox" style="display: none;">
    <div id="lboxinner">

    </div>
</div>
```

- Then simply add attributes `class="lboxImg" data-full-url="/path/to/full/image"` to any `<img>` tags to convert them into lightbox-ready images. When clicked, the image defined in data-full-url is loaded and displayed on the page.