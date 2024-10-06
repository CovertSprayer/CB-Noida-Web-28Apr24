const { productSchema, reviewSchema } = require("../validation/product");

// module.exports.productValidator = (req, res, next) => {
//   const body = req.body;
//   const { error, value } = productSchema.validate(body);
//   //   req.value = value;

//   if (error) {
//     console.log(error);
//     res.send("Something went Wrong!!", error);
//   }

//   next();
// };

// module.exports.reviewValidator = (req, res, next) => {
//   const body = req.body;
//   const { error, value } = reviewSchema.validate(body);

//   if (error) {
//     console.log(error);
//     res.send("Something went Wrong!!", error);
//   }

//   next();
// };

module.exports.validator = (schema) => {
  return function (req, res, next) {
    const body = req.body;
    const { error, value } = schema.validate(body);

    if (error) {
      console.log(error);
      res.send("Something went Wrong!!", error);
    }

    next();
  };
};
