const express = require('express');
const router = express.Router();
// using Router class to give us an instance of the router

const User = require('../../models/User');

// router.get('/', (req, res) => res.json({ message: 'Welcome to users route'}))

router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.json(users)    
        })
        .catch(err => {
            res.status(500).json({status: "error", message: err});
        })
})

router.get('/:name', (req, res) => {
    const { name } = req.params;
    User.findOne({ name }) 
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(500)
                .json({
                  status: "error", 
                  message: err
            });
        })
})

router.post('/', (req, res) => {
    const { name, password, avatar } = req.body;   
    
    const newUser = new User({
        name: name,
        password: password, 
        avatar: avatar
    });
    
    newUser.save()
        .then(user => res.status(201).json(user))
        .catch(err => {
            res.status(500)
                .json({
                  status: "error", 
                  message: err
        });
    })
})

router.delete('/:name', (req, res) => {
    // protected route
    // TODO: add validation that the logged in user is the name
    const { name } = req.params;
    User.findOne({ name }) 
        .then(user => {
            user.remove()
                .then(() => res.status(204)
                    .json({}))
                .catch(err => {
                    res.status(500)
                        .json({
                          status: "error", 
                          message: err
                    });
                })
        })
        .catch(err => {
            res.status(500)
                .json({
                  status: "error", 
                  message: err
                });
        })
})

module.exports = router;