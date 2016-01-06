# Your bill explained

1. Running the app

  1. Requirements
    * io.js 2.0
    * npm
    * bower

  2. Installing dependencies
    ```
    npm install
    bower install
    ```

  3. Building javascript bundle and css

    If NODE_ENV is not set to production javascript source map will be generated as well
    ```
    NODE_ENV=production npm run dist
    ```

  3. Starting the application

    The default port is 2223, but it can be set in PORT env
    ```
    npm run start-prod
    ```
2. About the app

  I used React to display the statement. The application uses server side rendering, so it works even when Javascript is turned off in the browser. Because of this the statement sections are opened by default, and if Javascript is supported, all of them is closed after the component is mounted on the client. After that each section can be opened/closed by clicking on the header.

  Because the application is simple I didn't add neither a proper routing solution or a Flux like architecture. In a more complex application I prefer to use React-router for client and server side routing and ImmutableJS to store the application state on the top level with a custom universal [renderer](https://gist.github.com/frikille/66be17a89ef594133bd5#file-renderer-js) component that works on client and server side as well.
