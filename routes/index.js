/*var express = require('express');
var router = express.Router();

 GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
//Nouvelle ajout
exports.index = function (req, res) {
    res.render('index', { title: 'Index', year: new Date().getFullYear() });
};

exports.product = function (req, res) {
    res.render('product', { title: 'Product', year: new Date().getFullYear(), message: 'Your Product page' });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};
/*
module.exports = router;
*/