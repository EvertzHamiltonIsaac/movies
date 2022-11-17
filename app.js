const express = require('express');
const port = 9000;

const app = express();

app.use(express.json())

//Modelo
/*
{
 id: id++,
 tittle: "Pacific Rim",
 year: 2022,
 director: "Guillermo del Toro",
 genre: ['action', 'Sci-fi']

}
*/

const Movies = []
let id = 0

//Rutas

app.get('/movies', (req, res) => {
    res.status(200).json(Movies)
})

app.post('/create-movies', (req, res) => {

    const {tittle, year, director, genre} = req.body

    if(tittle && year && director && genre){

        const newMovie = {
            id: id++,
            tittle,
            year,
            director,
            genre
        }

        Movies.push(newMovie)
        res.status(200).json(newMovie)
    } else {
        res.status(400).json({message: 'error 400; invalid data'})
    }
})

app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    const movie = Movies.find(item => item.id == id)

    if(movie){
        res.status(200).json(movie)
    }else{
        res.status(404).json({message: 'la vida la vida la vida'})
    }
})

app.listen(port, () => {
    console.log(`Todo bien at port ${port}`);
})