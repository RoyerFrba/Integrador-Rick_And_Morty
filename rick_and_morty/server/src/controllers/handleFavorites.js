const { json } = require("express");

let myFavorites=[]

const postFav=(req,res)=>{

    console.log(req.body);

    myFavorites.push(req.body)

    res.status(200).json(myFavorites);
}

const deleteFav=(req,res)=>{
    const aux=[]
    myFavorites.forEach(fav => {
        if(fav.id!==Number(req.params.id))
        {
            aux.push(fav)
        }
    });
    myFavorites=aux
    res.status(200).json(myFavorites);
}

const getFav=(req,res)=>{
    console.log(myFavorites);
    res.status(200).json(myFavorites)
}
module.exports={postFav,deleteFav,getFav}