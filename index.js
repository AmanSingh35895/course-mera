const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send(`Server is running on port ${port}`));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
