const express = require("express");

const {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
  confirmPayment,
} = require("../../controllers/shop/order-controller");

const router = express.Router();

router.post("/create", createOrder);
router.post("/capture", confirmPayment);
router.get("/list/:userId", getAllOrdersByUser);
router.get("/details/:id", getOrderDetails);

module.exports = router;
