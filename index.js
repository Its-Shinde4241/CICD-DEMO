import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("AFTER UPDATING THE CODE NO NEED TO AUTO DEPLOY this is just simple docker and cicd demo applicaton ");
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log("application started at port http://localhost:" + port);
});
