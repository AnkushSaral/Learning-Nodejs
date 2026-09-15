// const express = require('express')

import express from 'express'


const app = express()
const port = 3000

app.get('/:name', (req, res) => {
  console.log(req.params.name)
  res.send(`Hello ${req.params.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
