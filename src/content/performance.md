---
path: "/posts/performance"
title:  "Optimizing Front-end Performance"
date: "2018-06-26"
---
As a front-end web developer, my goal is to focus on the user experience and an essential part of a good experience is performance. It’s especially important considering that over 50% of people abandon a website if it takes more than 3 seconds to load. I've come to learn that every small bit of optimization adds up to significantly impact user satisfaction.

Improving performance starts before the project even begins: picking tools, languages, and frameworks to develop with. For example, choosing a lightweight CSS framework like Bulma or Basscss over Bootstrap. Or leaving out jQuery if possible (although it's often worth the weight). And my favorite example: throwing WordPress in the trash where it belongs and using static site generation instead. 

After picking lightweight tools, developing with performance in mind is key. This means minimizing the amount of JavaScript included and loading with "defer", using responsive images, lazy loading (by using a lightweight library like Lozad.js), and more. After development, file optimization techniques are easy to implement at the end of a project. This includes HTML/CSS/JavaScript minification, image compression, and gzip compression on the server. I usually set up Gulp to handle minification/compression. 

The cornerstone of performance is the content delivery network. I've been using CDNs for every website I create which Cloudflare makes incredibly easy. CDNs cut way down on the latency of static files (like images, videos, CSS, and JavaScript) by serving cached versions from servers closest to the user. On average, 80% of a website is made up of static resources which makes CDNs effective on all types of websites. They can also do file compression, code minification, and image optimization automatically. 

After doing all of the above, I'll use tools like PageSpeed Insights, Lighthouse, and Varvy for audits and improve as much as I can. I also use a performance checklist like this one: <a href="https://github.com/thedaviddias/Front-End-Performance-Checklist">https://github.com/thedaviddias/Front-End-Performance-Checklist</a>. No website will be perfect in terms of performance and many times it's a trade-off between functionality, but by implementing these techniques I can get most of the way there. 
