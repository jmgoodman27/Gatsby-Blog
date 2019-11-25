---
path: "/posts/ehanced-google-search-with-structured-data"
title: "Enhanced Google Search with Structured Data"
date: "2018-08-10"
---
When Google indexes a page, it often has trouble understanding the page's context and bits and pieces of specific data. By adding structured data to fill in the gaps, Google is able to provide more accurate and enhanced search results that can lead to higher click-through rates, making it a valuable part of SEO.

##### What is Structured Data?

Structured data is additional markup added to a page with data mapped to properties that Google and other search engines understand. [Schema.org](https://schema.org/docs/schemas.html){:target="_blank"} was created to standardize structured data across the most popular search engines (Google, Microsoft, Yahoo, and more) so implementing structured data isn't just for Google (although, when has anyone ever used Bing?). 

##### Google's Content Types

Every piece of structured data for a page revolves around a content type. Google has a list of content types that follows the Schema.org standard. When adding content types, it's important to refer to [Google's documentation](https://developers.google.com/search/docs/guides/intro-structured-data){:target="_blank"} and not Schema.org to see supported properties.  

Here are some of Google's most used content types:

- \- [Article](https://developers.google.com/search/docs/data-types/article){:target="_blank"}
- \- [Product](https://developers.google.com/search/docs/data-types/product){:target="_blank"}
- \- [Local Business](https://developers.google.com/search/docs/data-types/local-business){:target="_blank"}
- \- [Video](https://developers.google.com/search/docs/data-types/video){:target="_blank"}
- \- [Event](https://developers.google.com/search/docs/data-types/event){:target="_blank"}
- \- [Review](https://developers.google.com/search/docs/data-types/review){:target="_blank"}

Here are the rest of the content types including types in beta: 

- \- [Book](https://developers.google.com/search/docs/data-types/book){:target="_blank"}
- \- [Course](https://developers.google.com/search/docs/data-types/course){:target="_blank"}
- \- [Dataset](https://developers.google.com/search/docs/data-types/dataset){:target="_blank"}
- \- [Employer Aggregate Rating](https://developers.google.com/search/docs/data-types/employer-rating){:target="_blank"}
- \- [Fact Check](https://developers.google.com/search/docs/data-types/factcheck){:target="_blank"}
- \- [Job Posting](https://developers.google.com/search/docs/data-types/job-posting){:target="_blank"}
- \- [Media](https://developers.google.com/search/docs/data-types/media){:target="_blank"} (limited access)
- \- [Occupation](https://developers.google.com/search/docs/data-types/occupation){:target="_blank"}
- \- [Paywalled Content](https://developers.google.com/search/docs/data-types/paywalled-content){:target="_blank"}
- \- [Podcast](https://developers.google.com/search/docs/data-types/podcast){:target="_blank"}
- \- [Recipe](https://developers.google.com/search/docs/data-types/recipe){:target="_blank"}
- \- [Software App](https://developers.google.com/search/docs/data-types/software-app){:target="_blank"} (beta)
- \- [Speakable](https://developers.google.com/search/docs/data-types/speakable){:target="_blank"} (beta)
- \- [Top Places List](https://developers.google.com/search/docs/data-types/top-places-list){:target="_blank"} (beta)

##### Enhanced Search Features

In addition to more accurate indexing, Google uses structured data to enhance search results with something it calls rich results. Rich results displays extra data in results such as images, ratings, and prices optimized for its content type that leads to more click-throughs and a better search experience. 

For example, a result for a book might use rich snippets to add info about the book directly in search results:

<img src="../assets/img/rich-snippet.jpg" alt="Google rich snippets example" width="600"/>

Information from structured data can also show up in the knowledge graph on the right side of any search: 

<img src="../assets/img/knowledge-graph.jpg" alt="Google knowledge graph example" width="400"/>

Google has a [complete list of rich result features](https://developers.google.com/search/docs/guides/search-gallery){:target="_blank"}  in its documentation, although it's not necessary to know these to take advantage of structured data.

##### Adding Structured Data

Google recommends adding markup using [JSON-LD](https://json-ld.org/){:target="_blank"} (JSON for Linking Data) like so:

 {% highlight json %}
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Type",
  "url": "http://www.example.com",
  "name": "Example"
}
</script>
{% endhighlight %}

Writing structured data with JSON-LD keeps data grouped together and away from actual page content. This keeps it neatly packaged for maintenance instead of littered throughout the HTML. Each webpage can have more than one piece of structured data and they can be placed in either the  <head> or <body> regions of a page. [Google's documentation](https://developers.google.com/search/docs/guides/intro-structured-data){:target="_blank"}  has examples and guides for each content type.

##### Testing and Validating 

When finished, Google has a [testing tool](https://search.google.com/structured-data/testing-tool){:target="_blank"}  to validate that the code is correct. Google is also working on [another tool](https://search.google.com/test/rich-results){:target="_blank"}  to test rich results on already existing sites, but it currently doesn't support all content types. 

##### Structured Data for Ecommerce with Shopify

Rich results can be especially helpful for products by displaying info like price, availability, and reviews that can lead to higher conversions. If using [Starter Theme](https://github.com/Shopify/starter-theme){:target="_blank"} with Shopify, the [structured data needed for products](https://github.com/Shopify/starter-theme/blob/master/src/templates/product.liquid){:target="_blank"} is already written! It can also be copied into any theme since it uses standard Shopify objects to populate the data with liquid. This code supplies structured data for product variants as well through the "offers" property, although this part isn't necessary and can be removed.


##### Conclusion

Using structured data is a great way to ensure that Google understands all content on a page and to enhance the search results for the page. Google is adding features to search all the time and structured data is a robust way to take advantage of it. 