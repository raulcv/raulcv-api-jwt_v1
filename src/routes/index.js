const { Router } = require('express');
const router = Router();
const fs = require('fs')
const routesPath = `${__dirname}/`;
const { removeExtensionFromFile } = require('../middlewares/utils')

// const UserRoute = require('./user');

//Principal Router
// router.get('/', (req, res) => {    
//     res.json(
//         {
//             "Title": "Welcome to RAULCV! Security API APP With Nodejs!"
//         }
//     );
// })

/*
 * Load routes statically and/or dynamically
 */

// Load Auth route
router.use('/', require('./auth'))

// Loop routes path and loads every file as a route except this file and Auth route
fs.readdirSync(routesPath).filter((file) => {
  // Take filename and remove last part (extension)
  const routeFile = removeExtensionFromFile(file)
  // Prevents loading of this file and auth file
  return routeFile !== 'index' && routeFile !== 'auth' && file !== '.DS_Store'
    ? router.use(`/api/${routeFile}`, require(`./${routeFile}`))
    : ''
})

/*
 * Setup routes for index
 */
router.get('/', (req, res) => {
  res.render('index')
})

/*
 * Handle 404 error
 */
router.use('*', (req, res) => {
  res.status(404).json({
    errors: {
      msg: 'URL_NOT_FOUND'
    }
  })
})

module.exports = router
