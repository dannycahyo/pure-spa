const express = require("express");
const fs = require("fs");
const path = require("path");
import { routes } from "./routes";

const app = express();
const PORT = 3000;

function serveFile(req, res, filePath) {
  let fileExtension = path.extname(filePath);

  // If no extension, assume it's a .js file, this one for handling esm
  if (!fileExtension) {
    filePath += ".js";
    fileExtension = ".js";
  }

  let contentType;

  switch (fileExtension) {
    case ".js":
      contentType = "application/javascript";
      break;
    case ".html":
      contentType = "text/html";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".icon":
      contentType = "image/x-icon";
      break;
    default:
      contentType = "text/html";
  }

  res.setHeader("Content-Type", contentType);

  fs.readFile(path.join(__dirname, filePath), (err, data) => {
    if (err) {
      res.status(404).send("File not found");
    } else {
      res.status(200).send(data);
    }
  });
}

routes.map((route) => {
  if (route.isServerPage) {
    app.get(route.path, (req, res) => {
      serveFile(req, res, `pages/${route.path}.html`);
    });
  } else {
    app.get(route.path, (req, res) => {
      serveFile(req, res, "index.html");
    });
  }
});

app.get("*", (req, res) => {
  serveFile(req, res, req.url);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});
