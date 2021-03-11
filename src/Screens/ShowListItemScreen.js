import React,{useState,useEffect} from 'react'
import ListingItem from '../components/ListingItem'
import axios from 'axios';


export default function ShowListItemScreen() {

  const [result, setResult] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData =() => {
    axios.get('http://165.232.174.53/',)
    .then(function (response) {
      console.log(response.data.row);
      setResult(response.data.row.reverse())

    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });  
  }

 
     return (
  
        <div>
              <h2 className="text-gray-700 font-bold text-2xl m-3 md:m-10 text-center  ">Let go item</h2>
              <h2 className="text-gray-700 font-bold text-sm m-3 md:m-10 text-center  ">Kouhaitachis boleh book barang2 yg berminat, nnti senpai akan pm kouhai</h2>
            
          {result.map(element =>  <ListingItem data= {element} /> )}
        </div>
            
  
  )

 
}
