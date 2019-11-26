---
path: "/posts/open-graph-tags"
title:  "Open Graph Tags for Products"
date: "2018-09-05"
---
Sharing products and content on social media can be an essential part of an ecommerce marketing strategy. When sharing a link of a product, we want to be sure that the right data is being displayed on sites like Facebook, Twitter, and Pinterest. Facebook created a protocol called [Open Graph](http://ogp.me/) which utilizes meta tags to allow websites to define this data.

In an example Tweet, we can see that a product title, description, and image is needed for the link preview:

The Open Graph protocol has a few basic properties to define these and more: 
- \- og:title
- \- og:description
- \- og:image (url of image)
- \- og:type (object type will be "product")
- \- og:url (tells scraper to get data from this url)

A couple of additional properties are required for Twitter:
- \- twitter:card
- \- twitter:site (Twitter username for website)
- \- twitter:title
- \- twitter:description

 The twitter:card property is used to instruct which type of card layout to use. For products with high quality imagery we can set the property to "summary_large_image". We also have the option of "summary" for smaller image and "player" for a product video. 
 
 The twitter:title and twitter:description properties should be added as well, but the scraper will take info from og:title and og:description if those are not added. 
 
 For more info on twitter properties, check out [Twitter's documentation](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards). 

Putting it all together, we get something like this code:

```html
<meta property="og:url" content="ecommerce-site.com">
<meta property="og:title" content="Product Name">
<meta property="og:type" content="product">
<meta property="og:description" content="Description of product...">
<meta property="og:image" content="http://image-path.jpg">
<!-- og:image:secure_url is an alternate url for https -->
<meta property="og:image:secure_url" content="https://secure-image-path.jpg">
<!-- Need to define width and height of image -->
<meta property="og:image:width" content="400">
<meta property="og:image:height" content="300">
<meta property="og:image:alt" content="Optional alt text">
<meta name="twitter:site" content="@username">
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:type" content="product">
<meta property="twitter:description" content="Description of product...">
```

That's basically it for defining data for our product previews on social media!

A full list of optional metadata can be found at [http://ogp.me](http://ogp.me). 