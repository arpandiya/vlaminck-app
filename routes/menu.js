const { json } = require('express');
const express = require('express');
const router = express.Router();
const Menus = require('../models/Menu');
const auth = require('./verifyUser');

 
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/create', (req, res)=> {
  res.render('createMenu');
});

router.post('/create', (req, res)=> {
  const menu = req.body;
  
   Menus.insert(menu)
  .then(menuItem => {
    res.status(200).json(menuItem)
  })
  .catch(error => {
    res.status(500).json({message: 'Cannot add new Menu !'})
  });
  res.redirect('/menu')
});

router.get('/view', (req, res)=> {
  res.render('menu-view');
});

router.get('/edit', (req, res) => {
  res.render('edit-menu');
});



router.get('/', async (req, res)=> {
  const disCat = await Menus.distinctCat().then(cats => cats);
  
  await Menus.find()
   .then(menuItem => {
              res.render('menu-index', {menuItem, disCat});
     
   }).catch(error =>res.status(500).json({message: 'couldnot fetch menu items'}));
  
   
});

router.get('/print', async (req, res) => {
  const disCat = await Menus.distinctCat().then(cats => cats);
  await Menus.find()
  .then(menuItem => {
    res.render('menu-print', {menuItem, disCat});
    
  }).catch(error =>res.status(500).json({message: 'couldnot fetch menu items'}));
});

router.get('/:id', (req, res)=> {
  const {id} = req.params;
  Menus.findById(id)
 .then(menuItem => {
   res.status(200).json(menuItem);
 })
 .catch(error => {
   res.status(500).json({message: 'Menu couldnot find'})
 });
});

router.delete('/delete/:id', (req, res)=> {
  const {id} = req.params;
  Menus.remove(id)
 .then(count => {
   if(count > 0) {

     res.status(200).json({message: 'Menu deleted successfully'});
   }
 })
 .catch(error => {
   res.status(500).json({message: 'Menu couldnot delete'})
 });
});


router.patch('/update/:id',  (req, res)=> {
  const {id} = req.params;
  const updates = req.body;

  Menus.update(id, updates)
  .then(menuItem => {
    res.status(200).json(menuItem)
  })
  .catch(error => {
    res.status(500).json({message: 'Cannot update new menu !'});
  });
});






module.exports = router;
