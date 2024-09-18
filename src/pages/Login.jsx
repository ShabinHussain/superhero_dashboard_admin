import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { adminLoginApi, adminRegisterApi } from '../../services/allApi'
import { ToastContainer, toast } from 'react-toastify'






function Login({register}) {
    const navigate = useNavigate()

    const[adminDetails, setAdminDetails] = useState({
        username:'',
        email:'',
        password:''
      })



      const handleRegister = async()=>{
        const {username,email,password} = adminDetails
  
        if(!username || !email || !password){
          alert('please fill the form completely')
        }
        else{
          const result = await adminRegisterApi(adminDetails)
          console.log(result);
          if(result.status ==200){
            alert('Registration successfully')
            navigate('/')
          }
          else{
            alert('something went wrong.Please try after sometime')
          }
  
        }
      }
    

      const handleLogin = async() =>{
        const {email,password} = adminDetails
        if(!email || !password){
         alert('Please fill the fields completely')
        }
        else{
         const result = await adminLoginApi({email,password})
         console.log(result);
         if(result.status==200){
           alert('Login Successfull')
           sessionStorage.setItem("existingAdmin",JSON.stringify(result.data.existingAdmin))//object to string //storing existingUser and token to sessionStorage
           sessionStorage.setItem("token",result.data.token)
           setAdminDetails({
             username:'',
             email:'',
             password:''
           })
           setTimeout(()=>{
             navigate('/admin')
           },2000)
   
         }else{
           alert(result.response.data)  //result.status
         }
   
        }
       }   



  return (
    <>
      <div className='container-fluid d-flex justify-content-center align-items-center flex-column' style={{height:'93vh'}}>
      <div className='container w-100'> 
      
       
       <div className=' bg-light p-3 mt-2 rounded shadow'>
        <Row>
          <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center'>
          <img src="https://cdn-icons-png.freepik.com/512/2913/2913133.png" alt="no image" className='w-75'/>
          </Col>
          <Col sm={12} md={6} className=' justify-content-center align-items-center'>
          <h3 className='text-start'><FontAwesomeIcon icon={faStackOverflow} className='me-3'/><b className='text-warning'>Panther</b> Admin</h3>
        {register?  <h5 className='text-start'>Sign Up to your Account</h5>
         :
          <h5 className='text-start'>Sign In to your Account</h5>}

          <form className='mt-4 w-75'>
           {register && <div className='mb-3'>
              <input type="text" placeholder='Username' className='form-control w-100' onChange={(e)=>setAdminDetails({...adminDetails,username:e.target.value})}/>

            </div>}
            <div className='mb-3'>
              <input type="text" placeholder='Email' className='form-control' onChange={(e)=>setAdminDetails({...adminDetails,email:e.target.value})}/>

            </div>
            <div className='mb-3'>
              <input type="text" placeholder='Password' className='form-control' onChange={(e)=>setAdminDetails({...adminDetails,password:e.target.value})}/>

            </div>
            <div className='mb-3'>
          {register? <div>
           <button type='button' className='btn btn-warning w-100' onClick={handleRegister}>Register</button>
           <p className='mt-2'>Already an Admin? Click here to <Link to={'/'} className='text-danger text-decoration-none' >login</Link></p>
           </div>
           :
           <div>
           <button type='button' className='btn btn-warning w-100' onClick={handleLogin}>Login</button>
            <p className='mt-2'>New Admin? Click here to <Link to={'/register'} className='text-danger text-decoration-none' >Register</Link></p>

           </div>}
            </div>

          </form>
          </Col>

        </Row>

      </div>


      
      </div>


    </div>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>


    </>
  )
}

export default Login