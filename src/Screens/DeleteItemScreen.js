import React,{useState} from 'react'
import axios from 'axios'



export default function DeleteItemScreen() {

  const [idnum, setIdnum] = useState("")
  const [error, setError] = useState("")
  
 
  const handleSubmit = () => {
  if (!idnum) {
    setError("Please insert ID first")
    return
  }
  axios.delete('http://165.232.174.53/' + idnum)
  .then(function (response) {
    console.log(response);
    setIdnum("")
    
   })
   .catch(function (error) {
     console.log(error);
   });
  }

  return (
    <div>
      <p class="text-red-500 m-4 flex" >USE ONLY FOR DELETING ITEM!</p>
      <h2 className="text-red-500 text-center pt-4">{error}</h2> <br/>
  	  <div class="m-4 flex">
    	    <input onChange={(e) => { setIdnum(e.target.value) }} value={idnum} name="id" class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder=" Insert ID Number"/>
		      <button class="px-8 rounded-r-lg bg-red-400  text-gray-800 font-bold p-4 uppercase border-red-500 border-t border-b border-r" onClick={handleSubmit}>Delete</button>
	    </div>
    </div>
  )
}
