const express = require('express')
const router = express.Router()
const control = require("./Controllers/Control")

router.post("/registrar",control.create)
router.get("/listar",control.read)
router.put("/:_id",control.updade)
router.delete("/:_id",control.delete)

module.exports = router;