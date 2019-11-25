---
path: "/posts/tailwind-css-in-js"
date: "2019-11-24"
title: "Tailwind + CSS-in-JS"
---
I've written a few posts about TailwindCSS and why I love it so much. When I work on a project without it, it takes me three times as long to style things and I go through withdrawal. 

Working with Gatsby, I've revisited my CSS preference and thought about ways I could potentially improve my setup. Of course, Tailwind would stay at the center of how I style things. But there are times when custom CSS needs to be written and then I have to resort to a BEM-like approach. I've found that this kind of works okay, but then I have a long list of random CSS and I have no idea where it's used. 

That's where CSS-in-JS comes into play. For those times where elements need custom styling, instead of BEM I can use CSS-in-JS to keep those styles right inside the component. It'll scope those styles to the component so I don't have to worry about naming issues across my project. If I ever delete a component, I delete all its custom CSS as well so no more bloat. And combined with Tailwind, I can see exactly how my components are styled without jumping to another file. It also makes for easy transfer of components across projects. 

Using Tailwind makes it quick to prototype out components, and if I'm in need of custom or dynamic styling (according to state) then I now have that option. Emotion is the library I decided to go with and it has a ton of features for cases where I need more flexibility. 

I still have an identical Tailwind setup to other projects with PostCSS and PurgeCSS. Emotion doesn't change that. And the combination allows me to use both on a single component without issue. 

I'm excited to see if this setup continues to work for me!