const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath =
    req.url === "/" || req.url === "/product" ? "index.html" : req.url;
  let fileExtension = path.extname(filePath);

  // If no extension, assume it's a .js file, this one for handling esm modules
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
      res.statusCode = 404;
      res.end("File not found");
    } else {
      res.statusCode = 200;
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});
