import React from 'react';
import { Link } from 'react-router-dom';


const ListingItem = ({data}) => {
    return (
    <Link to = { "/detail/" + data.id} >  
        <div class="grid md:grid-cols-8 grid-cols-6 gap-4 h-44 border rounded-2xl border-blue-500  m-2 md:m-10 hover:bg-gray-100">
            <div class="md:col-span-2  col-span-2 flex  justify-center ">
                    <img className=" h-auto  max-h-44 object-contain" src={data.link1} alt="Loading"/>
            </div>
            <div className=" col-span-4 " >
                <div class="md:col-span-2   px-6 py-3 text-left font-medium text-gray-900 text-transform: capitalize">{data.item}</div>
    
                <div class="md:col-span-2  px-6 py-3 text-left font-bold text-gray-600">{data.price} 円</div>

                <div class="md:col-span-2  px-6 py-3 whitespace-nowrap text-left">
                    { !data.booked ? (
                        <span class="px-5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Available
                        </span>)
                        :(
                        <span class="px-5 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Booked
                        </span>)
                    }
                </div>
            </div>

         
        </div>
    </Link>
    
    );
}

export default ListingItem;
