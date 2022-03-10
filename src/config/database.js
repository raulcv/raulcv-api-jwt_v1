const mongoose = require("mongoose");
const models = require("../models");
const colors = require('colors');
const serverConfig = require("./serverconfig")
// console.log(serverConfig)
const MongoDBConectionString = serverConfig.db.host + serverConfig.db.port + serverConfig.db.name;
//console.log(MongoDBConectionString)

const connection = () => {
    mongoose.Promise = global.Promise

    mongoose.connect(MongoDBConectionString,
        { keepAlive: true, useUnifiedTopology: true, useNewUrlParser: true }, (err, db) => {
        let dataBaseStatus = '';
        if (err) {
            dataBaseStatus = `*    Error Connecting to database: ${err}\n********************************\n`;
        }
        dataBaseStatus = `*    DataBase connection: established\n********************************\n`
        if (process.env.NODE_ENV !== 'test') {
            // Prints initialization
            console.log('****************************')
            console.log('*    Starting Server')
            console.log(`*    NODE_ENV: ${process.env.NODE_ENV}`)
            console.log(`*    Database: MongoDB`)
            console.log(colors.green(dataBaseStatus))
        }
    })
};
const mongoDBConection = () => {
    mongoose.connection.on('error', console.log)
    mongoose.connection.on('disconnected', connection)
    models()
    connection();
}

module.exports = mongoDBConection;