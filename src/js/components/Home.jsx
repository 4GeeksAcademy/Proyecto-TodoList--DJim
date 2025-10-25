import React, { useState } from "react";




//create your first component
const Home = () => {

let [tarea, setTarea] = useState("")
let [lista, setLista] = useState([])




const escribirTarea = (event) =>{
setTarea (event.target.value)
}

const agregarTarea = (event) =>{
   if (event.key==="Enter"){
	setLista ([...lista, tarea])
    setTarea ("")
   }}

   const eliminarTarea = (posicion) =>{
	setLista (lista.filter((item, index)=>index!==posicion))
   }

 
	
   return (
		<div className="container"> 
				
				<h1 className="text-center"> TodoList </h1>    
			    <input type="text" placeholder="Whats needs to be done?" onChange={escribirTarea} value={tarea} onKeyDown={agregarTarea}/>
			
                 <div>
					
                <ul className ="list-unstyled" >

					
						
														
			{lista.map((item, index)=>(<li className="list-group-item" key={index}>{item} <span onClick={()=>eliminarTarea(index)}>❌</span ></li>))}
			
										

 
					
		
	
			
			
			</ul>
			
			<p className="paper">{lista.length} item left</p>
			</div>
			
			

			 

			 </div>
	

			
		
	);
};

export default Home;