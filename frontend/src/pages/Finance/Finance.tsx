import React, { useState } from 'react'
import './Finance.css'
import Financelist from '../../Components/Financelist'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Finance = () => {
   const navigate=useNavigate()
  //  const[company,setCompany] = useState();
   const[financeData, setFinanceData] = useState({
    name:'',
    phonenum:'',
    company:'',
    email:'',
    address:''
        
  })
  const handleChange=(e:any)=>{
    setFinanceData({...financeData,[e.target.name]:e.target.value})

   }
   const handleSubmit=(e:any)=>{
    e.preventDefault()
    var data=JSON.stringify(financeData);

    var config = {
      method:'post',
      url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/finance/save`,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      data : data
};

axios(config)
.then(function(response){
  console.log(JSON.stringify(response.data));
 //  navigate('/home')
})
.catch(function(error){
   console.log(error);
});

console.log("AAA>>",financeData)



}





  return (
    <div className='Finance font-bold '><h1>Enter the your details</h1>
    <div className='Checkbox'>
      <Financelist
      Finance={financeData.company}
      handleChange={handleChange}/>
     </div>
     <div>
          <label htmlFor="Vtype">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-area m-4"
            value={financeData.name}
            onChange={handleChange}
            placeholder="Name"
            style={{ marginLeft: "100px" }}
          />
        </div>
        <div>
          <label htmlFor="Vtype">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="input-area m-4"
            value={financeData.address}
            onChange={handleChange}
            placeholder="Name"
            style={{ marginLeft: "80px" }}
          />
        </div>
        <div>
          <label htmlFor="Vtype">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="input-area m-4"
            value={financeData.email}
            onChange={handleChange}
            placeholder="Name"
            style={{ marginLeft: "100px" }}
          />
        </div>
        <div>
          <label htmlFor="Vtype">Phone number</label>
          <input
            type="text"
            id="phonenum"
            name="phonenum"
            className="input-area m-4"
            value={financeData.phonenum}
            onChange={handleChange}
            placeholder="Name"
            style={{ marginLeft: "25px" }}
          />
        </div>


   <button className='Financebtn' onClick={handleSubmit}>Submit</button>
  
  
  
  
  
  
  
    </div>
  )







}

export default Finance