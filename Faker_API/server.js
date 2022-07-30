
const express = require('express')
const Company = require('./Company')
const User = require('./User')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/user/new', (req, res) => {
    res.json(new User())
  })

app.get('/api/companies/new', (req, res) => {
    res.json(new Company())
  })

app.get('/api/user/company', (req, res) => {
    var newUser = new User(), newCompany = new Company(); 
    res.json({ user:newUser, company:newCompany})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})