const http = require("http");
const fs = require("fs");
const path = require("path");


function detectType (filePath) {

    const type = path.extname(filePath)
    console.log(type)

    let contentType = "text/plain"

    if (type == ".html") {
        return contentType = "text/html"
  } else if (type == ".css") {
        return contentType = "text/css"
  } else if (type == ".js") {
        return contentType = "text/javascript"
  } else if (type == ".json") {
        return contentType = "application/json"
  } 

}

const server = http.createServer((req, res) => {

    const filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url)

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            res.writeHead(404)
            res.end("File not found !")
        } else {
            const contentType = detectType(filePath)
            res.writeHead(200, {"content-type" : contentType})
            res.end(data)
        }
    })
    
})

server.listen(3000, () => console.log("Server Listening !!!"))