import { Request, Response } from 'express'

function getPingController() {
  return function _handler(_: Request, res: Response) {
    return res.json({ pong: true })
  }
}

export default getPingController
