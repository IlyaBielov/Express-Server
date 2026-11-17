# Express Server

My first Node.js server, written in May 2019 while preparing for my first developer job:
an [Express](https://expressjs.com/) app with one route and the port taken from the environment
via [dotenv](https://github.com/motdotla/dotenv).

## Run it

Node 18+:

```bash
npm install
npm start          # or: npm run dev — restarts on file changes
```

The server listens on `PORT` (default `3000`).

## Try it

```console
$ curl -i http://localhost:3000/
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 19

Купи слона
```

The terminal shows:

```console
$ npm start
App listening on port: 3000!
```

## Structure

```
.
├── src/
│   └── index.js       # The whole server
└── package.json
```

Made by [Ilya Bielov](https://www.facebook.com/MrBiela).
