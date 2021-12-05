const http = require("http");

const hostname = "127.0.0.1";
const port = 3010;

const server = http.createServer((req, res) => {
  const items = {
    beings: [
      {
        id: 0,
        name: "Draal",
        species: "Minbari",
      },
      {
        id: 1,
        name: "G'Kar",
        species: "Narn",
      },
      {
        id: 2,
        name: "Delenn",
        species: "Minbari",
      },
      {
        id: 3,
        name: "Zathras",
        species: "Unknown",
      },
    ],
  };
  let json = JSON.stringify(items);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(json);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
