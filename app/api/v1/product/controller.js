const Product = require("./model.js");

const getProducts = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const products = await Product.find({
      user: userId,
    });
    return res.status(200).json({
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const payload = req.body;
    const product = new Product({
      name: payload.name,
      user: userId,
    });
    await product.save();
    return res.status(201).json({
      message: "Product success created",
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const payload = req.body;
    await Product.findByIdAndUpdate(productId, payload);
    return res.status(200).json({
      message: "Product success updated",
    });
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    return res.status(200).json({
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndRemove(productId);
    return res.status(200).json({
      message: "Product success deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct
};
