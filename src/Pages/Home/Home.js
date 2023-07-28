import React, {useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './Home.css'
import { GlobalContext } from '../../Context/GlobalStat ';
const Home = () => {

const {setUsers} = useContext(GlobalContext);

  const [userInfo, setUserInfo]= useState({
   
    id: "",
    name: "", 
    email: "",
    contact: "",
    age: "",
    jobRole: "",
  });
 
  useEffect(()=> {
    setUserInfo((currInfo)=>{ 
      return{
        ...currInfo,
        id: uuidv4(),
      }
    });
  },[]);


  const handlechange=(event)=>{
const{name,value}= event.target;

setUserInfo((currInfo)=>{
  return{
    ...currInfo,
    [name]:value,
  };
});
  };

  const addUser =()=>{
    setUsers((currUsers)=> {
      return[...currUsers,userInfo];
    });
    
  setUserInfo({
id:uuidv4(),
 name: "", 
    email: "",
    contact: "",
    age: "",
    jobRole: "",
  });
  };

  return (
    <div className="home">
      <div className="home_container">
        <div className='home_formcontainer'>
          <h1 className="home_title"> Add User Information</h1>
          <input type="text" placeholder="Enter users id"disabled   
            value={userInfo.id} 
            onChange={handlechange}/>
           <br />
           <input type="name" name="name" placeholder="Enter users name" 
           value={userInfo.name} 
           onChange={handlechange}/>  <br />

           <input type="email" name="email" placeholder='Enter users email'
            value={userInfo.email}  onChange={handlechange}/>
           <br />
           <input type="number"  name="contact" placeholder="Enter users contact"
           value={userInfo.contact} 
           onChange={handlechange}/><br />
           <input type="number" name="age" placeholder="Enter users age" 
           value={userInfo.age}  onChange={handlechange}/><br />
           <input name="jobRole" placeholder="Enter users Jobrole"
           value={userInfo.jobRole}  onChange={handlechange}/> <br />
           <button onClick={addUser}> Add User</button>
        </div>

      </div>  

    </div>
  );
};


export default Home