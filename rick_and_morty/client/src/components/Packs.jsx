import React, { useEffect, useState } from 'react'
import style from './style/Packs.module.css'
import Pack from './models/Pack'
import Cards from './models/Cards'
const Packs = (props) => {

const [packs,setPacks]=useState([])
const [id_,setId]=useState(0)

const {handleClick,charactersPack,setPackCharacters}=props
const rearezas = [
  "Epic","Rare","Común"
];

const randomIndex = Math.floor(Math.random() * rearezas.length);

const addPack=()=>{
  setId(id_+1)
  if(packs.length<5){
    setPacks([...packs,{id:id_,rareza:rearezas[randomIndex]}])
  }
}
function onClose(id) {
  setPacks(packs.filter((pack)=>{return pack.id !== Number(id)}))  
}
useEffect(()=>{setPackCharacters([])},[])

  return (
    <div className={style.panel}>
      
    <div className={style.containerPacks}>        
      <div className={style.packs} >
        <button className={style.botonAdd} onClick={addPack} title='Añadir'>➕</button>
        <div className={style.containerMapPack}>
          {packs.map((pack)=>
          {return(
            <Pack key={pack.id} id={pack.id} rareza={pack.rareza} handleClick={handleClick} onClose={onClose}/>
            )})
          }
        </div>
      </div>
      
      <div>        
        <Cards  characters={charactersPack}  />
      </div>
    </div>
</div>
)
}

export default Packs