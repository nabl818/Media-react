import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllhistory } from '../service/allAPI'






function History() {

  const[videoHistory,setVideoHistory]=useState([])

  useEffect(() => {

    getHistory()
   
  }, [])
  

  const getHistory=async(videoId)=>{

    try{
      const result=await getAllhistory(videoId)
      console.log(result.data);
      setVideoHistory(result.data)

      
    }
    catch(err){
      console.log(err);
      

    }

  }

    const deleHistory=async(videoId)=>{

    try{
      await deleteHistory(videoId)
      getHistory()

    }
    catch(err){
      console.log(err);
      
    }
    
    
    
    }



  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between">

      <h3 className='text-warning '>Watch History</h3>
      
      <Link to={'/home'} style={{textDecoration:"none",fontSize:'20px'}} className='text-info'>Back To <i className="fa-solid fa-house"></i></Link>

      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Date</th>
            <th><i className="fa-solid fa-ellipsis"></i></th>

          </tr>
          </thead>
          <tbody>
            {
              videoHistory.length>0?
              videoHistory?.map((item,index)=>(
              <tr key={item?.id}>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><a href={item?.youTubeUrl} target='_blank'>{item?.youTubeUrl}</a></td>
              <th>{item?.formatedDate}</th>
              <td> <button className='btn' onClick={()=>deleHistory(item?.id)}><i class="fa-solid fa-trash" style={{color:'red'}}></i></button></td>
            </tr>
              ))
            :
            <div className='text-danger fw-bold fs-3'>Nothing To Display</div>
            }
           
          </tbody>
    

      </table>
       

    </div>
  )
}

export default History