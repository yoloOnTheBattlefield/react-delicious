const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.json({ message: 'You are on the home page!'});
}

exports.addStore = (req, res) => {
  res.json({ title: 'Add Store' });
}

exports.createStore = async (req, res) => {
  const store = new Store(req.body);
  await store.save();
}

exports.getStores = async (req, res) => {
  const stores = await Store.find();
  res.json({
    title: 'Stores',
    stores
  });
}
