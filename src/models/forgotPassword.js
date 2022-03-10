const mongoose = require('mongoose')
const validator = require('validator')

const forgotPasswordSchema = new mongoose.Schema(
    {
        email: {
            type: String, lowercase: true, required: true,
            validate: {
                validator: validator.isEmail,
                message: 'EMAIL_IS_NOT_VALID'
            }
        },
        verification: { type: String },
        used: { type: Boolean, default: false },
        ipRequest: { type: String },
        browserRequest: { type: String },
        countryRequest: { type: String },
        ipChanged: { type: String },
        browserChanged: { type: String },
        countryChanged: { type: String }
    },
    {
        versionKey: false,
        timestamps: true
    }
)
const ForgotPasswordSchema = mongoose.model("forgotPassword", forgotPasswordSchema);

module.exports = ForgotPasswordSchema;