const movies = require('./db.json');
let globalID = 11; 

module.exports = {
    getMovies:(req, res) => {
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const id = Number(req.params.id);
        const index = movies.findIndex(elem => elem.id === id);
        movies.splice(index, 1);
        res.status(200).send(movies);
    },
    createMovie: (req, res) => {
        let{title, rating, imageURL} = req.body;
        const NewMovie = {
            id: globalID,
            title, //same as title: title
            rating,
            imageURL
        };
        movies.push(NewMovie);
        res.status(200).send(movies);
        globalID++;
    },
    updateMovie: (req, res) => {
        let {id} = req.params;
        id = Number(id);
        const {type} = req.body
        const index = movies.findIndex(elem => elem.id === id);

        if (movies[index].rating === 5 && type === 'plus') {
            res.status(400).send('cannot go above 5');
        } else if (movies[index].rating === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0');
        } else if (type === 'plus') {
            movies[index].rating++;
            res.status(200).send(movies);
        }else if (type === 'minus') {
            movies[index].rating--;
            res.status(200).send(movies);
        } else {
            res.sendStatus(400);
        }


        res.status(200).send(movies);
    }
};


