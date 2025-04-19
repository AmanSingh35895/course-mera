const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/course/preview", (req, res) => {
  res.json({
    message: "all courses endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
