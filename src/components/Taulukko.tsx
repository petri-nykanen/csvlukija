import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { Context } from '../context/context'

export const Taulukko : React.FC = () : React.ReactElement => {
    
    const { paketti } = useContext(Context)

    // useEffect(() => {
      
    // }, [third])
    
    
  return (
    <>          
    <TableContainer>
    <Table sx={{ border:"1px solid black", borderRadius:"10px", backgroundColor:"lightgray", boxShadow: 5}} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Tiedosto</TableCell>
          <TableCell align="center">Tuotenumero</TableCell>
          <TableCell align="center">Tuotenimi</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
       {
                paketti!.map((sisalto : any, idx : number) => {
                 return (
                     sisalto.data.data.map((tieto : any, idx : number) => {
                       return (
                       <TableRow>
                         <TableCell>{sisalto.tiedostonimi}</TableCell>
                         <TableCell align="center">{tieto["0"]}</TableCell>
                         <TableCell align="center">{tieto["2"]}</TableCell>
                       </TableRow>
                       )
       
                     })
                 )
               })
       }
      </TableBody>
    </Table>
  </TableContainer>
  </>
  )
}
