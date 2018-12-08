const express = require('express');

const actionDB = require('../data/helpers/actionModel.js')

const router = express.Router()

router.get('/', (req, res) => {
  actionDB.get()
    .then( actions => {
      res.status(200).json(actions)
    }).catch( err => {
      res.status(400).json({message: "unable to get the actions"})
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  actionDB.get(id)
    .then( action => {
      res.status(200).json(action)
    }).catch( err => {
      res.status(400).json({message: "unable to get the action"})
    })
})

router.post('/', (req, res) =>{
  const action = req.body;

  actionDB.insert(action)
    .then( () => {
      res.status(201).json({message: "successfully created the action"})
    }).catch( err => {
      res.status(400).json({message: "failed to create action"})
    })
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  actionDB.update(id, changes)
    .then( change => {
      res.status(200).json({message: "successfully updated the action"})
    }).catch( err => {
      res.status(400).json({message: "failed to update the action"})
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  actionDB.remove(id)
    .then( count => {
      if (count) {
        res.status(200).json({message: `successfully deleted action ${id}`})
      } else {
        res.status(404).json({message: `unable to find action ${id}`})
      }
    }).catch( err => {
      res.status(400).json({message: "unable to delete action"})
    })
})



module.exports = router