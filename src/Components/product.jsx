import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Header from './Admin/common/header'
import { useParams } from 'react-router-dom';
import ProductCard from './productCard';

const Product = () => {
  let { type } = useParams();
  const [data, setData] = useState()
  const [title, setTitle] = useState()
  const [error, setError] = useState(null)



  
  useEffect(() => {
    if (type) {
      convertToUppercaseAndRemoveUnderscore(type)
      fetchData(type)
    }
   }, [type] 
  )
  useEffect(() => {
   console.log(data)}, [data] 
  )

  const fetchData = async (type) => {
    try {
      const response = await axios.post('http://localhost:5011/product/getProductByType', {

        body: { type: type },
      }).then(res => {
        debugger
        if(res){
        setData(res.data)
        console.log(data)
        }
       });

    } catch (error) {
      setError(error);
    }
  }
  function convertToUppercaseAndRemoveUnderscore(paramString) {
    // Convert the string to uppercase
    let uppercaseString = paramString.toUpperCase();

    // Remove underscores

    setTitle(uppercaseString.replace(/_/g, ' '))
    return ""

  }

  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center mt-10">
        <h3 className=' text-3xl mx-4 text-bold text-green-800'>{title}</h3>
      </div>





<div className='flex  flex-wrap justify-center '>

      {data && data.map((daa)=>{
        return(

<div className='m-5'>

         <ProductCard cardDetails ={daa}/>
         </div>
        )
      })}

    </div>
    </>
  )
}

export default Product