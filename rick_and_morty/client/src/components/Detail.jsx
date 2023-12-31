import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate  } from 'react-router-dom'
import style from './style/Detail.module.css'
import { HOME_PATH } from '../paths/paths'

export default function  Detail() {

   /* ESTADO CHARACTER */
    const [character,setCharacter] = useState({})
    const {id} = useParams()

    const navigate = useNavigate();

    useEffect(() => {
      console.log(history);
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           }
         })
        .catch((error)=>console.log("error"));
        return setCharacter({});
     }, [id]);

   /* DETAIL */
   return (
      <div className={style.detail}>
         <div className={style.detailCard}>
            {/* <Link to='/'> */}
               <button onClick={() => navigate(-1)} className={style.back}>↩</button>
            {/* </Link> */}
            <div className={style.divImg}>
               <img className={style.imagen} src={character.image} alt='' />   
               <h2 className={style.name}>{character.name}</h2>
            </div>

            <div >
               <h2 >Origen: {character.origin?.name}</h2>   
               <h2>Estado: {character.status}</h2>
               <h2>Especie: {character.species}</h2>
               <h2>Genero: {character.gender}</h2>
            </div>
         </div>
      </div>
    
 )
}
