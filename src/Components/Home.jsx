import React from 'react'
import Header from './Admin/common/header'

import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate=useNavigate()
      const getData=(type)=>{
    
        navigate(`/product/${type}`)
      }
       // fetchData(type)}
  return (
    <>  
      <Header headerBgColor={"bg-blue-50"}/>
    
   <section
         className="flex flex-col  container mx-auto  rounded-[59px] pt-16 px-10 md:items-center md:px-20 md:pt-[68px] md:flex-row md:justify-between gap-10 z-30">
        <div className="flex flex-col items-start text-black md:pb-[68px] z-10  ">
            <h1 className="text-4xl font-black  leading-[125%]   sm:text-5xl md:text-[96px] md:leading-[125%]  "><span className="relative after:w-[120%] after:h-full after:bg-white after:block after:absolute after:-z-10 after:top-0 after:-rotate-2">LET’S</span> <br /> EXPLORE <br />
                <span className="relative after:w-[120%] after:h-full after:bg-primary after:block after:absolute after:-z-10 after:top-0 after:-rotate-2">UNIQUE</span> <br /> Design.
            </h1>
            <p className="md:text-[32px]">Make Your Interior design More Better And Accurate </p>
            <div className="flex flex-col md:flex-row md:items-center justify-evenly gap-9 pt-8">
                <div className="w-1/2 h-1/2">
                </div>
            </div>
        </div>
        <div className="">
        <img className="w-full h-96" src="../images/nextHero.jpg" alt="banner image" srcset=""></img>
        </div>
    </section> 
   
   <div className='m-60'>
    <div className="relative text-black">
            <h2
                className="text-xl text-center my-4 font-black after:content-oval after:absolute after:left-[50%] after:-bottom-2.5 after:-z-10 md:text-5xl">
                Get Product By Catogaries</h2>
        </div>






    <section className="flex flex-col-reverse justify-center items-center gap-[121px] my-16 bg-primary py-[61px] md:flex-row">
        <div className=" flex flex-col w-fit h-fit text-center" onClick={()=>getData('shoe_rack')}><img src="../images/shoerack.jpeg" alt="" srcset=""/><span classNameName='text-green-900 text-center'>Shoe Rack</span></div>
           <div className=" flex flex-col w-fit h-fit text-center" onClick={()=>getData('pooja')}><img src={require("../images/pooja.gif")} alt="" srcset=""/><span classNameName='text-green-900 text-center'>Mandir</span></div>
        <div className=" flex flex-col w-fit h-fit text-center" onClick={()=>getData('crockery_unit')}> <img src={require("../images/Crokery.gif")} srcset=""/><span classNameName='text-green-900 text-center'>Crokery</span></div>
        <div className=" flex flex-col w-fit h-fit text-center" onClick={()=>getData('partition')}><img src={require("../images/partition.gif")} srcset=""/><span classNameName='text-green-900 text-center'>Partition</span></div>
        <div className=" flex flex-col w-fit h-fit text-center" onClick={()=>getData('study_table')}><img src={require("../images/study.gif")} srcset=""/><span classNameName='text-green-900 text-center'>Study</span></div>
        <div className=" flex flex-col w-fit h-fit text-center" onClick={()=>getData('tv_unit')}><img src={require("../images/tvunit.gif")} srcset=""/><span classNameName='text-green-900 text-center'>TV Unit </span></div>
        <div className=" flex flex-col w-fit h-fit text-center" onClick={()=>getData('wardrobe')}><img src={require("../images/wardrobe.gif")} srcset=""/><span classNameName='text-green-900 text-center'>Ward drobe</span></div>
        <div className=" flex flex-col w-fit h-fit text-center" onClick={()=>getData('wall_panel')}><img src={require("../images/wallPanel.gif")} srcset=""/><span classNameName='text-green-900 text-center'>Wall Panel</span></div>
        <div className=" flex flex-col w-fit h-fit text-center" onClick={()=>getData('bar_counter')}><img src={require("../images/barUnit.gif")} srcset=""/><span classNameName='text-green-900 text-center'>Bar Unit </span></div>
        <div className=" flex flex-col w-fit h-fit text-center" onClick={()=>getData('partition')}><img src={require("../images/dressing.gif")} srcset=""/><span classNameName='text-green-900 text-center'>Dressing</span></div>
     </section>
   
     </div>
   
    

    </>

  )

}
export default Home