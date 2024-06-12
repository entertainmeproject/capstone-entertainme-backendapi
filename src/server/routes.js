const { returnResponse, warmupHandler, getBooksRecommendation, getTravelRecommendation, getStressPrediction, getMoviesRecommendation,  } = require('./handler')

const routes = [
  {
    path: '/check',
    method: 'GET',
    handler: returnResponse,
  },
  {
    path: '/warmup',
    method: 'GET',
    handler: warmupHandler,
  },
  {
    path: '/recommend/books',
    method: 'GET',
    handler: getBooksRecommendation,
  },
  {
    path: '/recommend/movies',
    method: 'GET',
    handler: getMoviesRecommendation,
  },
  {
    path: '/recommend/travel',
    method: 'GET',
    handler: getTravelRecommendation,
  },
  {
    path: '/predict/stress',
    method: 'GET',
    handler: getStressPrediction,
  }
]

module.exports = routes;