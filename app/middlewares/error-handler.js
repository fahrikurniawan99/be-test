const errorHandler = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || 500,
    msg: err.message || "Something wrong went try again later",
  };
  // error validation from mongoose
  if (err.name === "ValidationError") {
    let tempValue = {};
    Object.values(err.errors).forEach((item) => {
      tempValue = {
        ...tempValue,
        [item.properties.path]: item.properties.message,
      };
    });
    customError.msg = tempValue
    customError.statusCode = 400;
  }
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }
  if (err.name === "CastError") {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({ message: customError.msg });
};

module.exports = errorHandler;
