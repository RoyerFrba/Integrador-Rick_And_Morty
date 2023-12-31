import { useEffect, useState } from 'react';
import Formm from './models/Form.jsx'
import style from './style/Login.module.css'
import {imagesLogin} from "./constants/Images.jsx"

export default function Login(props) {

   const [image,setImage]=useState("")

   useEffect(()=>{ generarImagenLogin(setImage) } , [])

   return (
       <div className={style.login}>
         <img className={style.logo} src="../../img/logo.png" alt="logo rick and morty" />
         <div>  
            <img id="random-img" className={style.imagenAleatoria} src={image} alt="Login" />
         </div>
         <div>
            <Formm login={props.login}/>
         </div>
       </div>
    );
 }
 
 function generarImagenLogin(setImage) {
            // Lista de rutas de imágenes
            const images = imagesLogin
            // Generar un número aleatorio entre 0 y la cantidad de imágenes
            const randomIndex = Math.floor(Math.random() * images.length);
   
            setImage(images[randomIndex])
 }