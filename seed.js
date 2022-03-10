require('dotenv-safe').config()
const { Seeder } = require('mongo-seeding')
const path = require('path')

const config = {
    database: process.env.MONGO_DB_URI,
    inputPath: path.resolve(__dirname, './seeddata'),
    dropDatabase: false
}

const seeder = new Seeder(config)
const collections = seeder.readCollectionsFromPath(path.resolve('./seeddata'))

// console.log(collections)

const main = async () => {
    try {
        await seeder.import(collections)
        console.log('Seed complete!')
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(0)
    }
}

main()