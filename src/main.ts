import express from 'express'
import bodyParser from 'body-parser'

import getPingController from './controllers/get-ping-controller'

function main() {
  const app = express()

  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/ping', getPingController())
}

main()
