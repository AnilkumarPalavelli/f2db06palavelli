var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var fish_controller = require('../controllers/fish');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// fish ROUTES ///
// POST request for creating a fish.
router.post('/fishes', fish_controller.fish_create_post);
// DELETE request to delete fish.
router.delete('/fishes/:id', fish_controller.fish_delete);
// PUT request to update fish.
router.put('/fishes/:id', fish_controller.fish_update_put);
// GET request for one fish.
router.get('/fishes/:id', fish_controller.fish_detail);
// GET request for list of all fish items.
router.get('/fishes', fish_controller.fish_list);
module.exports = router;