import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext } from 'react'
import { Context } from '../context/context'

export const Duplicates = () => {

    const { duplicates, setDuplicates } = useContext(Context)

    function Comparator(a : any, b : any) {
      if (a[2] < b[2]) return -1;
      if (a[2] > b[2]) return 1;
      return 0;
    }
    
    return (
        <TableContainer>
              <Button variant={"outlined"} onClick={() => setDuplicates([])} startIcon={<CloseIcon/>} sx={{textAlign:"right"}}>Tyhjennä haku</Button>
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
                    duplicates!.sort(Comparator).map((sisalto : any, idx : number) => {
                           return (
                           <TableRow>
                             <TableCell>{sisalto["0"]}</TableCell>
                             <TableCell align="center">{sisalto["1"]!}</TableCell>
                             <TableCell align="center">{sisalto["2"]!}</TableCell>
                           </TableRow>
                           )
                   })
           }
          </TableBody>
        </Table>
      </TableContainer>
      )
    }
