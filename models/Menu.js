const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development);

module.exports = {
    insert,
    find,
     findById,
     remove,
     update,
     distinctCat
}

async function insert(menu){
  const {id} = await db('menus').insert(menu);
  return 'Menu inserted successfully';
}

async function find(){
  return await db('menus').select('*');
};

async function distinctCat(){
  return await db('menus').distinct('category');
};

function findById(id){
  
  return db('menus').where({id}).first();
}


function remove(id){
  // const {id} = req.params;
  return db('menus').where({id}).del();
}

function update(id, updates){
  // const {id} = req.params;
  // const updates = req.body;

  return (
    db('menus').where({id}).update(updates, [id])
  )
}


