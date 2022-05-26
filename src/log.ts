import debug from 'debug'

const log = (channel: string) =>
  function _handleLog(message: string) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('(dev) [%s] %s', channel, message)
    }

    return debug(channel)(message)
  }

export default log
