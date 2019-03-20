# Scss mixin helper

> Some useful scss mixins collection.

<p>
    <a href="https://www.npmjs.com/package/@toojs/style-utility-mixin">
        <img src="https://img.shields.io/npm/v/@toojs/style-utility-mixin.svg?style=flat-square" alt="Version">
    </a>
</p>

## Installation

```bash

yarn add @toojs/style-utility-mixin

```

## Usage

### Use scss file

```scss
@import '@toojs/style-utility-mixin/mixin';
```

#### ellipsis

Mixin helping to truncate and add ellipsis to a string too long for it to fit

```scss
.foo {
  @include ellipsis($lines: 1, $lineHeight: 1em);
  ///
}
```

#### hairline

Hairline mixin helper

```scss
.foo {
  @include hairline($position, $color: currentColor, $size: 1px);
  ///
}
```

### Use css file

```css
/** your css file */
@import '@toojs/style-utility-mixin/mixin.css';
```

```html
<div class="ellipsis">blablablablabla</div>
<div class="ellipsis--2">ellipsis when content over 2 lines</div>
<div class="ellipsis--3">ellipsis when content over 3 lines</div>

<div class="hairline-right">hairline right</div>
<div class="hairline-left">hairline left</div>
<div class="hairline-top">hairline top</div>
<div class="hairline-bottom">hairline bottom</div>
```
