import React, { useEffect, useState } from 'react'

const ProductCard = ({cardDetails}) => {
const [card,setCard]=useState()
    useEffect(() => {
        setCard(cardDetails)
    }, [cardDetails])


  

   const  handleDownload=()=>{
        let pdfUrl="../pdf/.test.pdf"
        window.open(pdfUrl, '_blank')
    }
    
  return (
    <>
{card &&   
 <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={require('../images/dummy.avif')} alt="product image" />
    </a>
    <div class="px-5 pb-5 flex flex-col">
      
            <span class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">Unit: {" "}  {card.unit_name}</span>
            <span class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">Theme:{" "} {card.theme}</span>
            <span class="text-base font-semibold tracking-tight text-gray-900 dark:text-white">Unit Size: {" "}  {card.unit_size}</span>
            <span class="text-sm ftracking-tight text-gray-900 dark:text-white 	">Short Description:{" "} {card.short_description}</span>
      
        <div class="flex items-center justify-between">
            <a download="test.pdf" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-4 justify-center" href="./test.pdf">Download Now</a>
        </div>
    </div>
</div>
}</>
)}

export default ProductCard