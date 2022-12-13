import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: {
        type: mongoose.Schema.Types.ObjectId,           // The type here is a relation stores the id of the product which is related to this order
        ref: 'product'                                  // ref holds the name of the model to this schema is connected, in this case it's the product model
    },
    quantity: {
        type: Number,
        default: 1                                      // if no quantity is specified, a default of 1 is used
    }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;