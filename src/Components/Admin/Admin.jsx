import React from 'react'
import Header from './common/header'
import Crousel from './common/crousel'
import SideBar from './common/sidebar'
import ChangeUi from './common/changeUi'

const Admin = () => {
  return (
    <>
  <div className='fixed'><SideBar/></div>
    
    <ChangeUi />
    <></>
    </>
/* <form className="max-w-sm mx-auto content-center justify-center">
  <div className="mb-5">
    <label for="adminId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin Id </label>
    <input type="text" id="adminId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
    <div className="flex items-center h-5">
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> */

  )
}

export default Admin