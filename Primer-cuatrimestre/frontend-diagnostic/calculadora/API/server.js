const http = require("http");
const { handleRequest } = require("./controllers/HandlerRequest");

const server = http.createServer((req, res) => {
  handleRequest(req, res);
});

const port = 3000;

server.listen(port, () => {
  console.log("Servidor Node en ejecución en el puerto 3000");
});
