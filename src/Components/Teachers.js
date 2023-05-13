import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import data from '../Data/Data'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Card, CardActions, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import AddTeachers from './AddTeachers';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';

function Teachers({teachers,setTeachers}) {
const history= useHistory();


async function deleteteacher(teach){
    const response = await fetch(`https://645ef8929d35038e2d1acb8a.mockapi.io/teachers/${teach}`,{
        method:'DELETE'
    })
    const data = await response.json();
    if(data){
    const remainteacher= teachers.filter((teacher,idx)=>teacher.id !== teach)
    setTeachers(remainteacher)
    history.push("/teachers")
    }
}

  return (
    <Base
    tittle={'TEACHERS LIST'}
    describe={'You can edit and delete your details anytime'}
    >

       
<div className='teach-card'>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table" >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center"><h3>S.No</h3></TableCell>
                      <TableCell align="center"><h3>NAME</h3></TableCell>
                      <TableCell align="center"><h3>BATCH</h3></TableCell>
                      <TableCell align="center"><h3>GENDER</h3></TableCell>
                      <TableCell align="center"><h3>SUBJECT</h3></TableCell>
                      <TableCell align="center"><h3>ACTION</h3></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {teachers.map((teach,idx) => (
                      <TableRow
                        key={idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center">{idx+1}</TableCell>
                        <TableCell align="center" component="th" scope="row">{teach.name}</TableCell>
                        <TableCell align="center">{teach.batch}</TableCell>
                        <TableCell align="center">{teach.gender}</TableCell>
                        <TableCell align="center">{teach.qualification}</TableCell>
                        <TableCell align="center">

                        <CardActions>
                          <Button size="small"
                            onClick={()=>history.push(`/editt/${teach.id}`)}
                            ><EditIcon/></Button>
                            <Button size="small"
                             onClick={()=>deleteteacher(teach.id)}
                            ><DeleteIcon color="error"/></Button>
                         </CardActions>
                        </TableCell>
                       
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>   
     </div>
    </Base>
  )
}

export default Teachers