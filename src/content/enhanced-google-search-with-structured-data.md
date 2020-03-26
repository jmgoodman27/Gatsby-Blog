---
path: "/posts/enhanced-google-search-with-structured-data"
title: "Enhanced Google Search with Structured Data"
date: "2018-08-10"
---
When Google indexes a page, it often has trouble understanding the page's context and bits and pieces of specific data. By adding structured data to fill in the gaps, Google is able to provide more accurate and enhanced search results that can lead to higher click-through rates, making it a valuable part of SEO.

##### What is Structured Data?

Structured data is additional markup added to a page with data mapped to properties that Google and other search engines understand. [Schema.org](https://schema.org/docs/schemas.html) was created to standardize structured data across the most popular search engines (Google, Microsoft, Yahoo, and more) so implementing structured data isn't just for Google (although, when has anyone ever used Bing?). 

##### Google's Content Types

Every piece of structured data for a page revolves around a content type. Google has a list of content types that follows the Schema.org standard. When adding content types, it's important to refer to [Google's documentation](https://developers.google.com/search/docs/guides/intro-structured-data) and not Schema.org to see supported properties.  

Here are some of Google's most used content types:

- \- [Article](https://developers.google.com/search/docs/data-types/article)
- \- [Product](https://developers.google.com/search/docs/data-types/product)
- \- [Local Business](https://developers.google.com/search/docs/data-types/local-business)
- \- [Video](https://developers.google.com/search/docs/data-types/video)
- \- [Event](https://developers.google.com/search/docs/data-types/event)
- \- [Review](https://developers.google.com/search/docs/data-types/review)

Here are the rest of the content types including types in beta: 

- \- [Book](https://developers.google.com/search/docs/data-types/book)
- \- [Course](https://developers.google.com/search/docs/data-types/course)
- \- [Dataset](https://developers.google.com/search/docs/data-types/dataset)
- \- [Employer Aggregate Rating](https://developers.google.com/search/docs/data-types/employer-rating)
- \- [Fact Check](https://developers.google.com/search/docs/data-types/factcheck)
- \- [Job Posting](https://developers.google.com/search/docs/data-types/job-posting)
- \- [Media](https://developers.google.com/search/docs/data-types/media) (limited access)
- \- [Occupation](https://developers.google.com/search/docs/data-types/occupation)
- \- [Paywalled Content](https://developers.google.com/search/docs/data-types/paywalled-content)
- \- [Podcast](https://developers.google.com/search/docs/data-types/podcast)
- \- [Recipe](https://developers.google.com/search/docs/data-types/recipe)
- \- [Software App](https://developers.google.com/search/docs/data-types/software-app) (beta)
- \- [Speakable](https://developers.google.com/search/docs/data-types/speakable) (beta)
- \- [Top Places List](https://developers.google.com/search/docs/data-types/top-places-list) (beta)

Google has a [complete list of rich result features](https://developers.google.com/search/docs/guides/search-gallery)  in its documentation, although it's not necessary to know these to take advantage of structured data.

##### Adding Structured Data

Google recommends adding markup using [JSON-LD](https://json-ld.org/) (JSON for Linking Data) like so:

```html
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Type",
  "url": "http://www.example.com",
  "name": "Example"
}
</script>
```

Writing structured data with JSON-LD keeps data grouped together and away from actual page content. This keeps it neatly packaged for maintenance instead of littered throughout the HTML. Each webpage can have more than one piece of structured data and they can be placed in either the  <head> or <body> regions of a page. [Google's documentation](https://developers.google.com/search/docs/guides/intro-structured-data)  has examples and guides for each content type.

##### Testing and Validating 

When finished, Google has a [testing tool](https://search.google.com/structured-data/testing-tool)  to validate that the code is correct. Google is also working on [another tool](https://search.google.com/test/rich-results)  to test rich results on already existing sites, but it currently doesn't support all content types. 

##### Structured Data for Ecommerce with Shopify

Rich results can be especially helpful for products by displaying info like price, availability, and reviews that can lead to higher conversions. If using [Starter Theme](https://github.com/Shopify/starter-theme) with Shopify, the [structured data needed for products](https://github.com/Shopify/starter-theme/blob/master/src/templates/product.liquid) is already written! It can also be copied into any theme since it uses standard Shopify objects to populate the data with liquid. This code supplies structured data for product variants as well through the "offers" property, although this part isn't necessary and can be removed.


##### Conclusion

Using structured data is a great way to ensure that Google understands all content on a page and to enhance the search results for the page. Google is adding features to search all the time and structured data is a robust way to take advantage of it. 