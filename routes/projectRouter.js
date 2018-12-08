const express = require('express');

const projectDB = require('../data/helpers/projectModel.js')

const router = express.Router()

router.get('/', (req, res) => {
  projectDB.get()
    .then( projects => {
      res.status(200).json(projects)
    }).catch( err => {
      res.status(400).json({message: "unable to get the projects"})
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  projectDB.get(id)
  .then( project => {
      res.status(200).json(project)
  }).catch( err => {
    res.status(400).json({message: "cannot get project, please try again"})
  })
})

router.get('/:id/actions', (req, res) => {
  const projectID = req.params;

  projectDB.getProjectActions(projectID.id)
    .then( actions => {
      if ( actions.length > 0) {
        res.status(200).json(actions)
      }else {
        res.status(404).json({message: "cannot find the actions for this ID"})
      }
    }).catch( err => {
      res.status(401).json({message: "cannot get actions, please try again"})
    })
})

router.post('/', (req, res) => {
  const project = req.body;

  projectDB.insert(project)
    .then( () => {
      res.status(201).json({message: "successfully created the new project"})
    }).catch( err => {
      res.status(400).json({message: "unable to create the new project"})
    })
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes =  req.body;

  projectDB.update(id, changes)
    .then( update => {
      res.status(200).json({message: `project successfully updated`})
    }).catch( err => {
      res.status(400).json({message: "unable to update project"})
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  projectDB.remove(id)
    .then( count => {
      if ( count ) {
        res.status(200).json({message: `succesffuly removed id ${id}`})
      } 
    }).catch( err => {
      res.status(400).json({message: "unable to delete the project"})
    })
})

module.exports = router