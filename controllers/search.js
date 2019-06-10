const swapi = require('swapi-node');

//Exercise 1
exports.getCharacters = (req, res, next) => {
    
        var charactersLinks=[];
        const charactersNames=[];
        //searh for the movie with the term entered and return a response with the links to all the characters
        swapi.get('https://swapi.co/api/films/'+'?search='+req.params.term).then(movieData => {
               
            charactersLinks=movieData.results[0].characters;
            console.log(charactersLinks);
            res.status(200).json(charactersLinks);
        })             
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode=500;            
            }
        next(err);
        });
     };




//Exercise 2
exports.getClimate = (req, res, next) => {
    const climate=req.params.term;
    //console.log(climate);
    var response={};
    var planets=[];
    const planetsResults=[];
    const planetsNames=[];
    const residentsLinks=[];
    const residents=[];
    const residentsResults=[];

    //obtain all the planets of the Star Wars universe
    swapi.get('https://swapi.co/api/planets/').then(result => {
        planets = result.results;
        
        //Look for the planets that has the climate-type entered
        planets.forEach(element => {            
            
            if (element.climate.search(climate)!== -1) {
                //console.log(element);
                planetsResults.push(element);                               
            }                                      
        })                    
                
        //Get the residents links of the planets with the climate-type entered
        planetsResults.forEach(planet => {
            planetsNames.push(planet.name);
            planet.residents.forEach(resident => {                
                residentsLinks.push(resident);
            })
        })               
        
        //Get the data of the residents        
        residentsLinks.forEach(link => {        
            swapi.get(link).then( result => {                    
                ///console.log("person data:",result);
                if (result.hair_color === 'black') {                        
                    residentsResults.push(result.name);
                    console.log("Dark Hair Residents:", result.name); 
                }                 
            })
            .catch( err => {
                if (!err.statusCode) {
                    err.statusCode=500;            
                }
            next(err);
            })                         
        })
        
        response = {planets: planetsNames,
            DarkHairResidents: residentsResults
        }
        
        res.status(200).json({response});
         
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode=500;            
        }
        next(err);
    })
};