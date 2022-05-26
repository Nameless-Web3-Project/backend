import { Request, Response } from 'express'

function getPingController() {
  return function _handlerPing(_: Request, res: Response) {
    return res.json({ pong: true })
  }
}

export default getPingController
