const express = require('express');
const router = express.Router();
const Users = require('../models/User');
const Menus = require('../models/Menu');
// const {registerValidation, loginValidation} = require('../middleware/validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





router.get('/login', (req, res) => {
    res.render('login');

});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    
    const { first_name } = req.body;
    const { last_name } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    

    const hashedPass = bcrypt.hashSync(password, 8, (err, hash) => {
        if(!err) return hash;
    });

    Users.insert({first_name: first_name, last_name: last_name, email: email, password: hashedPass})
    .then((results, err) => {
        if(!err){
            res.json(results);
        };
    });
    res.redirect('/admin/login');
});

router.post('/', async (req, res) => {
    const { email }= req.body;
    const { password } = req.body;
    const secret = process.env.ACCESS_TOKEN;

  const findEmail = Users.find()
                    .then(user => {
                        user.filter(user => {
                           const fUser =  user.email === email;
                           
                             if(fUser){
                                
                                 
                             }
                            
                        })
                    })
      
                    
  });
   
  router.get('/', async (req, res) => {
    const disCat = await Menus.distinctCat().then(cats => cats);
      Menus.find().then((menuItem)=> res.render('addmin-view', {menuItem, disCat}));

  });

 
         
   


module.exports = router;



