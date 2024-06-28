import React from 'react'
import { Button, Card } from "flowbite-react";
import "./Card.css"

const LastCard = () => {
  return (
    <div className=''>
    <Card className=" px-6 rounded-2xl max-w-sm bg-blue-700 text-center ">
      <h5 className="text-2xl underline flex text-white justify-center font-bold tracking-tight dark:text-white">
        Businesses
      </h5>
      <h2 className='flex justify-center font-semibold text-white text-4xl'>4999.$</h2>
      <p className="font-normal text-white text-center dark:text-gray-400">
        Install Once
      </p>
      <div>
        <p className='text-white underline-extended'>40% Down Payment</p>
      </div>
      <div>
        <p className='text-white underline-extended'>Multiple Power Consoles</p>
      </div>
      <div>
        <p className='text-white underline-extended'>Full Coverage</p>
      </div>
      <div>
        <p className='text-white underline-extended'>100% Conversion</p>
      </div>
      <Button>
        Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  </div>
  )
}

export default LastCard