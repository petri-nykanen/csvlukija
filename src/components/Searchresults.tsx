import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext } from 'react'
import { Context } from '../context/context'

export const Searchresults = () => {

    const { searchResults, setSearchResults } = useContext(Context)
    
    return (
        <TableContainer>
              <Button variant={"outlined"} onClick={() => setSearchResults([])} startIcon={<CloseIcon/>} sx={{textAlign:"right"}}>Tyhjennä haku</Button>
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
                    searchResults!.map((sisalto : any, idx : number) => {
                     return (
                         sisalto[1].map((tieto : any, idx : number) => {
                           return (
                           <TableRow>
                             <TableCell>{sisalto["0"]}</TableCell>
                             <TableCell align="center">{tieto["0"]!}</TableCell>
                             <TableCell align="center">{tieto["2"]!}</TableCell>
                           </TableRow>
                           )
           
                         })
                     )
                   })
           }
          </TableBody>
        </Table>
      </TableContainer>
      )
    }
