import { Request, Response} from 'express';
import express from "express"

// Correctly typing the req and res parameters
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
