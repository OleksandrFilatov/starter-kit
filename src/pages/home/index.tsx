// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'

// import axios from 'axios'

import { useEffect } from 'react'
import { setData } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()

  // const apiUrl = 'https://rest.gohighlevel.com/v1/contacts/'
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  // const headers = {
  //   Authorization:
  //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IllCcDZIVmpHcWdrVldmbmpJWDRtIiwiY29tcGFueV9pZCI6IjZ5aDhvREF4V3FxVFVFMjFrS2JIIiwidmVyc2lvbiI6MSwiaWF0IjoxNjg5NzI0NTQxMzkyLCJzdWIiOiJ1c2VyX2lkIn0.si45TYKJzY2-nmNPdpoABKw7gbTfr-SjeINhvPlLezo'
  // }

  useEffect(() => {
    // axios
    //   .get(apiUrl, { headers })
    //   .then(response => {
    //     console.log('>>>>>>>>>>>>>>>>>2:', response.data.contacts)
    //     dispatch(setData(response.data.contacts))
    //   })
    //   .catch(error => {
    //     console.error('Error:', error)
    //   })
    // fetch(apiUrl, { method: 'GET', headers: headers })
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        console.log('Data:', data)
        dispatch(setData(data.slice(0, 8)))
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }, [])

  const data = useSelector((state: any) => state.data)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                {/* Add more headers as needed */}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  {/* Add more cells as needed */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Kick start your project 🚀'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>All the best for your new project.</Typography>
            <Typography>
              Please make sure to read our Template Documentation to understand where to go from here and how to use our
              template.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='ACL and JWT 🔒'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Access Control (ACL) and Authentication (JWT) are the two main security features of our template and are
              implemented in the starter-kit as well.
            </Typography>
            <Typography>Please read our Authentication and ACL Documentations to get more out of them.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
