const env = process.env.NODE_ENV; // 'dev' or 'test'
// console.log(env)
const dev = {
    app: {
        host: process.env.APP_HOST || 'localhost',
        port: process.env.APP_PORT || 8081
    },
    db: {
        host: process.env.DB_HOST + '://' || 'localhost',
        port: process.env.DB_USER_NAME + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_CLUSTER + '.' + process.env.DB_PORT || 27017,
        name: '/' + process.env.DB_NAME + '?retryWrites=true&w=majority' || 'db'
    }
};

const test = {
    app: {
        host: process.env.APP_HOST || 'localhost',
        port: process.env.APP_PORT || 8081
    },
    db: {
        host: process.env.DB_HOST + '://' || 'localhost',
        port: process.env.DB_USER_NAME + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_CLUSTER + '.' + process.env.DB_PORT || 27017,
        name: '/' + process.env.DB_NAME + '?retryWrites=true&w=majority' || 'db'
    }
};

const prod = {
    app: {
        host: process.env.APP_HOST,
        port: process.env.APP_PORT
    },
    db: {
        host: process.env.DB_HOST + '://',
        port: process.env.DB_USER_NAME + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_CLUSTER + '.' + process.env.DB_PORT,
        name: '/' + process.env.DB_NAME + '?retryWrites=true&w=majority'
    }
};
const serverConfig = {
    dev,
    test,
    prod
};
module.exports = serverConfig[env];