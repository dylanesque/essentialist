import express, { Request, Response, Express } from 'express';
import bodyParser from 'body-parser';
// import { getUsers } from './queries'

const app: Express = express();

// app.get('/users', getUsers)

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (request: Request, response: Response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(3000, () => {
  console.log(`App running on port 3000.`);
});

// TODO Michael: Connecting to a Postgres database using a client
