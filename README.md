# PXL Museum App

```
                __
    ____  _  __/ / ____ ___  __  __________  __  ______ ___
   / __ \| |/_/ / / __ `__ \/ / / / ___/ _ \/ / / / __ `__ \
  / /_/ />  </ / / / / / / / /_/ (__  )  __/ /_/ / / / / / /
 / .___/_/|_/_(_)_/ /_/ /_/\__,_/____/\___/\__,_/_/ /_/ /_/
/_/

```

A simple application to display data fetched from the Rijksmuseum API.

This project is a technical evaluation developed by [Thabang Chukura](mailto:atchukura@gmail.com) for [PXL.WIDGETS](https://pxlwidgets.com/). This is a MEVN stack (MongoDB, Express.js, Vue.js, Node.js) project, however there was no actual requirement/need for a database.

## Client Application

The Client side of the application is a [Vue.js](https://vuejs.org) v3 application.

### Running the Client

Instructions on running the client can be found in a separate README located here: `/client/README.md`

### General Approach

I decided to leverage Vue.js for the client side, frontend application, as Vue is a framework I really enjoy working with despite my exposure to Angular and React. I prefer Vue's smaller footprint and overhead compared to Angular, and the relative flexibility you have as a developer while still keeping important aspects opinionated. I coupled Vue with [TailwindCSS](https://tailwindcss.com/), which both allowed me to very rapidly build out frontend components and views that look good, while maintaining perfect, responsive CSS and UI/UX standards.

Principles of Object Oriented Programming helped drive my development approach, in particular implementing objects throughout in the form of components (views are actually classes, while Typescript sees generic components more as modules), and abstraction wherever possible with methods. Were this a larger scale application, with more complexity, I would have definitely employed more means of abstraction with a `data.service`. One can also look at Vue's use of props as inheritance, and these help a child component extend some feature or nature of a parent.

The front end consists of 3 views:

1. Homepage - a friendly, approachable entry point to the application. This page allows a quick, no thought search.
2. Collection/Search - the search index page of the app where users search, surface, and sort results.
3. Art Piece - the singleton view of each art piece where specific details are displayed

The front end consists of 2 main components:

1. Search - a universal search component used on both the Homepage and Collection views, that also governs sorting and the main API request
2. Results - the component responsible for displaying search results as they are saved to the Vuex store

I've also implemented an infinate loader approach on the Search component. All you have to do is keep scrolling to the bottom of the page, and more search results will be requested if available.

### General purpose JS Libraries

As time pressure was a factor, leveraging as many native tools to enable the maximum functionality was my goal. To this effect, I leaned quite heavily on the Vue's build in utilities (eg. Vuex), and asynchronous methods that allowed me to not have to use a third party library like RxJS. My general approach is usually to keep external package dependency as low as possible. I've made use of general purpose packages such as [Axios](https://www.npmjs.com/package/axios) to handle http requests, as it's syntax is easy to work with and debug. I would have used a library like Lodash or Ramda for search filtering, however the Rijksmuseum API is structured in such a way that it made sense looking at the nominal performace gain, to make use of its sorting parameters.

That being said, in a real-world scenario, there is a case to be made for a third party service like Algolia's Instsearch when dealing with a dataset this large. Similar to what I did with these projects: [Johnson Tiles Website](https://www.johnsontiles.co.za/products), and [Consol Glass Website](https://www.consol.co.za/products).

### Benefits of this approach

- Vue + TailwindCSS resulted in rapid scaffolding, with high quality CSS
- Vue + Typescript (with Eslint and Prettier), resulted in easier to debug and format code
- Single search component allowed for versatility in how search is used, and ensures a single API request source
- The production application javascript build size is 8.71 KiB (Gzipped), extremely light
- With use of the Vuex store, and some logic in the Seach and ArtPiece components, an API request is only made when the required data is not already in state - this improves performance and the overall user experience

## Server Application

The Server side of the application is a [Node.js](https://nodejs.org/), Express.js application. It leverages [Axios](https://www.npmjs.com/package/axios) like the client app.

### Environment Variables

NB: Before running the server and Copy the .env.example file into a new .env file, and include your Rijksmuseum API key

### Running the Server

Instructions on running the client can be found in a separate README located here: `/server/README.md`

### General Approach

A Node server was used for this project to serve as a kind of middleware between the Vue app and the Rijksmuseum API. Two primary motivations were behind this approach, elaborated on below. I initially scaffolded my server application with a routes file and a controller, with the idea that controllers would allow me to seperate concerns (you can see this in the git history - sha `c2f70a3`). However, upon reviewing the complexity of the project, it made sense to house routes and requests in the `server.js` file. My approach to the assignment - having one main search API endpoint, and another for requesting the artwork details kept my server in line with the Rijksmuseum API, and would make for easy integration with another frontend application written in any frontend framework. Laravel Lumen would have also been a good way forward here, and what I may have considered in a real world scenario, however Node is fast and efficient, with low latency even without caching.

You will take note that I elected to enforce the `&imgonly=true` parameter on API requests, merely to (i) keep the request time as low as possible by removing certain objects, and (ii) because this ensured that my pages have the most optimal look - even though the ArtPiece component does have an image fallback.

### Benefits of this approach

- Performance - using the server to cache API requests for an improved UX on the client app
- Security: using the server to safely expose an API endpoint to the client app, and obfuscate the Rijksmuseum API

### Caching

Performance gains due to caching were worth a separate section. Without the [apichache](https://www.npmjs.com/package/apicache) package, requests were perceptible. Performance gains observed via Chrome Dev Tools:

- Uncached request time: ~2.06s
- Cached request time: ~8ms

## Improvements

Given more time, I would like to have been able to make the following improvements to the application:

- A working CI/CD pipeline process with the application running on Heroku or Lightsail - I elected to focus on other aspects of the project, but would have like to have had a working pipeline
- Unit tests for the major components - I installed Jest with the mind to write some tests, but realised i wouldn't have the time
- Clean up the infinite loader feature with some copy to explain to the end user when there are no more results to show
- A toggle for users to choose between a grid and list view
- Image/colour matching filter
- Experimented even more with caching the entire data set (either in Redis or some other high availability solution), and seing what performance differences might been gained from a more heavily functional programming approach
- More time to come up with a much better design

Thank you for the opportunity and your consideration :)
