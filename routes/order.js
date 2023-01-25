const express = require('express');
const { getOrders, createOrders, getOrderDetail, getOrderUpdate, deleteOrder } = require('../controllers/order.js');

const router = express.Router();


router.get('/getOrders', getOrders)
router.post('/createOrder', createOrders)
router.get('/getOrderDetail/:id', getOrderDetail)
router.patch('/getOrderUpdate/:id', getOrderUpdate)
router.delete('/deleteOrder/:id', deleteOrder)


module.exports = router