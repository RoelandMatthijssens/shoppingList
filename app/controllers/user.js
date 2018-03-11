'use strict';

const Models = require('../models');

exports.list = function(req, res) {
    Models.User
        .findAll()
        .then(users => res.json(users));
};

exports.create = function(req, res) {
    Models.User
        .build(req.body)
        .save()
        .then(newUser => res.json(newUser))
        .catch(err => res.status(400).send(err));
};

exports.view = function(req, res) {
    let query = {id: req.params.id}
    Models.User
        .findOne({where: query})
        .then(user => res.json(user))
        .catch(err => res.status(400).send(err));
};

exports.update = function(req, res){
    Models.User
        .findById(req.params.id)
        .then(user => {
            user.updateAttributes(req.body);
            res.json(user);
        })
        .catch(err => res.status(400).send(err));
};

exports.destroy = function(req, res){
    Models.User
        .findById(req.params.id)
        .then(user => {
            user.destroy();
            res.json(user);
        })
        .catch(err => res.status(400).send(err));
};
