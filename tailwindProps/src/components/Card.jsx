import React from 'react'

function card({username, btnTxt = 'VisitMe'}) {
 
  return (
    <>
       <div class="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg p-4">
        <img
          class="w-full h-48 object-cover rounded-lg"
          src="https://images.pexels.com/photos/5961611/pexels-photo-5961611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Card Image"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800">{username}</h2>
          <p class="text-gray-600 mt-2">
            This is a brief description of the card. It provides some
            information about the content shown here.
          </p>
          <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            {btnTxt}
          </button>
        </div>
      </div>
    
    </>
  )
}

export default card
