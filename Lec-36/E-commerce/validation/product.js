const Joi = require('joi');

const productSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string(),
    description: Joi.string(),
})

const reviewSchema = Joi.object({
    rating: Joi.number().required(),
    comment: Joi.string()
})

module.exports = {
    productSchema,
    reviewSchema
}
