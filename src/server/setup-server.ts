import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import loadEnvironment from './load-environment'

import getPingController from '../controllers/get-ping-controller'
import log from '../log'

function _beforeSetupServer() {
  loadEnvironment()
}

function _afterSetupServer() {
  // todo: implement here what would be run after the server is set up.
}

function setupServer() {
  _beforeSetupServer()

  const app = express()

  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ extended: true }))

  // Morgan is a logger middleware for Express. After it is done right, we'll block
  // it from production environment.
  app.use(morgan('dev'))

  app.get('/ping', getPingController())

  const port = process.env.PORT ? Number(process.env.PORT) : 8080
  const debug = log('http')

  app.listen(port, () => {
    // We log it in any environment (either development or production) because the
    // output is certainly useful for debugging purposes, so then we set up a
    // production environment, we'll know whether the server has correctly started
    // or not.
    debug(`[server] listening on port ${port}`)

    _afterSetupServer()
  })
}

export default setupServer
