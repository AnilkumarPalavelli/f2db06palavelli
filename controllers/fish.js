var fish = require('../models/fish');
// List of all fishes
exports.fish_list = function(req, res) {
res.send('NOT IMPLEMENTED: fish list');
};
// for a specific fish.
exports.fish_detail = function(req, res) {
res.send('NOT IMPLEMENTED: fish detail: ' + req.params.id);
};
// Handle fish create on POST.
exports.fish_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: fish create POST');
};
// Handle fish delete form on DELETE.
exports.fish_delete = function(req, res) {
res.send('NOT IMPLEMENTED: fish delete DELETE ' + req.params.id);
};
// Handle fish update form on PUT.
exports.fish_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: fish update PUT' + req.params.id);
};