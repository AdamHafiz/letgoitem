import React from 'react'
import ListingItem from '../components/ListingItem'



export default function ShowListItemScreen() {
  const result = {
    "row": [
        {
            "id": 2355542,
            "item": "pasu bunga",
            "link1": "url",
            "price": 70,
            "booked": 0
        },
        {
            "id": 23777742,
            "item": "tv",
            "link1": "url",
            "price": 10000,
            "booked": 0
        },
        {
            "id": 23318882,
            "item": "kasut",
            "link1": "url",
            "price": 7000,
            "booked": 1
        }
    ]
}
  return (
        <div>
            <div class="grid grid-cols-8 divide-y divide-gray-400">
              <div class="col-span-2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</div>
              <div class="col-span-2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</div>
              <div class="col-span-2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</div>
              <div class="col-span-2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</div>
            </div>
            
          {result.row.map(element =>  <ListingItem data= {element} /> )}
        </div>
            
  
  )
}
