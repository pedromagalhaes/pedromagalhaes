let sr = null // eslint-disable-line import/no-mutable-exports

if (typeof window !== 'undefined') {
  sr = require('scrollreveal') // eslint-disable-line global-require
}

export default sr
