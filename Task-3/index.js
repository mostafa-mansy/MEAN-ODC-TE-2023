require('dotenv').config()

const PORT = process.env.PORT || 5000
const app = require("./Src/app")

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))