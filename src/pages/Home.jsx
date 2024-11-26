import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'





function Home() {
  const [addVideoResponse,setAddVideoResponse]=useState("")
  const [deleteCategoryResponse,setDeleteCategoryResponse]=useState("")
  const [deleteVideoViewResponse,setDeleteVideoViewResponse]=useState("")

  return (
   <>
   <div className="container d-flex justify-content-between m-5">
    <Add  setAddVideoResponse={setAddVideoResponse}/>

    <Link to={'/history'} className='text-warning fw-bold fs-5' style={{textDecoration:'none'}}> Watch History</Link>
   </div>

   <div className="row">
    <div className="col-lg-6">
      <h3 className='text-white text-center'>All Videos</h3>
      <View addVideoResponse={addVideoResponse} deleteCategoryResponse={deleteCategoryResponse} setDeleteVideoViewResponse={setDeleteVideoViewResponse}/>
      </div>
    <div className="col-lg-6">
    <Category setDeleteCategoryResponse={setDeleteCategoryResponse} deleteVideoViewResponse={deleteVideoViewResponse}/>
    </div>
   </div>
   </>
  )
}

export default Home