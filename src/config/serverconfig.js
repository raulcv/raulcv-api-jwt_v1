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

const serverConfig = {
    dev,
    test
};
module.exports = serverConfig[env];