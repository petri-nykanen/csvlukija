import { FormControl, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import { Context } from '../context/context';

export const Haku : React.FC = () : React.ReactElement => {

    const { paketti, setSearchResults, searchResults} = useContext(Context)
    const hakuehtoRef : any = useRef<any>();
    const [hakuehto, setHakuEhto] = useState<string>("Tuotenimi");
    
  return (
    <Accordion>
    <AccordionSummary
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Hae hakusanalla</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <FormControl sx={{width:"100%"}}>
        <TextField inputRef={hakuehtoRef} variant="outlined" id="tekstikentta"/>
        <FormLabel id="demo-radio-buttons-group-label">Hakuehto</FormLabel>
            <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Tuotenimi"
            name="radio-buttons-group"
            onChange={(e) => {setHakuEhto(e.target.value)}}
            >
            <FormControlLabel value="Tuote" control={<Radio />} label="Tuotenumero" />
            <FormControlLabel value="Tuotenimi" control={<Radio />} label="Tuotenimi" />
            </RadioGroup>
            <Button
            sx={{marginBottom:"10px"}}
            variant='contained' onClick={() => setSearchResults(paketti.map((tieto : any, idx : number) => {
        return ([tieto.tiedostonimi, tieto.data.data.filter((nimi : any) => {
        let hakusana = new RegExp(`${hakuehtoRef!.current!.value}`, "i")
        return (hakusana.test(nimi[`${hakuehto}`]))})])
    }))}>HAE </Button>

        </FormControl>
    </AccordionDetails>
  </Accordion>
  )
}
