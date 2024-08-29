const router = require('express').Router()
const quizController = require("../controllers/quiz")
router.get("/", quizController.Create)
router.delete("/delete/:id", quizController.Delete)


module.exports = router