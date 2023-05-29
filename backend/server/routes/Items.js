const router = require('express').Router();

const ItemsModel = require('../models/items');

router.post('/api/item', async (req, res,) => {
    try{
        const newItem = new ItemsModel({
            item: req.body.item
        })
        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    }catch(err){
        res.json(err);
    }
})

router.get('/api/itmes', async (req, res,) => {
    try{
        const allItems = await ItemsModel.find({});
        res.status(200).json(allItems)
    }catch(err){
        res.json(err);
    }
})

router.put('/api/items/:id', async (req, res)=>{
    try{
        const updateItems = await ItemsModel.find.findIdAndUpdate(req.params.id, {$set:req.body});
        res.status(200).json(updateItems);
    }catch(err){
        res.json(err);
    }
})

router.delete('/api/item/:id', async (req, res)=>{
    try{
      //find the item by its id and delete it
      const deleteItem = await ItemsModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Item Deleted');
    }catch(err){
      res.json(err);
    }
  })

  module.exports = router;