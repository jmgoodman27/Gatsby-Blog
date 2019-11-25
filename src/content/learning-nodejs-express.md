---
title:  "Node.js and Express for Small Apps"
path: "/posts/learning-nodejs-express"
date: "2018-03-22"
---
In my free time, I’ve been diving into the world of Node.js and I’ve been loving it. I feel right at home with the npm ecosystem and using Express makes it fast and easy to get a web app up and running. My favorite part about using Node.js/Express is the freedom I have when it comes to architecting the app (MVC) and choosing my favorite libraries/tools to use.

My ideal stack/toolset is looking like:

- **Node.js**: Using JavaScript for the back-end is a dream as a front-end developer. No need to constantly switch between languages when writing full stack.

- **Express**: Express beats all other frameworks I’ve used when it comes to simplicity in handling requests. I also like being able to choose a templating language for my views as I prefer to use Nunjucks for templating.  

- **Postgres/Knex.js**: Postgres is a great relational database and often beats a NoSQL solution due to its recent native JSON support, making it versatile for both relational data and document storage. Plus, using Knex makes it really easy to connect to a Postgres database. Knex is such a great tool for querying, migrations, and seeding data and works seamlessly with Node. Postgres is also easy to set up on a Mac with the [Postgres app](https://postgresapp.com) and [Postico](https://eggerapps.at/postico/) for a client.

- **Gulp**: I use Gulp to help me run Nodemon, Browsersync, and to watch and compile my Sass files.

- **Heroku**: For deployment, Heroku has a free plan that has managed Postgres for demos which is exactly what I need for this project.

I think Node/Express is awesome for smaller projects and is a great technology to have in my toolkit. I’m excited to see how the future of Node.js will shape up.
