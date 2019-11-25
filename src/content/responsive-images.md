---
path: "/posts/responsive-images"
title:  "Responsive Images and Lazysizes"
date: "2018-09-21"
---

Compared to HTML, stylesheets, and scripts, images make up the bulk of what is downloaded by a user on a typical web page. Therefore, there is no doubt that optimizing images for performance should be a top priority. Making our images responsive allows us to serve the perfect sized image for each screen size. Why should our users waste bandwidth by loading a large, heavy image on a smaller device?

##### Responsive Attributes

To set up responsive images, we use two attributes called srcset and sizes with the &lt;img&gt; element. In the srcset attribute, we can include a list of images available to serve with each filename and image width. The image can be named anything and the width must have a “w” after the size: 

{% highlight html %}
srcset="example-300.jpg 300w,
        example-520.jpg 520w,
        example-960.jpg 960w"
{% endhighlight %}

In the sizes attribute, we are telling the browser the size of the slot that the image will fill at different breakpoints:

{% highlight html %}
 sizes="(max-width: 300px) 250px,
        (max-width: 600px) 550px,
        900px"
{% endhighlight %}

For example with the code above, when the page is loaded with a screen size less than 300px, we are telling the browser that the image will fill a 250px size slot. In this case, it’ll load example-300.jpg to fill that slot. The 900px markup is the default sizing for any screen that doesn't match a media condition. Order matters when using the sizes attribute as the browser will stop at the first condition that equals true. 

Keep in mind: the browser ultimately decides which image to load. This markup is a suggestion to the browser, but it will load what image it thinks is best. Also, testing this functionality locally might give different results than on a production site. The cache also must be cleared each time to ensure a proper simulation.

For this example, our whole markup will look like this:

{% highlight html %}
<img srcset="example-300.jpg 300w,
             example-520.jpg 520w,
             example-960.jpg 960w"
     sizes="(max-width: 300px) 300px,
            (max-width: 600px) 550px,
            900px"
     src="example-300.jpg">
{% endhighlight %}

Notice the extra src tag– this will be our default for browsers that don't support responsive images. 

##### Lazysizes

Defining the sizes and media conditions for every image would be laborious. Instead, let's have the [lazysizes](https://github.com/aFarkas/lazysizes){:target="_blank"} script lazy load our images and calculate this for us automatically. 

Lazysizes has two important attributes named data-srcset and data-sizes that correspond to the native srcset and sizes attributes. Data-srcset works exactly the same way as described above. For data-sizes, all we have to do is set data-sizes="auto". So the example from above with lazysizes would look like:

{% highlight html %}
<img data-srcset="example-300.jpg 300w,
                  example-520.jpg 520w,
                  example-960.jpg 960w"
     data-sizes="auto"
     data-src="example-300.jpg"
     class="lazyload">
{% endhighlight %}

For lazysizes to work, it is best to add this CSS to make sure every img has a width: 

{% highlight css %}
img[data-sizes="auto"] { 
    display: block; 
    width: 100%; 
}
{% endhighlight %}

It's that easy to get started with lazysizes, but it also offers much more. The [documentation](https://github.com/aFarkas/lazysizes){:target="_blank"} outlines advanced features and additional plugins. For example, the [Responsive Image as a Service (RIaS)](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/rias){:target="_blank"} plugin will generate the best image based on a URL pattern. RIaS along with lazysizes is actually what Shopify uses for Slate and Starter Theme. 

##### Art Direction

So now we know how to serve the right sized image to enhance performance. But sometimes we don't want to just load the same image at a different size. Sometimes we want to load a completely different image. In these cases we use the &lt;picture&gt; element instead. 

{% highlight html %}
<picture>
  <source media="(max-width: 500px)" srcset="example-sm.jpg">
  <source media="(max-width: 800px)" srcset="example-md.jpg">
  <img src="example-lg.jpg">
</picture>
{% endhighlight %}

For each image, we include a &lt;source&gt; tag with the srcset attribute pointing to the image path. A media attribute is used to specify when we want that image to be shown. An &lt;img&gt; tag is also included as a default.

Lazysizes also works with the &lt;picture&gt; tag too. 

{% highlight html %}
<picture>
  <source media="(max-width: 500px)" data-srcset="example-sm.jpg">
  <source media="(max-width: 800px)" data-srcset="example-md.jpg">
  <img data-src="example-lg.jpg" class="lazyload">
</picture>
{% endhighlight %} 

##### Conclusion

Responsive images will save mobile users a lot of precious data and they are pretty easy to implement, especially with lazysizes. Responsive images are a must-use in 2018 and will give any site a performance boost that will separate it from its competition.  