import React from 'react'
import Nou from './Nou'

function Profil({ nom, age, student, students, handleAd }) {
  
  return (
    <div>
     
     
<h1 id="bvb">MyCake</h1>
<img id ="blom" src="https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2022/09/chocolate-drizzle-cake-shutterstock.jpg"/>
      <img id="bob"width="200" height="200"src=" https://img.cuisineaz.com/660x660/2014/03/06/i18759-recette-gateau-chocolat-cacao-glace.jpg"/>
      <h2 id="pink">{nom} </h2>
      <h2 id="pink">{age} </h2>
      <img id="hard"width="200" height="200"src="https://www.sebastien-papion.fr/644-large_default/cake-noisette.jpg "/>
     
      <h2 id="box">{student.name} </h2>
      <img id="red" width="200" height="200" src="https://i.pinimg.com/736x/ee/9e/ce/ee9ece555f5fe12d3737609fd2f4e5f2.jpg"/>
      <h2 id="white"> Cake Caramel</h2>
     <div style={{backgroundColor:"rgb(112, 109, 109)", display:"flex" , justifyContent:"space-around"}}> 
{students.map((el)=>
<div >
    <h2>{el.name}</h2>
    <p>{el.age}</p>
    </div>)}
     </div>
      <button  onClick={handleAd("MyCake")}> Submit</button>
      <Nou nom={nom} >
      <img id="miki"width="200" height="200"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRcfPQXawRKtihq-3S6d6o3ZTSgLJaiIt3Q&usqp=CAU"/>
        <img id ="brown"width="200" height="200"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNM4y75fU3g14-592AyPBDjpOnft5wOmyD5Q&usqp=CAU"/>
        <img id="card" width="200" height="200" src="https://www.lacuisinedaurelie.com/wp-content/uploads/2019/02/IMG_3207.jpg"/>
        <img id="like" width="200" height="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyISIAKkelJoj28EOhJTn7rm64DB9tFH_KrggY1R_-ju-0e3Dpkm_FM5OyPjyaoJ99DiQ&usqp=CAU"/>
         </Nou>
     </div>
     
    
  
  )
}

export default Profil
