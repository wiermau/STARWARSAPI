# STARWARSAPI

 RESTful API for the website of a Star Wars fanclub. Assigment for BRTHRS Agency.

## Installation

Use npm install for installing dependencies.


## Usage

The API will listen in 8080 port.
Start command: npm start.

API endpoints:

- get '/movie/:term': based on a Star Wars movie search term, will return all the characters of a specific movie. This endpoint returns an array of links, wich can be used to get data objects of each character.

- get '/climate/:term': based on a climate search term, will return an object of all the planets that have this climate-type, and will log in the console all dark-haired characters that live on this planet.
