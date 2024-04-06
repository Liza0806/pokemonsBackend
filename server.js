const mongoose = require("mongoose")
const app = require('./app')
const {DB_HOST} = process.env
mongoose.connect(DB_HOST).then(()=>{
    app.listen(3001, ()=> {
        console.log('Server running. Use our API on port: 3002')
    })
    console.log("Database connect success")})
.catch((error)=> {
    console.log(error.message, 'error')
    process.exit(1)
})



