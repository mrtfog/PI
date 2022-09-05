require("dotenv").config();
const { Router } = require('express');
const axios = require('axios');
const { API_KEY } = process.env;

const { Videogame, Genre } = require('../db.js');

const router = Router();



router.get('/', async function(req, res) {

  const { name } = req.query

  try{
      if(name){
          let games = await Videogame.findOne({
              where: {name : name},
              include: [Genre]
          })

          if(games){
              let gamesDb = games
              gamesDbData = {
                  id: gamesDb.id,
                  name: gamesDb.name,
                  image: gamesDb.image,
                  rating: gamesDb.rating,
                  source: 'Created',
                  genres: gamesDb.genres.map(g => g.name).join(', ')
              }
              
              let gamesApi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=15`) 
              const gamesApiData = gamesApi.data.results.map ((g) => {
                  var game = {
                      id: g.id,
                      name: g.name,
                      image: g.image,
                      rating: g.rating,
                      source: 'API',
                      genres: g.genres && g.genres.map((p) => p.name).filter(p => p != null).join(', '),
                  }
                  return game
              })
              res.json(gamesApiData.concat(gamesDbData))
          } else {
              let gamesAPI = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=15`) 
              gamesAPIFull = gamesAPI.data.results.map((g) => {
                var game = {
                  id: g.id,
                  name: g.name,
                  rating: g.rating,
                  source: 'Api',
                  image: g.background_image,
                  genres: g.genres && g.genres.map((p) => p.name).filter(p => p != null).join(', '),
                };
                return game;
              })
              res.json(gamesAPIFull)
          }
      } else {
          let gamesResults = []
          let apiRAWG = `https://api.rawg.io/api/games?key=${API_KEY}`
          for (let index = 0; index < 5; index++) {
            let games = (await axios.get(apiRAWG)).data
            let dataGame = games.results.map((G) => {
              var game = {
                name: G.name,
                image: G.background_image,
                genres: G.genres.map((gen) => gen.name).filter(p => p != null).join(', '),
                source: "Api",
                id: G.id,
                rating: G.rating
              };
              return game
            })
            apiRAWG = games.next;
            gamesResults = gamesResults.concat(dataGame)
          }
          
          let dbGames = await Videogame.findAll({ include: [Genre] })
          let jsonGames = dbGames.map((J) => J.toJSON())
          jsonGames.forEach(C => {
            C.source = "Created", 
            C.genres = C.genres.map((genre) => genre.name).filter(p => p != null).join(', ')
          });
          gamesResults = gamesResults.concat(jsonGames)
        
          res.json(gamesResults)
        }
      } catch (err) {
        res.status(404).json({ err })
      }
  })


  module.exports = router;
