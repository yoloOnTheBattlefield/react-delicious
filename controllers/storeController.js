const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.json({ title: 'Home'});
}

exports.addStore = (req, res) => {
  res.json({ title: 'Add Store' });
}

exports.createStore = async (req, res) => {
  const store = new Store(req.body);
  console.log(req.body)
  await store.save();
  res.json({ store });
}

exports.getStores = async (req, res) => {
  const stores = await Store.find();
  res.json({
    title: 'Stores',
    stores
  });
}

exports.editStore = async (req, res) => {
  const id = req.params.id;
  const store = await Store.findOne({_id: id});
  res.json({
    title: 'Edit Store',
    store
  });
}

exports.updateStore = async (req,res) => {
  req.body.location.type = 'Point';
  const id = req.params.id;
  console.log(req.body)
  const store = await Store.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  }).exec();
  res.json({
    store
  })
}
