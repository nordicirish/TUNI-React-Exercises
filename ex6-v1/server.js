const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
  const items = {
    beings: [
      {
        id: 0,
        date: "Draal",
        species: "Hawk",
      },
      {
        id: 1,
        date: "G'Kar",
        species: "Swan",
      },
      {
        id: 2,
        date: "Delenn",
        species: "Raven",
      },
      {
        id: 3,
        date: "Zathras",
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
