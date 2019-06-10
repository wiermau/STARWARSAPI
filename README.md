# STARWARSAPI

 RESTful API for the website of a Star Wars fanclub. Assigment for BRTHRS Agency.

## Installation

Use npm install for installing dependencies.


## Usage

The API will listen in 8080 port.
Start command: npm start.

API endpoints:

- get 'search/movie/:term': based on a Star Wars movie search term, will return all the characters of a specific movie. This endpoint returns an array of links, wich can be used to get data objects of each character.

- get 'search/climate/:term': based on a climate search term, will return an object of all the planets that have this climate-type, and will log in the console all dark-haired characters that live on this planet.

- Examples of titles of Star Wars movies: A New Hope, Attack of the Clones, The Phantom Menace, Revenge of the Sith, Return of the Jedi, The Empire Strikes Back, The Force Awaken.

- Examples of Climate-types: temperate, murky, frozen, tropical, arid
