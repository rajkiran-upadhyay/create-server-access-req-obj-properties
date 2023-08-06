const http=require("http")//import http module

const server=http.createServer((req,res)=>{//create a server by passing a listener function that accepts req and res object
  console.log("url:",req.url, "method:", req.method, "header:",req.headers);
})

server.listen(4000,()=>{//start listening
  console.log("server is running")
})