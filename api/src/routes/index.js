const { Router } = require('express');

const videogame = require('./videogame');
const videogames = require('./videogames');
const genres = require('./genres')
const createVideogames = require('./createVideogames')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogames)
router.use('/videogame', videogame)
router.use('/genres', genres)
router.use('/videogame', createVideogames)

module.exports = router;
