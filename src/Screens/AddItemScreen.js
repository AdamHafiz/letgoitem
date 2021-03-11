import React,{useState} from 'react'
import axios from 'axios'
const randomInt = require('random-int');

export default function AddItemScreen() {

  const [image1, setImage1] = useState("")
  const [image2, setImage2] = useState("")
  const [image3, setImage3] = useState("")
  const [image4, setImage4] = useState("")
  const [image5, setImage5] = useState("")
  const [image6, setImage6] = useState("")
  const [image7, setImage7] = useState("")
  const [image8, setImage8] = useState("")
  const [item, setItem] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")


  const id = randomInt(10000);

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData()
    data.append('file',files[0])
    data.append('upload_preset',"letgobarang")
    const res = await fetch("https://api.cloudinary.com/v1_1/ddetpgs1k/image/upload",{
      method:'POST',
      body:data
    })
    const file = await res.json()

    if (!image1) {
      setImage1(file.secure_url)
    } else  if (!image2) {
      setImage2(file.secure_url)
    } else if (!image3) {
      setImage3(file.secure_url)
    } else if (!image4) {
      setImage4(file.secure_url)
    } else if (!image5) {
      setImage5(file.secure_url)
    } else  if (!image6) {
      setImage6(file.secure_url)
    } else if (!image7) {
      setImage7(file.secure_url)
    } else if (!image8) {
      setImage8(file.secure_url)
    }
  }

 const handleSubmit = () => {
   if (!item || !desc || !name || !image1) {
     setError("Please fill in the form")
     return
   }

   axios.post('http://165.232.174.53/add', {
    id,item,description:desc,price,name,link1:image1,link2:image2,link3:image3,link4:image4,link5:image5,link6:image6,link7:image7,link8:image8
  })
  .then(function (response) {
    alert("dah add dah data")
    setImage1("")
    setImage2("")
    setImage3("")
    setImage4("")
    setImage5("")
    setImage6("")
    setImage7("")
    setImage8("")
    setItem("")
    setDesc("")
    setPrice("")
    setName("")
    setError("")
  })
  .catch(function (error) {
    console.log(error);
  });
  
  }

  return (
<>
    <div class="flex w-screen items-start justify-center bg-grey-lighter my-5">
    <label class=" w-44 flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Select image(s)</span>
        <input type='file' name="file" class="hidden" onChange={uploadImage}/>
    </label>
</div>

<div className=" mx-10 grid grid-cols-8 gap-4">
  {image1 && <img className="col-span-2 rounded-md border h-auto py-auto p-1 self-center md:col-span-1" src={image1} alt=""/>}
  {image2 && <img className="col-span-2 rounded-md border h-auto py-auto p-1 self-center md:col-span-1" src={image2} alt=""/>}
  {image3 && <img className="col-span-2 rounded-md border h-auto py-auto p-1 self-center md:col-span-1" src={image3} alt=""/>}
  {image4 && <img className="col-span-2 rounded-md border h-auto py-auto p-1 self-center md:col-span-1" src={image4} alt=""/>}
  {image5 && <img className="col-span-2 rounded-md border h-auto py-auto p-1 self-center md:col-span-1" src={image5} alt=""/>}
  {image6 && <img className="col-span-2 rounded-md border h-auto py-auto p-1 self-center md:col-span-1" src={image6} alt=""/>}
  {image7 && <img className="col-span-2 rounded-md border h-auto py-auto p-1 self-center md:col-span-1" src={image7} alt=""/>}
  {image8 && <img className="col-span-2 rounded-md border h-auto py-auto p-1 self-center md:col-span-1" src={image8} alt=""/>}

</div>



{/* start form */}

<div  className="px-4">
<div className="flex justify-center ">
<label class="block w-full md:w-1/3 shadow-lg p-5 rounded-lg">
  <span class="text-gray-700">Item Name</span>
  <input onChange={(e) => { setItem(e.target.value) }} value={item} name="item" class="p-3 form-input mt-1 block w-full" placeholder="Whatever the name"/>
</label>
</div>

<div className="flex justify-center ">
<label class="block w-full md:w-1/3 shadow-lg p-5 rounded-lg">
  <span class="text-gray-700 ">Description</span>
  <textarea onChange={(e) => { setDesc(e.target.value) }} value={desc} name="desc" class="form-textarea mt-1 block w-full" rows="3" placeholder="Describe something, somewhere, somewhat."></textarea>
</label>
</div>

<div className="flex justify-center ">
<label class="block w-full md:w-1/3 shadow-lg p-5 rounded-lg">
  <span class="text-gray-700">Price</span>
  <input onChange={(e) => { setPrice(e.target.value) }}  value={price} name="price" type="number" class="p-3 form-input mt-1 block w-full " placeholder="Enter some digit or leave if its FREE"/>
</label>
</div>

<div className="flex justify-center ">
<label class="block w-full md:w-1/3 shadow-lg p-5 rounded-lg">
  <span class="text-gray-700">Your Name</span>
  <input onChange={(e) => { setName(e.target.value) }} value={name} name="name" class="p-3 form-input mt-1 block w-full " placeholder="BRUHH!!! Your name please"/>
</label>
</div>

  <h2 className="text-red-500 text-center pt-4">{error}</h2> <br/>
<div className="flex justify-center pb-4">
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Add Item</button>
</div>


</div>


   </>
  )
}
