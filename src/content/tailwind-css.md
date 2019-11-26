---
path: "/posts/tailwind-css"
date: "2019-11-25"
title: "A Year with Tailwind CSS"
---
I've been using Tailwind CSS for about a year now and I've been in love. It's really ruined writing CSS in any other way for me (looking at you BEM).

For those unfamiliar, Tailwind CSS is a utility first CSS framework for rapid styling. So instead of creating an individual class based on each element's purpose (ex: .blog__post-title), Tailwind generates a bunch of utility classes that apply to your elements (ex: underline font-bold text-lg). This way, you are writing very little CSS which makes maintaining your CSS very easy. 

After using it for a while now, I've found these to be the biggest benefits for me.

### Consistent styling
I love how padding, colors, max widths, etc. have tiered systems. This keeps a consistent look across the website while also making it really easy to adjust these values in the future. 

### Faster development
There's no more thinking of class names for every single element and modifier just to add one style. I can see my styles right with my markup so I don't have to keep switching to other files. The shorthand of Tailwind for classes and media queries is especially helpful. All of this significantly speeds up development to the order of 3x as fast as using something like BEM. 

### Easy maintenance
When I delete any HTML, I don't have to worry about leftover CSS either. Since I'm not writing much additional CSS, the stylesheet doesn't grow out of control over the length of a project.

### Customization options
Tailwind makes it easy to add/change utilities in its config. Additional utilities can also just be created with regular CSS with the help of Tailwind directives. I now think of CSS in terms of small, immutable classes that are building blocks for UI. This cognitive shift makes it much easier to reason about when writing CSS. 

As far as downsides go, I haven't experienced much of anything. It can be confusing to other developers unfamiliar with the approach, but they are free to write their portions of the website with their own methods. 

Setting up Tailwind is really easy too with PostCSS. I'd also recommend using PurgeCSS to remove any unused CSS from Tailwind across your project. That way you can develop with everything available and not have to worry. Setting up PurgeCSS is not completely straightforward though since you have to make sure to whitelist any CSS that is not being applied to markup. 

Overall, I'm extremely happy with Tailwind and think it has found a permanent place in my web dev toolkit. 