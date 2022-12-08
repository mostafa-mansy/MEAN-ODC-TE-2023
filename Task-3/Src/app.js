const express = require('express')
const path = require("path")
const hbs = require("hbs")

const app = express()

const User = require("./router/user.routes")
app.use(User)


const viewsDirc = path.join(__dirname,'../views')
app.set("views",viewsDirc)



module.exports = app