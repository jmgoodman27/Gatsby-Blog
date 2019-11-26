---
path: "/posts/slate"
title: "Shopify Development with Slate v1"
date: "2018-08-14"
---
<a href="https://github.com/Shopify/slate" target="_blank" class="underline">Slate</a> is a new Shopify workflow toolkit that is currently in beta (v1) that is designed to improve the theme development experience. Slate uses a host of tools under the hood including Shopify Theme Kit, Webpack, Babel, ESLint, Stylelint, and Jest in addition to its own custom scripts and logic. Combined with [Starter Theme](https://github.com/Shopify/starter-theme), Slate is a huge step forward in Shopify theme development. 

![Slate](../images/slate.jpg)


##### Lightning Fast Development

Slate was primarily built to speed up development and it certainly shows. While Liquid rendering still needs to be done on remote Shopify servers, Slate makes use of an Express server to serve assets locally and injects changes into the browser with webpack’s [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/){:target="_blank"}. It's not completely local development, but the workflow is insanely fast. 

##### Installing Slate

To use Slate v1, Node.js v8.9.4 or higher needs to be installed. The easiest way to install a new version of Node is with [node version manager](https://github.com/creationix/nvm){:target="_blank"}. 

Once the right version of Node is installed, it is easy to set up a new Slate project. After navigating to the desired directory, we can run one simple command:
```Bash
npx create-slate-theme our-theme-name 
```

Shopify's Starter Theme will be cloned by default and dependencies will be automatically installed. 

##### Development and Production Environments

An .env file is used to connect the local environment with a remote Shopify theme through a store url, API password, and theme ID. A production .env file can also be created (named ".env.production") and mapped to a separate production theme. The .env file looks like this: 

```html
# The myshopify.com URL to your Shopify store 
SLATE_STORE=slate.myshopify.com

# The API password generated from a Private App 
SLATE_PASSWORD=192883d83jsi29010
# Generate in admin by navigating to apps / manage private apps.

# The ID of the theme you wish to upload files to 
SLATE_THEME_ID=12345678901
# ID can be found in the url when using Shopify’s Theme Editor. 

# A list of file patterns to ignore, with each list item separated by ':' 
SLATE_IGNORE_FILES=
```

##### Running Slate

It is recommended to not install Slate’s CLI globally and instead use npm scripts to access commands. The command used most often to get started on development is “npm start”. This command will compile local files, upload files to remote, and boot up a local server for serving assets.

When ready for testing, we can deploy to our development theme with: npm run deploy. And finally when ready for production we run: npm run deploy —env=production.

##### JavaScript Bundles with Webpack

Webpack handles all builds with the theme.js file as its entry point. Slate’s builds are [optimized for performance](https://github.com/Shopify/slate/wiki/Template-and-layout-bundles){:target="_blank"} by bundling only the JS needed for that page. 

Slate will create bundles for matches between the scripts/layout and src/layout folders and the scripts/templates and src/templates folders. For example, if theme.js exists in the scripts/layout folder and theme.liquid exists in the layout folder, then a bundle called layout.theme.js will be created. If any dependencies are shared between js files, a new bundle will be created for just the shared dependencies. 

Slate will take care of including all of these bundles in HTML by updating the script-tags.liquid file. Slate will only load the bundles needed for that page and will also prefetch other bundles for other pages at a low priority for future use. The script-tags.liquid file will include localhost urls when developing locally and change to production urls after deployment. 

We can also bundle our Sass files in a similar way. To do this, we would simply add imports for our additional Sass files in the corresponding JavaScript file. Just like the script-tags.liquid file, the style-tags.liquid file will do all the work for including our stylesheets in HTML. 

Because Slate regenerates the script-tags.liquid and style-tags.liquid files often, these files should not be manually edited.

##### Linting and Transpiling

[ESLint](https://eslint.org/docs/user-guide/getting-started), [Stylelint](https://stylelint.io/), and [Babel](https://babeljs.io/) are ready by default to use, no configuration necessary. The default configuration has ESLint set up for linting ES6 and jQuery, Stylelint set up for linting Sass, and Babel set up for transpiling ES6 to ES5. These can be configured if needed, however, through the .eslintrc, .stylelintrc, and .babelrc files. 

##### Other Libraries

Other libraries included in Slate are jQuery, normalize.css, and lazysizes. Lazysizes is used for creating responsive images which I have a post on [here](/posts/responsive-images).

##### Sass and Custom CSS Properties

Since Sass is now compiled and served locally for faster development, we won’t be able to use Liquid variables directly in our Sass files anymore. Instead, we can make use of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*){:target="_blank"} and map our settings from the theme editor to custom properties that we create in our snippets/css-variables.liquid file. Then we can use these custom properties in our Sass. If we absolutely need server-side compiling of Sass, there is a theme.scss.liquid in Starter Theme available for us. 

##### Local and Remote Servers

Since Slate makes use of both a local and remote server, there will be two urls to pay attention to. Our development site will be viewed from the remote url (which will automatically pop up with npm start). The local url is for serving assets and lives at https://localhost:8080/. For it to start serving assets properly, we must go to that url and click “Proceed to localhost”. When successful, we should see a message "Cannot GET /" (which is a bit misleading). 

With developer tools, we can check to see if Hot Module Replacement is working by looking for a message “[HMR] connected” in the console. If the message is not there, restarting Slate seems to fix it.

##### Creating a New Starter Theme

If we want to use our own custom theme with Slate, we can push our theme to a new Github repository and run:
```Bash
npx create-slate-theme theme-name username/repository-name
```

##### My Thoughts on Slate

Slate is easy to use right out of the box, but can also be confusing since it hides most of its implementation. There is a lot of magic going on and as someone who likes to have a deeper understanding of the tools I use, this makes me a bit uncomfortable, especially since the documentation is lacking. Putting this aside though, there are a lot of pros and I give Slate a big thumbs up. 

I absolutely love how instantaneous changes are when developing, how well it fits together with Starter Theme, and how performant the code is. I definitely want to use Slate on my next project and think v1 is ready for the task. Since it is only in beta right now, we can expect to see much improvement in the future along with more thorough documentation. 

