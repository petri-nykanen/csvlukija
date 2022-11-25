import { FormControl, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import { Context } from '../context/context';
import { Duplicates } from './Duplicates';

export const Haku : React.FC = () : React.ReactElement => {

    const { paketti, setSearchResults, searchResults, duplicates, avaus, setAvaus} = useContext(Context)
    const hakuehtoRef : any = useRef<any>();
    const [hakuehto, setHakuEhto] = useState<string>("Tuotenimi");

    const hae = () => {

      let hakuIndeksi : string = (hakuehto === "Tuotenimi") ? "2" : "1"

      if (duplicates.length > 0)
      {
        setSearchResults(duplicates.filter((nimi : any) => {
          let hakusana = new RegExp(`${hakuehtoRef!.current!.value}`, "i")
          return (hakusana.test(nimi[`${hakuIndeksi}`]))
        }).map((tieto : any, idx : number) => {
          return ([tieto["0"], tieto["1"], tieto["2"]])
      }))
      }
      else
      {
        setSearchResults(paketti!.map((tieto : any, idx : number) => {
        return ([tieto.tiedostonimi, tieto.data.data.filter((nimi : any) => {
        let hakusana = new RegExp(`${hakuehtoRef!.current!.value}`, "i")
        return (hakusana.test(nimi[`${hakuehto}`]))})])
      }))
      }

      console.log("haku")
      console.log(searchResults)
      console.log(duplicates)
    }
    
  return (
    <Accordion>
    <AccordionSummary
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Hae hakusanalla</Typography>
    </AccordionSummary>
    <Button onClick={() => setAvaus({avaa : true, ohjeNro : 2})}>Ohje</Button>
    <AccordionDetails>
        <FormControl sx={{width:"100%"}}>
        <FormLabel id="demo-radio-buttons-group-label">Hakusana</FormLabel>
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
            variant='contained' onClick={() => hae()}>HAE </Button>

        </FormControl>
    </AccordionDetails>
  </Accordion>
  )
}
