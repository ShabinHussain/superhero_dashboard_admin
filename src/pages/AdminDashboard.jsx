import React, { useEffect, useState } from 'react'
import { allComplaintsApi, deleteComplaintApi } from '../../services/allApi';
import { serverUrl } from '../../services/serverUrl';
import Header from '../components/Header';
import '../pages/common.css'
import { Link } from 'react-router-dom';




function AdminDashboard() {
 

    const [allComplaint, setAllComplaint] = useState([])
    const[searchKey, setSearchKey] = useState("")
    const [deleteStatus, setDeleteStatus] = useState(false)



    const getAllComplaint = async()=>{
      if(sessionStorage.getItem("token")){
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        const result = await allComplaintsApi(searchKey,reqHeader)
        if(result.status==200)
          setAllComplaint(result.data)
      }
      }

      console.log(allComplaint);

      const handleDelete = async (id) => {
        const result = await deleteComplaintApi(id)
        console.log(result);
        if (result.status == 200) {
          setDeleteStatus(true)
        }
      }

     /* const handleDelete = async (id) => {
        try {
            await deleteComplaintApi(id); // Ensure that id is passed as a string, not an object
            // Optionally, refresh the list or handle UI updates here
        } catch (error) {
            console.error('Failed to delete complaint:', error);
        }
    }; */
    
      
      
      useEffect(()=>{
        getAllComplaint()
        setDeleteStatus(false)

        },[deleteStatus,searchKey])


  return (
    <>
   <Header searchKey={setSearchKey} />
     <div className='container-fluid d-flex justify-content-center align-items-center flex-column ' style={{height:'100%'}}>
     
     <h5 className='fs-2 mt-5'>All Grievances</h5>
     <ul>
      <h5>Filter By</h5>
      <li><Link type='button' className='text-decoration-none'  onClick={()=>setSearchKey("Kerala")}>Location(Kerala)</Link></li>
      <li><Link type='button' className='text-decoration-none'   onClick={()=>setSearchKey("Bangalore")}>Location(Bangalore)</Link></li>
     </ul>



    {allComplaint?.length > 0 ? 
    allComplaint?.map((item)=>
    (<div className='container w-70 bg-white rounded justify-content-center align-items-center p-5 mt-5 shadow'>
      <ol>
            <li>Name:{item.name}</li>
            <li>Email Address:{item.email}</li>
            <li>Phone Number:{item.phone}</li>
            <li>Address:{item.address}</li>
            <li>Date of Incident :{item.date}</li>
            <li>Time of Incident:{item.time}</li>
            <li>Location of Incident:{item.location}</li>
            <li>Description of the Grievance:{item.description}</li>
            <li>Desired Resolution:{item.resolution}</li>
            <li>Additional Comments:{item.comment}</li>
            <li>Uploaded Document: <img src={`${serverUrl}/uploads/${item.documents}`} alt="no image" height={'150px'}/></li>
        </ol>
        <button className='btn btn-danger' onClick={()=>handleDelete(item._id)}>Delete</button>

      </div>))
      :
      <p>No Grievances to display</p>}

      

      
     

      

     

      

      

      </div> 
    </>
  )
}

export default AdminDashboard