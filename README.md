# klein_like_calvin_react

Nikki Klein | Software Engineer | Portfolio

## Table of contents

- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Author

- Website - [Nikki Klein](https://www.kleinlikecalvin.com)

## Overview

WIP

## My process

### Built with

- Next
- Tailwind

### What I learned

<code>scroll-behavior</code> I wanted to utilize this with my "next section" arrows so that the user could smoothly transition from section to section. I placed this property on root because I wanted the whole page to inherit the effect.

```css
:root {
  scroll-behavior: smooth;
}
```

<code>setInterval()</code> In coding this website, I got to learn a little more about animating elements which was challenging but really fun. I hope that I get to work more with this in the future. We used this method to maintain the character by character effect that can be associated with typing.

```js
function typewriter() {
  hello.innerText = greetings[typewriterIndex];
  typewriterIndex = (typewriterIndex + 1) % greetings.length;
}

setInterval(typewriter, 200);
```

<code>Typewriter Effect CSS</code> Originally, I intended to achieve the effect entirely through CSS but quickly realized that it made much more sense to use JS. But I still used CSS to add the blinking caret effect.

```css
#hello {
  color: var(--green);
  border-right: 0.15em solid var(--green); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  animation: blink-caret 0.4s step-end infinite;
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: var(--green);
  }
}
```

### Useful resources

- [TypeWriter Effect](https://css-tricks.com/snippets/css/typewriter-effect/)
- [Set Interval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [William Promotions](https://www.wpromotions.eu/) - Confetti effect
- [Scroll Behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
