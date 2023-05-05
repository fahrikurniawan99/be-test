const router = require("express").Router();
const { authenticate } = require("../../../middlewares/auth");
const controller = require("./controller");

router.get("/products", authenticate, controller.getProducts);
router.post("/products", authenticate, controller.createProduct);
router.put("/products/:productId", authenticate, controller.updateProduct);
router.get("/products/:productId", authenticate, controller.getProduct);
router.delete("/products/:productId", authenticate, controller.deleteProduct);

module.exports = router;
