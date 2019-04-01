import express from "express";
import path from "path";
import React from "react";
import {Provider as ReduxProvider} from "react-redux";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import App from "./components/App";
import createStore, {initializeSession} from "./store";

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/*", (req, res) => {
  const store = createStore();
  store.dispatch(initializeSession());

  const context = {};
  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App/>
      </StaticRouter>
    </ReduxProvider>
  );
  const reactDom = renderToString(jsx);
  const reduxState = store.getState();

  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(htmlTemplate(reactDom, reduxState));
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
});

function htmlTemplate(reactDom, reduxState) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>

        <body>
            <div id="app">${reactDom}</div>
             <script>
                window.REDUX_DATA = ${JSON.stringify(reduxState)}
            </script>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
