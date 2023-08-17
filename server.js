const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((_req, res) => {
  const filePath = _req.url === "/" ? "index.html" : _req.url;
  const fileExtension = path.extname(filePath);

  let contentType;

  switch (fileExtension) {
    case ".js":
      contentType = "application/javascript";
      break;
    case ".html":
      contentType = "text/html";
      break;
    default:
      contentType = "text/html";
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", contentType);

  fs.readFile(path.join(__dirname, filePath), (err, data) => {
    console.log({ data });
    if (err) {
      res.statusCode = 404;
      res.end("File not found");
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});
