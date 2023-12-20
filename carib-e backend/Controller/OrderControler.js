/** @format */

const User = require('../models/User');
const orderdetail = require('../models/Ordermodel');
const { ObjectId } = require('mongodb');

function createLineItems(checkOutItems) {
  return checkOutItems.map((item) => ({
    asin: item.asin,
    link: item.link,
    title: item.title,
    price: item.price,
    image: item.image,

    quantity: item.quantity,
  }));
}
const Order = async (req, res) => {
  try {
    const { id } = req.params;
    const { checkOutItems, address, city, state, phoneNumber } = req.body;
    const userexits = await User.findOne({ _id: id });
    console.log(userexits);
    const itemsdetail = await createLineItems(checkOutItems);
    const orderaddress = await orderdetail.addressoforder(
      userexits._id,
      userexits.email,
      address,
      city,
      state,
      phoneNumber,
      itemsdetail
    );
    console.log('id', orderaddress);

    console.log(itemsdetail);
    // return;
    // const orderlist = {
    //   //   email: userexits.email,

    //   itemsdetail,
    // };

    // const placeorder = await orderdetail.updateOne(
    //   { _id: orderaddress._id },
    //   {
    //     $push: {
    //       orderlist: itemsdetail,
    //     },
    //   }
    // );
    // console.log('placeorder', placeorder);
    res.status(200).json({
      status: 'successfull',
      message: 'your order received',
    });
    // }
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error,
    });
  }
};
module.exports = { Order };
