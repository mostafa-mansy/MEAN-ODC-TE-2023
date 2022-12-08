const router = require("express").Router()

router.get('/',(req,res) => {
    res.send("Home page")
})
router.get("/about",(req,res) => {
    res.send("about")
})

module.exports = router