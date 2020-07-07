const express = require('express')
const app = express()
const userRoute = require('./routes/users');
const ErrorHandling = require('./model/ErrorHandling');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const {mongoURI} = require('./config/key');

const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())

app.use('/api/users', userRoute)

app.use((req,res,next)=> {
    return next(new ErrorHandling('Specified route does not exist', 404))
})

app.use((error,req,res,next)=> {
    const message = error.message || 'Unknown error occured';
    const status = error.status || 500;
    res.status(status).json(message)
})

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=> app.listen(port, ()=> console.log('Server is listening on port '+port)))
.catch((error)=> console.log(error))

