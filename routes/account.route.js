// account.route.js

const express = require('express');
const app = express();
const accountRoutes = express.Router();

// Require AdUnit model in our routes module
let Account = require('../models/Account');

// Defined store route
accountRoutes.route('/add').post(function (req, res) {
  let account = new Account(req.body);
  account.save()
    .then(game => {
    res.status(200).json({'entry': 'Account in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
accountRoutes.route('/').get(function (req, res) {
    Account.find(function (err, accounts){
    if(err){
      console.log(err);
    }
    else {
      res.json(accounts);
    }
  });
});

// Defined edit route
accountRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Account.findById(id, function (err, account){
      res.json(account);
  });
});

//  Defined update route
accountRoutes.route('/update/:id').post(function (req, res) {
    Account.findById(req.params.id, function(err, account) {
    if (!account)
      return next(new Error('Could not load Document'));
    else {
        account.name = req.body.name;
        account.description = req.body.description;
        account.actual_value = req.body.actual_value;

        account.save().then(entry => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
accountRoutes.route('/delete/:id').get(function (req, res) {
    Account.findByIdAndRemove({_id: req.params.id}, function(err, account){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = accountRoutes;