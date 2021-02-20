import React, {useState} from 'react';
import MyStepper from '../../componants/MyStepper'
import Todo from '../../componants/Todo'
import Mytable from '../../componants/Mytable'
import {Container} from "react-bootstrap";




const Home = (props) => {
  const [value,setValue]=useState("")
  const [mynumber,setMynumber]=useState(0)

  const handleChange =(e)=>{
    setValue(e.target.value)
   
   
  }
  const handleClick =(e)=>{
   setMynumber(parseInt(value))
  }

  
  return (
    <div>
      <Container>
      <MyStepper />
      <Todo thechange={handleChange} value={value} HandleClick={handleClick} />
      <Mytable givenumber={mynumber} />    
      </Container>
    </div>
  );
};

export default Home;