const express = require('express');
const router = express.Router();
const Users = require('../models/User');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/create', (req, res)=> {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const email = req.body.email;
  
  Users.insert(users)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    res.status(500).json({message: 'Cannot add new user !'});
  });
});

router.get('/', (req, res)=> {
   Users.find()
  .then(user => {
    res.status(200).json(user);
  })
  .catch(error => {
    res.status(500).json({message: 'Users could not find'});
  });
});

router.get('/:id', (req, res)=> {
  const {id} = req.params;
  Users.findById(id)
 .then(user => {
   res.status(200).json(user);
 })
 .catch(error => {
   res.status(500).json({message: 'User couldnot find'})
 });
});

router.delete('/delete/:id', (req, res)=> {
  const {id} = req.params;
  Users.remove(id)
 .then(count => {
   if(count > 0) {

     res.status(200).json({message: 'User deleted successfully'});
   }
 })
 .catch(error => {
   res.status(500).json({message: 'User couldnot delete'})
 });
});

router.patch('/update/:id', (req, res)=> {
  const {id} = req.params;
  const updates = req.body;

  Users.update(id, updates)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(error => {
    res.status(500).json({message: 'Cannot update new user !'});
  });
});



module.exports = router;
