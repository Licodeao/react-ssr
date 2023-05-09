const express = require("express");
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../app.jsx";
import { Provider } from "react-redux";
import store from "../store/index";
const app = express();

// 部署打包好的静态资源
app.use(express.static("build"));

app.get("/*", (req, res) => {
  // 这里就是服务端渲染
  const AppHtmlString = ReactDOMServer.renderToString(
    // 指定服务器端渲染的是哪个页面
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div id="root">${AppHtmlString}</div>
        <script src="/client/client_bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
