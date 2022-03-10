const mongoose = require('mongoose')
const validator = require('validator')

const UserAccessSchema = new mongoose.Schema(
  {
    email: {type: String, lowercase: true,required: true,
        validate: {validator: validator.isEmail,message: 'EMAIL_IS_NOT_VALID'}
    },
    ip: {type: String,required: true},
    browser: {type: String,required: true},
    country: {type: String,required: true}
  },
  {
    versionKey: false,
    timestamps: true
  }
)
module.exports = mongoose.model('userAccess', UserAccessSchema)