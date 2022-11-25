import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext } from 'react'
import { Context } from '../context/context'

export const Searchresults = () => {

    const { searchResults, setSearchResults, duplicates, setDuplicates } = useContext(Context)
    
    return (
        <TableContainer sx={{marginTop:"10px"}}>
        <Button variant={"outlined"} onClick={() => setSearchResults([])} startIcon={<CloseIcon/>} sx={{textAlign:"right"}}>TYHJENNÄ HAKU</Button>
        {(duplicates.length > 0)
        ? <Button variant={"outlined"} onClick={() => {setDuplicates([]); setSearchResults([])}} startIcon={<CloseIcon/>} sx={{textAlign:"right"}}>Poista Filtteri</Button>
        : <></>
        }
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
            (duplicates.length > 0)

            ?        searchResults!.map((sisalto : any, idx : number) => {
                     return (
                        <TableRow>
                          <TableCell>{sisalto["0"]}</TableCell>
                          <TableCell align="center">{sisalto["1"]!}</TableCell>
                          <TableCell align="center">{sisalto["2"]!}</TableCell>
                        </TableRow>
                     )
                   })

            :searchResults!.map((sisalto : any, idx : number) => {
              return (
                  sisalto[1].map((tieto : any, idx : number) => {
                    return (
                    <TableRow>
                      <TableCell>{sisalto["0"]}</TableCell>
                      <TableCell align="center">{tieto.Tuote!}</TableCell>
                      <TableCell align="center">{tieto.Tuotenimi!}</TableCell>
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
