---
title:  "Atomic CSS: A Better Approach"
date: "2018-08-02"
path: "/posts/atomic-css"
---
CSS is notoriously hard to maintain. Projects that start out with good intentions almost always go to hell. 

I believe this happens for two main reasons: 
1. CSS lacks structure
2. Naming things is hard

Since CSS styles can be applied to elements in many different ways including inline styles, classes, ids, directly to the element, and more, this creates specificity hell and quickly becomes impossible to maintain. 

What CSS needs is a way to structure and name classes that eliminates this "feature" of specificity.

##### BEM Methodology 

Many methodologies have been designed to give CSS some semblance of structure including [BEM](https://en.bem.info/methodology/quick-start/), [OOCSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/), and [SMACSS](https://smacss.com/). BEM (Block, Element, Modifier) has become the most popular methodology of all. 

With BEM, every HTML element has a separate class that acts independently, all contained within a parent block.

Here is an example from the docs:

```HTML
<form class="search-form">
    <div class="search-form__content">
        <input class="search-form__input">
        <button class="search-form__button">Search</button>
    </div>
</form>
```

This certainly eliminates any specificity problems and provides a lot of control, but it comes with a tradeoff. Since blocks essentially encapsulate styles, any code written cannot be used outside of the context of that block. That means that when using BEM, our precious time will be spent coming up with class names and writing new CSS, even when we just want to add a small modification. 

This led me to look for a methodology that solved the specificity problem, promoted code reusability, and didn't require thinking up class names. 

##### The Winner: Atomic CSS

I found what I was looking for with a utility-first approach known as Atomic CSS (or Functional CSS). Atomic CSS is the practice of using small, immutable classes to create designs– just like building with legos.

```HTML
<!-- Example -->
<div class="flex justify-center">
    <h1 class="color-primary font-lg uppercase">Title</h1>
    <p class="color-secondary">Subtitle</p>
</div>
```

The idea is that each class does one specific thing and is named after that thing. By building with small classes, writing new CSS is rare, styles don't clash between classes, and semantic class names don't have to be conjured up. This results in a huge productivity boost. Plus, it's fun.

Style guides can dictate the available atomic classes making for a much more consistent design and designers can easily tweak styles without bugging developers.

##### Reusable Components

For reusable UI components, we'll want to have traditional reusable CSS classes instead of atomic classes. However, we can still make use of atomic classes by building our reusable class with atomic building blocks like so: 

```Sass
    .btn {
    @extend .b-color-primary;
    @extend .pad-tb-sm;
    @extend .inline-block;
    @extend .color-white;
    @extend .border-radius;
    }
```

```html
<a href="#" class="btn">Button</a>
```

Another solution to creating reusable components is to use a templating language:

```html
{% raw %}
{% for post in posts %}
<div class="pad-tb-sm">
    <a href="{{ post.url }}" />
        <div>
            <h2 class="fs-sm bold pad-b-sm color-primary">{{ post.title }}</h2>
            <p>{{ post.content }}</p>
            <img class="img-md border-sm" src="{{ post.image }}"</p>
        </div>
    </a>
</div>
{% endfor %}
{% endraw %}
```

A for loop let's us easily maintain our atomic styles across a set of components. This is my preferred way of handling reusable components.

##### Custom Code

Sometimes it's necessary to write brand new custom CSS, and that's fine with this methodology. It's utility first for a reason. 

The idea is that the use of atomic classes will make it more rare and therefore easier to maintain. We can also continue to use atomic classes in our custom classes as well.

##### Atomic CSS Grid

I make use of atomic classes with CSS Grid to have a few grids ready to go:

 ```html
<div class="grid-auto">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
<div class="grid-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

```css
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
```

##### Responsive Classes

The hardest part about using the atomic methodology is responsive classes. That's why I only use [Tailwind CSS ](https://tailwindcss.com/). It can generate responsive atomic classes that can be used with a prefix (such as sm:class-name). Seriously, check Tailwind CSS out.

##### CSS Architecture

I've found that this set of practices and tools makes CSS vastly easier to maintain. I also think CSS architecture is really important as well. Using Sass and separating our files can keep them small and manageable. I prefer separating files out like this:

1. Tools: Variables (like colors, fonts, and breakpoints), mixins, and functions.
2. Reset: Normalize.css.
3. Base: Low-level styles for HTML elements like headers, paragraphs, images, and sections.
4. Atomic: Atomic CSS utility classes.

##### Conclusion 

To me, Atomic CSS makes managing and designing with CSS way more enjoyable and manageable compared to other methodologies. Also, being able to design on the fly without writing any CSS is liberating. It turns out that Atomic CSS is catching on and large companies like Yahoo!, Medium, Github, and Twitch are already using it in production. 

For more reading on the topic, this website has a long list of interesting articles: <a href="https://johnpolacek.github.io/the-case-for-atomic-css/" target="_blank">https://johnpolacek.github.io/the-case-for-atomic-css/</a>
