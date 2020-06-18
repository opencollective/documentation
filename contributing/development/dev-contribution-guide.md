# Contribution Guide

We're happy to have you contributing to our codebase! We recommend you go through the following guide.

## Technical Requirements

You'll need to have some basic programming experience with the technologies and tools we use.

#### Tools

* **Git & Github** - Clone, commit and open a PR using Git with GitHub. Check out the following tutorials:
  * [Introduction to git](https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/)
  * [Introduction to GitHub](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
  * [Popular git commands and how to use them](https://rogerdudler.github.io/git-guide/)
  * [Git commands in depth](https://medium.com/@george.seif94/a-full-tutorial-on-how-to-use-github-88466bac7d42)
  * [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
  * [Markdown Tutorial](https://www.markdowntutorial.com/)

#### Languages & Frameworks

* **JavaScript/Node.js** - We recommend having basic experience working with Node, which Open Collective is written in \(frontend & backend\). Check out these free JavaScript & Node tutorials:
  * Javascript
    * [Introduction to basic principles of Javascript](https://eloquentjavascript.net/)
    * [Introduction to Javascript - w/ Advanced concepts](https://javascript.info/)
    * [An interactive Javascript tutorial](https://www.learn-js.org/)
  * Node.js
    * [Quick introduction to Node.js](https://www.tutorialspoint.com/nodejs/nodejs_quick_guide)
    * [Introduction to Node.js - w/ quizzes](https://www.tutorialsteacher.com/nodejs/nodejs-tutorials)
    * [When, how and why to use Node.js](https://www.netguru.com/blog/use-node-js-backend)
    * [Differences between Javascript and Node.js](https://www.educba.com/javascript-vs-node-js/) 
* **GraphQL** - Our API uses GraphQL, powered by [Sequelize](http://docs.sequelizejs.com/manual/getting-started.html) and [PostgreSQL](https://www.postgresql.org/). Understanding how these work is important to contributing to or fixing the majority of the issues on our API. To learn more, check out these tutorials & articles:
  * [What is GraphQL and how to use it](https://www.howtographql.com/)
  * [Basic concept of GraphQL](https://medium.com/@kalin.chernev/the-guide-to-learn-graphql-i-wish-i-found-few-months-go-97f9d9ca6f12)
  * [Getting GraphQL running](https://www.freecodecamp.org/news/a-beginners-guide-to-graphql-86f849ce1bec/)
  * [Practical GraphQL tutorial](https://blog.digitalocean.com/learning-graphql-by-doing/) 
* **React & Next.js** - You'll need to understand React and Next.js to contribute to issues on the frontend. Check out the following links:
  * React
    * [Basic React Concepts](https://blog.usejournal.com/a-beginners-guide-to-react-36b19943d58f)
    * [The Beginner react roadmap - path to mastering react](https://www.freecodecamp.org/news/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6/)
    * [React Official documentation](https://reactjs.org/tutorial/tutorial.html)
  * Next.js
    * [Basic introduction to Next.js](https://medium.com/front-end-weekly/next-js-what-is-it-9cb2f4af8f27)
    * [Next.js Official Documentation](https://nextjs.org/docs#how-to-use)
    * [Basic concepts in Next.js](https://www.freecodecamp.org/news/an-introduction-to-next-js-for-everyone-507d2d90ab54/)
    * [Introduction to Next.js - w/ Advanced concepts](https://flaviocopes.com/nextjs/)

## Project Structure

The project's core repositories are divided into three:

* [**opencollective/opencollective**](https://github.com/opencollective/opencollective) - Here is where we manage issues and community discussions. Our issues are all labelled with a complexity label. We recommend starting with simple issues \( [`complexity -> simple`](https://github.com/opencollective/opencollective/issues?q=is:issue%20is:open%20label:%22complexity%20%E2%86%92%20simple%22)\).
* [**opencollective/opencollective-frontend**](https://github.com/opencollective/opencollective-frontend) - This repository contains our frontend code. You can find more information in the setup section of this guide.
* [**opencollective/opencollective-api**](https://github.com/opencollective/opencollective-api) - This contains our API code. If you enjoy working on the backend, you can set up our API locally. To learn about setting it up, check out the setup section below.

## Project Setup

This section explains how you can get Open Collective running locally on your computer.

### Frontend

Setting up the frontend is straightforward. We've provided a comprehensive guide in a separate document that explains how to set up the project.

#### Setup guide

> [https://github.com/opencollective/opencollective-frontend/blob/master/README.md](https://github.com/opencollective/opencollective-frontend/blob/master/README.md)

_NOTE: If you're only contributing frontend code, you don't need to setup the API._

### API

The API setup requires more effort than the frontend, as it requires installing the [PostgreSQL](https://www.postgresql.org/download/) and [PostGIS](https://postgis.net/install/) extensions. You might experience difficulty setting up the API on a Windows environment. We recommend using a Unix environment. \(We're currently working to make it easier on Windows\).

Just like the frontend, we have a separate document for the setup.

#### Setup guide

> [https://github.com/opencollective/opencollective-api/blob/master/README.md](https://github.com/opencollective/opencollective-api/blob/master/README.md)

## Others

### Design Contribution

Like to contribute to our design? Checkout our [design contribution guidelines](../design/).

### Commit conventions

Before you make your first commit, read through our commit convention, provided in the link below:

> [https://github.com/opencollective/opencollective-frontend/blob/master/CONTRIBUTING.md](https://github.com/opencollective/opencollective-frontend/blob/master/CONTRIBUTING.md)

### Bounty Program

We recommend you learn more about our bounty program through the link below:

> [https://docs.opencollective.com/help/developers/bounties](https://docs.opencollective.com/help/developers/bounties)

### Ask for Help

If you are stuck or have a question, join our slack \#engineering channel through the link below:

> [https://slack.opencollective.com/](https://slack.opencollective.com/)

**We're trying our best to make our documentation better. We encourage you to give suggestions on how we can improve it.**

