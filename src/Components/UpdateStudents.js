import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

function UpdateStudents({students,setStudents}) {
    const history =useHistory();
    const {id}=useParams();
    const editstudents= students[id]
    const [name,setName]=useState('');
    const [batch,setBatch]=useState('');
    const [gender,setGender]=useState('');
    const [qualification,setQualification]=useState('');

    useEffect(()=>{
        setName(editstudents.name)
        setBatch(editstudents.batch)
        setGender(editstudents.gender)
        setQualification(editstudents.qualification)
    },[editstudents])

const editStudents=async()=>{
    const newstudents={
        name,
        batch,
        gender,
        qualification,
    }
   const response = await fetch(`https://645ef8929d35038e2d1acb8a.mockapi.io/students/${editstudents.id}`,{
    method:'PUT',
    body:JSON.stringify(newstudents),
    headers:{
        'Content-Type':'application/json'
    }
   });
   const data = await response.json();
   if(data){
    students[id]=newstudents
    setStudents([...students])
    history.push("/students")
   }
}

  return (
     <Base
     tittle={'edit your details'}
     describe={''}
     >
        <div className='inp1'>
            <div className='inp'>
            <TextField sx={{ width: '50ch' }}
            id="outlined-basic" 
            label="Name" 
            variant="outlined"
            color="secondary" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <TextField id="outlined-basic" 
            label="Batch" 
            variant="outlined"
            color="secondary" 
            value={batch}
            onChange={(e)=>setBatch(e.target.value)}
            />

            <TextField id="outlined-basic" 
            label="Gender" 
            variant="outlined" 
            color="secondary" 
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
            />

            <TextField id="outlined-basic" 
            label="Qualification" 
            variant="outlined" 
            color="secondary" 
            value={qualification}
            onChange={(e)=>setQualification(e.target.value)}
            />
            </div>
            <div className='a-btn'>
            <Button variant="contained" color="secondary" 
            onClick={editStudents}
            >
            Submit</Button>
            </div>
        </div>
     </Base>
  )
}

export default UpdateStudents