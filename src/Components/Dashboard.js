import React from 'react'
import Base from '../Base/Base'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'

function Dashboard() {
   const history =useHistory();
  return (
    <Base
    tittle={'WELCOME TO THE OUR FAMILY'}
    describe={'This CRUD-APPLICATION created by using API'}
    >
        <div className='te-st'>
            <div className='teachers'>
            <Card >
                <CardMedia
                    sx={{ height: 200 , width:235}}
                    image="https://img.freepik.com/free-photo/pleased-young-businessman-wearing-glasses-holding-book-isolated-white-background_141793-63613.jpg?size=626&ext=jpg"
                    title="green iguana"
                />
                <div className='cen'>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    TEACHERS
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained"
                    onClick={()=>history.push("/addteach")}
                    >ADD NEW </Button>

                    <Button size="small" variant="outlined"
                    onClick={()=>history.push("/teachers")}
                    >Teachers LIST</Button>
                </CardActions>
                </div>
             </Card>
            </div>

            <div className='students'>
            <Card>
                <CardMedia
                    sx={{ height: 200 , width:235}}
                    image="https://img.freepik.com/free-photo/waist-up-shot-pretty-girl-smiles-pleasantly_273609-28224.jpg?size=626&ext=jpg"
                    title="green iguana"
                />
                 <div className='cen'>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    STUDENTS
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" color="secondary"
                    onClick={()=>history.push("/addstud")}
                    >ADD NEW </Button>

                    <Button size="small" color="secondary" variant="outlined"
                    onClick={()=>history.push("/students")}
                    > students LIST</Button>
                </CardActions>
                </div>
             </Card>

            </div>
        </div>
    
    </Base>
  )
}

export default Dashboard