const express = require('express')
const bodyParser = require('body-parser')
const tutorRoutes = require('./routes/tutor-routes')
const companyRoutes = require('./routes/company-routes')


const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

app.use('/api/tutors', tutorRoutes)
// app.use('/api/company', companyRoutes)

app.use('/api/company', companyRoutes)

app.listen(8000, () => {
    console.log('api on 8000');
})