 const express = require ('express')
 const cors = require ('cors')
const bcrypt = require('bcrypt')
const dotenv  = require('dotenv');
const router = require('./Router');
const connection = require('./Mongoose');
const app = express()

dotenv.config();
const Port = process.env.Port ||5000;

connection()
app.use (cors())
app.use(express.json())
app.use('/',router)
dotenv.config()


app.listen(Port,()=>console.log(`Server Connected on ${Port}`));