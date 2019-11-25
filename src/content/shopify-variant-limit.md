---
path: "/posts/shopify-variant-limit"
title:  "Shopify's 100 Variant Limit"
date:   "2017-09-25"
---
A big problem I ran into on my last Shopify project was figuring out how to work around the [100 variant limit](https://help.shopify.com/manual/products/variants). I was building an ecommerce store for an apparel business which does a lot of drop shipping and these vendors offered a wide selection of color/size combinations. Shopify was perfect in so many ways, but sadly its 100 variant limit was almost a deal breaker. There were a few Shopify apps that I checked out that were meant to solve this problem including [Product Options by Bold](https://apps.shopify.com/product-options) and [Advanced Product Options](https://apps.shopify.com/advanced-product-options), but these fell short in one way or another. I decided to go at a custom solution and was confident I could work out something that would meet all the necessary requirements.

###### Line Item Properties

At the core of my solution was line item properties. These are simply attributes that get appended to a line item when added to the cart. They are not included in the backend's product pages and therefore cannot be managed, have no inventory, have no attached image, and have no additional pricing. I had to figure out a way to utilize these line item properties to get around the 100 variant limit.

The solution ended up being a mix of line item properties, variants, and metafields. Since most of the products over 100 variants only had two options, I could keep size options in as Shopify variants and color options as line item properties. Size needed to be in as variants since each size had a different price. When a user selected a size, it changed the variant selected. When a user selected a color, it changed the line item property.

##### Metafields

Shopify’s metafields are super powerful and often underutilized. They allow you to attach additional information to a product, collection, order, or page. And with the use of the [chrome extension ShopifyFD](https://chrome.google.com/webstore/detail/shopifyfd-dashboard-tool/lffljkleilfpjlmcdnoaghhcbnemelge?hl=en), these metafields can be edited directly from Shopify’s backend. I used the metafields functionality to store color options for each product.

Next, I had to take this information from the metafields to dynamically create swatches for the user. Since I already had a swatch template, I just needed to integrate line item properties into the loop. To get exact colors on these options to show up for the user, I used liquid code to prepend the color name with the product brand- this way I could be precise with color codes in Sass.

##### Dynamic Images

I also needed dynamic images with this setup: I needed the main image to change each time a color option was selected to show the product in that color. Since I couldn’t utilize Shopify’s variant images functionality with line item properties, I uploaded the images with Shopify’s file uploader and retrieved the images easily with liquid code following a naming convention.

When retrieving the images for the product’s color options, I decided to sacrifice web performance for image availability since this was a going to be vital feature. I set up liquid code to preload image variations to be ready for when color options were selected (doing a lazy load would be too slow and unresponsive). Then with JavaScript, I could switch out the main image for the new image with the selected color. Overall, this ended up working really well. I also made sure the images came in on the cart page- it’s important for customers to see exactly the color option they are going to be buying.

##### Conclusion

Although it was a challenge to work around Shopify’s variant limit for this project, the end result was exactly what we wanted. Not every platform is going to do exactly what you need it to do right out of the box- I love Shopify because of the freedom it gives me as a developer to create these solutions.
