import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send(
    "<center>this is just simple docker and cicd demo applicaton </center>",
  );
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log("application started at port http://localhost:" + port);
});
