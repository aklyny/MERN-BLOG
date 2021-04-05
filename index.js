// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const path = require('path')
// const cors = require('cors');  // we don't need it anymore, because we use proxy server instead
// const connectDB = require('./db.js')

require('dotenv').config()


// connectDB()

const uri = "mongodb+srv://dass123:dass1999@blog.qxfci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(uri,{useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection
db.once("open",()=>{
    console.log("db connected")
})
// App Setup (morgan and body-parser are middleware in Express)
app.use(morgan('combined'));  // middleware for logging
app.use(bodyParser.json({ type: '*/*' }));  // middleware for helping parse incoming HTTP requests
// app.use(cors());  

// Router Setup
router(app);

// const __dirname = path.resolve();
// if(process.env.NODE_ENV === 'production'){
//     app.get('/*',(req,res) => {
//       res.sendFile(path.resolve(__dirname,'./server/client','build','index.html'))
//     })
//   }
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
      app.get('/*',(req,res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
    }

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);