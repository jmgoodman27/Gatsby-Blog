---
title:  "Intro to CSS Grid"
date: "2018-08-28"
path: "/posts/css-grid"
---

CSS Grid is the addition to CSS that we've been waiting years for. No more tables, float hacks, or Flexbox frameworks.. we now have an easy, intuitive, and powerful two-dimensional grid tool at our disposal– let's take advantage of it.

##### A Basic Grid

Let's first look at how to create a basic grid with CSS:

 ```css
.grid {
  /* Activate grid */
  display: grid;
  /* Define columns and their widths */
  grid-template-columns: 150px 150px;
  /* Define rows and their heights */
  grid-template-rows: 150px 150px;
}
```

A grid can have any number of columns defined with multiple ways to define widths:

```CSS
/* 2 columns each 150px wide */
grid-template-columns: 150px 150px;
/* 3 columns each 1 fractional unit of the available space */
grid-template-columns: 1fr 1fr 1fr;
/* 5 columns with a variety of units */
grid-template-columns: 20px 10em 20% 2fr 1fr;
```

The same thing can be done with rows and their heights:

```CSS
/* 2 rows each 150px high */
grid-template-rows: 150px 150px;
/* 3 rows each 1 fractional unit of the available space (container height must be defined) */
grid-template-columns: 1fr 1fr 1fr;
```

Grids can be created just by knowing these two properties:

<p data-height="383" data-theme-id="0" data-slug-hash="ZMKjEa" data-default-tab="css,result" data-user="jmgoodman27" data-pen-title="Simple Grid" class="codepen">See the Pen <a href="https://codepen.io/jmgoodman27/pen/ZMKjEa/">Simple Grid</a> by Jake Goodman (<a href="https://codepen.io/jmgoodman27">@jmgoodman27</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

##### Explicit vs Implicit Grid

In that example, we had 4 grid items and 4 tracks. But what happens if we have more grid items than can fit on our grid? That's where the concepts of explicit and implicit grids come in. Explicit grid is the defined grid like we did above. Implicit grid is when CSS Grid automatically adds tracks to accommodate more grid items. It will assign leftover grid items to new rows by default (which we can change by setting grid-auto-flow to column). The height of these implicit rows can be defined with grid-auto-rows and the width of the implicit columns can be defined with grid-auto-columns:

<p data-height="383" data-theme-id="0" data-slug-hash="QVvBxO" data-default-tab="css,result" data-user="jmgoodman27" data-pen-title="Basic Grid 2" class="codepen">See the Pen <a href="https://codepen.io/jmgoodman27/pen/QVvBxO/">Basic Grid 2</a> by Jake Goodman (<a href="https://codepen.io/jmgoodman27">@jmgoodman27</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

##### Grid Lines

CSS Grid will automatically place grid items into tracks on the grid. If we want control over what goes where, we use these properties: 

```CSS
.grid_item {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
```

These numbers refer to the grid lines, not the tracks. That grid item will start at line 1 and end at line 2 from left to right for columns and top to bottom for rows. Here is a visual from [Mozilla's docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout){:target="_blank"}: 

![Grid Lines](https://mdn.mozillademos.org/files/14761/1_diagram_numbered_grid_lines.png)

We can also start and span a certain length:

```CSS
.grid_item {
  /* Start at line 1 and end at line 3 */
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

##### Atomic CSS Grids 

Like I mentioned [in this post](/posts/atomic-css), I have a few atomic classes ready to go so I can quickly add grids when needed.

<p data-height="346" data-theme-id="0" data-slug-hash="ZMKjMM" data-default-tab="css,result" data-user="jmgoodman27" data-pen-title="Auto Grid" class="codepen">See the Pen <a href="https://codepen.io/jmgoodman27/pen/ZMKjMM/">Auto Grid</a> by Jake Goodman (<a href="https://codepen.io/jmgoodman27">@jmgoodman27</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

With .grid-auto, we can have any number of elements we want and they'll be placed automatically into a responsive grid. The amount of columns will vary based on the available screen width and be at least 150px wide. In other words, the grid will create as many 150px wide columns as it can fit and if it can't fit another column, the columns will stretch to be 1 fractional unit of the space. In just that little bit of code, we have a fully responsive automatic grid.

Now let's look at .grid-2. 

<p data-height="392" data-theme-id="0" data-slug-hash="WgjKaX" data-default-tab="css,result" data-user="jmgoodman27" data-pen-title="Grid-2" class="codepen">See the Pen <a href="https://codepen.io/jmgoodman27/pen/WgjKaX/">Grid-2</a> by Jake Goodman (<a href="https://codepen.io/jmgoodman27">@jmgoodman27</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

This will give us a two column grid with each column being 1 fractional unit. This grid is not responsive, meaning it'll keep these 2 columns at all screen widths. If we wanted to only apply the two columns at a breakpoint, here is what the code would look like: 

 ```Sass
.grid-2 {
  display: grid;
  grid-auto-rows: 150px;
  grid-gap: 10px; 
  /* My sass mixin for queries that uses min-width */
  @include query($breakpoint) {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

The grid will default to a one column layout when grid-template-columns is not defined. 

Having these grids ready to go makes creating layouts even faster.

##### Browser Support

The only problem with using CSS Grid is its lack of full browser support. It's not a huge deal considering IE11 has partial support and Opera Mini is the only browser with no support. In any case, we can create a fallback by wrapping our grid code in a @supports feature: 

```CSS
  @supports(display:grid) {
    .grid {
        display: grid;
        grid-template-columns: 200px 200px;
    }
  } 
  .grid {
      display: flex;
  }
```

For modern browsers, it'll check if grid is supported and apply that code. For older browsers that don't understand @supports, it'll just apply the flexbox fallback.

##### When to Use Flexbox

Besides using Flexbox as a fallback, Flexbox complements CSS Grid well for aligning items inside containers:

<p data-height="312" data-theme-id="0" data-slug-hash="jvwWeJ" data-default-tab="css,result" data-user="jmgoodman27" data-pen-title="Grid and Flexbox" class="codepen">See the Pen <a href="https://codepen.io/jmgoodman27/pen/jvwWeJ/">Grid and Flexbox</a> by Jake Goodman (<a href="https://codepen.io/jmgoodman27">@jmgoodman27</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Although CSS Grid is far more useful for creating layouts, Flexbox comes in handy pretty often for alignment use cases. 

##### Conclusion

This is all the knowledge necessary for creating basic CSS Grids. It is easy, intuitive, and a huge improvement over past grid methods. One final example for putting it all together:

<p data-height="600" data-theme-id="0" data-slug-hash="oPWMVX" data-default-tab="result" data-user="jmgoodman27" data-pen-title="Grid" class="codepen">See the Pen <a href="https://codepen.io/jmgoodman27/pen/oPWMVX/">Grid</a> by Jake Goodman (<a href="https://codepen.io/jmgoodman27">@jmgoodman27</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

##### CSS Grid Resources

- Jen Simmons: [Blog](http://jensimmons.com/writing) and [YouTube Channel](https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag)
- Rachel Andrew: [Blog](https://rachelandrew.co.uk/archives/)
- [CSS Tricks Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Grid By Example](https://gridbyexample.com/)