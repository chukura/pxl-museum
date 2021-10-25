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

This project is a technical evaluation developed by [Thabang Chukura](mailto:atchukura@gmail.com) for [PXL.WIDGETS](https://pxlwidgets.com/).

This is a MEVN stack (MongoDB, Express.js, VueJS, Node.js) project.

## Client

The Client side of the application is a [Vue.js](https://vuejs.org) v3 application.

## Server

The Server side of the application is a [Node.js](https://nodejs.org/), Express.js application with Axios.

### Benefits

A Node/Express stack was used with the following benefits in mind:

- Performance: using the server to cache API requests for an improved UX on the client app
- Security: using the server to safely expose an API endpoint to the client app, and obfuscate the Rijksmuseum API

### Environment Variables

Copy the .env.example file into a new .env file, and include your Rijksmuseum API key

### Caching

#### Uncached request time: ~2.06s

#### Cached request time: ~8ms
