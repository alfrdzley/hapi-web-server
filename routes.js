const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage!";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page!";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
  {
    method: "GET",
    path: "/user/{name?}",
    handler: (request, h) => {
      const { name = "Stranger" } = request.params;
      return `Hello, ${name}!`;
    },
  },
  {
    method: "GET",
    path: "/hello",
    handler: (request, h) => {
      const { name, location } = request.query;
      return `Hello, ${name} from ${location}!`;
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}!`;
    },
  },
];

module.exports = routes;
