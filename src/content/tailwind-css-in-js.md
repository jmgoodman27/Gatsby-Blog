---
path: "/posts/tailwind-css-in-js-linaria"
date: "2019-11-25"
title: "Tailwind and CSS-in-JS with Linaria"
---
Working with Gatsby, I've revisited my CSS preferences and thought about ways I could potentially improve my setup. Of course, Tailwind would stay at the center of how I style things. But there are times when custom CSS needs to be written and then I have to resort to a BEM-like approach. I've found that this kind of works okay, but then I have a long list of random CSS and I have no idea where it's used. 

That's where CSS-in-JS comes into play. For those times where elements need custom styling, instead of BEM I can use CSS-in-JS to keep those styles right inside the component. It'll scope those styles to the component so I don't have to worry about naming issues across my project. If I ever delete a component, I delete all of its custom CSS as well so no more bloat. And combined with Tailwind, I can see exactly how my components are styled without jumping to another file. It also makes for easy transfer of components across projects. 

Using Tailwind makes it quick to prototype out components, and if I'm in need of custom or dynamic styling (according to state) then I now have that option. 

[Linaria](https://linaria.now.sh/) is the CSS-in-JS library I decided to go with (instead of Styled Components or Emotion). Linaria is a zero-runtime CSS in JS library, so the end user just gets plain CSS on their browser just like normal. The reason this is so good for me is because it plays very nicely with Tailwind. I can use @screen media queries and @apply directives directly in JS with Linaria. I also like how you are simply creating CSS classes with Linaria and applying them to your elements (can't say I'm a huge fan of styled components). However, Linaria also has a way to create styled components if I ever find myself wanting that functionality. 

Zero-runtime has its advantages too and fits in with my web development philosophies. I like building with progressive enhancement in mind, so this stack (Gatsby/React, Linaria, Tailwind, etc.) doesn't actually rely on JavaScript in the browser. It's simply a static site with regular old CSS first, and then React hydrates in the background. 

Linaria supports dynamic styling based on prop values through the use of CSS custom properties which can also come in handy. Although I think it'd be rare for me to need that. The much more common scenario would be conditional styling which is no problem with classes. [Classnames library](https://github.com/JedWatson/classnames) provides an elegant way to do that too.  

As far as Tailwind goes, I still have an identical Tailwind setup to other projects with PostCSS and PurgeCSS. 

I'm excited to see if this setup continues to work for me for future Gatsby projects.