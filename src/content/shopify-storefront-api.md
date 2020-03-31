---
path: "/posts/shopify-storefront-api-vue-apollo"
date: "2020-03-02"
title: "Shopify Storefront API + Vue + Apollo"
---

For my last project, I built out a complete product listing page (PLP) equipped with advanced filtering using the Shopify Storefront API, Vue.js, and Apollo Client. 

For small Shopify stores with limited products per collection, I might write some vanilla JS to handle filtering since it's not a big deal to get all the products with liquid at once. But filtering only really becomes useful with large collections of products. This presents a great technical challenge in how to fetch, paginate, and filter products without greatly impacting performance. 

For example, if a collection has over 500 products and a few variants per product, that's a huge amount of data. Getting all products first and filtering client side would create a very large and unacceptable TTFB (time to first byte). After some research into Shopify's Storefront API, it appeared it had everything I would need to implement filtering and sorting into PLPs without sacrificing performance.

## Performanace 

The key to good performance is the Storefront API's use of relative cursor-based pagination. Performance would scale to any number of products per collection by jumping to a provided cursor when retrieving a new "page" of products.

Traditional page-based pagination uses offsets which wastefully has to read all previous unused data. With very large collections, this makes a big impact on performance when we want the feeling of a snappy user experience.

Cursor-based pagination is also more robust when fetching new data at the same time that new products are added or stock quantity changes (so that users don't fetch the same product twice, or products that are actually out of stock). On the design side, cursor-based pagination pairs well with a "load more" style.

## Feature Set

As far as features go, I made sure to include everything I could including:
- Cursor-based back button support (that would scroll to the last viewed product)
- Bookmarks with URL parameters for filtered / sorted states
- Reductive filtering so that users couldn't select filters that would return no results
- Content blocks using Shopify articles to add promotional blocks in the product grid

The site was currently using Findify for their PLP filtering, and I think Findify does a great job for performance (with its custom product indexing), but it lacks full customizability and comes with a $500/mo price tag. A custom solution can be better long term for more control, even if it comes with its own costs of increased complexity and reliance on Storefront API resolvers for performance. 

## Tech Stack

### Vue
Vue was very enjoyable to work with. Its simplicity made it easy to pick up in a matter of days. Single file components with scoped CSS was a dream to work with compared to using liquid / vanilla js / sass, and I brought in my usual TailwindCSS to help with consistent styling across components. 

I didn't end up going with Vuex (even though I tried it out) since it produced more problems than it solved for me. Using props and emitting events worked fine for a small app like this. 

There were certain things that were hard to accomplish in Vue, and sometimes I was wishing that I had the flexibility of React in those situations.

### Apollo + GraphQL
Apollo wasn't too hard to learn even though the curve was kind of steep. The real problems came from undocumented cases that I had to learn from experimentation. Their main docs are written for React, and Vue-Apollo is a separate project with its own docs. They weren't terrible, but examples were sparse and deeper features weren't explained well. I think if I were to use Apollo again for a larger project that required more local state, I'd make sure to use React instead (definitely am seeing the pros of React more and more). 

Overall though, Apollo made it really nice to make GraphQL requests and its cache made for a better UX and developer experience. I can't wait to see how it improves in version 3 and on. I took advantage of its local state management for the back button feature. Writing local resolvers wasn't bad since I put all of the logic into the "fetch more" step. Apollo made it easy to work with GraphQL variables and to fetch more products based on cursor. 

I love GraphQL and don't really want to go back to using REST. I think the problems around managing state are largely solved using GraphQL + Apollo with Apollo's local state feature. Although, it doesn't do a great job managing all kinds of local state and I would still consider bringing in Vuex or Mobx depending on the app.

### Storefront API
Shopify's Storefront API had pretty much everything I needed, but I think it can still be improved. I hope they make it a priority to add more connections / data, and continue improving performance. I very much enjoyed it and hope to work with it in a headless build soon.

## Ending Thoughts
I'm overall very happy with the results of this project. From planning to the end of the build, things went pretty smoothly. I had to pivot a couple of times to support all the features I wanted, but that's expected. 

My priority was really to learn new tech and I now feel confident picking up these tools for different applications. Vue is fantastic and plain old fun to use, even if I do end up picking up React next time around. The challenge of learning new tech in a small amount of time was also welcoming. Here's to looking forward to my next technical challenge in ecommerce (hopefully my first headless build?). 