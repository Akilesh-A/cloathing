const orderModel = require('../models/orderModel');
const productModel = require('../models/productModels');

exports.createOrder = async (req, res, next) => {
    try {
        const cartItems = req.body;
        const amount = cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0).toFixed(2);
        console.log(amount);
        const status = 'pending';

        // Create the order
        const order = await orderModel.create({ cartItems, amount, status });

        // Respond with success
        res.status(201).json({
            success: true,
            message: "Order created successfully",
            order
        });

        // Update product quantities
        // for (const item of cartItems) {
        //     const product = await productModel.findById(item.product._id);
        //     if (!product) {
        //         console.error(`Product with id ${item.product._id} not found.`);
        //         continue; // Skip this item and continue with the next
        //     }
        //     product.quantity -= item.qty; // Update the quantity 
        //     await product.save(); // Save the updated product
        //     console.log(`Updated product: ${product}`);
        // }

    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create order"
        });
    }
};
