const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development);

module.exports = {
    insert,
    find,
     findById,
     remove,
     update
}

async function insert(user){
  const {id} = await db('users').insert(user);
  return 'User inserted successfully';
}

async function find(){
  return await db('users').select('*');
};

function findById(id){
  
  return db('users').where({id}).first();
}


function remove(id){
  // const {id} = req.params;
  return db('users').where({id}).del();
}

function update(id, updates){
  // const {id} = req.params;
  // const updates = req.body;

  return (
    db('users').where({id}).update(updates, [id])
  )
}

