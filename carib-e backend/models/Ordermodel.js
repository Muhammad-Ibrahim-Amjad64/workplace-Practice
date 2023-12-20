/** @format */

const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema(
  {
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    orderlist: {
      type: Array,
      //   default: [],
    },
    email: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

orderSchema.statics.addressoforder = async function (
  userId,
  email,
  address,
  city,
  state,
  phoneNumber,
  orderlist
) {
  const orderdetail = await this.create({
    userId,
    email,
    address,
    city,
    state,
    phoneNumber,
    orderlist,
  });

  return orderdetail;
};
const orderdetail = mongoose.model('orderdetail', orderSchema);

module.exports = orderdetail;
