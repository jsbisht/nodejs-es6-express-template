import express from "express";
import bubbles from "../mock/bubbles";
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(bubbles);
});

export default router;
