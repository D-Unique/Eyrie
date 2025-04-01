import express, { Router } from "express";
const app = express();
const port = 3000;

const router = Router();

router.use(a);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
