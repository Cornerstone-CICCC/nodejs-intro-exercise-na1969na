const http = require("http");

import { IncomingMessage, ServerResponse } from "http";

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Home</h1>");
        break;
      case "/about":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>About</h1>");
        break;
      case "/my-account":
        res.writeHead(403, { "Content-Type": "text/plain" });
        res.write("You have no access to this page");
        break;        
      default:
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>Page not found</h1>");
        break;
    }
    res.end();
  }
);

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});


