const { Router } = require('express');
const User = require('../models/user');

module.exports = Router()

    .post('/', (req, res, next) => {
        User
            .insert(req.body)
            .then(user => res.send(user))
            .catch(next);
    })

    .get('/:username', (req, res, next) => {
        User
            .findByUsername(req.params.username)
            .then(user => res.send(user))
            .catch(next);
    })

 