const express = require("express");
const router = express.Router();

const Survey = require("../../mongo/models");

router.get("/test", (req, res) => res.send("route testing..."));

router.get("/", (req, res) => {
    Survey.find();
})

router.get("/:id", (req, res) => {
    Survey.findById(req.params.id);
})

router.post("/", (req, res) => {
    Survey.create(req.body);
})

router.delete("/", (req, res) => {
    Survey.deleteMany();
})

module.exports = router;