const OrderSchema = require('../models/order.js')


const createOrders = async(req,res) => {
	try {
		const newOrder = await OrderSchema.create(req.body)
		res.status(201).json({
			newOrder
		})
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}

const getOrders = async(req,res) => {
	try {
		const getOrders = await OrderSchema.find()
		res.status(200).json({
			getOrders
		})
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}

const getOrderDetail = async(req,res) => {
	try {
		const {id} = req.params;
		const detailOrder = await OrderSchema.findById(id)
		res.status(200).json({
			detailOrder
		})
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}

const getOrderUpdate = async(req,res) => {
	try {
		const {id} = req.params;
		const updateOrder = await OrderSchema.findByIdAndUpdate(id, req.body, {new: true})
		res.status(200).json({
			updateOrder
		})
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}

const deleteOrder = async(req,res) => {
	try {
		const {id} = req.params;
		await OrderSchema.findByIdAndRemove(id)
		res.status(201).json({
			message: "Silme işleminiz gerçekleşmiştir..."
		})
	} catch (error) {
		return res.status(500).json({message: error.message})
	}
}


module.exports = {createOrders, getOrders, getOrderDetail, getOrderUpdate, deleteOrder}