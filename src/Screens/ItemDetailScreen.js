import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default function ItemDetailScreen({history}) {
  const {id} = useParams()
  const [data, setData] = useState("");
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  const [image5, setImage5] = useState(false)
  const [image6, setImage6] = useState(false)
  const [image7, setImage7] = useState(false)
  const [image8, setImage8] = useState(false)
  const [inp, setInp] = useState("")
  const [error, setError] = useState("")
  

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getData =() => {
    axios.get('http://165.232.174.53/'+id,)
    .then(function (response) {
      console.log(response);
      setData(response.data.row)
      setImage1(response.data.row.link1)
      setImage2(response.data.row.link2)
      setImage3(response.data.row.link3)
      setImage4(response.data.row.link4)
      setImage5(response.data.row.link5)
      setImage6(response.data.row.link6)
      setImage7(response.data.row.link7)
      setImage8(response.data.row.link8)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });  
  }

  const handleClick = () => {
    if (inp === "") {
      setError("Insert your name!!")
    }
    axios.get('http://165.232.174.53/update/'+ id + '/' + inp)
  .then(function (response) {
   console.log(response);
   history.push("/")
  })
  .catch(function (error) {
    console.log(error);
  });
    
  }

  const goHome = () => {
    history.push("/")
  }



  return (
    <section class="text-gray-700 body-font overflow-hidden bg-white">

      <button className="ml-10 mt-5 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" onClick={goHome} >
All Item
      </button>
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
     
     <div className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 h-full" >

      
  
  <Carousel>
    
    <div>
       <img src={image1} alt=""/>
    </div>
    { image2 !== "" ?   <div>
      <img src={image2} alt=""/>
   </div> : <></>}
  
   <div>
      <img src={image3} alt=""/>
   </div>
   <div>
      <img src={image4} alt=""/>
   </div>
   <div>
      <img src={image5} alt=""/>
   </div>
   <div>
      <img src={image6} alt=""/>
   </div>
   <div>
      <img src={image7} alt=""/>
   </div>
   <div>
      <img src={image8} alt=""/>
   </div>


   
  </Carousel>
   
   
     </div>

     
  
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
         
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{data.item}</h1>
          
          <div class="flex mb-4">
          
       
          </div>
          <p class="leading-relaxed">{data.description}</p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
           
          </div>
          <div class="flex">
            <div> <span class="title-font font-medium text-2xl text-gray-900">{data.price} 円</span></div>
           
          
           
          </div>
          
          { data.booked ? <h1 className=" font-bold text-red-600 ">Booked by {data.by}</h1> : <div>
           <input onChange={(e) => { setInp(e.target.value) }} value={inp} name="item" class="p-3 form-input mt-1 block w-full" placeholder="Input name here"/>
           <h2 className=" text-red-600 text-center ">{error}</h2>
            <button onClick={handleClick} class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">I want this</button>
           </div>}
        </div>
      </div>
    </div>
  </section>
  );
}
