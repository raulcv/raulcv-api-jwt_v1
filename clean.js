require('dotenv-safe').config()
process.env.NODE_ENV = 'test'
const initMongo = require('./src/config/database')
const fs = require('fs')
const modelsPath = `./src/models`
const { removeExtensionFromFile } = require('./src/middlewares/utils')

initMongo()

// Loop models path and loads every file as a model except index file
const models = fs.readdirSync(modelsPath).filter((file) => {
  return removeExtensionFromFile(file) !== 'index'
})

const deleteModelFromDB = (model) => {
  return new Promise((resolve, reject) => {
    model = require(`./src/models/${model}`)
    //Deelete all Data in DB
    model.deleteMany({}, (err, row) => {
      if (err) {
        reject(err)
      } else {
        resolve(row)
      }
    })
  })
}

const clean = async () => {
  try {
    const promiseArray = models.map(
      async (model) => await deleteModelFromDB(model)
    )
    await Promise.all(promiseArray)
    console.log('Cleanup complete!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(0)
  }
}

clean()