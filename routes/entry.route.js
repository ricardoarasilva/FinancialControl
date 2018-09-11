// entry.route.js

const express = require('express');
const app = express();
const entryRoutes = express.Router();

// Require AdUnit model in our routes module
let Entry = require('../models/Entry');

// Defined store route
entryRoutes.route('/add').post(function (req, res) {
  let entry = new Entry(req.body);
  entry.save()
    .then(game => {
    res.status(200).json({'entry': 'Entry in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
entryRoutes.route('/').get(function (req, res) {
    Entry.find(function (err, entries){
    if(err){
      console.log(err);
    }
    else {
      res.json(entries);
    }
  });
});

// Defined edit route
entryRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Entry.findById(id, function (err, entry){
      res.json(entry);
  });
});

//  Defined update route
entryRoutes.route('/update/:id').post(function (req, res) {
    Entry.findById(req.params.id, function(err, entry) {
    if (!entry)
      return next(new Error('Could not load Document'));
    else {
        entry.type = req.body.type;
        entry.description = req.body.description;
        entry.value = req.body.value;
        entry.done = req.body.done;

        entry.save().then(entry => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
entryRoutes.route('/delete/:id').get(function (req, res) {
    Entry.findByIdAndRemove({_id: req.params.id}, function(err, entry){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = entryRoutes;