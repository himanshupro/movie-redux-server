import {Request, response, Response} from 'express';
import Movie from "../Model/movie-schema";
import axios from 'axios';


const addMovie = async (req: Request, res: Response) => {
    try {
        await Movie.create(req.body)
        res.json({
            ok: true,
            data: 'created'
        })
    } catch (error) {
        console.log(error);
    }
}

const getMovie = async (req:Request, res:Response) => {
    try{
        let result = await Movie.find()
        res.json({
            ok: true,
            data: result
        })
    }catch(error){
        console.log(error)
    }
}

// const getMovieByPage = async(req:any, res:any) => {
//     try{
//         const pageSize = Math.ceil(Movie.length/10);
//         let page = parseInt(req.query.p);
//         if(!page) {
//             page = 1;
//         }
//         if (page > pageSize) {
//             page = pageSize
//         }
//         res.json({
//             page : page,
//             pageSize: pageSize,
//             data : Movie.slice(page*10 - 5, page * 5)
//         })
//     }
//     catch(error){
//         console.log(error)
//     }
// }

const getMovieById = async (req:any, res:any) => {
    try {
        // const imdbId = await Movie.findOne(req.params.imdbID)
        const id = req.params.id;
        // res.send(id)
        // return
        let result = await Movie.findOne({imdbID:id})
        // 
        if(result)
        {
            res.status(200).send(result)
        }
        else{
            let result = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=68328419`)
            console.log(result)
            res.status(200).json(result.data)
        }
        
    } catch (error:any) {
        console.log(error)
        res.status(404).send(error)
    }
}

const searchByTitle = async (req:any, res:any) => {
    try{
        const movieTitle= req.params.movieTitle
        let result = await axios.get(`http://www.omdbapi.com/?&s=${movieTitle}&apikey=68328419`)
        if(movieTitle){
            Movie.insertMany(result.data.Search)
            res.status(200).send(result.data)
        }
        
    }
    catch (error:any) {
        console.log(error)
        res.status(404).send(error)
       
    }
}

export { getMovie, addMovie, getMovieById, searchByTitle };