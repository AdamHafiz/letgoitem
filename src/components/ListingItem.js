import React from 'react';
import { Link } from 'react-router-dom';


const ListingItem = ({data}) => {
    return (
    <Link to = { "/" + data.id} >  
        <div class="grid grid-cols-8 divide-y divide-gray-400">
            <div class="col-span-2">
                    <img src={data.link1} alt="Loading"/>
            </div>

            <div class="col-span-2 px-6 py-3 text-left font-medium text-gray-900 text-transform: capitalize">{data.item}</div>

            <div class="col-span-2 px-6 py-3 text-left font-bold text-gray-600">{data.price} 円</div>

            <div class="col-span-2 px-6 py-3 whitespace-nowrap text-left">
                { !data.booked ? (
                    <span class="px-5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Available
                    </span>)
                    :(
                    <span class="px-5 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Booked
                    </span>)
                }</div>
        </div>
    </Link>
    
    );
}

export default ListingItem;
