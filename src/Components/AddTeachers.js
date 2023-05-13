import React, { useState } from 'react'
import Base from '../Base/Base'
import { Button, Card, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom';

function AddTeachers({teachers,setTeachers}) {
    const history =useHistory();
    const [name,setName]=useState('');
    const [batch,setBatch]=useState('');
    const [gender,setGender]=useState('');
    const [qualification,setQualification]=useState('');

  //3.WRITE THE CODE FOR ADD THE NEW TEACHERS USING api
    async function addteachers(){
        const newTeacher={
            name,
            batch,
            gender,
            qualification,
        }
        const response = await fetch('https://645ef8929d35038e2d1acb8a.mockapi.io/teachers',{
          method:'POST',
          body:JSON.stringify(newTeacher),
          headers:{
            'Content-Type':'application/json'
          }
        })
        const data = await response.json();
       setTeachers([...teachers,data])
       history.push("/teachers")
    }
  return (
    <Base
    tittle={'NEW TEACHERS'}
    describe={'Enter your details below form'}
    >
        <div className='inp1'>
            <div className='inp'>
            <TextField sx={{ width: '50ch' }}
            id="outlined-basic" 
            label="Name" 
            variant="outlined"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <TextField id="outlined-basic" 
            label="Batch" 
            variant="outlined"
            value={batch}
            onChange={(e)=>setBatch(e.target.value)}
            />

            <TextField id="outlined-basic" 
            label="Gender" 
            variant="outlined" 
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
            />

            <TextField id="outlined-basic" 
            label="Qualification" 
            variant="outlined" 
            value={qualification}
            onChange={(e)=>setQualification(e.target.value)}
            />
            </div>
            <div className='a-btn'>
            <Button variant="contained" color="primary" 
            onClick={addteachers}
            >
            Submit</Button>
            </div>
        </div>
    
    </Base>
  )
}

export default AddTeachers