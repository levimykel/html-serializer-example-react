# Universal React Website using prismic.io HTML Serializer

This is an example Universal React website with content managed from [prismic.io](https://prismic.io) (an API-based CMS) which demonstrates a working HTML Serializer.

## HTML Serializer

The HTML Serializer can be found in the prismic configuration file at src/prismic-configuration.js.

You will see that this example changes the html output in the following ways:
 - Adding a class to all paragraph elements
 - Adding a class to all hyperlink elements
 - Preventing images from being surrounded by a paragraph element

## Getting started

To get started, clone this repository or download the project files.

Open your terminal (command prompt or similar on Windows) and run the following command to install the project dependencies:

```
npm install
```

Then your project should be ready to launch! Simply run the following command:

```
npm run start
```

This will compile the project and run the site on your local server. Point your browser to http://localhost:3000/ to see the website up and running.


## Available commands

Available commands to run with `npm run`:

 - `start`: build the production package and run the production server
 - `start:dev`: build the dev package and run the server in dev mode with universal rendering (auto-restarts on changes)
 - `build`: build the production package
 - `build:dev`: build the dev package
 - `build:dev:watch`: build the dev package in watch mode (listen for changes and re-build immediately)


## Project Files

Here is where you can find all the important files for this application:

 - **HTML Serializer**: The HTML Serializer is located with the configuration in src/prismic-configuration.js
 - **Components**: All the components for this application are located in the src/shared/app folder
 - **Prismic Configuration**: The configuration for the prismic repository is found in src/prismic-configuration.js
 - **Router**: The router & routes are located in src/shared/router.js and src/shared/routes.js



## License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2017 Prismic.io (https://prismic.io/).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.