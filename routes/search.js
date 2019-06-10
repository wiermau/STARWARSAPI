const express = require('express');

const searchController = require("../controllers/search");

const router = express.Router();

//GET /search/characters     
router.get('/movie/:term',searchController.getCharacters);



//GET /search/climate
router.get('/climate/:term',searchController.getClimate);

module.exports = router;