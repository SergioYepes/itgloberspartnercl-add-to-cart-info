import React from 'react'


type Total={
    id:string
    name:string
    value:number
}

function Totalizer(totalizers:Total) {
    const{id,name,value}=totalizers
    console.log("Totalizer",id,name,value);
    
  return (
    <div>
      <p>Tenemos X items en el carrito</p>
      <p>Total : X</p>
    </div>
  )
}

export default Totalizer
